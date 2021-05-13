<!-- Welcome.vue -->
<template>
  <div class="container-fluid">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <div>Dashboard</div>
      </li>
      <li class="breadcrumb-item active">SuperUser</li>
    </ol>
    <br />
    <br />
    <div class="row">
      <div class="col-xl-6 col-sm-12 mb-1">
        <div class="card text-white bg-primary o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-user-shield"></i>
            </div>
            <div class="mr-5">
              <p>
                L'utente amministratore di questa web application è registrato
                con il nome di: <b id="grandezza">"SuperUser"</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-sm-12 mb-1">
        <div class="card text-white bg-secondary o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="mr-5">
              <p>
                L'utente amministratore è registrato con la seguente email:
                <b id="grandezza">"admin@admin.it"</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border shadow margin">
      <i>
        <p id="scrittaHome">Info <b>SuperUser</b> e informazioni generali</p></i
      >
    </div>
    <div class="row">
      <div class="col-xl-6 col-sm-12 mb-1">
        <div class="card text-white bg-success o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="mr-5">
              <p>
                Attualmente nel nostro database sono stati registrati: <br />
                <b id="grandezza">{{ users.data.length }}</b> utenti
              </p>
            </div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#/crud">
            <span class="float-left">Vedi dettagli</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
        </div>
      </div>
      <div class="col-xl-6 col-sm-12 mb-1">
        <div class="card text-white bg-danger o-hidden h-100">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-fw fa-list"></i>
            </div>
            <div class="mr-5">
              <p>
                Attualmente nel nostro database sono stati registrati: <br />
                <b id="grandezza">{{ roles.data.length }}</b> ruoli con relativi
                permessi
              </p>
            </div>
          </div>
          <a class="card-footer text-white clearfix small z-1" href="#/role">
            <span class="float-left">Vedi dettagli</span>
            <span class="float-right">
              <i class="fas fa-angle-right"></i>
            </span>
          </a>
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
      users: {},
      id: "",
      name: "",
      email: "",
      password: "",
      nome: "",
      permessi: "",
      descrizione: "",
    };
  },
  mounted() {
    this.getRoles();
    this.getResults();
  },
  methods: {
    getRoles(page = 1) {
      axios.get("all_permissions?page=" + page).then((response) => {
        console.log(response.data);
        this.roles = response.data;
      });
    },
    getResults(page = 1) {
      axios.get("all_usersForHome?page=" + page).then((response) => {
        console.log(response.data);
        this.users = response.data;
      });
    },
  },
};
</script>
