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
        <h1 class="name" key="name">Gabriel Martin</h1>
        <hr>
        <h2 class="profession" key="profession">Web Developer</h2>
        <p class="about-me" key="about-me" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ad aliquid placeat dolore quidem earum quos eius, totam ex nam similique eaque dolorem cumque tempora inventore accusantium dolores maiores commodi!
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        renderContent: false
      };
    },
    methods: {
      contentReady() {
        this.renderContent = true;
      }
    }
  };
</script>

<style scoped>
  @import url("~@/index.css");

  .container {
    margin: 0;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 8rem);
    padding: 4rem;
    background: linear-gradient(
      35deg,
      var(--dark-orange) 74%,
      var(--dark-red) 74%
    );
  }

  .content-container {
    padding: 1rem;
  }

  .profile-image-enter {
    display: none;
  }

  .profile-image {
    height: auto;
    max-width: 200px;
    border: 8px solid var(--light-text);
    border-radius: 50%;
  }

  .name {
    margin: 0px;
    padding-bottom: 1rem;
  }

  hr {
    margin: 0;
  }

  .profession {
    margin: 0px;
    padding-top: 1rem;
  }
</style>
