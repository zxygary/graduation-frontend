<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/public/imgs/logo-footer.png" alt="页脚logo">
      <p>商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/zxygary" target="_blank">站长的github主页</a><span>|</span>
      <a href="https://coding.imooc.com/class/392.html" target="_blank">慕课网全栈电商课程</a><span>|</span>
      <a href="https://github.com/zxygary/graduation-project" target="_blank">后端代码仓库</a><span>|</span>
      <a href="https://github.com/zxygary/graduation-front" target="_blank">前端代码仓库</a><span>|</span>
      <a href="https://github.com/zxygary/LeetCode-Exercises" target="_blank">跟着我刷LeetCode吧</a>
    </div>
    <div class="copyright">
      Copyright ©2022 <span class="domin">zxygary.com</span> All Right Reserved
		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51092202000401"><img src="../../public/imgs/备案图标.png" id="police"><span class="domin">川公网安备 51092202000401号</span></a><span>|</span>
		<a target="_blank" href="https://beian.miit.gov.cn/"><span class="domin">蜀ICP备2021003606号</span></a>
    </div>
  </div>
</template>``
<script>
  export default{
    name:'nav-footer'
  }
</script>
<style lang="scss" scoped>
  #police{
    height: 20px;
    width: auto;
    display: inline-block;
  }
  .footer{
    height:234px;
    border-top:4px solid #FF6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color:#999;
        display: inline-block;
      }
      span{
        margin:0, 10px;
      }
      margin-bottom: 13px;
    }
    .copyright{
      .domin{
        color: #FF6600
      }
    }
  }
</style>