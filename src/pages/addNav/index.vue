<template>
<div>
    <div @click="back" class="back">
        <img src="./../../assets/back.png" alt="">
    </div>
    <div class="deleDesc">
        <text class="MyChannel">我的频道</text>
        <text class="attention">选中不可拖放排序</text>
    </div>
    <div class="select">
        <div v-for="(item,index) in hadList" :key="index" class="list">
            <view class="navName">{{item.name}}</view>
            <img src="./../../assets/cancel.png" alt="" class="cancel" :data-current="index" @click="delelt">
        </div>
    </div>
     <div class="addDesc">
        <text class="MyChannel">其他频道</text>
        <text class="attention">点击添加</text>
    </div>
    <div class="add">
        <div v-for="(item,index) in addList" :key="index" class="list">
            <view class="navName" :data-current="index" @click="add">{{item.name}}</view>
            <img src="./../../assets/addToList.png" alt="" class="addtoList"/>
        </div>
    </div>
</div>
   
</template>

<script>

export default {
    data(){
        return{
            hadList:this.NavList.navlist,
            addList:this.NavList.hadlist,
        }
    },
    methods:{
        back(){
            wx.redirectTo({
                url: './../index/main',
            })
        },
        delelt(event){
            const index=event.currentTarget.dataset.current;
            this.NavList.hadlist.push(this.NavList.navlist[index]) 
            this.NavList.navlist.splice(index,1) ;
            
        },
        add(event){
            const index=event.currentTarget.dataset.current;
            this.NavList.navlist.push(this.NavList.hadlist[index]) 
            this.NavList.hadlist.splice(index,1)
        }
       
    },
     mounted(){
        
            
     }
}
</script>

<style lang="stylus" scoped>
.back
    width 45rpx
    height 45rpx
    margin 25rpx
    img 
        width 100%
        height 100%
.deleDesc,.addDesc
    margin-bottom 20rpx
    margin-top 20rpx
    margin-left 10rpx
    .attention
        font-size 30rpx
        margin-left 20rpx
.select,.add
    // position absolute
    display flex
    flex-direction row
    justify-content center
    justify-content space-around
    flex-wrap:wrap
    .list
        position relative
        background rgb(231, 231, 231);
        width 150rpx
        height 80rpx
        margin-right 10rpx
        margin-left 10rpx
        margin-bottom 25rpx
        text-align center 
        font-size 30rpx
        .navName
            position relative
            top 50%
            transform translateY(-50%)
        .cancel
            position absolute
            width 40rpx
            height 40rpx
            top -15rpx
            right -15rpx
        .addtoList
            position absolute
            width 50rpx
            height 50rpx
            top 15rpx
            left 5rpx

.add .list .navName
    margin-left 20rpx
</style>
