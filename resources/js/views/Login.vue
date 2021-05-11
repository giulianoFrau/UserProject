<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card border shadow">
          <div class="card-header">Login :</div>

          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
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
                  placeholder="Inserisci la tua password"
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
            <br>
            <a href="#/register">Nuovo utente? clicca qui per registrarti</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Router from '../router.js';
export default {

 data() {
    return {
   
      email: "",
      password:"",
    };
  },
  mounted() {
 
  },
   methods: {
login() {

    axios
      .post("login", {
        email: this.email,
        password: this.password,
        
      })
     .then((response) => {
       
          Router.push({ name: "userPage" });
        
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  }
  
},
};
</script>
