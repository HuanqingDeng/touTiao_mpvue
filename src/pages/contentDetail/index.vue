<template>
    <div class="page">
        <div class="title">中美贸易战双方已经正式开始互相加征关税</div>
        <div class="page__body" v-for="(item,index) in deta" :key="index">
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
            <div class="content">
                <div class="desc" :style="{fontSize:fontSize + 'px'}">
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{item.desc}}
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            fontSize:18,
             deta: [
              {
                "title": "粮油中心：中国完全有能力应对美大豆进口减少缺口",
                "writeImg": "https://p2.pstatp.com/large/1687/8327084584",
                "author": "海外网",
                "time": "07-11 05:49",
                "writer": "文/小明",
                "desc": "中美贸易战双方已经正式开始互相加征关税，这场美方主动寻衅发起的贸易战最初提出的涉案贸易额（500亿美元）就大幅度超越了全球贸易史上此前双边贸易争端涉案额的最高纪录，而且美方威胁还可能进一步成倍加码，甚至向中国对美全部出口额外加征关税。中国是连续多年的世界第一出口大国，如此大规模的贸易战对中国涉案出口、进口部门收入及就业必定会造成一定冲击，甚至是比较大的冲击。那么，中国究竟能否承受住这场冲击？特别是能否承受住中国对美全部出口均被额外加征关税的极端情况的冲击？对于这些问题，我们的答案是肯定的。这不仅是因为中国拥有巨大的国内市场兜底，而且也是因为我们能够在贸易战情况下保住相当一部分美国市场，并努力开拓新的海外市场"
              }
            ]
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
        }
    },
    created(){
        // this.$on('global:contentDetail',Detail=>this.deta=Detail);
        // console.log(this.detail);
    }
}
</script>

<style lang="stylus" scoped>
.page
    margin-top 40rpx
    margin-left 30rpx
    margin-right 30rp
    .title
        font-weight bolder
        font-size 50rpx
    .page__body
        margin-top 50rpx
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
            margin-right 25rpx
            .desc
                // font-size 18px

</style>
