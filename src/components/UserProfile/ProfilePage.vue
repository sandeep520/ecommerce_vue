<template>
  <div class="card container d-flex w-50 mt-3">
    <div v-for="item in profile" :key="item.id" class="card-body">
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="Admin"
            class="rounded-circle"
            width="150"
          />
          <div class="mt-3">
            <h4>{{ item.fullname }}</h4>
            <p class="text-secondary mb-1">Full Stack Developer</p>
            <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
            <router-link :to="'/editprofile/' + item.id">
              <button class="btn btn-primary">Edit Profile</button></router-link
            >
            <button class="btn btn-outline-primary mx-2">Message</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3"><h6 class="mb-0">Full Name</h6></div>
        <div class="col-sm-9 text-secondary">{{ item.fullname }}</div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-3"><h6 class="mb-0">Email</h6></div>
        <div class="col-sm-9 text-secondary">{{ item.email }}</div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-3"><h6 class="mb-0">Phone</h6></div>
        <div class="col-sm-9 text-secondary">{{ item.phone }}</div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-3"><h6 class="mb-0">Address</h6></div>
        <div class="col-sm-9 text-secondary">{{ item.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "profilepage",
  data() {
    return {
      fullname: "",
      email: "",
      address: "",
      phone: "",
      profile: [],
    };
  },
  methods: {},

  mounted() {
    let users = JSON.parse(localStorage.getItem("user"));
    this.profile.push(users);
    console.log(users);

    // let user = localStorage.getItem("user");
    // this.fullname = JSON.parse(user).fullname;
    // this.email = JSON.parse(user).email;
    // this.address = JSON.parse(user).address;
    // this.phone = JSON.parse(user).phone;
  },
};
</script>

<style scoped>

</style>
