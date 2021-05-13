<template>
  <div class="container">
    <br />

    <div class="col-md-12">
      <div class="card border shadow">
        <div class="card-header">
          Benvenuto! Ecco quello che puoi vedere con i tuoi permessi:
        </div>

        <div class="card-body">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users.data" :key="user.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
              </tr>
            </tbody>
          </table>
          <pagination
            :data="users"
            @pagination-change-page="getResults"
          ></pagination>
          <a href="#/login">
            <input type="button" value="Logout" class="btn btn-outline-danger" />
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
      users: {},
      id: "",
      name: "",
      email: "",
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults(page = 1) {
      axios.get("all_users?page=" + page).then((response) => {
        console.log(response.data);
        this.users = response.data;
      });
    },
  },
};
</script>
