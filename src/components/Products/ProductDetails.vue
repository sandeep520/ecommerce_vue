<template>
  <div class="mt-4">
    <div class="icon">
      <router-link to="/"> <i class="fa fa-arrow-left fa-2x"></i></router-link>
    </div>

    <h1>Product Details...</h1>
    <div
      v-for="item in product"
      v-bind:key="item.id"
      class="container d-flex mt-5"
    >
      <div class="col-md-6 mt-5">
        <div class="zoom w-50">
          <img
            class="card-img-top img-fuild"
            v-bind:src="item.image"
            alt="Card image cap"
          />
        </div>
      </div>
      <div class="col-6 text-start mt-5">
        <h4>{{ item.title }}</h4>
        <h4 class="mt-4">{{ item.description }}</h4>
        <h5 class="mt-4">Category :- {{ item.category }}</h5>
        <h5 class="mt-4">Price :- $ {{ item.price }}</h5>
        <button
          v-on:click="addProduct(item)"
          style="margin-right: 15px"
          class="btn btn-primary mt-4"
        >
          Add to cart
        </button>
        <button
          v-on:click="moreItem"
          style="margin-right: 15px"
          class="btn btn-primary mt-4"
        >
          Continue Shopping...
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "productDetails",
  data() {
    return {
      product: [],
      cart: [],
    };
  },
  methods: {
    addProduct(item) {
      // let user = localStorage.getItem("user");
      // if (user) {

      let oldData = JSON.parse(localStorage.getItem("cart"));
      console.log(oldData);
      const { title, category, description, id, image, price } = item;
      const newCart = {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
        description: description,
        quntity: 1,
      };
      if (oldData == null) {
        localStorage.setItem("cart", JSON.stringify([newCart]));
      } else {
        let ww = JSON.parse(localStorage.getItem("cart"));
        console.log(ww);
        let check = ww.find((old) => {
          return old.id == item.id;
        });
        console.log(check);
        if (check != "" || check == undefined) {
          ww.push(newCart);
          console.log(ww);
          localStorage.setItem("cart", JSON.stringify(ww));
        }
      }
      router.push("/cart/" + this.$route.params.id);
      swal({ icon: "success",timer:1000 });
      // }
      // else {
      //     alert("Please users does not exist");
      //     router.push("/login");
      // }
    },
    moreItem() {
      router.push("/");
    },
    addToCart(item) {
      this.cart.push(item);
      router.push("/cart/" + item.id);
    },
  },
  async mounted() {
    const result = await axios.get(
      "https://fakestoreapi.com/products/" + this.$route.params.id
    );
    this.product.push(result.data);
  },
};
</script>

<style scoped>
.icon {
  margin-right: 75%;
}
.zoom :hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
