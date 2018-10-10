<template>
  <div class="container">
    <p class="section-title">{{ title }}</p>
    <div v-for="item in items" :key="item.title">
      <p class="item-title">{{ item.title }}</p>
      <p :key="subItem" class="section-item" v-for="subItem in item.subItems">{{ subItem }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
};
</script>

<style scoped>
:root {
  --darkblue: #00547a;
}

p {
  margin: 0;
}

.container {
  font-size: 16px;
  line-height: 1.5rem;
}

.section-title {
  padding: 0.2rem;
  margin: 0.5rem -1rem;
  padding: 0.25rem 1rem;
  background-color: var(--darkblue);
  font-size: 1.3rem;
  font-weight: bold;
}

.item-title {
  font-weight: bold;
}
</style>
