<template>
  <div class="cart-list">
    <table v-if="products.length > 0" class="table table-striped table-hover table-responsive-xl">
      <thead>
        <tr>
          <th nowrap class="sticky-top bg-white border-top-none">#</th>
          <th nowrap class="sticky-top bg-white border-top-none">Food</th>
          <th nowrap class="sticky-top bg-white border-top-none">Price (VNĐ)</th>
          <th nowrap class="sticky-top bg-white border-top-none">Amount</th>
          <th nowrap class="sticky-top bg-white border-top-none">Note</th>
          <th nowrap class="sticky-top bg-white border-top-none"></th>
        </tr>
      </thead>
      <tbody>
        <CartItem
          v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          :index="index"
        />
      </tbody>
    </table>
    <h5 v-else class="text-center">No food in cart</h5>
  </div>
</template>

<script>
import CartItemVue from "./CartItem.vue";
export default {
  components: {
    CartItem: CartItemVue
  },
  computed: {
    products() {
      return this.$store.getters["cart/getProductsInCart"].reduce(
        (acc, cur) => {
          const index = acc.map(x => x.id).indexOf(cur.id);
          if (index === -1) {
            acc.push({
              ...cur,
              amount: 1,
              note: ""
            });
          } else {
            acc[index].amount += 1;
          }
          return acc;
        },
        []
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-list {
  overflow: auto;
  .table th,
  .table td {
    vertical-align: baseline;
  }
  thead tr th {
    z-index: 100 !important;
  }
}
</style>