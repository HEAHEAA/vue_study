<template>
  <div class="discount">
    <h4>지금 결제하면 {{showDiscountNum}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'DiscountComponent',
  props: {
    showDiscountNum: Number,
  }
}
</script>

<style>
.discount{
  background-color: #eee;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

</style>
