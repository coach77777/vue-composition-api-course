<template>
  <teleport to="body">
    <div  
    v-if="modelValue"
    class="modal-dark">
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

</script>

<style>
.modal-dark {
  background: #333;
  color: whitesmoke;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>