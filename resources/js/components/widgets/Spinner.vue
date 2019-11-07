<template>
  <div v-if="showSpinner" class="example-loading-shade">
    <div class="loading-popup d-flex justify-content-center flex-column">
      <div class="spinner-overlay d-flex justify-content-center">
        <div>
          <div class="lds-css ng-scope">
            <div class="lds-spin">
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../../packages/spinner";
export default {
  data() {
    return {
      showSpinner: false
    };
  },
  methods: {
    show() {
      this.showSpinner = true;
    },
    hide() {
      this.showSpinner = false;
    }
  },
  beforeMount() {
    Spinner.EventBus.$on("show", () => {
      this.show();
    });
    Spinner.EventBus.$on("hide", () => {
      this.hide();
    });
  }
};
</script>

<style lang="scss" scoped>
.example-loading-shade {
  position: fixed;
  bottom: 0;
  z-index: 2020;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
}
.loading-popup {
  box-sizing: content-box;
  height: 100%;
}
@keyframes lds-spin {
  0% {
    opacity: 1;
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-webkit-keyframes lds-spin {
  0% {
    opacity: 1;
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
.lds-spin {
  position: relative;
}
.lds-spin div > div {
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #212529;
  -webkit-animation: lds-spin 1s linear infinite;
  animation: lds-spin 1s linear infinite;
}
.lds-spin div:nth-child(1) > div {
  left: 144px;
  top: 84px;
  -webkit-animation-delay: -0.875s;
  animation-delay: -0.875s;
}
.lds-spin > div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transform-origin: 160px 100px;
  transform-origin: 160px 100px;
}
.lds-spin div:nth-child(2) > div {
  left: 126.42640685999999px;
  top: 126.42640685999999px;
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.lds-spin > div:nth-child(2) {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 142.42640686px 142.42640686px;
  transform-origin: 142.42640686px 142.42640686px;
}
.lds-spin div:nth-child(3) > div {
  left: 84px;
  top: 144px;
  -webkit-animation-delay: -0.625s;
  animation-delay: -0.625s;
}
.lds-spin > div:nth-child(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: 100px 160px;
  transform-origin: 100px 160px;
}
.lds-spin div:nth-child(4) > div {
  left: 41.57359314px;
  top: 126.42640685999999px;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-spin > div:nth-child(4) {
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-transform-origin: 57.57359314px 142.42640686px;
  transform-origin: 57.57359314px 142.42640686px;
}
.lds-spin div:nth-child(5) > div {
  left: 24px;
  top: 84px;
  -webkit-animation-delay: -0.375s;
  animation-delay: -0.375s;
}
.lds-spin > div:nth-child(5) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-transform-origin: 40px 100px;
  transform-origin: 40px 100px;
}
.lds-spin div:nth-child(6) > div {
  left: 41.57359314px;
  top: 41.57359314px;
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.lds-spin > div:nth-child(6) {
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
  -webkit-transform-origin: 57.57359314px 57.57359314px;
  transform-origin: 57.57359314px 57.57359314px;
}
.lds-spin div:nth-child(7) > div {
  left: 84px;
  top: 24px;
  -webkit-animation-delay: -0.125s;
  animation-delay: -0.125s;
}
.lds-spin > div:nth-child(7) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-transform-origin: 100px 40px;
  transform-origin: 100px 40px;
}
.lds-spin div:nth-child(8) > div {
  left: 126.42640685999999px;
  top: 41.57359314px;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.lds-spin > div:nth-child(8) {
  -webkit-transform: rotate(315deg);
  transform: rotate(315deg);
  -webkit-transform-origin: 142.42640686px 57.57359314px;
  transform-origin: 142.42640686px 57.57359314px;
}
.lds-spin div:nth-child(9) > div {
  left: 144px;
  top: 84px;
  -webkit-animation-delay: 0.125s;
  animation-delay: 0.125s;
}
.lds-spin > div:nth-child(9) {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transform-origin: 160px 100px;
  transform-origin: 160px 100px;
}
.lds-spin {
  width: 100px !important;
  height: 100px !important;
  -webkit-transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
  transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
}
</style>