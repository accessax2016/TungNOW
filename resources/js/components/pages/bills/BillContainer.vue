<template>
  <div class="flex-grow-1 d-flex flex-column">
    <component :is="currentView"></component>
    <div class="mt-3 d-flex justify-content-end">
      <button v-if="indexView === 1" class="btn btn-primary" @click="changeToBillPreview()">Preview</button>
      <button v-if="indexView === 2" class="btn btn-primary" @click="changeToBillList()">Bill</button>
    </div>
  </div>
</template>

<script>
import BillListVue from "./BillList.vue";
import BillPreviewVue from "./BillPreview.vue";
export default {
  components: {
    BillList: BillListVue,
    BillPreview: BillPreviewVue
  },
  data() {
    return {
      currentView: BillListVue,
      indexView: 1
    };
  },
  methods: {
    fetchBillToday() {
      this.$store
        .dispatch("bill/fetchBillToday")
        .then(response => {})
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    },
    fetchProductList() {
      this.$store
        .dispatch("product/fetchProductList")
        .then(response => {})
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    },
    changeToBillPreview() {
      this.currentView = BillPreviewVue;
      this.indexView = 2;
    },
    changeToBillList() {
      this.currentView = BillListVue;
      this.indexView = 1;
    }
  },
  created() {
    this.fetchBillToday();
    this.fetchProductList();
  }
};
</script>

<style>
</style>