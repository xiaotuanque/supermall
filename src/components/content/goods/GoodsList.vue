<template>
  <div class="goods">
    <goods-list-item v-for="(item,id) in goods" :goodsItem="item" :key="id"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  justify-content: space-evenly;
  /* padding: 2px; */
}
</style>
