<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <img :src="oneRoom[modalStatus].image" alt="image"/>
      <h4>{{oneRoom[modalStatus].title}}</h4>
      <p>{{oneRoom[modalStatus].content}}</p>
      <button @click="$emit('closeModal');">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    oneRoom: Object,
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

.white-bg button{
  width: 100%;
}
</style>
