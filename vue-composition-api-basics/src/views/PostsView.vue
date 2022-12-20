<template>
  <div class="posts">
    <h1>Posts</h1>
<ul>
  <li>
    <RouterLink to="postDetail/id1">Post1
  </RouterLink>
</li>
  <li>
    <RouterLink to="postDetail/id2">Post2
  </RouterLink>
</li>
  <li>
    <RouterLink to="postDetail/id3">Post3
  </RouterLink>
</li>
</ul>

    <textarea v-autofocus />
  </div>

</template>

<script setup>
/*
  imports
*/
  import { vAutofocus } from '@/directives/vAutofocus'
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>

