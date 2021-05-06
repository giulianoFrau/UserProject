<template>
  <div class="container">
    <div class="row justify-content-center">
    

     

      <div class="col-md-12">
        <div class="card">
          <div class="card-header">All user</div>

          <div class="card-body">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users.data" :key="user.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="editUser(user.id)"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Edit
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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone elsdsddse.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editemail"
                  id="exampleInputPassword1"
                  placeholder="email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editpassword"
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
      users: {},
      name: "",
      email: "",
      password: "",
      editname: "",
      editemail: "",
      editpassword:""
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

    editUser(id){
        axios.get('edit_user/'+id)
        .then(response => {
          console.log(response);
          this.editname=response.data.name;
          this.editemail=response.data.email;
          this.editpassword=response.data.password;
        });

    }


  },
};
</script>
