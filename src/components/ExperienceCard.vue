<template>
  <div class="experience-card row" v-in-viewport.once="-200">
    <div class="card-heading">
      <h3 class="name"> {{ name }} </h3>
      <p class="vertical-bar">|</p>
      <h4 class="type"> {{ type }} </h4>
    </div>
    <div class="summary-container">
      <p class="summary"> {{ summary }} </p>
      <p class="link-container">
        <a :href="githubLink" target="_blank" class="experience-link">GitHub</a> |
        <a :href="demoLink" target="_blank" class="experience-link">Demo</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    type: String,
    summary: String,
    githubLink: String,
    demoLink: String
  }
};
</script>

<style scoped>
.experience-card {
  opacity: 0;
  padding: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  color: var(--deepPurple);
  border-radius: 0 15px 0 15px;
  transform: translateX(-100px);
  transition: all 0.2s ease-in-out;
  background-color: var(--light-text);
}

.in-viewport {
  opacity: 1;
  transform: translateX(0px);
}

.experience-card:hover,
.experience-card:visited {
  border-radius: 0;
  transform: scale(1.02);
  box-shadow: 10px 10px 20px -7px #1c1d23;
}

.name,
.type,
.summary,
.vertical-bar,
.link-container,
.summary-container {
  margin: 0;
}

.vertical-bar {
  font-size: 0.8rem;
}

.card-heading {
  min-width: 9rem;
  text-align: center;
  margin-right: 1rem;
}

.name,
.type {
  font-weight: 100;
}

.summary-container {
  flex: 1;
  padding: 1rem;
  border-radius: 15px 0 5px 0;
  background-color: var(--dark-orange);
}

.summary-container,
.experience-link {
  color: var(--light-text);
}

.experience-link {
  text-decoration: none;
  border-bottom: 1px solid var(--light-text);
}

.link-container {
  white-space: nowrap;
  text-align: right;
}

@media screen and (max-width: 600px) {
  .experience-card {
    flex-direction: column;
  }
}
</style>
