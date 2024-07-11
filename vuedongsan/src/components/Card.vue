<template>
  <div class="content">
    <img
        :src="oneRooms.image"
        alt="image"
        class="oneRoom-img"
    />
    <h4> {{ oneRooms.title}}</h4>
    <p>{{ oneRooms.content }}</p>
    <h5>{{ oneRooms.price}}원</h5>
    <button @click="send()">자세히 보기</button>
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
.oneRoom-img{
  width: 95%;
  margin-left: 2.5%;
}
.content{
  text-align: center;
}
.content button{
  width: 95%;
  margin-left: 2.5%;
  background-color: darkcyan;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}

</style>
