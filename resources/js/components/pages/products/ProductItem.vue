<template>
  <tr>
    <td nowrap>{{index + 1}}</td>
    <td nowrap>
      <img class="img-food mr-1" :src="sourceImage(product.image)" alt="product" />
      {{product.name}}
    </td>
    <td nowrap>
      <div v-if="currentUser && currentUser.admin">
        <input type="number" class="form-control" v-model="price" />
      </div>
      <div v-else>{{product.price}}</div>
    </td>
    <td nowrap>{{product.description}}</td>
    <td nowrap>
      <div v-if="currentUser && currentUser.admin">
        <button class="btn btn-primary" @click="editProduct(product.id)">Edit</button>
        |
        <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      name: this.product.name,
      price: this.product.price
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
        product: {
          name: this.name,
          price: this.price
        }
      };

      this.$store
        .dispatch("product/fetchProductUpdate", payload)
        .then(response => {})
        .catch(error => {});
    },
    deleteProduct(id) {
      const payload = {
        id: id
      };
      this.$store
        .dispatch("product/fetchProductDestroy", payload)
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