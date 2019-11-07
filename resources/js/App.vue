<template>
  <div class="h-100-vh">
    <Background></Background>
    <Main></Main>
    <Modal />
    <Spinner />
  </div>
</template>

<script>
import BackgroundVue from "./components/layouts/Background.vue";
import MainVue from "./components/layouts/Main.vue";
import SpinnerVue from './components/widgets/Spinner.vue';

export default {
  components: {
    Background: BackgroundVue,
    Main: MainVue
  },
  created() {
    this.$auth.setAuthorizationHeader();
  }
};
</script>

<style lang="scss">
body {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: "Open Sans", sans-serif;
}
.h-100-vh {
  height: 100vh;
}
</style>