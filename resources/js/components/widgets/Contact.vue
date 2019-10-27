<template>
  <div class="contact d-none d-md-block">
    <p>In addition to cash payment on delivery, we also support the payment methods below:</p>
    <div class="d-flex align-items-center">
      <img class="payment-method-img" src="/assets/images/momo.jpg" alt="momo" />
      <div class="ml-3">
        <p class="mb-0">Nguyễn Hoàng Thanh Tùng</p>
        <p class="mb-0">0961950070</p>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <img class="payment-method-img" src="/assets/images/butt.png" alt="butt" />
      <div class="ml-3">
        <p class="mb-0">Apply only some person</p>
        <p class="mb-0">Please contact privately</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  align-self: flex-start;
  width: 90%;
  .payment-method-img {
    width: 50px;
  }
}
</style>