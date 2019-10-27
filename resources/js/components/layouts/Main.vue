<template>
  <div class="container-fluid row ml-0 mr-0 pl-0 pr-0 h-100">
    <Menu></Menu>
    <div class="main col-12 col-md-7 pl-0 pr-0">
      <div class="h-100 p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MenuVue from "./Menu.vue";
export default {
  components: {
    Menu: MenuVue
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 65%;
}

@media only screen and (min-width: 768px) {
  .main {
    height: 100%;
  }
}
</style>