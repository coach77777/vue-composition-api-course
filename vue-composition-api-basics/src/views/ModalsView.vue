<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>Show Dark Modals?
      <input 
      v-model="showDarkModals" type="checkbox" />
    </label>
    </div>


    <button @click="showModal = true">Show modal</button>
    <component
     v-model = "showModal"
      :is="showDarkModals ? ModalDark :Modal"
     title="My modal title(via prop)">

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure incidunt ad mollitia, eos, consectetur
        laudantium impedit in veritatis aperiam excepturi quasi quibusdam repellat natus fugit eius vero unde ea.</p>
    </component>

  </div>
</template>

<script setup>
/*
import
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'



/*
modals
*/
const showDarkModals = ref(false)
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