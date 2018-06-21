<template>
  <scrollactive :offset="0" :modifyUrl="false" class="nav column" active-class="active" bezier-easing-value=".5,0,.35,1">
    <a href="#home" class="scrollactive-item nav-item"></a>
    <a href="#experience" class="scrollactive-item nav-item"></a>
    <a href="#knowledge-base" class="scrollactive-item nav-item"></a>
    <a href="#contact" class="scrollactive-item nav-item"></a>
  </scrollactive>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../index.css");

.nav {
  position: fixed;
  height: 100%;
  padding: 0 1em;
  justify-content: center;
}

.nav-item {
  width: 10px;
  height: 10px;
  border: 1px solid var(--light-text);
  border-radius: 50%;
  margin: 1em 0;
  transition: all 0.2s ease-in-out;
}

.active {
  background-color: var(--light-text);
  transform: scale(1.5);
}
</style>
