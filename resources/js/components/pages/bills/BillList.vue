<template>
  <div class="flex-grow-1 main-section d-flex flex-column">
    <v-select :options="options" placeholder="Please choose your food"></v-select>
    <div class="flex-grow-1 table-responsive-xl mt-3">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Amount</th>
            <th>Price (VNĐ)</th>
            <th>Customer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <img class="img-food mr-1" src="/assets/images/default-product.png" alt="product"> Banana
            </td>
            <td>1</td>
            <td>9000</td>
            <td>Mountain</td>
            <td>
              <a>Edit</a> |
              <a>Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["foo", "bar", "baz"]
    };
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  > * {
    background-color: white;
  }
  .table th, .table td {
    vertical-align: baseline;
  }
  .img-food {
    width: 50px;
  }
}
</style>
