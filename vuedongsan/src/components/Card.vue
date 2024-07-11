<template>
  <div v-for="(or,i) in oneRoom" :key="i">
    <img :src="or.image" alt="image" @click="modal = true; modalStatus=i"/>
    <h4>{{or.title}}</h4>
    <p>{{or.content}}</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고 수: {{report[i]}}</span>
    <p>{{안녕}}}</p>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props : {
    oneRoom : Array,
    modal : Boolean,
    modalStatus : Number,
    report: Array,
    increase: Function,
    안녕: String,
  }
}
</script>

<style>

</style>
