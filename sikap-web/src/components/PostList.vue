<template>
  <div class="container">
    <h2>Daftar Post</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    axios.get('http://localhost:8080/posts')
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
<style>
/* Tidak perlu styling khusus */
</style>