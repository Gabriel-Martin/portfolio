<template>
    <div class="container" id="contact">
        <h1 class="header">Contact</h1>
        <hr>
        <div class="contact-link-container row">
            <p>email:
                <a href="mailto:gabriel.martin91@outlook.com" class="email-link">gabriel.martin91@outlook.com</a>
            </p>
            <div class="icon-container">
                <a href="https://twitter.com/glmartin91" target="_blank" class="icon-anchor">
                    <i class="fab fa-twitter-square"></i>
                </a>
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
  width: calc(100% - 8rem);
  background-color: var(--dark-orange);
}

.email-link {
  color: var(--light-text);
  text-decoration: none;
  font-size: 400;
}

.contact-link-container {
  align-items: center;
}

.icon-container {
  margin-left: auto;
}

.icon-anchor {
  margin: 0 1rem;
  font-size: 2rem;
  color: var(--light-text);
}

.icon-anchor + .icon-anchor {
  margin: 0 1rem;
}
</style>
