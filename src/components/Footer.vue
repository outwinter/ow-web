<template>
  <div class="footer">
    <div class="w1200">
      <div class="logo fl">
        <img src="@/assets/img/footer_IMG.jpg" />
      </div>
      <div class="tel fr">
        Tel：《联系方式1》&nbsp;&nbsp;《联系方式2》&nbsp;&nbsp;&nbsp;&nbsp;传真：《传真》
      </div>
      <ul>
        <li><a href="/">&nbsp;</a></li>
        <li><a href="/">首页</a></li>
        <li><a href="/about.html">公司介绍</a></li>
        <li><a href="/about.html">产品介绍</a></li>
        <li><a href="/about.html">最近信息</a></li>
        <li><a href="/about.html">最近信息</a></li>
        <li><a href="/about.html">联系我们</a></li>
      </ul>
      <p>
        ©2022 《公司名称》版权所有
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          style="color: currentColor;"
          >《备案号》</a
        ><br />
        地址：《公司地址》 <br />
        联系我们：《公司电话》
      </p>
    </div>
    <br style="clear: both" />
  </div>
</template>
<script>
export default {
  name: "FooterComponent",
  data() {
    return {};
  }
};
</script>
<style scoped>
.footer {
  background: #222;
}

.footer .logo {
  width: 231px;
  height: 64px;
  margin-top: 40px;
}

.footer .tel {
  height: 64px;
  line-height: 64px;
  margin-top: 40px;
  font-size: 17px;
  color: #15aec0;
  text-transform: uppercase;
}

.footer ul {
  border: 1px solid #373737;
  border-left: none;
  border-right: none;
  margin-top: 40px;
  padding: 20px 0;
  margin-bottom: 20px;
  width: 1200px;
}

.footer ul li {
}

.footer ul li a {
  float: left;
  width: 150px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}

.footer ul li a:hover {
  color: #15aec0;
}

.footer p {
  float: left;
  color: #a1a1a1;
  line-height: 30px;
  margin-top: 20px;
  margin-right: 60px;
}

.footer .ewm {
  float: right;
}

.w1200 {
  width: 1200px;
  margin: auto;
  overflow: hidden;
}

img {
  border: none;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

ul,
li {
  list-style: none;
  float: left;
}

</style>
