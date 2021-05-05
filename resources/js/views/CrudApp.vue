<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Create new user</div>

          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone elsdsddse.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  id="exampleInputPassword1"
                  placeholder="email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="password"
                  id="exampleInputPassword1"
                  placeholder="password"
                />
              </div>

              <button
                type="submit"
                @click.prevent="saveUser"
                class="btn btn-primary"
              >
                Submit
              </button>
            
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
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    saveUser() {
      axios
        .post("save_user", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => console.log(response));
    },
  },
};
</script>
