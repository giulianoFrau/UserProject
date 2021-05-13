<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card border shadow">
          <div class="card-header">Inserisci un nuovo Ruolo :</div>

          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="nome"
                  required
                  id="nome"
                  aria-describedby="emailHelp"
                  placeholder="Inserisci il nome del ruolo"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Permessi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="permessi"
                  required
                  id="permessi"
                  aria-describedby="emailHelp"
                  placeholder="Inserisci il permesso"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Descrizione</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="descrizione"
                  required
                  id="descrizione"
                  aria-describedby="emailHelp"
                  placeholder="Inserisci la  descrizione ruolo"
                />
              </div>

              <button
                type="submit"
                :disabled="!nome || !permessi || !descrizione"
                @click.prevent="saveRole"
                class="btn btn-outline-success"
              >
                Inserisci
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="col-md-12">
      <div class="card border shadow">
        <div class="card-header">Lista Ruoli:</div>
        <div class="card-body">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ruolo</th>
                <th scope="col">Permessi</th>
                <th scope="col">Azioni</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(role, index) in roles.data" :key="role.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ role.nome }}</td>
                <td>{{ role.permessi }}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click="editRole(role.id)"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Modifica
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="deleteRole(role.id)"
                  >
                    Cancella
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <pagination
            :data="roles"
            @pagination-change-page="getRoles"
          ></pagination>
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
                <label for="exampleInputEmail1">Nome Ruolo</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editnome"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Modifica nome ruolo"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Permessi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editpermessi"
                  id="exampleInputPassword1"
                  placeholder="Modifica permessi"
                />
              </div>

              <button
                type="submit"
                @click.prevent="updateRole"
                class="btn btn-outline-success"
                data-dismiss="modal"
              >
                Conferma Modifica
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                data-dismiss="modal"
              >
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
      roles: {},
      id: "",
      nome: "",
      permessi: "",
      descrizione: "",
      editnome: "",
      editpermessi: "",
    };
  },
  mounted() {
    this.getRoles();
  },
  methods: {
    saveRole() {
      axios
        .post("save_role", {
          nome: this.nome,
          permessi: this.permessi,
          descrizione: this.descrizione,
        })
        .then((response) => {
          this.nome = "";
          this.permessi = "";
          this.descrizione = "";
          this.$fire({  
            text: "Ruolo registrato con successo!",
            type: "success",
            timer: 2500,
          })
          this.getRoles();
        });
    },
    getRoles(page = 1) {
      axios.get("all_roles?page=" + page).then((response) => {
        console.log(response.data);
        this.roles = response.data;
      });
    },

    editRole(id) {
      axios.get("edit_role/" + id).then((response) => {
        this.id = response.data.id;
        this.editnome = response.data.nome;
        this.editpermessi = response.data.permessi;
      });
    },

    updateRole() {
      axios
        .put("update_role", {
          id: this.id,
          nome: this.editnome,
          permessi: this.editpermessi,
        })
        .then((response) => {
          this.getRoles();
        });
    },

    deleteRole(id) {
      axios.delete("delete_role/" + id).then((response) => {
        this.getRoles();
        this.$fire({  
            text: "Ruolo cancellato!",
            type: "error",
            timer: 2500,
          })
      });
    },
  },
};
</script>
