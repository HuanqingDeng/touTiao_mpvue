<template>
    <div class="page">
      <div class="page__head">
        <div class="title">{{deta.title}}</div>
        <div class="page__body">
            <div v-for="(item,index) in deta.detail" :key="index" class="aa">
                <div class="authMsg">
                    <div class="authImg">
                        <img :src="item.writeImg" alt=""/>
                    </div>
                    <div class="right">
                        <div class="author">{{item.author}}</div>
                        <div class="toutiaoHao">头条号</div>
                        <div class="time">{{item.time}}</div>
                    </div> 
                </div>
                <div class="fontsize">
                    <text class="text" @click="toUpSize">A+</text>
                    <text class="text" @click="toLowSize">A-</text>
                </div>
                <div class="content" id="content">
                    <div class="desc" :style="{fontSize:fontSize + 'px'}">
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{item.desc}}
                    </div>
                </div>
            </div>
            <div class="comments">
                <div class="hotCom">热门评论</div>
                <div class="comList" v-for="(item,index) in deta.commentDtail" :key="index">
                    <view class="comment">
                        <div class="img">
                            <img :src="item.img" alt=""/>
                        </div>
                        <div class="right">
                            <div class="author">{{item.author}}</div>
                            <div class="content">{{item.content}}</div>
                            <div class="time">{{item.time}}</div>
                            <div class="like" :class="likee?'yes':'no'">
                                <img v-if="likee" src='./../../utils/imgs/like1.png' alt="" @click="like"/>
                                <img v-else src='./../../utils/imgs/like.png' alt="" @click="like"/>
                                {{item.like}}
                            </div>
                        </div>
                    </view>
                </div> 
            </div>  
        </div>
      </div>
        <div class="page__footer">
                <div class="toComent">
                    <img src="./../../utils/imgs/writeCom.png" alt="">
                    <input type="text" placeholder="写评论...">
                 </div>
                <div class="commentLength" @click="toview">
                    <img src="./../../utils/imgs/comment.png" alt="">
                    <span class="length">{{deta.commentDtail.length}}</span>
                </div>
                <div class="collect">
                    <img v-if="collect" src="./../../utils/imgs/collect2.png" alt=""  @click="collected" />
                    <img v-else src="./../../utils/imgs/collect1.png" alt=""  @click="collected"/>
                </div>
                <img src="./../../utils/imgs/share.png" alt="" class="share">
                <img src="./../../utils/imgs/WXfriend.png" alt="">
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            deta:[],
            fontSize:18,
            likee:false,
            Red:'./../../utils/imgs/like.png',
            def:'./../../utils/imgs/like1.png',
            commentLength:'',
            toView:'',
            collect:false
        }
    },
    methods:{
        toUpSize(){
            if(this.fontSize<25){
              this.fontSize++  
            }
        },
        toLowSize(){
            if(this.fontSize>10)
            this.fontSize--
        },
        like(){
            //点赞反选
            this.likee=!this.likee
            // console.log(this.deta.commentDtail.length);
        },
        toview(){
            this.toView='comment',
            console.log('hhhhh');
            
        },
        collected(){
            this.collect=!this.collect
        }
    },
    created(){
        this.$on('global:contentDetail',Detail=>this.deta=Detail);
    }
}
</script>

<style lang="stylus" scoped>
.page
    margin 0
    padding 0
    .page__head
        margin-top 40rpx
        margin-left 30rpx
        margin-right 30rp
        height auto
        .title
            font-weight bolder
            font-size 50rpx
        .page__body
            // position fixed
            top 100rpx
            margin-top 50rpx
            margin-right 30rpx
            .authMsg
                display inline-block
                .authImg
                    float left
                    img 
                        width 70rpx
                        height 70rpx
                        border-radius 50%
                .right
                    width 160rpx
                    float left
                    font-size 22rpx
                    // background blue
                    margin-left 10rpx
                    margin-top 7rpx

                    .author
                        float left
                        font-size 28rpx
                    .toutiaoHao
                        float left
                        margin-left 10rpx
                        margin-top 5rpx
                        color #ffffff
                        background red
                        border-radius 5rpx
                    .time
                        margin-top 10rpx
                        float left
                        color #8e8e8e
            .fontsize
                position absolute
                display flex
                right 35rpx
                top 230rpx
                .text
                    display flex
                    height 40rpx
                    width 65rpx
                    background #eaeaea
                    margin-left 10rpx
                    border-radius 7rpx
                    justify-content center
                    align-items center
                    font-size 25rpx
            .content
                display inline-block
            .comments  
                margin-top 70rpx
                border-top 1rpx solid #8e8e8e
                padding-top 60rpx
                .hotCom
                    border-left 1px solid red
                    padding-left 10rpx
                .comList
                    width 100%
                    margin-top 60rpx
                    .comment
                        img
                            width 70rpx
                            height 70rpx
                            border-radius 50%
                            float left
                        .right
                            position relative
                            right -30rpx

                            margin-left 15rpx
                            width 600rpx
                            // background blue
                            margin-bottom 60rpx
                            .author
                                font-size 27rpx
                                color blue
                                display block
                            .content
                                font-size 32rpx
                                margin-top 13rpx
                                display block
                            .time
                                margin-top 13rpx
                                color #8e8e8e
                                margin-left 55rpx
                                font-size 25rpx
                            .like
                                position absolute
                                top 5rpx
                                right 10rpx
                                font-size 27rpx
                                // color #8e8e8e
                                img 
                                    width 40rpx
                                    height 40rpx
                                    margin-left 10rpx
                                    margin-top -5rpx
                            .yes
                                color red
                            .no 
                                color #8e8e8e

    .page__footer
        width 100%
        position fixed
        bottom 0
        border-top 1rpx solid #8e8e8e
        padding-top 20rpx
        padding-bottom 20rpx
        background #fff
        img
            width 50rpx
            height 50rpx
            margin-left 50rpx
        .toComent
            width 330rpx
            height 50rp
            float left
            background #eaeaea
            border-radius 45rpx
            img 
                width 30rpx
                height 30rpx
                margin-left 20rpx
                margin-bottom 10rpx

            input 
                display inline-block
                width 200rpx
                height line-height
                // background red
                font-size 28rpx
                margin-top 7rpx
                margin-left 10rpx
        .commentLength
            float left
            position relative
            span
                position absolute
                top -10rpx
                right -16rpx
                width 50rpx
                background red
                border-radius 15rpx
                font-size 20rpx
                text-align center
                color #fff
        .collect
            float left
        .share
            float left

</style>
