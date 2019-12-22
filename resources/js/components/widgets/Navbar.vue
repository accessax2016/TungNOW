<template>
  <div class="navbar-container d-flex mb-3 flex-column flex-md-row align-items-center">
    <div v-if="currentUser" class="order-2 order-md-1 d-flex">
      <router-link :to="{ name: 'bills' }" class="nav-link">
        <strong>HOME</strong>
      </router-link>
      <router-link :to="{ name: 'products' }" class="nav-link">
        <strong>FOOD</strong>
      </router-link>
    </div>
    <div
      class="order-1 order-md-2 user-section flex-grow-1 d-flex align-items-center justify-content-end"
    >
      <div v-if="!currentUser" class="d-flex">
        <router-link :to="{ name: 'login' }" class="nav-link">
          <strong>LOGIN</strong>
        </router-link>
        <router-link :to="{ name: 'register' }" class="nav-link">
          <strong>REGISTER</strong>
        </router-link>
      </div>
      <div
        v-if="currentUser"
        class="user d-flex align-items-center justify-content-end mb-1 mb-md-0"
      >
        <button v-if="currentUser.admin" class="btn btn-primary mr-3" @click="addNewBill()">NEW BILL</button>
        <a v-if="isShowGiftBox" href="https://tung-mery-christmas.herokuapp.com" class="mr-3" target="_blank">
          <img src="/assets/images/box.png" alt="box" width="50" height="50" />
        </a>
        <div class="dropdown">
          <div
            class="d-flex align-items-center dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              class="img-avatar img-thumbnail"
              :src="sourceImage(currentUser.image)"
              alt="avatar"
            />
            <p class="mb-0 ml-3 name">Hi, {{currentUser.name}}</p>
          </div>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.getters["user/getCurrentUser"];
    },
    isShowGiftBox() {
      return this.$store.getters["user/isShowGiftBox"];
    }
  },
  methods: {
    sourceImage(url) {
      return "/assets/images/" + url;
    },
    logout() {
      this.$auth.destroyToken();
      this.$store.dispatch("user/logout");
      this.$router.push({ name: "login" }).catch(() => null);
    },
    fetchCurrentUser() {
      this.$store
        .dispatch("user/fetchCurrentUser")
        .then(response => {})
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    },
    addNewBill() {
      const payload = {
        bill: {}
      };
      this.$store
        .dispatch("bill/fetchBillStore", payload)
        .then(response => {
          this.$modal.showSuccessModal({
            content: "Add new bill successfully !!!"
          });
        })
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    }
  },
  created() {
    if (this.$auth.isAuthenticated()) {
      this.fetchCurrentUser();
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-container {
  border-bottom: 2px white solid;
  .user-section {
    .user {
      cursor: pointer;
      .dropdown-toggle::after {
        display: none;
      }
      .img-avatar {
        border-radius: 50%;
        width: 30px;
      }
      .name {
        color: white;
        font-size: 1rem;
      }
      @media only screen and (min-width: 576px) {
        .img-avatar {
          width: 50px;
        }
        .name {
          font-size: 1.25rem;
        }
      }
    }
  }
  .nav-link {
    min-width: 120px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    &:hover {
      background-color: #dee2e6;
    }
    &.router-link-active {
      background-color: white;
    }
  }
  @media only screen and (min-width: 576px) {
    .nav-link {
      min-width: 120px;
      min-height: 60px;
      font-size: 1.5rem;
    }
  }
}
</style>