<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/1.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/1(点击).png"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/catagory" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/2.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/2(点击).png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/3.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/3(点击).png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/4.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/4(点击).png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
};
</script>

<style></style>
