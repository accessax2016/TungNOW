<template>
  <tr>
    <td nowrap>{{index + 1}}</td>
    <td nowrap>
      <img class="img-food mr-1" :src="sourceImage(order.product.image)" alt="product" />
      {{order.product.name}}
    </td>
    <td style="max-width: 50px;">
      <div v-if="currentUser && currentUser.name === order.user.name">
        <input type="number" class="form-control" v-model="amount" />
      </div>
      <div v-else>{{order.amount}}</div>
    </td>
    <td nowrap>{{order.product.price}}</td>
    <td nowrap>{{order.user.name}}</td>
    <td nowrap>
      <div v-if="currentUser && currentUser.name === order.user.name">
        <input type="text" class="form-control" v-model="note" />
      </div>
      <div v-else>{{order.note}}</div>
    </td>
    <td nowrap>
      <div v-if="currentUser && currentUser.name === order.user.name">
        <button class="btn btn-primary" @click="editOrder(order.id)">Edit</button>
        |
        <button class="btn btn-danger" @click="deleteOrder(order.id)">Delete</button>
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
    editOrder(id) {
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
        .then(response => {
          this.$modal.showSuccessModal({
            content: "Edit successfully !!!"
          });
        })
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    },
    deleteOrder(id) {
      this.$modal.showConfirmModal({
        content: "Are you sure delete this order ?",
        onConfirm: result => {
          if (result) {
            const payload = {
              id: id
            };
            this.$store
              .dispatch("bill/fetchOrderDestroy", payload)
              .then(response => {})
              .catch(error => {
                this.$modal.showErrorModal({
                  content: error.message
                });
              });
          }
        }
      });
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