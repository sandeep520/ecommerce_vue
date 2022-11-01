<template>
  <div>
    <h1 class="mt-4">Your Cart....</h1>
    <h2 class="text-center mt-5">{{ ifEmpty }}</h2>
    <table v-if="cart" class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" v-bind:key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.title }}</td>
          <td class="cart-img">
            <img v-bind:src="item.image" />
          </td>

          <td class="d-flex">
            <button
              v-on:click.prevent="decrement(item.id)"
              class="btn btn-primary mx-2"
            >
              -
            </button>
            <p class="my-2">{{ item.quntity }}</p>
            <button
              v-on:click.prevent="increment(item.id)"
              class="btn btn-primary mx-2"
            >
              +
            </button>
          </td>

          <td>{{ Number.parseFloat(item.price * item.quntity).toFixed(2) }}</td>
          <td>{{ item.category }}</td>
          <td>
            <button @click="deleteProduct(item)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pointer">
      <button
        v-on:click="moreItem"
        style="margin-right: 15px"
        class="btn btn-primary mt-4"
      >
        Continue Shopping....
      </button>

      <!-- <router-link to="/checkout"> -->
      <button
        @click="checkout"
        style="margin-right: 15px"
        class="btn btn-primary mt-4"
      >
        Check Out....
      </button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "cart",
  props: ["addCart"],
  data() {
    return {
      count: 1,
      cart: [],
      product: "",
    };
  },

  methods: {
    deleteProduct(id) {
      let deleteCart = this.cart.indexOf(id);
      this.cart.splice(deleteCart, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    increment(id) {
      let Cart = JSON.parse(localStorage.getItem("cart"));
      let findCart = Cart.find((data) => {
        return data.id == id;
      });
      findCart.quntity++;
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(Cart));

      let updatecart = this.cart.find((data) => {
        return data.id == id;
      });
      updatecart.quntity++;
    },
    decrement(id) {
      let Cart = JSON.parse(localStorage.getItem("cart"));
      let findCart = Cart.find((data) => {
        return data.id == id;
      });
      if (findCart.quntity > 0) {
        findCart.quntity--;
      }
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(Cart));

      let updatecart = this.cart.find((data) => {
        return data.id == id;
      });
      if (updatecart.quntity > 0) {
        updatecart.quntity--;
      } else {
        this.cart.splice(updatecart, 1);
        localStorage.setItem("cart", JSON.stringify(Cart));
      }
    },
    moreItem() {
      router.push("/");
    },
    async addProduct() {
      const result = await axios.get(
        "https://fakestoreapi.com/products/" + this.$route.params.id
      );

      const { title, category, description, id, image, price } = result.data;
      const newCart = {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
        description: description,
      };
      let aa = [newCart];
      let oldCart = JSON.parse(localStorage.getItem("cart"));
      if (oldCart != null) {
        let findCart = oldCart.find((data) => {
          return data.id == newCart.id;
        });
        this.cart.push(findCart);
        oldCart.find((otherdata) => {
          if (otherdata.id != newCart.id) {
            this.cart.push(otherdata);
          }
        });
      }
    },
    checkout() {
      let user = localStorage.getItem("user");
      if (user) {
        this.$router.push({ name: "checkout" });
      } else {
        alert("Please users does not exist");
        router.push("/login");
      }
    },
  },
  mounted() {
    this.addProduct();
  },
  computed: {
    ifEmpty() {
      return this.cart.length === 0 ? "Cart is empty...." : undefined;
    },
  },
};
</script>

<style scoped>
.table {
  width: 60%;
  margin: 0 auto;
}
.cart-img img {
  width: 50px;
}
.pointer {
  position: relative;
  right: 0;
  left: 270px;
}
</style>
