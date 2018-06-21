<template>
    <scrollactive 
        class="nav column" 
        active-class="active" 
        bezier-easing-value=".5,0,.35,1" 
        :offset="0"
        :modifyUrl="false"
    >
        <a href="#home" class="scrollactive-item"></a>
        <a href="#main" class="scrollactive-item"></a>
        <a href="#footer" class="scrollactive-item"></a>
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

  a {
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
