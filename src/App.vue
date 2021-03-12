<template>
  <div id="nav">
    <Navigation></Navigation>
  </div>
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";

import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
  components:{
    Navigation
    }
}
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
 
</style>
