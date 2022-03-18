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
      <div class="ads-box">
        <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
          <img v-bind="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
          </div>
        <div class="list-box">
          <div class="list" v-for="(arr,i) in phoneList" v-bind:key="i">
            <div class="item" v-for="(item,j) in arr" v-bind:key="j">
              <span v-bind:class="{'new-pro':j%2==0}">新品</span>
              <div class="item-img">
                <img v-lazy="item.mainImage" alt="">
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}}</p>
                <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <service-bar></service-bar>
  <modal 
    title="提示" 
    sureText="查看购物车" 
    btnType="1" 
    modalType="middle" 
    v-bind:showModal="showModal"
    v-on:submit="goToCart"
    v-on:cancel="showModal=false"
    >
    <template v-slot:body>
      <p>商品添加成功！</p>
    </template>
  </modal>
  </div>
</template>
<script>
  import ServiceBar from './../components/ServiceBar'
  import Modal from './../components/Modal'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default{
    name:'index',
    components:{
      swiper,
      swiperSlide,
      ServiceBar,
      Modal
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
        ],
        adsLis:[
          {
            id: 33,
            img: '/imgs/ads/ads-1.png'
          },{
            id: 48,
            img: '/imgs/ads/ads-2.jpg'
          },{
            id: 45,
            img: '/imgs/ads/ads-3.png'
          },{
            id: 47,
            img: '/imgs/ads/ads-4.jpg'
          }
        ],
        phoneList:[],
        showModal:false
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
        this.axios.get('/products',{
          params:{
            categoryId: 100012,
            pageSize: 12
          }
        }).then((res)=>{
          res.list = res.list.slice(7,14);
          this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
        })
      },
      addCart(id){
        this.axios.post('/carts',{
          productId: id, 
          selected: true
        }).then((res)=>{
          this.showModal = true;
          this.$$store.dispatch('saveCartCount',res.cartTotalQuantity);
        }).catch(()=>{
          this.showModal = true;
        })
      },
      goToCart(){
        this.$router.push('/cart');
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
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        widows: 296px;
        height: 167px;
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 16px;
          img{
            width: 24px;
            height: 619px;
          }
        }
        .list-box{
          .list{
            @include flex();
            widows: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 306px;
              background-color: $colorG;
              text-align: center;
              span{
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: $colorG;
                &.new-pro{
                background-color: #7ecf68;
              }
              &.kill-pro{
                background-color: #e82626;
              }
            }
            .item-img{
              img{
                width: 100%;
                height: 195px;
              }
            }
            .item-info{
              h3{
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p{
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price{
                color: #F20A0A;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after{
                  @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                  content:' ';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>