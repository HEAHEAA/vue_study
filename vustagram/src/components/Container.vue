<template>
  <div>
    <div v-for="Data in Data" :key="Data" v-if="step === 0">
      <Post :Data="Data"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div class="upload-image" :style="{backgroundImage: `url(${ContainerImage})`}"></div>

      <div class="filters">
        <FilterBox
            :ContainerImage="ContainerImage"
            v-for="filter in filters" :key="filter"
            :filter="filter"
        ></FilterBox>
      </div>
    </div>


    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div class="upload-image" :style="{backgroundImage: `url(${ContainerImage})`}"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('write', $event.target.value)"/>
      </div>
    </div>

  </div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';

export default {
  name: 'Container',
  data() {
    return {
      filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    }
  },
  components: {
    Post: Post,
    FilterBox: FilterBox
  },
  props: {
    Data: Array,
    step: Number,
    ContainerImage: String,
  },
}
</script>

<style>
@import "../assets/Container.css";
</style>
