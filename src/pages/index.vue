<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id:''">
                      <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{sub?sub.name:'Apple 13'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
  import ServiceBar from './../components/ServiceBar'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default{
    name:'index',
    components:{
      swiper,
      swiperSlide,
      ServiceBar
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,
          loop:true,
          effect:'cube',
          cubeEffect: {
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-1.jpg'
          }
        ],
        menuList:[
          [
            {
              id:30,
              img:'/imgs/item-box-1.png',
              name:'小米13',
            },{
              id:33,
              img:'/imgs/item-box-2.png',
              name:'小米11青春版',
            },{
              id:32,
              img:'/imgs/item-box-3.jpg',
              name:'Apple 13 Pro',
            },{
              id:33,
              img:'/imgs/item-box-4.jpg',
              name:'移动5G专区',
            },
          ],
          [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
        ]
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        height: 451px;
        width: 264px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585a7a;
        box-sizing: border-box;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              position: relative;
              display: block;
              font-size: 16px;
              color: #fff;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top: 17.5px;
                content:' ';
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png')
              }
            }
            &:hover{
              background-color: $colorA;
              .children{
                display: block;
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid $colorH;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a{
                  color: $colorB;
                  font-size: 14px;
                  vertical-align: middle;
                  margin-right: 55px;
                }
                img{
                  width: 42px;
                  height: 35px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>