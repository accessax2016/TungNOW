<template>
  <div class="h-100 flex-grow-1 d-flex flex-column overflow-auto">
    <div class="card-deck d-flex flex-wrap">
      <OrderItem class="card" v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import OrderItemVue from "./OrderItem.vue";
export default {
  components: {
    OrderItem: OrderItemVue
  },
  computed: {
    products() {
      return this.$store.getters["product/getProductList"];
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 576px) {
  .card-deck {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>