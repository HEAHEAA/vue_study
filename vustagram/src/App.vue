<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>



    <ul class="header-button-right" v-if="step === 0 || step === 1">
      <li @click="step = 2">Next</li>
    </ul>

    <ul class="header-button-right" v-if="step === 2">
      <li @click="publish">발행</li>
    </ul>

    <img src="./assets/logo.png" class="logo" alt="images"/>
  </div>


  <!-- store 사용방법 -->
<!--  <h4>{{$store.state.name}} {{$store.state.age}}</h4>-->
<!--  <button @click="$store.commit('onchangeName')">버튼</button>-->
<!--  <button @click="$store.commit('onchangeAge',10)">나이증가</button>-->

  <Container
      :Data="Data"
      :step="step"
      :ContainerImage="containerImage"
      @write="content=$event"
      :picFilter="picFilter"
  />

  <div v-if="step===0">
    <button @click="more(item)">더보기</button>
  </div>


  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


</template>


<script>
import Container from "@/components/Container.vue";
import Data from '@/data';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return{
      step: 0,
      item: 0,
      containerImage: '',
      content: '',
      Data: Data,
      picFilter: ''
    }
  },
  components: {
    Container: Container
  },
  methods: {
    publish(){
      let board =  {
        name: "Kim Jihee",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.containerImage,
        likes: 1,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.picFilter
      };
      this.Data.unshift(board);
      this.step = 0;
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.item}.json`)
          .then(res => {
            this.Data.push(res.data);
            this.item ++;

          }).catch((err) => {console.log(err)});
    },
    upload(e){
     let myFile = e.target.files;
     this.containerImage = URL.createObjectURL(myFile[0]);
     this.step ++;
    }
  },
  mounted() {
    this.emitter.on('choiFilter', (a) => {
      this.picFilter = a;
      console.log('필터시작', a);
    });
  }

}
</script>

<style>
@import "assets/style.css";
</style>
