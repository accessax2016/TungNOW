<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <img class="ciu-image d-none d-xl-block" src="/assets/images/ciu.png" alt="ciu" />
    <h1 v-if="!isProcessing" class="logan text-center">Superman TungNOW is coming !!!</h1>
    <div class="d-flex flex-column">
      <div v-if="!isProcessing" class="time-countdown">
        <flip-countdown :deadline="getDeadline"></flip-countdown>
      </div>
      <div v-else>
        <h1 class="logan">Game Over !!! TungNOW is delivering</h1>
      </div>
      <button class="btn btn-lg btn-order">
        <router-link :to="{ name: 'bills' }" class="text-white">ORDER NOW</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  components: {
    FlipCountdown
  },
  data() {
    return {
      isProcessing: false
    };
  },
  computed: {
    getTimeDeadline() {
      return {
        hours: 16,
        min: 30,
        sec: 0,
        ms: 0
      };
    },
    getDeadline() {
      const cur = new Date();
      const deadline = new Date();
      const timeDeadline = this.getTimeDeadline;
      deadline.setHours(
        timeDeadline.hours,
        timeDeadline.min,
        timeDeadline.sec,
        timeDeadline.ms
      );
      if (cur > deadline) {
        deadline.setDate(deadline.getDate() + 1);
      }
      return this.generateDeadlineString(deadline);
    }
  },
  methods: {
    generateDeadlineString(date) {
      const deadline = new Date(date);
      const string = `${deadline.getFullYear()}-${deadline.getMonth() +
        1}-${deadline.getDate()} ${deadline.getHours()}:${deadline.getMinutes()}:${deadline.getSeconds()}`;
      return string;
    }
  },
  mounted() {
    // Hide countdown days
    const timeCountdowns = document.getElementsByClassName("flip-clock__piece");
    if (timeCountdowns.length === 4) {
      timeCountdowns[0].style.display = "none";
    }

    setInterval(() => {
      const date = new Date();
      if (
        date.getHours() >= this.getTimeDeadline.hours &&
        date.getHours() <= this.getTimeDeadline.hours &&
        date.getMinutes() === this.getTimeDeadline.min
      ) {
        if (!this.isProcessing) {
          this.isProcessing = true;
          this.$store.dispatch("bill/setDisabledBill", true);
        }
      } else {
        if (this.isProcessing) {
          this.isProcessing = false;
          this.$store.dispatch("bill/setDisabledBill", false);
        }
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.btn-order {
  background-color: #cd9557;
  border-color: #cd9557;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
.ciu-image {
  width: 150px;
}
.logan {
  font-size: 1rem;
}
@media only screen and (min-width: 576px) {
  .logan {
    font-size: 2.25rem;
  }
}
a:hover {
  text-decoration: none;
}
</style>