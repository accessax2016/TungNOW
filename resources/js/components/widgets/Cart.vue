<template>
  <div class="cart d-flex justify-content-between align-items-center mt-1 mb-1">
    <div>
      <button class="btn btn-primary" @click="redirectToOrder()">
        <font-awesome-icon icon="plus" />
      </button>
    </div>
    <button class="btn-cart btn" @click="openCartModal()">
      <font-awesome-icon icon="shopping-cart" />
      <span
        :class="{'invisible': !numberOfProductsInCart}"
        class="badge badge-light"
      >{{numberOfProductsInCart}}</span>
    </button>
  </div>
</template>

<script>
import OrderAddVue from "../pages/orders/OrderAdd.vue";
import CartListVue from "../pages/carts/CartList.vue";
export default {
  computed: {
    numberOfProductsInCart() {
      return this.$store.getters["cart/getProductsInCart"].length;
    },
    bill() {
      return this.$store.getters["bill/getBillToday"];
    }
  },
  methods: {
    openCartModal() {
      const params = {
        title: "Food Cart",
        content: CartListVue,
        primaryBtn: "Order",
        secondaryBtn: "Close",
        onConfirm: async res => {
          if (res) {
            for (let index = 0; index < res.length; index++) {
              const element = res[index];
              await this.addOrder(element);
            }
            this.$router.push({ name: "bills" });
          }
        }
      };
      this.$modal.showComponentModal(params);
    },
    addOrder(product) {
      return new Promise((resolve, reject) => {
        const payload = {
          order: {
            product_id: product.id,
            status_id: 3,
            bill_id: this.bill.id,
            amount: product.amount,
            note: product.note
          }
        };

        this.$store
          .dispatch("bill/fetchOrderStore", payload)
          .then(response => {
            resolve();
          })
          .catch(error => {
            this.$modal.showErrorModal({
              content: error.message
            });
            reject();
          });
      });
    },
    redirectToOrder() {
      this.$router.push({ name: "orders" });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  .btn-cart {
    font-size: 2rem;
    padding: 0;
    color: #364654;
    .badge {
      font-size: 1rem;
      top: -20px;
      right: 20px;
    }
  }
}
</style>