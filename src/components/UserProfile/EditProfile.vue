<template>
  <div class="card container w-50 text-start mt-5 pb-4">
    <div>
        <h1 class="text-center">Update Your Profile...</h1>
    </div>
    <form>
      <div class="mb-3">
        <label class="form-label"> Fullname</label>
        <input type="test" v-model="test.fullname" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" v-model="test.email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" v-model="test.password" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <input type="text" v-model="test.address" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Phone</label>
        <input type="text" v-model="test.phone" class="form-control" />
      </div>

     <router-link to="/profilepage"><button type="submit" v-on:click="updateData" class="btn btn-primary">
        Submit
      </button>
    </router-link> 
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "editprofile",
  data() {
    return {
      test: [],
    };
  },
  methods: {
    async editProfile() {
      let result = await axios.get(
        "http://localhost:3000/users/" + this.$route.params.id
      );
      this.test.push(result.data);
      this.test = result.data;
      let user = JSON.parse(localStorage.getItem("user"))
      const { fullname,email,password,phone,address } = user;
      this.test.fullname = fullname,
      this.test.email = email,
      this.test.password = password,
      this.test.phone = phone,
      this.test.address = address
    },
   async updateData() {
     let data =  await axios.put("http://localhost:3000/users/" + this.$route.params.id, {
        fullname: this.test.fullname,
        email: this.test.email,
        password: this.test.password,
        phone: this.test.phone,
        address: this.test.address,
      });
      console.log(data)
    //   this.$router.push({ name: "profilepage" });
      let user = localStorage.setItem("user",JSON.stringify(this.test))
      // const { fullname,email,phone,address,contact } = result.data;
      // this.fullname
    },
  },

  mounted() {
    this.editProfile();
    
  },
};
</script>
