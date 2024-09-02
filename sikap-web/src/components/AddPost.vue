
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
      // Kirim data baru ke JSON Server menggunakan Axios POST request
      // Setelah berhasil, kosongkan formulir
    }
  }
};
</script>

<style>
/* Tidak perlu styling khusus */
</style>