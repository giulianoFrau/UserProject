<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card border shadow">
          <div class="card-header">Inserisci un nuovo Utente : </div>

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
                  placeholder="Inserisci un nome per il tuo account"
                />
               
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  id="exampleInputPassword1"
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
                  placeholder="Inserisci la tua Password"
                />
              </div>

              <button
                type="submit"
                @click.prevent="saveUser"
                class="btn btn-outline-success"
              >
                Registrati
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card border shadow">
          <div class="card-header">Lista Utenti :</div>

          <div class="card-body">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                 <th scope="col">Modifica</th>
                  <th scope="col">Elimina</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user,index) in users.data" :key="user.id">
                  <th scope="row">{{ index+1 }}</th>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      @click="editUser(user.id)"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Edit
                    </button>
                  </td>

<td>
                     <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="deleteUser(user.id)"
                     
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination
              :data="users"
              @pagination-change-page="getResults"
            ></pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modifica</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editname"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
                
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editemail"
                  id="exampleInputPassword1"
                  placeholder="email"
                />
              </div>

              <button
                type="submit"
                @click.prevent="updateUser"
               class="btn btn-outline-success"
                data-dismiss="modal"
              >
                Conferma Modifica
              </button>
              <button type="button" class="btn btn-outline-danger" data-dismiss="modal">
                Chiudi Finestra
              </button>
            </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {},
      id: "",
      name: "",
      email: "",
      password: "",
      editname: "",
      editemail: "",
      
      };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    saveUser() {
      axios
        .post("save_user", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.name = "";
          this.email = "";
          this.password = "";
          this.getResults();
        });
    },

    getResults(page = 1) {
      axios.get("all_users?page=" + page).then((response) => {
        console.log(response.data);
        this.users = response.data;
      });
    },

    editUser(id) {
      axios.get("edit_user/" + id).then((response) => {
        this.id = response.data.id;
        this.editname = response.data.name;
        this.editemail = response.data.email;
   
      });
    },

    updateUser() {
      axios
        .put("update_user", {
          id: this.id,
          name: this.editname,
          email: this.editemail,
        })
        .then((response) => {
          this.getResults();
        });
    },

    deleteUser(id){
    axios.delete("delete_user/" + id)
     .then((response) => {
          this.getResults();
        });
    }
  },
};
</script>
