<template>
  <div class="flex-grow-1 main-section">
    <v-select :options="options"></v-select>
    <div class="table-responsive-xl mt-3">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
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
}
</style>
