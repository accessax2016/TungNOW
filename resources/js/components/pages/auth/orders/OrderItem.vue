<template>
  <tr>
    <th>{{index + 1}}</th>
    <td>
      <img class="img-food mr-1" :src="sourceImage(order.product.image)" alt="product" />
      {{order.product.name}}
    </td>
    <td style="max-width: 50px;">
      <div v-if="currentUser && currentUser.name === order.user.name">
        <input type="number" class="form-control" v-model="amount" />
      </div>
      <div v-else>{{order.amount}}</div>
    </td>
    <td>{{order.product.price}}</td>
    <td>{{order.user.name}}</td>
    <td>
      <div v-if="currentUser && currentUser.name === order.user.name">
        <input type="text" class="form-control" v-model="note" />
      </div>
      <div v-else>{{order.note}}</div>
    </td>
    <td>
      <div v-if="currentUser && currentUser.name === order.user.name">
        <button class="btn btn-primary" @click="editProduct(order.id)">Edit</button>
        |
        <button class="btn btn-primary" @click="deleteProduct(order.id)">Delete</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true
    },
    bill_id: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      amount: this.order.amount,
      note: this.order.note
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["user/getCurrentUser"];
    }
  },
  methods: {
    sourceImage(url) {
      return "/assets/images/" + url;
    },
    editProduct(id) {
      const payload = {
        id: id,
        order: {
          product_id: this.order.product.id,
          status_id: 3,
          bill_id: this.bill_id,
          amount: this.amount,
          note: this.note
        }
      };

      this.$store
        .dispatch("bill/fetchOrderUpdate", payload)
        .then(response => {})
        .catch(error => {});
    },
    deleteProduct(id) {
      const payload = {
        id: id
      };
      this.$store
        .dispatch("bill/fetchOrderDestroy", payload)
        .then(response => {})
        .catch(error => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.img-food {
  width: 50px;
}
td {
  vertical-align: baseline;
}
</style>