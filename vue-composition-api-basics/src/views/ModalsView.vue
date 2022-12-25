<template>
<div class="modals">
  <h1>Modals</h1>
  <button @click="showModal = true">Show modal</button>



  //teleport to any named div
  <teleport to="body">
    <div v-if ="showModal" class="modal">
      <h1>This is a modal.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure incidunt ad mollitia, eos, consectetur laudantium impedit in veritatis aperiam excepturi quasi quibusdam repellat natus fugit eius vero unde ea.</p>
      <button @click="showModal=false">Hide modal</button>
    </div>
  </teleport>

</div>
</template>

<script setup>
/*
import
*/
import { ref } from 'vue'


/*
modals
*/

const showModal = ref(false)

</script>

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