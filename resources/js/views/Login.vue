<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card border shadow">
          <div class="card-header">Login :</div>

          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="exampleInputEmail1">email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="password"
                  id="exampleInputPassword1"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <button
                type="submit"
                      @click.prevent="login"
                class="btn btn-outline-success"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Router from '../router.js';
export default {
 
 name:'Login',
 data() {
    return {
   
      email: "",
      password:"",
    };
  },
  mounted() {
 
  },
  methods: {
   methods: {
login() {
  if (this.username == "" || this.password == "") {
    this.errorMessage = "Tolts ki minden mezot";
  } else {
    axios
      .post("http://127.0.0.1:8000/api/user/login", {
        username: this.username,
        password: this.password,
        remember: this.remember,
      })
      .then((response) => {
        if (response.data == 1) {
          Router.push({ name: "list" });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  }
},



},
  },
};
</script>
