<template>
<div class="modals">
  <h1>Modals</h1>
  <button @click="showModal = true">Show modal</button>
<Modal v-if="showModal"
title="My modal title(via prop)">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure incidunt ad mollitia, eos, consectetur laudantium impedit in veritatis aperiam excepturi quasi quibusdam repellat natus fugit eius vero unde ea.</p>
</Modal>

</div>
</template>

<script setup>
/*
import
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'


/*
modals
*/

const showModal = ref(false)

</script>


<!-- 
<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  }
}
</script>
 -->