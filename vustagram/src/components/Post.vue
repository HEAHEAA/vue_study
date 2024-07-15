<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{Data.name}}</span>
    </div>
    <div :class="`${Data.filter} post-body`" :style="{backgroundImage: `url(${Data.postImage})`}"
      @click="$store.commit('onchangeLikes')"
    >

    </div>
    <div class="post-content">
      <p>{{$store.state.likes}} Likes</p>
      <p><strong>{{Data.name}}</strong> {{Data.content}}</p>
      <p class="date">{{Data.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props : {
    Data: Object,
    picFilter: String,
  },
}
</script>

<style>
@import "../assets/Post.css";

</style>
