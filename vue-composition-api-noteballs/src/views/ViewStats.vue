<template>
<div class="stats">
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
<tr>
  <td>Number of Notes</td>
  <td>{{ storeNotes.totalNotesCount }}</td>
</tr>
<tr>
  <td>Number of Characters(of all Notes)</td>
  <td>{{ storeNotes.totalCharactersCount }}</td>
</tr>
  
    </tbody>
  </table>
  <input
  v-model="loveNoteballs"
  class="input"
  type = "text"
  placeholder="Do You Like Vue?"
  v-autofocus
  />
</div>

</template>

<script setup>
/*
imports
*/
import { ref } from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'
/* 
store
*/

const storeNotes = useStoreNotes()

/* 
noteballs
*/
const loveNoteballs = ref(' ')
useWatchCharacters(loveNoteballs, 50)


</script>

<style>
</style>