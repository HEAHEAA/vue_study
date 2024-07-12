<template>
  <div>
    <h4>Deyail</h4>
    <h5>{{blogs[$route.params.id].title}}</h5>
    <p>{{blogs[$route.params.id].content}}</p>
    <button @click="$router.go(-1)">
      뒤로가기
    </button>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Detail',
  data(){

  },
  props: {
    blogs: Array,
  }
}
</script>

<style>

</style>
