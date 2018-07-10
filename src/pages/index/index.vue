<template>
<div>
  <div class="top">
    <search></search>
    <nav-list @getNavId="navIdmsg"></nav-list>
  </div>
  <!-- 内容放置区 -->
  <content-list :navId="navId"></content-list>
</div>
  
</template>

<script>
import search from "@/components/search/search";
import contentList from "@/components/contentList/contentList";
import NavList from "@/components/navlist/navlist";
export default {
  data(){
        return{
          navId:''
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
      // console.log(this.navId);
      
    }
  }
};
</script>

<style lang="stylus"scoped>
.top
  border-bottom 1px solid #ccc
  // box-sizing border-box
</style>
