<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    autocomplete="email"
                    autofocus
                    v-model="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="current-password"
                    v-model="password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      message: null
    };
  },
  methods: {
    login() {
      var oauth = {
        grant_type: "password",
        client_id: 2,
        client_secret: '1acS06uP355NjqWqA3KfEI6wPC93z318UIVnlv4M',
        // client_secret: "TgHj8DAJWDplX4ErK1cP0ASonDk6xlOcxboEbX3w",
        username: this.email,
        password: this.password
      };

      axios
        .post("/oauth/token", oauth)
        .then(response => {
          // console.log(response);
          this.$auth.setToken(
            response.data.token_type + " " + response.data.access_token,
            +response.data.expires_in * 1000 + Date.now()
          );
          this.fetchCurrentUser();
          this.$router.push({ name: "home" }).catch(() => null);
        })
        .catch(error => {
          // console.log(error);
          this.email = "";
          this.password = "";
        });
    },
    fetchCurrentUser() {
      this.$store
        .dispatch("user/fetchCurrentUser")
        .then(response => {
          if (this.email === "kim@gmail.com") {
            this.$store.dispatch("user/updateShowGiftBox");
          }
        })
        .catch(error => {
          this.$modal.showErrorModal({
            content: error.message
          });
        });
    }
  }
};
</script>

<style>
</style>