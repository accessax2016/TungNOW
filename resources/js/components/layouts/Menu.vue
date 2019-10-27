<template>
  <div class="menu col-12 col-md-5 pl-0 pr-0">
    <div class="background-menu"></div>
    <div class="content-menu p-3 d-flex flex-column justify-content-between align-items-center">
      <Logo></Logo>
      <TimeCountdown></TimeCountdown>
      <div class="contact">Lorem ipsum dolor sit.</div>
    </div>
  </div>
</template>

<script>
import TimeCountdownVue from '../widgets/TimeCountdown.vue';
import LogoVue from '../widgets/Logo.vue';

export default {
    components: {
        Logo: LogoVue,
        TimeCountdown: TimeCountdownVue
    }
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  height: 30%;
  color: white;
}

@media only screen and (min-width: 768px) {
  .menu {
    height: 100%;
  }
}

.menu .background-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #002e66;
  opacity: 0.8;
  z-index: 1;
}

@media only screen and (min-width: 768px) {
  .menu .background-menu {
    transform: skewX(-8deg);
    transform-origin: top;
  }
}

.menu .content-menu {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 768px) {
  .menu .content-menu {
    padding-right: 80px !important;
  }
}
</style>