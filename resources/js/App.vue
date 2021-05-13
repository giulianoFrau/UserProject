<!-- App.vue -->
<template>
  <div>
    <Header v-if="!$route.meta.hideHeader" />
    <HeaderUser v-if="!$route.meta.hideHeaderUser" />
    <div id="wrapper">
      <Sidebar v-if="!$route.meta.hideNavbar" />
      <div id="content-wrapper">
        <router-view></router-view>
        <!-- container-fluid div Replaced by router-view -->
        <br />
        <br />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderUser from "./components/HeaderUser.vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    HeaderUser,
    Header,
    Sidebar,
    Footer,
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#fff";
  },
};
</script>