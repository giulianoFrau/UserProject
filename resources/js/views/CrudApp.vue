<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
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

      <div class="col-md-6">
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
                <tr v-for="(user,index) in users.data" :key="user.id">
                  <th scope="row">{{index+1}}</th>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td>edit | delete</td>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      users:{}, 
      name: "",
      email: "",
      password: "",
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
      axios.get('all_users?page=' + page).then((response) => {
        console.log(response.data);
        this.users = response.data;
      });
    },
  },
};
</script>
