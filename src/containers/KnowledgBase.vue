<template>
  <div class="container column" id="knowledge-base">
    <h1 class="heading">Knowledge Base</h1>
    <hr class="divider">
    <div class="lists-container column">
      <div class="knowledge-base-card column">
        <h2 class="sub-heading">Languages</h2>
        <ul class="knowledge-base-list row">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JAVASCRIPT</li>
        </ul>
      </div>

      <div class="knowledge-base-card column">
        <h2 class="sub-heading">Frameworks</h2>
        <ul class="knowledge-base-list row">
          <li>React</li>
          <li>Vue</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div class="knowledge-base-card column">
        <h2 class="sub-heading">Interests</h2>
        <ul class="knowledge-base-list row">
          <li>Ruby on Rails</li>
          <li>Python</li>
          <li>React Native</li>
          <li>...rest</li>
        </ul>
      </div>

    </div>
    <div>
      <p>I'm always eager to expand my capabilities. While my focus is to become more proficient in javscript, I'm still exloring other tools and languages. I'm never apposed to learning and growing in my profession. Please reach out if you're interested in sharing some wisdom! Contact links are below.</p>
    </div>

  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  @import url("../index.css");

  .container {
    padding: 4rem;
    min-height: calc(100vh - 8em);
    background: linear-gradient(
      35deg,
      var(--light-blue) 74%,
      var(--deepPurple) 74%
    );
  }

  .heading {
    text-align: right;
  }

  .sub-heading {
    max-width: fit-content;
    border-bottom: 1px solid var(--light-text);
  }

  .divider {
    min-width: 100%;
    border-style: solid;
    margin: 1rem 0 2rem 0;
  }

  .knowledge-base-card {
    min-width: 100%;
  }

  .knowledge-base-list li {
    margin-right: 2rem;
  }

  .knowledge-base-item {
    margin: 3rem;
  }

  .knowledge-base-item + .knowledge-base-item {
    margin: 3rem;
  }

  @media screen and (max-width: 425px) {
    .container {
      padding: 3rem;
    }

    .knowledge-base-list {
      flex-direction: column;
    }
  }
</style>
