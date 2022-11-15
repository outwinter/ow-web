<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import GoTop from './components/GoTop.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    GoTop,
    Footer
  },
  
}
</script>

<style>
</style>
