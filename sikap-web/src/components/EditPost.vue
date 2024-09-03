<template>
  <div class="container" v-if="post">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost">
      <div class="form-group">
        <input type="text" class="form-control" v-model="editedPost.title" placeholder="Judul">
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="editedPost.body" placeholder="Isi"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Simpan</button>
    </form>
  </div>
  <div v-else>
    <p>Post tidak ditemukan</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postId: this.$route.params.id,
      post: null,
      editedPost: {
        title: '',
        body: ''
      }
    };
  },
  mounted() {
    axios.get(`http://localhost:8080/posts/${this.postId}`)
      .then(response => {
        this.post = response.data;
        this.editedPost.title = this.post.title;
        this.editedPost.body = this.post.body;
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  },
  methods: {
    updatePost() {
      axios.put(`http://localhost:8080/posts/${this.postId}`, this.editedPost)
        .then(response => {
          console.log('Post updated:', response.data);
          // Kembali ke halaman sebelumnya setelah berhasil mengupdate post
          this.$router.go(-1);
        })
        .catch(error => {
          console.error('Error updating post:', error);
        });
    }
  }
};
</script>

<style>
/* Tidak perlu styling khusus */
</style>