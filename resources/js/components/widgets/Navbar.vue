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
      <div class="user d-flex align-items-center justify-content-end">
        <img class="img-avatar img-thumbnail" src="/assets/images/default-avatar.jpg" alt="avatar" />
        <p class="mb-0 ml-3 name">Hi, Thanh Tung</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-container {
  border-bottom: 2px white solid;
  .user-section {
    .user {
      cursor: pointer;
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