<template>
  <div class="card">
    <img :src="sourceImage(product.image)" class="card-img-top img-fluid" alt="product" />
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <h5 class="card-title">{{product.price | number}} VNĐ</h5>
      <p class="card-text">
        <small class="text-muted">{{product.description}}</small>
      </p>
      <button class="btn btn-primary" @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  methods: {
    sourceImage(url) {
      return "/assets/images/" + url;
    },
    addToCart(product) {
      const cart = $(".btn-cart");
      var imgtodrag = $(this.$el)
        .find("img")
        .eq(0);
      if (imgtodrag) {
        const imgclone = imgtodrag
          .clone()
          .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
          })
          .css({
            opacity: "0.5",
            position: "absolute",
            height: "200px",
            width: "200px",
            "z-index": "5000"
          })
          .appendTo($("body"))
          .animate(
            {
              top: cart.offset().top,
              left: cart.offset().left,
              width: 50,
              height: 50
            },
            1000,
            "",
            () => {
              this.$store.dispatch("cart/addProductToCart", product);
            }
          );

        imgclone.animate(
          {
            width: 0,
            height: 0
          },
          () => {
            imgclone.detach();
          }
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 199px;
  max-width: 199px;
  margin-left: 0;
}
@media only screen and (min-width: 576px) {
  .card {
    margin-bottom: 15px;
  }
}
</style>