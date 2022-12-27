<template>
  <teleport to="body">
    <div  
    v-if="modelValue"
    class="modal">
      <h1>{{  title }}</h1>
      <!-- <h1><slot name="title" /></h1> -->
<slot />
      <!-- <button @click=
      "$emit('hideModal') "> -->


      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>


</template>


<script setup>
/* 
props Composition Way
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
      type: String,
      default: 'No Title here'
    }
  })

  /* 
emits Composition Way
*/
const emit = defineEmits(['update:modelValue'])

  /* 
emits Composition Way
*/

// const handleButtonClick = () => {
//   emit('update:modelValue', false)
// }
</script>

<!-- Options
  <script>
  export default{
     emits: [hideModal],
  props: {
    title: {
      type: String,
      default: 'No Title here'
    }
  }
}

</script>
 -->




<style>
.modal {
  background: beige;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>