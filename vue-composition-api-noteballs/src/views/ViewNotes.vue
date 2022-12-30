<template>
<div class="notes">

<div class="card has-background-success-dark p-4 mb-5">
  <div class="field">

    <div class="control">
     <textarea
        class="textarea"
        placeholder="Add a New Note"
      />
    </div>
  </div>
  
  <div class="field is-grouped is-grouped-right">
    <div class="control">
      <button class="button is-link has-background-success">Add New Note</button>
    </div>
  </div>
</div>

 
  <div 
  v-for ="note in notes"
  :key="note.id"
  class="card mb-4">

    <div class="card-content">
      <div class="content">
  {{ note.content}}
      </div>
    </div>
    <footer class="card-footer">

      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</div>

</template>

<script setup>
/*
Imports
*/
import { ref } from 'vue'

/*
notes
*/
const notes = ref([
{
  id: 'id1',
  content: 'l Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque tenetur, porro soluta tempora excepturi odio. Placeat, ipsa fuga. Et voluptates inventore nostrum ratione porro molestiae quas maxime suscipit numquam.'
},
{
  id: 'id2',
  content: 'l am short note.'
},


])




</script>

<style>
</style>