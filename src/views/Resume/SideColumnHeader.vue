<template>
  <div class="container">
    <p class="name">{{ name }}</p>
    <p class="position">{{position}}</p>
  </div>
</template>

<script>
export default {
  props: { name: String, position: String }
};
</script>

<style scoped>
p {
  margin: 0;
}

.container {
  margin-bottom: 1rem;
}

.name {
  font-size: 2rem;
  font-weight: 500;
}
</style>
