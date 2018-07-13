<template>
<div class="aoo">
  <div class="top">
    <search></search>
    <nav-list ></nav-list>
  </div>
    <content-list ></content-list>
</div>
  
</template>

<script>
import search from "@/components/search/search";
import contentList from "@/components/contentList/contentList";
import NavList from "@/components/navlist/navlist";
export default {
  data(){
        return{
        }
    },
  components: {
    NavList,
    search,
    contentList
  },
  methods:{
    navIdmsg(navId){
      this.navId=navId;
      // console.log(navId); 
    }
  }
};
</script>

<style lang="stylus"scoped>
.top
  border-bottom 1px solid #ccc
  // box-sizing border-box
</style>
