<template>
  <tr>
    <td nowrap>{{index + 1 }}</td>
    <td nowrap>
      <img class="img-food mr-1" :src="sourceImage(product.image)" alt="product" />
      {{product.name}}
    </td>
    <td nowrap>{{product.price | number}}</td>
    <td style="max-width: 50px;">
      <input type="number" class="form-control" v-model="product.amount" />
    </td>
    <td nowrap>
      <textarea class="form-control" cols="30" rows="1" v-model="product.note"></textarea>
    </td>
    <td nowrap>
      <font-awesome-icon class="text-danger" icon="trash-alt" @click="deleteItemFromCart(product.id)"/>
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
  methods: {
    sourceImage(url) {
      return "/assets/images/" + url;
    },
    deleteItemFromCart(id) {
      this.$store.dispatch("cart/deleteProductInCart", id);
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  vertical-align: baseline;
}
.img-food {
  width: 50px;
}
</style>