<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{Data.name}}</span>
    </div>
    <div class="post-body" :style="{backgroundImage: `url(${Data.postImage})`}">

    </div>
    <div class="post-content">
      <p>{{Data.likes}} Likes</p>
      <p><strong>{{Data.name}}</strong> {{Data.content}}</p>
      <p class="date">{{Data.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props : {
    Data: Object
  },
}
</script>

<style>
@import "../assets/Post.css";

</style>
