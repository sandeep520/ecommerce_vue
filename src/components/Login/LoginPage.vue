<template>
  <div class="form mt-5">
    <div class="text-center">
      <h1>Login Page</h1>
    </div>
    <form id="signup-form" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Email <span class="text-danger">*</span></label
          >
          <input
            type="email"
            v-model.trim="$v.email.$model"
            :class="{ 'is-invalid': validationStatus($v.email) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.email.required" class="invalid-feedback">
            The email field is required.
          </div>
          <div v-if="!$v.email.email" class="invalid-feedback">
            The email is not valid.
          </div>
        </div>

        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Password <span class="text-danger">*</span></label
          >
          <input
            type="password"
            v-model.trim="$v.password.$model"
            :class="{ 'is-invalid': validationStatus($v.password) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.password.required" class="invalid-feedback">
            The password field is required.
          </div>
          <div v-if="!$v.password.minLength" class="invalid-feedback">
            You must have at least
            {{ $v.password.$params.minLength.min }} letters.
          </div>
          <div v-if="!$v.password.maxLength" class="invalid-feedback">
            You must not have greater then
            {{ $v.password.$params.maxLength.min }} letters.
          </div>
          <div class="mt-2">
            <span>Create a new Account? </span
            ><router-link to="signup">SignUp</router-link>
          </div>
        </div>
        <div class="col-12 mt-4 form-group text-center">
          <button class="btn btn-primary btn-lg col-4">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import router from "@/router";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      id: 1,
      email: "",
      password: "",
      users: [],
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },

  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    async submit() {
      this.$v.$touch();
      if (this.email && this.password) {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user", JSON.stringify(result.data[0]));
          alert("Login is Successfully....");
          router.push("/");
        }
        console.log(result);
        // this.users.push({
        //   id: this.id++,
        //   email: this.email,
        //   password: this.password,
        // });
        // alert("login successfully");
        // router.push('/')
        // localStorage.setItem("name", JSON.stringify(this.users));
        // console.log(this.users,"users")
      } else {
        alert("Please fill the form");
      }
    },
    mounted() {
      let user = localStorage.getItem("user");
      if (user) {
        router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.form {
  text-align: start;
  width: 40%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 5px 13px 21px #888888;
  border-radius: 25px;
}
</style>
