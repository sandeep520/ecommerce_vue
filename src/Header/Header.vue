<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <img
      class="img"
      src="https://media-exp1.licdn.com/dms/image/C4E0BAQF_oWWOOQEPcA/company-logo_200_200/0/1641794888855?e=2147483647&v=beta&t=qfqgxsGNgGAMjhnstiKwuHXuPfZu7S0QFEQ3WU8_GtM"
    />
    <div class="mx-2">
      <router-link to="/">
        <h5 class="mt-2 font-weight-bold text-dark">
          Shopping Cart
        </h5></router-link
      >
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link text-dark" to="/">Home </router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link text-dark" to="/bestseller"
            >Services
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/contact"
            >Contact</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/about"
            >About
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/login"
            >Login</router-link
          >
        </li>
      </ul>
      <div class="header-login">
        <router-link to="/profilepage"
          ><i class="fa-solid fa-circle-user"></i
        ></router-link>

        <select class="drop mx-2" @change="logout($event)" style="border: none">
          <template v-if="fullname">
            <option value="volvo">{{ fullname }}</option>
            <option value="logout">Logout</option>
          </template>
          <template v-else>
            <option value="volvo">test</option>
            <option value="login">login</option>
          </template>
        </select>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      fullname: "",
    };
  },
  methods: {
    logout(event) {
      swal({ icon: "success",timer:1000 });
      console.log(event.target.value);

      if (event.target.value == "logout") {
        localStorage.clear();
        this.$router.push({ name: "login" });
      }
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.fullname = user.fullname;
  },
};
</script>

<style scoped>
.img {
  width: 40px;
  margin-left: 10px;
}
.navbar {
  background-color: #eef2f1;
}

.header-login {
  position: relative;
  right: 0px;
  left: 300px;
}
.drop {
  background-color: #e5e5e5;
}
</style>
