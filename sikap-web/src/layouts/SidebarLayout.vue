<template>
    <div class="sidebar-layout">
      <CSidebar>
        <CSidebarBrand>CoreUI</CSidebarBrand>
        <CSidebarNav>
          <CSidebarNavItem name="HomePage" to="/home"/>
          <!-- Tambahkan item sidebar lain di sini -->
        </CSidebarNav>
      </CSidebar>
      <div class="wrapper d-flex flex-column min-vh-100 bg-light">
        <CHeader>
          <CHeaderBrand to="/">My App</CHeaderBrand>
        </CHeader>
        <main class="body flex-grow-1 px-3">
          <router-view/>
        </main>
        <CFooter>
          <div>&copy; 2024 My App</div>
        </CFooter>
      </div>
    </div>
  </template>
  
  <script>
  import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarNavItem, CHeader, CHeaderBrand, CFooter } from '@coreui/vue';
  
  export default {
    name: 'SidebarLayout',
    components: {
      CSidebar,
      CSidebarBrand,
      CSidebarNav,
      CSidebarNavItem,
      CHeader,
      CHeaderBrand,
      CFooter
    }
  };
  </script>
  
  <style>
  /* Tambahkan gaya kustom di sini jika diperlukan */
  </style>
  