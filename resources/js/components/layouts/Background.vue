<template>
  <div>
    <!-- <video
      class="background-video"
      src="/assets/main.mp4"
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
    ></video> -->
    <img class="background-image" src="/assets/background-image.webp" alt="background-image">
    <div class="background-overlay"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.background-image {
  position: fixed;
  width: 100%;
  height: 100%;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #cd9557;
  opacity: 0.7;
  z-index: 1;
}
</style>