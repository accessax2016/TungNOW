<template>
  <div class="container-fluid row ml-0 mr-0 pl-0 pr-0 h-100">
    <Menu />
    <div class="main col-12 col-md-7 pl-0 pr-0">
      <div class="main-content h-100 p-3">
        <div class="h-100 d-flex flex-column">
          <Navbar />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuVue from "./Menu.vue";
import NavbarVue from "../widgets/Navbar.vue";
export default {
  components: {
    Menu: MenuVue,
    Navbar: NavbarVue,
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100% - 250px);
  position: relative;
  .main-content {
    position: absolute;
    z-index: 1;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .main {
    height: 100%;
  }
}
</style>