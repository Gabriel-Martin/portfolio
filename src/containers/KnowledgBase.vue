<template>
    <div class="container column" id="knowledge-base">
        <h1 class="heading">Knowledge Base</h1>
        <hr class="divider">
        <div class="lists-container row">
            <div class="knowledge-base-item">
                <h2 class="sub-heading">Languages</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JAVASCRIPT</li>
                </ul>
            </div>

            <div class="knowledge-base-item">
                <h2 class="sub-heading">Frameworks</h2>
                <ul>
                    <li>React</li>
                    <li>Vue</li>
                </ul>
            </div>

            <div class="knowledge-base-item">
                <h2 class="sub-heading">Interests</h2>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>Python</li>
                    <li>React Native</li>
                    <li>...rest</li>
                </ul>
            </div>

        </div>
        <div>
            <p>I'm always eager to expand my capabilities. While my focus is to become more proficient in javscript, I'm still exloring other tools and languages. I'm never apposed to learning and growing in my profession. Please reach out if you're interested in sharing some wisdom! Cantact links are below.</p>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../index.css");

.container {
  padding: 4em;
  height: calc(100vh - 8em);
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
  padding: 0.5rem 0;
  max-width: fit-content;
  border-bottom: 1px solid var(--light-text);
}

.divider {
  width: 100%;
  margin: 1rem;
}

.lists-container {
  justify-content: center;
}

.knowledge-base-item {
  margin: 3rem;
}

.knowledge-base-item + .knowledge-base-item {
  margin: 3rem;
}
</style>
