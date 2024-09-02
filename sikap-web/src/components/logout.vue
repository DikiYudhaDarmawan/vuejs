<template>
    <button @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.$router.push({ name: 'Login' });
      }
    }
  };
  </script>
  