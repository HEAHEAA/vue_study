<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <img :src="oneRoom[modalStatus].image" alt="image"/>
      <h4>{{oneRoom[modalStatus].title}}</h4>
      <p>{{oneRoom[modalStatus].content}}</p>
      <!--      <button @click="modal = false">닫기</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data(){

  },
  props: {
    oneRoom: Array,
    modal: Boolean,
    modalStatus: Number,
  }
}

</script>

<style>
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
