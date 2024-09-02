<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <form @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon :icon="cilUser" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autocomplete="username"
                      v-model="username" id="username" required
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon :icon="cilLockLocked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      v-model="password" id="password" required
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" type="submit"> Login </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
                </form>
                <div v-if="error" class="error" style="color:red">{{ error }}</div>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  <!-- <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div> -->
</template>

<script>
import axios from 'axios';
import { CIcon } from '@coreui/icons-vue';
import { cilUser,cilLockLocked } from '@coreui/icons'

export default {
  components: {
    CIcon
  },
  setup() {
    return {
      cilUser,
      cilLockLocked,
    }
  },
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      // try {
      //   const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
      //     email: this.username,
      //     password: this.password
      //   });
      //   const tokens = response.data.tokens;
      //   localStorage.setItem('user', response.data.username);
      //   localStorage.setItem('useremail', response.data.email);
      //   localStorage.setItem('access_token', tokens.access);
      //   localStorage.setItem('refresh_token', tokens.refresh);
      //   this.$router.push({ name: 'Dashboard' });
      // } catch (error) {
      //   if (error.response) {
      //     this.error = error.response.data.detail || 'Invalid username or password';
      //   } else {
      //     console.log(error);
      //     this.error = 'An error occurred. Please try again.';
      //   }
      // }
      this.$router.push({ name: 'Dashboard' });
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
