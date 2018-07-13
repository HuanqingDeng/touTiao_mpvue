<template>
<div id="app">
    <div class="sroll">
        <!-- style="width:100%" -->
         <scroll-view class="navList" scroll-x >
            <view  v-for="(item,index ) in navlist" :key="index" class="list" ref="item.name" 
              @click="changList" >
                <div :class="swiperId==index?'chose':'de'" @click="change(item.ID)">{{item.name}}</div>
            </view>
         </scroll-view>
    </div>
    <div class="right">
        <div class="addNav">
            <img src="./../../assets/addNav.png" @click="toAdd" />
        </div>
        <div class="personal">
            <img src="./../../assets/personal2.png"/>
        </div>
    </div>
</div>
   
</template>

<script>
export default {
    data(){
        return{
            current:0,
            choose:false,
            navlist:this.NavList.navlist,
            swiperId:''
        }
    },
    components:{
    },
    methods:{
        changList(e){
            this.choose=!this.choose;   
            const current=e.currentTarget.dataset.current;
            this.current=current;    
        },
        change(a){
            //当前按钮ID值
            let ID=a;
            this.$emit('global:getNavId',ID);
        },
        toAdd(){
            wx.redirectTo({
                url: './../../pages/addNav/main',
            })
        }
    },
    created(){
        //兄弟间传递数据
         this.$on('global:getTarget',id=>this.swiperId=id);
    }
}
</script>

<style lang="stylus" scoped>
.navList
    width 500rpx
    height 60rpx
    position absolute
    top 15.5rpx
    left 95rpx
    overflow hidden
    white-space  nowrap
    .list
        display inline-block
        // float left
        width 70rpx
        margin-right 40rpx
        color #000
        font-size 35rpx
        font-family Microsoft Yahei
.chose
    color red
.de
    color #000
.right
    display inline-block
    position absolute
    width 175rpx
    height 79rpx
    right 0
    top 0
    border-left 1px solid #cccccc
    box-shadow -2px -2px 3px #888
    background #fff
    .addNav img 
        position relative
        top 12rpx
        left 20rpx
        width 60rpx
        height 60rpx   

    .personal img 
        position absolute
        top 20rpx
        right 20rpx
        width 50rpx
        height 40rpx   
</style>
