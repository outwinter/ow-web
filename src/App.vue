<template>
  <div id="app">
    <div class="affix-container">
      <el-affix target=".affix-container" :offset="0">
        <HeaderComponent></HeaderComponent>
      </el-affix>

      <router-view />
      <FooterComponent></FooterComponent>
      <GoTopComponent></GoTopComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import GoTopComponent from "./components/GoTop.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    GoTopComponent,
    FooterComponent,
  },
};
</script>

<style></style>
