<template>
  <div class="container" id="contact">
    <h1 class="header">Contact</h1>
    <hr class="divider">
    <div class="contact-link-container row">
      <p>
        <a href="mailto:gabriel.martin91@outlook.com" class="email-link">gabriel.martin91@outlook.com</a>
      </p>
      <div class="icon-container">
        <!-- <a href="https://twitter.com/glmartin91" target="_blank" class="icon-anchor">
          <i class="fab fa-twitter-square"></i>
        </a> -->
        <a href="https://www.linkedin.com/in/gl-martin/" target="_blank" class="icon-anchor">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/gabriel-martin" target="_blank" class="icon-anchor">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding: 4rem;
  background-color: var(--dark-orange);
}

.divider {
  border-style: solid;
  margin: 1rem 0 2rem 0;
}

.email-link {
  font-size: 400;
  text-decoration: none;
}

.email-link,
.icon-anchor {
  color: var(--light-text);
}

.contact-link-container {
  align-items: center;
  justify-content: space-between;
}

.icon-anchor {
  margin: 0 1rem;
  font-size: 2rem;
}

@media screen and (max-width: 700px) {
  .contact-link-container {
    align-items: center;
    flex-direction: column;
  }

  .icon-container {
    margin-left: 0;
  }
}

@media screen and (max-width: 425px) {
  .container {
    padding: 3rem;
  }
}
</style>
