<template>
  <div class="container">
    <div class="row justify-content-center">
    

      <div class="col-md-12">
        <div class="card border shadow">
          <div class="card-header">Lista Ruoli:</div>
          <div class="card-body">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Permessi</th>
                  <th scope="col">Descrizione</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(role, index) in roles.data" :key="role.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ role.permessi }}</td>
                  <td>{{ role.descrizione }}</td>
           
            
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
    };
  },
  mounted() {
    this.getRoles();
  },
  methods: {

    getRoles(page = 1) {
      axios.get("all_roles?page=" + page).then((response) => {
        console.log(response.data);
        this.roles = response.data;
      });
    },
  },
};
</script>



