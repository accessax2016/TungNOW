<template>
  <div class="navbar-container d-flex mb-3">
    <div class="d-flex">
      <router-link :to="{ name: 'bills' }" class="nav-link">
        <strong>HOME</strong>
      </router-link>
      <router-link :to="{ name: 'products' }" class="nav-link">
        <strong>FOOD</strong>
      </router-link>
    </div>
    <div class="user-section flex-grow-1 d-flex align-items-center justify-content-end">
      <div v-if="!currentUser" class="d-flex">
        <router-link :to="{ name: 'login' }" class="nav-link">
          <strong>LOGIN</strong>
        </router-link>
        <router-link :to="{ name: 'register' }" class="nav-link">
          <strong>REGISTER</strong>
        </router-link>
      </div>
      <div v-if="currentUser" class="user d-flex align-items-center justify-content-end">
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
    }
  },
  methods: {
    sourceImage(url) {
      return "/assets/images/" + url;
    },
    logout() {
      this.$auth.destroyToken();
      this.$store.dispatch("user/logout");
      this.$router.push({ name: "login" });
    },
    fetchCurrentUser() {
      this.$store
        .dispatch("user/fetchCurrentUser")
        .then(response => {})
        .catch(error => {});
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
        width: 50px;
      }
      .name {
        color: white;
        font-size: 1.25rem;
      }
    }
  }
  .nav-link {
    min-width: 120px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    &:hover {
      background-color: #dee2e6;
    }
    &.router-link-active {
      background-color: white;
    }
  }
}
</style>