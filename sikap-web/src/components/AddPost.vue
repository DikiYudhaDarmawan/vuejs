
<template>
  <div class="container">
    <h2>Tambah Post Baru</h2>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <input type="text" class="form-control" v-model="newPost.title" placeholder="Judul">
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="newPost.body" placeholder="Isi"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Tambah</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newPost: {
        title: '',
        body: ''
      }
    };
  },
  methods: {
    addPost() {
      axios.post('http://localhost:8080/posts', this.newPost)
        .then(response => {
          console.log('New post added:', response.data);
          // Kosongkan formulir setelah berhasil menambahkan post
          this.newPost.title = '';
          this.newPost.body = '';
        })
        .catch(error => {
          console.error('Error adding post:', error);
        });
    }
  }
};
</script>

<style>
/* Tidak perlu styling khusus */
</style>