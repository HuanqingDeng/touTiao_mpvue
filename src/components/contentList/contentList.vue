<template>
    <div>
        <div v-for="(item, index) in article" :key="index">
            <div v-if="item.id===navId" class="page">
                <div class="contentlist" v-for="(itemm,vv) in item.content" :key="vv">
                    <div class="top">
                        <div class="title">{{itemm.title}}</div>
                        <img :src="itemm.pageImg" alt="" class="pageImg"/>
                    </div>
                    <div class="buttom">
                        <div class="author">{{itemm.author}}</div>
                        <div class="comment">{{itemm.comment}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import fly from '@/utils/fly'
export default {
    props:['navId'],
    data(){
        return{
            // contentL:this.NavList.contentList,
            article:[]
        }
    },
    created() {
     fly.get('Mpvue_toutiao_data#!method=get').then((res)=>{
              const article = res.data.data.article;
            //   console.log(article);
            this.article=article;
            console.log(this.article);
            }).catch((e)=>{
            console.log(e)
            })
    }
    
}
</script>
<style lang="stylus" scoped>
.page
    width 690rpx
    margin 0 auto
    .contentlist
        display inline-block
        width 100%
        margin-top 30rpx
        border-bottom 1rpx solid #8e8e8e
        box-sizing border-box
        .top
            height 155rpx
            width 100%
            display block
            overflow hidden
            .title
                float left
                width 420rpx
                height auto
                font-size 35rpx
                margin-right 20rpx
                letter-spacing 5rpx
            .pageImg
                width 230rpx
                height 150rpx
                float right 
        .buttom
            display inline-block
            .author
                font-size 25rpx
                float left
                margin-right 15rpx
                color #8e8e8e
            .comment
                font-size 25rpx
                float left
                color #8e8e8e
</style>
