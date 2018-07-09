<template>
<div>
  <div class="top">
    <search></search>
    <nav-list ></nav-list>
  </div>
  <!-- 内容放置区 -->
</div>
  
</template>

<script>
import search from "@/components/search/search";
import NavList from "@/components/navlist/navlist";
export default {
  data(){
        return{
        }
    },
  components: {
    NavList,
    search,
  }
};
</script>

<style lang="stylus"scoped>
.top
  border-bottom 1px solid #ccc
  // box-sizing border-box
</style>
