<template>
  <div class="container column" id="home">
    <img src="~@/assets/profile_image.jpg" class="profile-image">
    <h1 class="name">Gabriel Martin</h1>
    <h2 class="profession">Web Developer</h2>
    <p class="about-me">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ad aliquid placeat dolore quidem earum quos eius, totam ex nam similique eaque dolorem cumque tempora inventore accusantium dolores maiores commodi!
    </p>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  @import url("~@/index.css");

  .container {
    margin: 0;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 8em);
    padding: 4em;
    background: linear-gradient(
      55deg,
      var(--dark-purple) 55%,
      var(--dark-red) 55%
    );
  }

  .profile-image {
    height: auto;
    max-width: 200px;
    border: 8px solid var(--light-text);
    border-radius: 50%;
  }

  .name {
    border-bottom: 1px solid var(--light-text);
  }
</style>
