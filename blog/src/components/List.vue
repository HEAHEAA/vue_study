<template>
  <hr/>

  <div v-for="blogs in blogs" :key="blogs">
    <h5>{{blogs.title}}</h5>
    <p>{{ blogs.date }}</p>
    <p>{{ blogs.content }}</p>
    <p>{{ blogs.number }}</p>
    <hr/>
  </div>
</template>
<script>


export default {
  name: 'List',
  props: {
    blogs: Array,
  }
}

</script>
<style>

</style>
