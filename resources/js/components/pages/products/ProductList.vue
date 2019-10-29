<template>
  <div class="flex-grow-1 main-section d-flex flex-column">
    <div class=" flex-grow-1 table-responsive-xl">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Price (VNĐ)</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <img class="img-food mr-1" src="/assets/images/default-product.png" alt="product" /> Banana
            </td>
            <td>9000</td>
            <td>Lorem ipsum dolor sit amet.</td>
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
export default {};
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