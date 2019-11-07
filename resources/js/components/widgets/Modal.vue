<template>
  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalLabel"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <template v-if="!isRenderComponent">{{content}}</template>
          <template v-else>
            <component :is="content"></component>
          </template>
        </div>
        <div class="modal-footer">
          <button
            v-if="secondaryBtn"
            type="button"
            class="btn btn-secondary"
            @click="onSecondaryButton()"
          >{{secondaryBtn}}</button>
          <button
            v-if="primaryBtn"
            type="button"
            class="btn btn-primary"
            @click="onPrimaryButton()"
          >{{primaryBtn}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../../packages/modal";
export default {
  data() {
    return {
      title: "Title",
      content: "Content",
      primaryBtn: "Primary Button",
      secondaryBtn: "Secondary Button",
      onConfirm: {},
      isRenderComponent: false
    };
  },
  methods: {
    show() {
      $("#modal").modal("show");
    },
    hide() {
      $("#modal").modal("hide");
    },
    showComponentModal(params) {
      this.isRenderComponent = true;
      this.title = params.title || "Component Title";
      this.content = params.content || null;
      this.primaryBtn = params.primaryBtn || "Save";
      this.secondaryBtn = params.secondaryBtn || "Cancel";
      this.onConfirm = params.onConfirm || {};
      $("#modal").modal("show");
    },
    showSuccessModal(params) {
      this.title = params.title || "Successful Message";
      this.content =
        params.content || "This action was successfully performed.";
      this.primaryBtn = params.primaryBtn || "OK";
      this.secondaryBtn = params.secondaryBtn || "";
      this.onConfirm = params.onConfirm || {};
      $("#modal").modal("show");
    },
    showErrorModal(params) {
      this.title = params.title || "Error Message";
      this.content =
        params.content || "Something bad happened: please try later.";
      this.primaryBtn = params.primaryBtn || "";
      this.secondaryBtn = params.secondaryBtn || "Close";
      this.onConfirm = params.onConfirm || {};
      $("#modal").modal("show");
    },
    showConfirmModal(params) {
      this.title = params.title || "Confirm Message";
      this.content = params.content || "Are you sure about this action ?";
      this.primaryBtn = params.primaryBtn || "Yes";
      this.secondaryBtn = params.secondaryBtn || "No";
      this.onConfirm = params.onConfirm || {};
      $("#modal").modal("show");
    },
    onPrimaryButton() {
      if (typeof this.onConfirm === "function") {
        this.onConfirm(true);
        this.hide();
      } else {
        this.hide();
      }
    },
    onSecondaryButton() {
      if (typeof this.onConfirm === "function") {
        this.onConfirm(false);
        this.hide();
      } else {
        this.hide();
      }
    }
  },
  beforeMount() {
    Modal.EventBus.$on("showComponentModal", params => {
      this.showComponentModal(params);
    });
    Modal.EventBus.$on("showSuccessModal", params => {
      this.showSuccessModal(params);
    });
    Modal.EventBus.$on("showErrorModal", params => {
      this.showErrorModal(params);
    });
    Modal.EventBus.$on("showConfirmModal", params => {
      this.showConfirmModal(params);
    });
  },
  mounted() {
    // $("#modal").modal("hide");
    $("#modal").on("hidden.bs.modal", e => {
      this.isRenderComponent = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.modal {
  text-align: center;
  padding: 0 !important;
}

.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}

.modal-dialog {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}

@media only screen and (min-width: 576px) {
  .modal-dialog {
    min-width: 500px !important;
  }
}
.modal-footer {
  padding: 0.3rem 1rem;
}
</style>