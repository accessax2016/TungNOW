<template>
  <div class="h-100 flex-grow-1 d-flex flex-column position-relative">
    <Cart />
    <router-view />
  </div>
</template>

<script>
import CartVue from "../widgets/Cart.vue";
export default {
  components: {
    Cart: CartVue
  },
  methods: {
    fetchBillToday() {
      this.$store
        .dispatch("bill/fetchBillToday")
        .then(response => {})
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    },
    fetchProductList() {
      this.$store
        .dispatch("product/fetchProductList")
        .then(response => {})
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    }
  },
  created() {
    this.fetchBillToday();
    this.fetchProductList();
  }
};
</script>

<style>
</style>