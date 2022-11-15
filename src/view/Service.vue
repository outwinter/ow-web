<template>
  <div id="Service">
    <div class="pro_ny">
      <div class="cp_left fl">
        <div class="cp_title">
          <div class="cp_text">
            <b>产品分类</b
            ><em class="pro_btn"><a href="javascript:;">点击展开+</a></em>
            <br /><span>PRODUCTS</span>
          </div>
        </div>
        <ul class="pro_list" style="display: block;">
          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys40" href="/products/40.html"
                ><dd>低温|高温|恒温槽类</dd></a
              >
              <dt></dt>
            </div>
            <div class="protlt_bd">
              <a target="_blank" href="/products/43.html" class="ys43"
                >低温恒温槽</a
              >

              <a target="_blank" href="/products/44.html" class="ys44"
                >低温恒温循环器</a
              >
            </div>
          </li>

          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys42" href="/products/42.html"
                ><dd>实验制样设备</dd></a
              >
              <dt></dt>
            </div>
            <div class="protlt_bd">
              <a target="_blank" href="/products/49.html" class="ys49"
                >均质|分散|匀浆设备</a
              >
              <a target="_blank" href="/products/70.html" class="ys70"
                >索氏提取器</a
              >
              <a target="_blank" href="/products/51.html" class="ys51"
                >玻璃反应釜</a
              >
            </div>
          </li>

          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys41" href="/products/41.html"
                ><dd>制冷|超声波产品</dd></a
              >
              <dt></dt>
            </div>
            <div class="protlt_bd">
              <a target="_blank" href="/products/46.html" class="ys46"
                >雪花制冰机</a
              >
              <a target="_blank" href="/products/61.html" class="ys61"
                >超声波乳化分散器</a
              >
            </div>
          </li>

          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys71" href="/products/71.html"
                ><dd>培养箱|干燥箱|试验箱</dd></a
              >
              <dt></dt>
            </div>
            <div class="protlt_bd">
              <a target="_blank" href="/products/75.html" class="ys75"
                >二氧化碳培养箱</a
              >

              <a target="_blank" href="/products/80.html" class="ys80"
                >真空干燥箱</a
              >
            </div>
          </li>

          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys84" href="/products/84.html"
                ><dd>摇床|振荡|混匀系列</dd></a
              >
              <dt></dt>
            </div>
            <div class="protlt_bd">
              <a target="_blank" href="/products/90.html" class="ys90"
                >恒温金属浴</a
              >

              <a target="_blank" href="/products/89.html" class="ys89"
                >恒温混匀仪</a
              >
            </div>
          </li>
          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys91" href="/products/91.html"
                ><dd>生物仪器</dd></a
              >
              <dt></dt>
            </div>
            <div class="protlt_bd">
              <a target="_blank" href="/products/92.html" class="ys92"
                >超净工作台</a
              >
              <a target="_blank" href="/products/95.html" class="ys95"
                >紫外分析仪</a
              >
            </div>
          </li>

          <li class="cli">
            <div class="protlt">
              <a target="_blank" class="ys111" href="/products/111.html"
                ><dd>光学仪器</dd></a
              >
              <dt class=""></dt>
            </div>
            <div class="protlt_bd" style="display: none;">
              <a target="_blank" href="/products/115.html" class="ys115"
                >阿贝折射仪</a
              >

              <a target="_blank" href="/products/116.html" class="ys116"
                >熔点仪</a
              >
            </div>
          </li>
        </ul>
        <div class="left_bottom">
          <span>诚信天下，质得信任</span>
        </div>
      </div>
      <div class="pro_r">
        <div class="title">
          <span><a target="_blank" href="/">网站首页</a> 产品展示</span>
          <div id="search-box2">
            <input
              type="text"
              placeholder="请输入搜索关键字"
              id="keywords"
              name="keywords"
              onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords');return false};"
              x-webkit-speech=""
            />
            <button onclick="SiteSearch('/search.html', '#keywords');">
              <i class="iconfont"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "Service",
  data() {
    return {
      serviceList: []
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {}
};
</script>
<style scoped>
.pro_ny {
  width: 1200px;
  margin: 0px auto;
  overflow: hidden;
  padding-bottom: 30px;
  min-height: 500px;
}
.pro_ny .pro_l {
  width: 210px;
  float: left;
  margin-top: 20px;
  margin-bottom: 20px;
}
.pro_ny .pro_r {
  width: 960px;
  float: right;
  margin-top: 20px;
}
.pro_ny .pro_l .title,
.pro_ny .pro_l .title1 {
  width: 210px;
  height: 75px;
  background: #1574b5;
}
.pro_ny .pro_l .title span {
  font-size: 26px;
  display: block;
  float: left;
  margin-top: 10px;
  margin-left: 30px;
  color: #fff;
}
.pro_ny .pro_l .title1 span {
  font-size: 26px;
  display: block;
  float: left;
  margin-top: 11px;
  margin-left: 30px;
  color: #fff;
}
.pro_ny .pro_l .title p,
.pro_ny .pro_l .title1 p {
  font-size: 12px;
  display: block;
  float: left;
  margin-left: 30px;
  color: #e0562f;
}
.pro_ny .pro_l .list {
  background-image: url(/images/gb.jpg);
  width: 210px;
}
.pro_ny .pro_l .list ul li {
  float: left;
  height: 50px;
  line-height: 50px;
  background: url(/images/list_icon.png) 10px 18px no-repeat;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  padding-left: 30px;
}
.pro_ny .pro_l .list ul li:hover {
  background: url(/images/list_icon_on.png) 10px 18px no-repeat;
}
.pro_ny .pro_l .list ul li:hover a {
  color: #273e82;
}
.pro_ny .pro_l .list ul li a {
  color: #333;
}
.pro_ny .pro_l .list ul div a {
  display: block;
  float: left;
  width: 190px;
  padding-left: 30px;
  color: #5a5a5a;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pro_ny .pro_l .list ul div a:hover {
  color: #273e82;
}
.pro_r .title {
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  height: 61px;
  margin-bottom: 10px;
}
.pro_r .title img {
  float: left;
  margin: 20px 10px 0px 0px;
}
.pro_r .title span {
  line-height: 71px;
}
.pro_r .title span a {
  color: #333;
  padding: 0px 5px;
}
.pro_r .title span a:hover {
  color: #ff9900;
}
.fl {
  float: left;
}

.cp_left {
  width: 210px;
  margin-top: 20px;
}
.ny_main .cp_left {
  margin-top: 0;
}
.cp_left .left_bottom {
  width: 210px;
  height: 95px;
  background: #1a72b1;
  color: #fff;
}
.cp_left .left_bottom span {
  font-size: 18px;
  display: block;
  width: 100%;
  text-align: center;
  line-height: 50px;
}
.cp_left .left_bottom p {
  font-size: 24px;
  display: block;
  width: 100%;
  text-align: center;
}
.cp_title {
  width: 100%;
  height: 80px;
  overflow: hidden;
  zoom: 1;
  text-align: left;
  background: url(/images/short_title.png) no-repeat 40px center #1a72b1;
}
.cp_text {
  padding: 16px 0 0 80px;
}
.cp_title span {
  color: #fff;
  font-size: 12px;
}
.cp_title b {
  font-size: 22px;
  color: #fff;
}
.cp_title em {
  float: right;
  font-size: 12px;
  padding-right: 20px;
  display: none;
  font-style: normal;
}
.cp_title1 {
  display: none;
}
.cp_left ul.pro_list {
  border: 1px solid #ddd;
  border-top: none;
  padding-top: 15px;
  padding-bottom: 12px;
}
.cp_left ul.pro_list li {
  margin: 0 auto 8px auto;
}
.cp_left ul.pro_list li .protlt {
  border: 1px solid #ddd;
  overflow: hidden;
}
.cp_left ul.pro_list li .protlt dt {
  float: right;
  background: url(/images/jt.png) no-repeat center center;
  width: 15%;
  height: 34px;
}
.cp_left ul.pro_list li .protlt dt.on {
  background: url(/images/jt2.png) no-repeat center center;
}
.cp_left ul.pro_list li .protlt a {
  width: 78%;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cp_left ul.pro_list li .protlt a dd {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 15px;
  font-size: 14px;
}
.cp_left ul.pro_list li a {
  display: block;
  height: 34px;
  line-height: 34px;
  overflow: hidden;
}
.cp_left ul.pro_list li > a {
  margin: 0 6%;
}
.cp_left ul.pro_list li div {
  margin: 0 6%;
}
.cp_left ul.pro_list li .protlt:hover {
  color: #273e82;
  border: 1px solid #273e82;
}
.cp_left ul.pro_list li .protlt_bd {
  display: none;
}
.cp_left ul.pro_list li .protlt_bd a {
  display: block;
  height: 34px;
  line-height: 34px;
  background: none;
  border: none;
  padding-left: 15px;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cp_left ul.pro_list li .protlt_bd a:hover {
  background: none;
  border: none;
  color: #1a72b1;
}
.cp_left ul.pro_list li .protlt.active {
  background: #1a72b1;
  color: #fff;
}
.cp_left ul.pro_list li .protlt.active a {
  color: #fff;
}
@media (max-width: 1110px) {
  .pro_ny {
    width: 95%;
  }
  .cp_left {
    width: 20%;
  }
  .pro_ny .pro_r {
    width: 78%;
  }
  .cp_left .left_bottom {
    width: 100%;
  }
  .cp_title {
    background: #1574b5;
    text-align: center;
  }
  .cp_text {
    padding: 0;
    margin-top: 15px;
  }
}

@media (max-width: 880px) {
  .cp_left .left_bottom {
    display: none;
  }
  .cp_title b {
    font-size: 18px;
  }
  .cp_title span {
    display: none;
  }
  .cp_text {
    padding: 6px 0 0 50px;
    margin-top: 0;
  }
  .cp_left .cp_title {
    width: 100%;
    height: 40px;
    overflow: hidden;
    zoom: 1;
    text-align: left;
    background: url(/images/short_title.png) no-repeat 20px center #1574b5;
    background-size: 20px;
  }
  .cp_title {
    width: 100%;
    height: 40px;
    overflow: hidden;
    zoom: 1;
    text-align: left;
    background: url(/images/short_title.png) no-repeat 20px center #1574b5;
    background-size: 20px;
  }
  .cp {
    padding: 20px 0;
  }
  .cp_left {
    width: 100%;
  }
  .cp_title1 {
    display: block;
    margin-bottom: 20px;
  }
  .cp_title em {
    display: block;
    margin: 6px 0;
  }
  .cp_title em a {
    color: #fff !important;
  }
  .cp_left ul.pro_list {
    display: none;
  }
  .pro_ny .pro_r {
    width: 100%;
    margin-top: 14px;
  }
  .pro_r .title {
    line-height: 40px;
    height: auto;
    min-height: 40px;
    margin-bottom: 20px;
  }
  .pro_r .title img {
    float: none;
    margin: -5px 0 0 0;
    display: inline-block;
    vertical-align: middle;
  }
  .pro_r .title span {
    vertical-align: top;
    line-height: inherit;
    display: inline-block;
  }
  .cp_left ul.pro_list li div {
    margin: 0 3%;
  }
  .pro_ny {
    min-height: auto;
  }
}
@media (max-width: 767px) {
  .cp_title b {
    font-size: 18px;
  }
  .cp_title span {
    display: none;
  }
  .cp_text {
    padding: 6px 0 0 50px;
  }
  .cp_left .cp_title {
    width: 100%;
    height: 40px;
    overflow: hidden;
    zoom: 1;
    text-align: left;
    background: url(/images/short_title.png) no-repeat 20px center #1574b5;
    background-size: 20px;
  }
  .cp_title {
    width: 100%;
    height: 40px;
    overflow: hidden;
    zoom: 1;
    text-align: left;
    background: url(/images/short_title.png) no-repeat 20px center #1574b5;
    background-size: 20px;
  }
  .cp {
    padding: 20px 0;
  }
  .cp_left {
    width: 100%;
  }
  .cp_title1 {
    display: block;
    margin-bottom: 20px;
  }
  .cp_title em {
    display: block;
    margin: 6px 0;
  }
  .cp_title em a {
    color: #fff !important;
  }
}
</style>
