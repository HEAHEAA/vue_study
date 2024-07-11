<template>
  <div>
    <img
        :src="oneRooms.image"
        @click="send()"
        alt="image"
    />
    <h4> {{ oneRooms.title}}</h4>
    <p>{{ oneRooms.content }}</p>

    <hr/>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    oneRooms: Object,
  },
  methods:{
    send(){
      this.$emit('openModal');
    }
  }
}
</script>

<style>

</style>
