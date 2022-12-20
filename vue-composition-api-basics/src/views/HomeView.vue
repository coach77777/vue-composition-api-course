<!-- Template -->
<template>
  <div class="home">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <!-- //pass in parameters -->
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}.</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus/>
    </div>
  </div>
</template>

<!-- Scripts -->
<script setup>
/* 
imports
 */
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue'
import  {vAutofocus} from '@/directives/vAutofocus'

/* 
App Title
 */
const appTitle = ' My OK Counter App '

const appTitleRef = ref(null)

onMounted(() =>{
console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide`)
  
})


/* 
Counter
 */
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(()  => counterData.count, (newCount) => {
  if(newCount ===20){
    alert('Way To Go! 20 Goal!!')
  }
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) 
  return 'even'
  return 'odd'
} )

// const increaseCounter = (amount, e) => {
//   //for event properties-------console.log(e)
//   // counterData.count++
//   // console.log(amount)
//   // counterData.count = counterData.count + amount
//   //shorthand
//   counterData.count += amount
//   nextTick(() => {
//     console.log('do someth')
//   })
// }

//OR use async

const increaseCounter = async  (amount, e) => {

  counterData.count += amount
  await nextTick()
    console.log('do something')
}


const decreaseCounter = amount => {
  counterData.count -= amount
}

onMounted(() =>{
  console.log('Do Stuff related To Counter')
})

/* 
Directives
 */




</script>

<!-- Styles -->
<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
