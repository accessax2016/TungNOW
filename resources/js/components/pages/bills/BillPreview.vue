<template>
  <div class="flex-grow-1 main-section d-flex flex-column">
    <div class="flex-grow-1 table-responsive-xl mt-3 bill-list">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th nowrap class="sticky-top bg-white border-top-none">#</th>
            <th nowrap class="sticky-top bg-white border-top-none">Food</th>
            <th nowrap class="sticky-top bg-white border-top-none">Price (VNĐ)</th>
            <th nowrap class="sticky-top bg-white border-top-none">Amount</th>
            <th class="sticky-top bg-white border-top-none">Note</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td nowrap>{{index + 1}}</td>
            <td nowrap>{{order.product.name}}</td>
            <td nowrap>{{order.product.price | number}}</td>
            <td nowrap>{{order.amount | number}}</td>
            <td>{{order.note}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    orders() {
      return this.$store.getters["bill/getOrdersToday"].reduce((acc, cur) => {
        const index = acc.map(x => x.product.name).indexOf(cur.product.name);
        if (index === -1) {
          acc.push({
            product: cur.product,
            amount: cur.amount,
            note: cur.note ? `${cur.user.name}: ${cur.note}.` : ''
          });
        } else {
          acc[index].amount += cur.amount;
          acc[index].note += cur.note ? `${cur.user.name}: ${cur.note}` : ''
        }
        return acc;
      }, []);
    }
  },
  methods: {},
  mounted() {}
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