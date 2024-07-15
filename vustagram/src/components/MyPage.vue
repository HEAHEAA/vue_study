<template>
  <div style="padding: 10px">
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="?" v-model="inputValue" @input="inputChange" />

      <div class="post-header" v-for="follower in filteredFollowers" :key="follower">
        <div class="profile" :style="`background-image: url(${follower.image})`"></div>
        <span class="profile-name">{{follower.name}}</span>
      </div>

<!--      <div class="post-header" v-for="follower in myFollower" :key="follower.id">-->
<!--        <div class="profile" :style="`background-image: url(${follower.image})`"></div>-->
<!--        <span class="profile-name">{{follower.name}}</span>-->
<!--      </div>-->
    </div>
  </div>
<!--  {{one}}-->
</template>

<script setup>
import followerJson from './follwer.json';
import {computed, onMounted, reactive, ref, toRefs, watch} from "vue";
import {useStore}  from "vuex";

//vue3 부터 props 사용하는 방법
const props = defineProps({
  one: Number
})

//검색기능 넣기
const myFollower = reactive(followerJson);
let inputValue = ref('');
// const myFollower = followerJson; //ref 는 자료형 넣음 , 사실 object 사용해도 상관없음.
// let test = reactive({name: 'kim'}); //array, object 집어넣음

const inputChange = (e) => {
  inputValue.value = e.target.value;
  console.log(e.target.value);
}

const filteredFollowers = computed(() => {
  const searchValue =  inputValue.value.toLowerCase();
  return myFollower.filter(follower =>
    follower.name.toLowerCase().includes(searchValue)
  );
});





let {one} = toRefs(props);
//watch 하고자 하는거 사용하지
watch(one,()=> {

});

//연산결과 잠시 저장할곳
let total = computed(()=> { return myFollower.value});

//스토어 가져오는 방법
let store = useStore();
// console.log(store.state.name);





</script>


//이 컴포넌트에서만 사용하고싶을때
<style scoped>

</style>
