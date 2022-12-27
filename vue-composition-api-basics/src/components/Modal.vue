<template>
  <teleport to="body">
    <div  class="modal">
      <h1>{{  title }}</h1>
      <!-- <h1><slot name="title" /></h1> -->
<slot />
      <button>Hide modal</button>
    </div>
  </teleport>


</template>


<script setup>
/* 
props Composition Way
*/
const props = defineProps({
  title: {
      type: String,
      default: 'No Title here'
    }
  })

</script>

<!-- Options
  <script>
  export default{
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