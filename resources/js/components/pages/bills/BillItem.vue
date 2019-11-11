<template>
  <tr>
    <td nowrap>{{index + 1}}</td>
    <td nowrap>
      <img class="img-food mr-1" :src="sourceImage(order.product.image)" alt="product" />
      {{order.product.name}}
    </td>
    <td nowrap>{{order.product.price | number}}</td>
    <td style="max-width: 50px;">
      <div v-if="currentUser && currentUser.name === order.user.name">
        <div v-if="!isEditing">{{amount | number}}</div>
        <div v-else>
          <input type="number" class="form-control" v-model="amount" />
        </div>
      </div>
      <div v-else>{{order.amount | number}}</div>
    </td>
    <td nowrap>{{order.user.name}}</td>
    <td>
      <div v-if="currentUser && currentUser.name === order.user.name">
        <div v-if="!isEditing">{{note}}</div>
        <div v-else>
          <textarea class="form-control" cols="30" rows="1" v-model="note"></textarea>
        </div>
      </div>
      <div v-else>{{order.note}}</div>
    </td>
    <td nowrap>
      <div v-if="currentUser && currentUser.name === order.user.name">
        <div v-if="!isEditing">
          <button class="btn btn-primary" @click="editOrder()">Edit</button>
          |
          <button class="btn btn-danger" @click="deleteOrder(order.id)">Delete</button>
        </div>
        <div v-else>
          <button class="btn btn-primary" @click="saveEditOrder(order.id)">Save</button>
          |
          <button class="btn btn-secondary" @click="cancelEditOrder()">Cancel</button>
        </div>
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
      note: this.order.note,
      isEditing: false
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
    editOrder() {
      this.isEditing = true;
    },
    saveEditOrder(id) {
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
          this.cancelEditOrder();
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
    cancelEditOrder() {
      this.amount = this.order.amount;
      this.note = this.order.note;
      this.isEditing = false;
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