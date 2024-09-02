<template>
  <div class="container">
    <h2>Konfirmasi Hapus</h2>
    <p>Apakah Anda yakin ingin meng

hapus post ini?</p>
    <button @click="deletePost" class="btn btn-danger">Hapus</button>
    <router-link :to="'/'" class="btn btn-secondary">Batal</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    deletePost() {
      // Kirim permintaan penghapusan ke JSON Server menggunakan Axios DELETE request
      // Setelah berhasil, kembali ke halaman utama
    }
  }
};
</script>

<style>
/* Tidak perlu styling khusus */
</style>