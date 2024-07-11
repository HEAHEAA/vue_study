

<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg" v-if="modalStatus === 2">
      <h4>메롱</h4>
      <button @click="modal = false">닫기</button>
    </div>
    <div class="white-bg" v-else>
      <h4>{{oneRoom[modalStatus].title}}</h4>
      <p>{{oneRoom[modalStatus].content}}</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <!-- 메뉴 -->
  <div class="menu">
    <a v-for="item in menu" :key="item">{{item}}</a>
  </div>

  <!-- 콘텐츠 -->
  <div v-for="(or,i) in oneRoom" :key="i">
    <img :src="or.image" alt="image" @click="modal = true; modalStatus=i"/>
    <h4>{{or.title}}</h4>
    <p>{{or.content}}</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고 수: {{report[i]}}</span>
    <hr/>
  </div>
</template>

<script>
import data from '../src/components/OneRoom';

console.log(data);
export default {
  name: 'App',
  data() {
    return {
      report : [0,0,0],
      menu: ['Home', 'Shop', 'About'],
      product: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      modal: false,
      modalStatus: 0,
      oneRoom: data,
    }
  },
  methods: {
    increase(array) {
      this.report[array] += 1;
    },

  }
}
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
