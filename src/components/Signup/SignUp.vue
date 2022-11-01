<template>
  <div class="form mt-5">
    <div class="text-center">
      <h1>Sign Up Page</h1>
    </div>
    <form id="signup-form" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Full Name <span class="text-danger">*</span></label
          >
          <input
            type="text"
            v-model.trim="$v.fullname.$model"
            :class="{ 'is-invalid': validationStatus($v.fullname) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.fullname.required" class="invalid-feedback">
            The full name field is required.
          </div>
        </div>
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
            >Address <span class="text-danger">*</span></label
          >
          <input
            type="text"
            v-model.trim="$v.address.$model"
            :class="{ 'is-invalid': validationStatus($v.address) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.address.required" class="invalid-feedback">
            The address field is required.
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
          
        </div>

        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >phone <span class="text-danger">*</span></label
          >
          <input
            type="phone"
            v-model.trim="$v.phone.$model"
            :class="{ 'is-invalid': validationStatus($v.phone) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.phone.required" class="invalid-feedback">
            The phone number field is required.
          </div>
          <!-- <div v-if="!$v.phone.minLength" class="invalid-feedback">
            You must have at least
            {{ $v.phone.$params.minLength.min }} letters.
          </div>
          <div v-if="!$v.phone.maxLength" class="invalid-feedback">
            You must not have greater then
            {{ $v.phone.$params.maxLength.min }} letters.
          </div> -->
        </div>
        
        <div class="mt-2">
            <span>You have already Account? </span
            ><router-link to="/login">Login</router-link>
          </div>

        <div class="col-12 mt-4 form-group text-center">
          <button class="btn btn-primary btn-lg col-4">Sign Up</button>
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
  name: "SignupForm",
  data() {
    return {
      id: 1,
      fullname: "",
      email: "",
      address: "",
      password: "",
      phone:"",
      users: [],
    };
  },
  validations: {
    fullname: { required },
    address: { required },
    email: { required, email },
    phone: {required },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },

  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    async submit() {
      this.$v.$touch();
      if (this.fullname && this.email && this.password && this.address && this.phone) {
        let result = await axios.post("http://localhost:3000/users", {
          id:this.id,
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          address: this.address,
          phone: this.phone
        });
        console.log(result.data);
        alert("SignUp successfully");
        router.push("/login");
        localStorage.setItem("user", JSON.stringify(result.data));
      } else {
        alert("Please fill the form");
      }
    },
    mounted() {
      let user = localStorage.getItem("user");
      if (user) {
        router.push("/login");
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
