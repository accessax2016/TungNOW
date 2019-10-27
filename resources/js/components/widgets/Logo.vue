<template>
  <div class="logo-container">
    <div class="logo d-flex pt-1 pb-1 pl-3 pr-3 mb-3">
      <div class="prefix">tung</div>
      <div class="suffix ml-1 pl-1 pr-1">now</div>
    </div>
    <p class="version">alpha</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo-container {
  position: relative;
  .logo {
    border: 2px white solid;
    border-radius: 10px;
    font-size: 1.25rem;
    font-weight: bold;
    .suffix {
      background-color: #f90;
      color: black;
      border-radius: 5px;
    }
  }
  .version {
    position: absolute;
    margin-bottom: 0;
    right: -46px;
    top: 26px;
    font-size: 1rem;
  }
}
</style>