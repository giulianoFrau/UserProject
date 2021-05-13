<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card border shadow">
          <div class="card-header">Registrati :</div>

          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name" required
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Inserisci un nome per il tuo account"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="email" required
                  id="exampleInputPassword1"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="password" required
                  id="exampleInputPassword1"
                  placeholder="Inserisci la tua Password"
                />
              </div>

              <button
                type="submit"
                  :disabled="!name ||!email || !password"
                @click.prevent="saveUser"
                class="btn btn-outline-success"
              >
                Registrati
              </button>
              <p>* Se non riesci ad andare avanti, il tuo nome o la tua email esistono già</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Router from "../router.js";
export default {
  data() {
    return {
      users: {},
      id: "",
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    saveUser() {
      axios
        .post("save_user", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
           this.$fire({  
            text: "Registazione completata!",
            type: "success",
            timer: 1500,
          })
          Router.push({ name: "login" });
        });
    },
  },
};
</script>
