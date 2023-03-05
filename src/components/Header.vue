<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <div class="container">
      <div class="head-top">
        <div class="logo">
          <a href="/">
            <img src="@/assets/img/logo.png" alt="晶觅仪器">
          </a>
          <p>
          <span>备注什么类型</span>
        </p>
        </div>
        <div class="head-top-right">
          <div class="search-pro">
            <form action="url" method="GET">
              <input name="molds" type="hidden" value="product">
              <input type="text" name="word" onfocus="if(this.value=='产品搜索'){this.value='';this.style.color='#555'}" onblur="if(this.value==''){this.value='产品搜索';this.style.color='#e5e5e5'}" value="产品搜索">
              <button type="submit"><i class="iconfont"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav container hidden-xs">
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)"
        >
          <router-link :to="item.path">
            {{ item.name }}
            <span
              v-if="item.children.length > 0"
              class="glyphicon glyphicon-menu-down"
            ></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length > 0">
            <dt v-for="(i, n) in item.children" :key="n">
              <router-link :to="i.path">{{ i.name }}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img
          class="center-block"
          src="@/assets/img/logo_black.png"
          alt="logo"
        />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{ item.name }}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navBarFixed: false,
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: [],
        },
        {
          name: "产品展示",
          path: "/service",
          children: [],
        },
        {
          name: "新闻动态",
          path: "/newsinformation",
          children: [],
        },
        {
          name: "公司介绍",
          path: "/companyintroduction",
          children: [],
        },
        {
          name: "联系我们",
          path: "/contactus",
          children: [],
        },
      ],
    };
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    },
  },
};
</script>
<style src="./header.css"  scoped></style>
<style scoped>


</style>
