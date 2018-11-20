<template>
  <div class="container column" id="home">
    <transition enter-active-class="animated fadeInRight" appear>
      <img
        v-show="renderContent"
        src="../assets/profile_image.jpg"
        @load="contentReady"
        class="profile-image"
      >
    </transition>
    <transition enter-active-class="animated fadeInLeft" appear>
      <div class="content-container" v-show="renderContent">
        <h1 class="name">Gabriel Martin</h1>
        <hr class="divider">
        <h2 class="profession">Web Developer</h2>
        <p
          class="about-me"
        >Full Stack web developer with a passion for learning. I strive to better myself through peer review and self reflection. Apart from coding, I enjoy Disc Golf, bicycling, fitness and exercise. I'm currently seeking employment! If you think I can provide value to your team, please reach out via the contact links in the footer!</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return { renderContent: false };
  },
  methods: {
    contentReady() {
      this.renderContent = true;
    }
  }
};
</script>

<style scoped>
@import url('~@/index.css');

.container {
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 8rem);
  padding: 4rem;
  background: linear-gradient(
    35deg,
    var(--dark-orange) 74%,
    var(--dark-red) 74%
  );
}

.container {
  margin: 0;
}

.divider {
  margin: 1rem 0;
  border-style: solid;
  border-color: #f7f1e3;
}

.content-container {
  margin-top: 1rem;
}

.profile-image {
  height: auto;
  max-width: 200px;
  border-radius: 50%;
  border: 8px solid var(--light-text);
}

@media screen and (max-width: 425px) {
  .container {
    padding: 3rem;
  }
}
</style>
