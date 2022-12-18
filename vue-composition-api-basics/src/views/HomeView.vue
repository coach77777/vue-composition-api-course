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
<!-- END Template Sxn************* -->

<!-- Script Setup Pattern -->
<script setup>
import { ref } from "vue";

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};

const decreaseCounter = () => {
  counter.value--;
};
</script>

<!--  Options API
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
script sxn -->

<!-- Setup pattern 
<script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return{
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script>
-->

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
