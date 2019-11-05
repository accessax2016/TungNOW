<template>
  <div class="flex-grow-1 main-section d-flex flex-column">
    <v-select
      v-model="addNew"
      :options="products"
      label="name"
      placeholder="Please choose your food"
      @input="setSelected"
      :disabled="billDisabled"
    ></v-select>
    <div class="flex-grow-1 table-responsive-xl mt-3 bill-list">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th nowrap class="sticky-top bg-white border-top-none">#</th>
            <th nowrap class="sticky-top bg-white border-top-none">Food</th>
            <th nowrap class="sticky-top bg-white border-top-none">Amount</th>
            <th nowrap class="sticky-top bg-white border-top-none">Price (VNĐ)</th>
            <th nowrap class="sticky-top bg-white border-top-none">Customer</th>
            <th nowrap class="sticky-top bg-white border-top-none">Note</th>
            <th nowrap class="sticky-top bg-white border-top-none">Actions</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem
            v-for="(order, index) in orders"
            :key="order.id"
            :order="order"
            :index="index"
            :bill_id="bill.id"
          ></OrderItem>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import OrderItemVue from "../orders/OrderItem.vue";
export default {
  components: {
    OrderItem: OrderItemVue
  },
  data() {
    return {
      addNew: ""
    };
  },
  computed: {
    bill() {
      return this.$store.getters["bill/getBillToday"];
    },
    billDisabled() {
      return this.$store.getters["bill/getBillDisabled"];
    },
    orders() {
      return this.$store.getters["bill/getOrdersToday"];
    },
    products() {
      return this.$store.getters["product/getProductList"];
    }
  },
  methods: {
    setSelected(value) {
      this.addOrder(value.id);
    },
    addOrder(product_id) {
      const payload = {
        order: {
          product_id: product_id,
          status_id: 3,
          bill_id: this.bill.id,
          amount: 1,
          note: null
        }
      };

      this.$store
        .dispatch("bill/fetchOrderStore", payload)
        .then(response => {
          this.addNew = "";
          this.$modal.showSuccessModal({
            content: "Order successfully !!!"
          });
        })
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    }
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
    thead tr th {
      z-index: 100 !important;
    }
  }
  .img-food {
    width: 50px;
  }
}
</style>
