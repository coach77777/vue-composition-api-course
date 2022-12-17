
<!-- Template Sxn************* -->
<template>
  <div class="home">
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>
<!-- Template Sxn************* -->


<!--  script sxn -->
<script>

export default {
  data() {
    return {
      counter: 0
    }
  },
// Methods
  methods: {

   // add to the the Counter
    increaseCounter() {
      this.counter++
    },

     // minus the Counter
    decreaseCounter() {
      this.counter--
    }
  }
}
</script>


<!-- ************* StylesSxn************* -->
<style>
.home {
  text-align: center;
  padding: 20 px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
</style>
