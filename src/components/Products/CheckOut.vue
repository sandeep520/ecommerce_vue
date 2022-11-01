<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card p-5">
      <div>
        <h4 class="heading">Check Out..</h4>
        <p class="text">
          Please make the payment to start enjoying all the Products of our
          new product plan as soon as possible
        </p>
      </div>
      <div class="pricing p-3 rounded mt-4 d-flex justify-content-between">
        <div class="images d-flex flex-row align-items-center">
          <img
            src="https://i.imgur.com/S17BrTx.png"
            class="rounded"
            width="60"
          />
          <div class="d-flex flex-column ml-4 mx-2">
            <span class="business">Total Amount</span>
          </div>
        </div>
        <!--pricing table-->
        <div class="d-flex flex-row align-items-center">
          <sup class="dollar font-weight-bold">$</sup>
          <span class="amount ml-1 mr-1">{{totalAmount.toFixed(2)}}</span>
        </div>
        <!-- /pricing table-->
      </div>
      <span class="detail mt-5">Payment details</span>
      <div
        class="credit rounded mt-4 d-flex justify-content-between align-items-center"
      >
        <div class="d-flex flex-row align-items-center">
          <img
            src="https://i.imgur.com/qHX7vY1.png"
            class="rounded"
            width="70"
          />
          <div class="d-flex flex-column ml-3">
            <span class="business">Credit Card</span>
            <span class="plan">1234 XXXX XXXX 2570</span>
          </div>
        </div>
        <div>
          <input type="text" class="form-control cvv" placeholder="CVC" />
        </div>
      </div>
      <div
        class="credit rounded mt-2 d-flex justify-content-between align-items-center"
      >
        <div class="d-flex flex-row align-items-center">
          <img
            src="https://i.imgur.com/qHX7vY1.png"
            class="rounded"
            width="70"
          />
          <div class="d-flex flex-column ml-3">
            <span class="business">Credit Card</span>
            <span class="plan">2344 XXXX XXXX 8880</span>
          </div>
        </div>
        <div>
          <input type="text" class="form-control cvv" placeholder="CVC" />
        </div>
      </div>
      <h6 class="mt-4 text-primary">ADD PAYMENT METHOD</h6>
      <div class="email mt-2">
        <input
          type="text"
          class="form-control email-text"
          placeholder="Email Address"
        />
      </div>
      <div class="mt-3">
      <button @click="backData" class="btn btn-primary btn-block payment-button">
          Cencel
        </button>

        <button class="btn btn-primary btn-block payment-button mx-3">
          Proceed to payment <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
    </div>
   
  </div>
</template>
<script>
import router from '@/router';
export default {
  name: "checkout",
  data() {
    return {
    
    };
  },
  methods:{
    backData(event,item){
      console.log(event.target.value)
      alert("gsdjjh")
      this.$router.push({name: 'cart' + item.id})
    }
  },
  computed: {
    totalAmount() {
      let total = 0;
      let data = JSON.parse(localStorage.getItem("cart"));
      console.log(data);
      data.forEach((item, i) => {
        console.log(item.quntity);
        total += item.price * item.quntity;
        console.log(total);
      });

      return total;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
  box-shadow: 5px 6px 6px 2px #e9ecef;
}
.heading {
  font-size: 23px;
  font-weight: 00;
}
.text {
  font-size: 16px;
  font-weight: 500;
  color: #b1b6bd;
}
.pricing {
  border: 2px solid #304ffe;
  background-color: #f2f5ff;
}
.business {
  font-size: 20px;
  font-weight: 500;
}
.plan {
  color: #aba4a4;
}
.dollar {
  font-size: 16px;
  color: #6b6b6f;
}
.amount {
  font-size: 30px;
  font-weight: 500;
}
.year {
  font-size: 20px;
  color: #6b6b6f;
  margin-top: 19px;
}
.detail {
  font-size: 22px;
  font-weight: 500;
}
.cvv {
  height: 44px;
  width: 73px;
  border: 2px solid #eee;
}
.cvv:focus {
  box-shadow: none;
  border: 2px solid #304ffe;
}
.email-text {
  height: 55px;
  border: 2px solid #eee;
}
.email-text:focus {
  box-shadow: none;
  border: 2px solid #7f8298;
}
.payment-button {
  height: 50px;
  font-size: 20px;
}
</style>
