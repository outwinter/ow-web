<template>
  <div id="app">
    <div class="affix-container">
      <el-affix target=".affix-container" :offset="0">
        <Header></Header>
      </el-affix>

      <router-view />
      <Footer></Footer>
      <GoTop></GoTop>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GoTop from "./components/GoTop.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    GoTop,
    Footer,
  },
};
</script>

<style></style>
