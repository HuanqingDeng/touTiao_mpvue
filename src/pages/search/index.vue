<template>
    <div class="page">
        <div class="search">
            <input class="weui-input" placeholder="请输入关键字" />
            <icon type="search" size="20" class="searchIcon"></icon>
        </div>
        <div class="cancel" @click="cancel">
           <text>取消</text> 
        </div>
        此功能待完善。尚不支持查询
    </div>
</template>

<script>
export default {
    methods:{
        cancel(){
            wx.navigateBack({url: './../../pages/index/main'})
        }
    }
}
</script>

<style lang="stylus" scoped>
.search
    background #f2f2f2
    height  60rpx  
    width  585rpx  
    margin-left  20rpx  
    position  relative  
    display  flex  
    align-items  center  
    border-radius  5px  
    margin-top  10px  

    .weui-input
        height  30rpx  
        width  500rpx  
        margin-left  60rpx  
        line-height  50rpx  
        font-size  25rpx  
    
    .searchIcon 
        position  absolute  
        top  10rpx  
        left  10rpx  
.cancel
    position absolute
    top 22rpx
    right 30rpx
    color blue
</style>

