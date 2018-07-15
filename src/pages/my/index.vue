<template>
    <div class="page">
        <div class="avatar">
            <img src="./../../utils/imgs/avatar.png" alt=""/>
            <text>用户1237346511</text>
        </div>
       
        <div class="page__body">
             <div class="notice">
                <div class="num">0</div>
                <div>关注</div>
            </div>
                <div class="fans">
                    <div class="num">0</div>
                <div>粉丝</div>
            </div>
        </div>
       
        <div class="collect">
            <div class="myCollect">我的收藏</div>
            <div v-if="noCollect" class="notice">暂无收藏</div>
            <div v-else></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            noCollect:true
        }
    }
}
</script>
<style lang="stylus" scoped>
.page
    margin 0
    padding 0
    .avatar
        width 100%
        height 250rpx
        position relative
        background #708090
        img 
            position absolute
            width 140rpx
            height 140rpx
            top 60rpx
            left 50rpx
        text
            position absolute
            color #ffffff
            font-size 30rpx
            top 115rpx
            left 235rpx
    .page__body
        width 100%
        background #f5f5f5
        font-size 30rpx
        padding-top 20rpx
        padding-bottom 20rpx
        text-align center
        .notice
            float left  
            margin-left 185rpx
        .fans
            margin-left 370rpx
    .collect
        width 100%
        background #f5f5f5
        margin-top 20rpx
        font-size 30rpx
        .myCollect
            padding-top 40rpx
            padding-left 50rpx
        .notice
            padding-top 45rpx
            padding-bottom 30rpx
            margin-left 340rpx
</style>
