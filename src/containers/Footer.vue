<template>
    <div class="footer">
        <h1 class="header">Contact</h1>
        <hr>
        <div class="contact-link-container row">
            <p>email: <a href="mailto:gabriel.martin91@outlook.com" class="email-link">gabriel.martin91@outlook.com</a></p>
            <div class="icon-container">
                <a href="https://twitter.com/glmartin91" target="_blank">
                    <i class="fab fa-twitter-square icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/gl-martin/" target="_blank">
                    <i class="fab fa-linkedin icon"></i>
                </a>
                <a href="https://github.com/gabriel-martin" target="_blank">
                    <i class="fab fa-github-square icon"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    .footer {
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

    .icon {
      margin: 0 1rem;
      font-size: 2rem;
      color: var(--light-text);
    }

    .icon + .icon {
      margin: 0 1rem;
    }
</style>
