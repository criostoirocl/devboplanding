<template>
  <div>
    <b-navbar toggleable="md">
      <b-container class="d-flex align-items-center">
        <b-navbar-brand tag="h1" class="mb-4 mt-0">
          <img id="header-logo" :src="require(`~/assets/img/logo-no-background.png`)">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
<!--            <b-nav-item active to="/">Home</b-nav-item>-->
<!--            <b-nav-item href="#">Product</b-nav-item>-->
<!--            <b-nav-item href="#">FAQ</b-nav-item>-->
<!--            <b-nav-item href="#">Blog</b-nav-item>-->
<!--            <b-nav-item href="#">About Us</b-nav-item>-->
            <div class="mx-lg-5 d-lg-flex flex-lg-row">
              <b-nav-item href="http://app.devbop.com/login" target="_blank">Login</b-nav-item>
              <b-button class="rounded-lg text-white" variant="primary" target="_blank" href="http://app.devbop.com/register">Sign Up</b-button>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" scoped>
#header-logo{
  max-height: 35px;
}
</style>
