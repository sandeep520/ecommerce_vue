<template>
  <div class="container">
    <div class="main-product mt-4 text-monospace">
      <h1>Products Details...</h1>
      <div v-if="loading" class="spinner-border m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div>
        <div class="search input-group">
          <input
            type="search"
            v-model="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <button class="cart-btn btn btn-primary">
          cart:{{ totalCart }}
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
     
      <div
        v-for="item of filterData"
        v-bind:key="item.id"
        class="col-12 card"
        style="width: 15rem"
      >
        <!-- list does not filter -->

        <router-link :to="'/productDetails/' + item.id">
          <img
            style="height: 200px"
            class="card-img-top"
            v-bind:src="item.image"
            alt="Card image cap"
          />
        </router-link>

        <div class="card-body col-md-12">
          <h5 class="card-title">
            Product Name: {{ item.title.slice(0, 15) + "..." }}
          </h5>
          <h5 class="card-title">Price: {{ item.price }}</h5>
          <h5 class="card-title">Categories: {{ item.category }}</h5>
          <button
            v-on:click="addProduct(item)"
            style="margin-right: 15px"
            class="btn btn-primary"
          >
            View Product....
          </button>
        </div>
      </div>
    </div>
 
  
    <Pagination />
    <NewsLetter />
    <Banner />

    <!-- <Cart :addCart='cart'/> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";
import Cart from "./Cart.vue";
import Header from "@/Header/Header.vue";
import Banner from "../Pages/Banner.vue";
import Pagination from "../Pagination.vue";
import NewsLetter from "../Pages/NewsLetter.vue";
Vue.use(VueAxios, axios);
export default {
  name: "Produts",
  data() {
    return {
      page: "products",
      list: [],
      cart: [],
      search: "",
      loading: false,
      totalCart: 0,
    };
  },

  mounted() {
    this.getProduct();
    this.totolCart();
  },

  methods: {
    getProduct() {
      this.loading = !false;
      this.axios.get("https://fakestoreapi.com/products").then((res) => {
        this.list = res.data;
        console.log();
        if (res.data != "") {
          this.loading = !true;
        }
      });
    },

    addProduct(item) {
      this.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      router.push("/productDetails/" + item.id);
    },

    totolCart(item) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      console.log(cart);
      this.totalCart = cart != null && cart.length > 0 ? cart.length : 0;
    }
  },
  computed: {
    filterData() {
      return this.list.filter((searchData) =>
        searchData.category.includes(this.search)
      );
    },
  },
  components: { Cart, Header, Banner, Pagination, NewsLetter, },
};
</script>

<style scoped>
.main-product {
  text-decoration: underline;
}
.card {
  margin: 5px 10px;
  border-radius: 20px;
}
.card-main {
  display: inline-flex !important;
}
.cart-btn {
  margin-left: 80%;
}
.search {
  width: 20%;
  margin: 0 60%;
  margin-bottom: -38px;
}
</style>
