<template>
  <div>
    <div v-for="Data in Data" :key="Data" v-if="step === 0">
      <Post :Data="Data"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div class="upload-image" :style="{backgroundImage: `url(${ContainerImage})`}"></div>

      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>


    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div class="upload-image" :style="{backgroundImage: `url(${ContainerImage})`}"></div>
      <div class="write">
        <textarea  class="write-box" @input="$emit('write', $event.target.value)"/>
      </div>
    </div>

  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'Container',
  components: {
    Post: Post
  },
  data(){
    return{

    }
  },
  props : {
    Data: Array,
    step: Number,
    ContainerImage: String,
  },
  methods: {


  }

}
</script>

<style>
@import "../assets/Container.css";
</style>
