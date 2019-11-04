<template>
  <div class="flex-grow-1 main-section d-flex flex-column">
    <form class="d-flex mb-3 bg-transparent" @submit.prevent="addNewProduct()">
      <input type="text" class="form-control" placeholder="Add new food here" v-model="new_product" />
      <button type="submit" class="btn btn-primary ml-3">ADD</button>
    </form>
    <div class="flex-grow-1 table-responsive-xl product-list">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th class="sticky-top bg-white border-top-none">#</th>
            <th class="sticky-top bg-white border-top-none">Food</th>
            <th class="sticky-top bg-white border-top-none">Price (VNĐ)</th>
            <th class="sticky-top bg-white border-top-none">Description</th>
            <th class="sticky-top bg-white border-top-none">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ProductItem
            v-for="(product, index) in products"
            :key="product.id"
            :product="product"
            :index="index"
          ></ProductItem>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductItemVue from "./ProductItem.vue";
export default {
  components: {
    ProductItem: ProductItemVue
  },
  data() {
    return {
      new_product: ""
    };
  },
  computed: {
    products() {
      return this.$store.getters["product/getProductList"];
    }
  },
  methods: {
    fetchProductList() {
      this.$store
        .dispatch("product/fetchProductList")
        .then(response => {})
        .catch(error => {});
    },
    addNewProduct() {
      if (!this.new_product) {
        return;
      }
      const payload = {
        product: {
          name: this.new_product,
          price: 0
        }
      };
      this.$store
        .dispatch("product/fetchProductStore", payload)
        .then(response => {
          this.new_product = "";
        })
        .catch(error => {});
    }
  },
  created() {
    this.fetchProductList();
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  > * {
    background-color: white;
  }
  .product-list {
    height: 0;
    overflow: auto;
    .table th,
    .table td {
      vertical-align: baseline;
    }
  }
}
</style>