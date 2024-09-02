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
    // Ambil data post yang akan diedit dari JSON Server saat komponen dimount
    // Gunakan Axios untuk melakukan GET request ke '/posts/:id'
    // Isi nilai editedPost dengan data post yang diperoleh
  },
  methods: {
    updatePost() {
      // Kirim data post yang sudah diedit ke JSON Server menggunakan Axios PUT request
      // Setelah berhasil, kembalikan ke halaman sebelumnya
    }
  }
};
</script>

<style>
/* Tidak perlu styling khusus */
</style>