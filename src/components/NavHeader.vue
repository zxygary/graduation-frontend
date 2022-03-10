<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'nav-header'
  }
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  // @import './../assets/scss/mixin.scss';
  .header{
    .nav-topbar{
      height:39px;
      line-height:39px;
      background-color:#333333;
      color:#B0B0B0;
      .container{
        // @include flex();
        a{
          display:inline-block;
          color:#B0B0B0;
          margin-right:17px;
        }
        .my-cart{
          width:110px;
          background-color:#FF6600;
          text-align:center;
          color:#ffffff;
          .icon-cart{
           background: url('/../public/imgs/icon-cart-checked.png');
            margin-right:4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        height:112px;
        // @include flex();
        .header-logo{
          display:inline-block;
          width:55px;
          height:55px;
          background-color:#FF6600;
          a{
            display:inline-block;
            width:110px;
            height:55px;
            &:before{
              content:' ';
              background: url('/imgs/mi-logo.png');
              transition:margin .2s;
            }
            &:after{
              content:' ';
              background: url('/imgs/mi-home.png');
            }
            &:hover:before{
              margin-left:-55px;
              transition:margin .2s;
            }
          }
        }
        .header-menu{
          display:inline-block;
          // width:200px;
          padding-left:209px;
          .item-menu{
            display:inline-block;
            color:#333333;
            font-weight:bold;
            font-size:16px;
            line-height:112px;
            margin-right: 20px;
            span{
              cursor:pointer;
            }
            &:hover{
              
            }
          }
        }
        .header-search{
          
        }
      }
    }
 }
</style>