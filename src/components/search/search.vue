<template>
    <div class="search" @click="toSearch">
        <img src="./../../assets/search.png" class="searchImg"/>
    </div>
</template>

<script>
export default {
    methods:{
        toSearch(){
            wx.navigateTo({url: './../../pages/search/main'})
        }
    }
}
</script>

<style lang="stylus" scoped>
.search
    display inline-block
    position relative
    margin-left 20rpx
    margin-top 20rpx
.search .searchImg
    width 50rpx
    height 50rpx
</style>

