<template>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <img :src="oneRoom[modalStatus].image" alt="image" class="oneRoom-img"/>
      <h4>{{ oneRoom[modalStatus].title }}</h4>
      <p>{{ oneRoom[modalStatus].content }}</p>

      <!--<input @input="month = $event.target.value"/>-->

      <!-- v-model 을 쓰면 더 간편해짐-->
       <input v-model.number="month"/>

      <!-- v-model select 도 사용가능-->
<!--      <select v-model="month" class="select-month">-->
<!--        <option>1</option>-->
<!--        <option>2</option>-->
<!--        <option>3</option>-->
<!--        <option>4</option>-->
<!--        <option>5</option>-->
<!--        <option>6</option>-->
<!--      </select>-->

      <h5>{{ month }} 개월 선택함 :{{ month * oneRoom[modalStatus].price }}원</h5>

      <button @click="$emit('closeModal'); month = 1;">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month: parseInt(1),
    }
  },
  watch: {

    month(valueType){
      if(valueType >= 13){
        alert('숫자가 12 이상임');
      }else if(isNaN(valueType) === true){
        alert('숫자만 입력하세요');
        this.month = 1;
      }
    },

  },
  props: {
    oneRoom: Object,
    modal: Boolean,
    modalStatus: Number,
  }
}


</script>


<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.oneRoom-img {
  width: 95%;
  margin-left: 2.5%;
}

.select-month{
  width: 150px;
  height: 40px;
}

.white-bg button {
  width: 100%;
  background-color: darkgrey;
  color: white;
  border: none;
  height: 35px;
  border-radius: 5px;
}
</style>
