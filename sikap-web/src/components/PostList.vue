<template>
  <div class="container">
    <h2>Daftar Post</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    // Ambil data dari JSON Server saat komponen dimount
    // Gunakan Axios untuk melakukan GET request ke '/posts'
  }
};
</script>

<style>
/* Tidak perlu styling khusus */
</style>