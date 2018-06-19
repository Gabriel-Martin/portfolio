<template>
    <div class="container column" id="main">
        <h1 class="section-header">Experience</h1>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    @import url("~@/index.css");

    .container {
      padding: 4em;
      min-height: 100vh;
      align-items: center;
      height: calc(100vh - 8em);
      background-color: var(--dark-blue);
    }

    .section-header {
      align-self: flex-start;
      border-bottom: 1px solid var(--light-text);
    }
</style>
