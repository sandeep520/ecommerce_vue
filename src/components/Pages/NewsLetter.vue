<template>
  <div class="newletter">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="subscribe-text mt-5">
            <span>JOIN OUR NEWSLETTER</span>
            <h2>subscribe newsletter</h2>
          </div>
        </div>
        <div class="col-md-8">
          <div class="subscribe-wrapper subscribe2-wrapper mb-15">
            <div class="subscribe-form">
              <form action="#">
                <input
                  class="form-control mt-5"
                  placeholder="enter your email address"
                  type="email"
                />
                <button class="btn btn-primary mt-3 mx-4">
                  subscribe <i class="fas fa-long-arrow-alt-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsletter",
};
</script>

<style scoped>
.container {
  background-color: #eef2f1;
  height: 13vw;
  border-radius: 1%;
}

.form-control {
  display: block;
  width: 80%;
  padding: 0.575rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 52px;
}
</style>
