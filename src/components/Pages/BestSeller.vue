<template>
    <div class="container-fluid mt-5">
      <div class="container d-flex text-start aa">
        <div class="col-6 justify-content-center">
    
          <img
            src="https://m.media-amazon.com/images/I/31Hy+AQkplL._AC_SR320,400_.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="cardd p-5 justify-content-center">
          <h1>Men's Regular Polo Shirt</h1>
          <h4 style="color:red">Price:	₹389.00 - ₹509.00</h4>
          <p>
            About this Item
           <ul> 
            <li>Soft breathable cotton poly knit fabric</li>
           <li>
               Mandarin collar styling
           </li> 
           <li>
               Solid color
           </li>
           <li>
               Pair with a classic pair of denims or chinos for a casual everyday look
           </li>
           <li>
               Refer to size chart to pick your correct size
           </li>
           </ul>
          </p>
          <button type="button" class="btn btn-primary btt">See More...</button>
        </div>
      </div>

      
    
      <div class="container d-flex text-start aa">
       
        <div class="cardd p-5 justify-content-center">
          <h1>Men's Regular Polo Shirt</h1>
          <h4 style="color:red">Price:	₹400.00 - ₹550.00</h4>

          <p>
            About this Item
           <ul> 
            <li>Soft breathable cotton poly knit fabric</li>
           <li>
               Mandarin collar styling
           </li> 
           <li>
               Solid color
           </li>
           <li>
               Pair with a classic pair of denims or chinos for a casual everyday look
           </li>
           <li>
               Refer to size chart to pick your correct size
           </li>
           </ul>
          </p>
          <button type="button" class="btn btn-primary btt">See More...</button>
        </div>
         <div class="col-6  justify-content-center">
          <img
            src="https://m.media-amazon.com/images/I/712XTTg1j6L._AC_UL320_.jpg"
            class="img-fluid"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/71DosJOQtUL._AC_UL320_.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>

        <NewsLetter/>
      </div>
    </div>
</template>

<script>
import NewsLetter from '../Pages/NewsLetter.vue';
export default {
    name: "bestSeller",
    components: { NewsLetter }
}
</script>