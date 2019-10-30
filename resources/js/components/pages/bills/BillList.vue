<template>
  <div class="flex-grow-1 main-section d-flex flex-column">
    <v-select :options="options" placeholder="Please choose your food"></v-select>
    <div class="flex-grow-1 table-responsive-xl mt-3 bill-list">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th class="sticky-top bg-white border-top-none">#</th>
            <th class="sticky-top bg-white border-top-none">Food</th>
            <th class="sticky-top bg-white border-top-none">Amount</th>
            <th class="sticky-top bg-white border-top-none">Price (VNĐ)</th>
            <th class="sticky-top bg-white border-top-none">Customer</th>
            <th class="sticky-top bg-white border-top-none">Note</th>
            <th class="sticky-top bg-white border-top-none">Actions</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem v-for="(order, index) in orders" :key="order.id" :order="order" :index="index" :bill_id="bill.id"></OrderItem>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import OrderItemVue from "../auth/orders/OrderItem.vue";
export default {
  components: {
    OrderItem: OrderItemVue
  },
  data() {
    return {
      options: ["foo", "bar", "baz"]
    };
  },
  computed: {
    bill() {
      return this.$store.getters["bill/getBillToday"];
    },
    orders() {
      return this.$store.getters["bill/getOrdersToday"];
    }
  },
  methods: {
    fetchBillToday() {
      this.$store
        .dispatch("bill/fetchBillToday")
        .then(response => {})
        .catch(error => {});
    }
  },
  created() {
    this.fetchBillToday();
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  > * {
    background-color: white;
  }
  .bill-list {
    height: 0;
    overflow: auto;
    .table th,
    .table td {
      vertical-align: baseline;
    }
  }
  .img-food {
    width: 50px;
  }
}
</style>
