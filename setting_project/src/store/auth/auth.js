import {defineStore} from 'pinia'
import {ref} from 'vue'
import axios from 'axios'
import router from "@/router";

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null)
  const refreshToken = ref(null)
  const user = ref(null)
  let refreshInterval = null

  //로그인
  const login = async (credentials) => {
    try {
      const response = await axios.post('/api/login', credentials)
      const authData = response.data.data.auth_token
      accessToken.value = authData.access_token
      refreshToken.value = authData.refresh_token
      user.value = response.data.data

      //사용자 아이디 저장
      localStorage.setItem('id', user.value.user_id);

      //토큰 저장 (쿠키)
      sessionStorage.setItem('accessToken', accessToken.value);
      sessionStorage.setItem('refreshToken', refreshToken.value);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`

      startTokenRefresh()
    } catch (error) {
      console.error('로그인 실패', error)
    }
  }




  //로그아웃
  const logout = async () => {
    try {
      await axios.post('/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${accessToken.value}`
        }
      });
    } catch (error) {
      console.error('로그아웃 실패', error);
    } finally {
      accessToken.value = null
      refreshToken.value = null
      user.value = null
      sessionStorage.removeItem('accessToken')
      sessionStorage.removeItem('refreshToken')
      delete axios.defaults.headers.common['Authorization']

      if (refreshInterval) {
        clearInterval(refreshInterval)
      }
    }
  }


  //리프레시
  const refreshAccessToken = async () => {
    try {
      const response = await axios.get('/api/refresh', {
        headers: {
          'Content-Type': 'application/json',
          'refresh_token': refreshToken.value
        }
      })
      const authData = response.data.data.auth_token
      accessToken.value = authData.access_token
      sessionStorage.setItem('accessToken', accessToken.value)
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`
    } catch (error) {
      console.error('리프레시 토큰 받아오기 실패', error)
      logout()
    }
  }



  //주기적으로 리프레시 데이터 받기
  const startTokenRefresh = () => {
    refreshInterval = setInterval(() => {
      refreshAccessToken()
    }, 600000) // Refresh token every 10 minutes
  }

  //토큰 검증
  const checkAuth = () => {
    const storedAccessToken = sessionStorage.getItem('accessToken')
    const storedRefreshToken = sessionStorage.getItem('refreshToken')
    if (storedAccessToken && storedRefreshToken) {
      accessToken.value = storedAccessToken
      refreshToken.value = storedRefreshToken
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`

      //리프레시 토큰 실행
      startTokenRefresh()
    } else {
      if (router.currentRoute.value.path === '/login') {
        router.push('/');
      }
      console.log('check');
    }
  }


  /*
  * 이벤트 리스너 처리 라인
  */

  //로그아웃 이벤트
  const handleLogout = async () => {
    logout();
    router.push('/login');
  }


  return {
    accessToken,
    refreshToken,
    user,
    login,
    logout,
    handleLogout,
    checkAuth,
  }
})
