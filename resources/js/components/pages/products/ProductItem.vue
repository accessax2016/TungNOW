<template>
  <tr>
    <td nowrap>{{index + 1}}</td>
    <td nowrap>
      <img class="img-food mr-1" :src="sourceImage(product.image)" alt="product" />
      {{product.name}}
    </td>
    <td nowrap>
      <div v-if="currentUser && currentUser.admin">
        <div v-if="!isEditing">{{product.price | number}}</div>
        <div v-else>
          <input type="number" class="form-control" v-model="price" />
        </div>
      </div>
      <div v-else>{{product.price | number}}</div>
    </td>
    <td>
      <div v-if="currentUser && currentUser.admin">
        <div v-if="!isEditing">{{product.description}}</div>
        <div v-else>
          <textarea class="form-control" cols="30" rows="5" v-model="description"></textarea>
        </div>
      </div>
      <div v-else>{{product.description}}</div>
    </td>
    <td nowrap>
      <div v-if="currentUser && currentUser.admin">
        <div v-if="!isEditing">
          <button class="btn btn-primary" @click="editProduct()">Edit</button>
          |
          <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
        </div>
        <div v-else>
          <button class="btn btn-primary" @click="saveEditProduct(product.id)">Save</button>
          |
          <button class="btn btn-secondary" @click="cancelEditProduct()">Cancel</button>
        </div>
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
      price: this.product.price,
      description: this.product.description,
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
    editProduct(id) {
      this.isEditing = true;
    },
    saveEditProduct(id) {
      const payload = {
        id: id,
        product: {
          name: this.name,
          price: this.price,
          description: this.description
        }
      };

      this.$store
        .dispatch("product/fetchProductUpdate", payload)
        .then(response => {
          this.cancelEditProduct();
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
    cancelEditProduct() {
      (this.name = this.product.name),
        (this.price = this.product.price),
        (this.description = this.product.description),
        (this.isEditing = false);
    },
    deleteProduct(id) {
      this.$modal.showConfirmModal({
        content: "Are you sure delete this product ?",
        onConfirm: result => {
          const payload = {
            id: id
          };
          this.$store
            .dispatch("product/fetchProductDestroy", payload)
            .then(response => {})
            .catch(error => {
              this.$modal.showErrorModal({
                content: error.message
              });
            });
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