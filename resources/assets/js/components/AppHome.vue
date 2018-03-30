<template lang="html">
  <div class="">
    <toolbar></toolbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import toolbar from './Toolbar.vue';
import AppFooter from './AppFooter.vue';
import Login from './login/Login.vue';
import Signup from './login/Signup.vue';

export default {
  components: {toolbar, AppFooter,Login, Signup}
}
</script>

<style lang="css">
</style>
