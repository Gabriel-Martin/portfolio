<template>
  <div class="experience-card column">
    <h2> {{ experience.name }} </h2>
    <p>|</p>
    <h3> {{ experience.type }} </h3>
    <p class="summary"> {{ experience.summary }} </p>
  </div>
</template>

<script>
export default {
  props: {
    experience: Object
  }
};
</script>

<style scoped>
.experience-card {
  margin: 1rem;
  padding: 1rem;
  align-items: center;
  color: var(--deepPurple);
  border-radius: 0 15px 0 15px;
  background-color: var(--light-text);
  transition: all 0.2s ease-in-out;
}

.experience-card:hover {
  transform: scale(1.02);
  cursor: pointer;
}

.experience-card + .experience-card {
  margin: 1rem;
}

.experience-card p:first-of-type {
  margin: 0;
}

.summary {
  padding: 1rem;
  min-height: 105px;
  margin: 1rem 0 0 0;
  color: var(--light-text);
  border-radius: 15px 0 5px 0;
  min-width: calc(100% - 2rem);
  background-color: var(--dark-orange);
}
</style>
