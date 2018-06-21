<template>
  <div id="app">
    <app-navigation />
    <app-header />
    <app-main />
    <app-knowledge-base />
    <app-footer />
  </div>
</template>

<script>
  import { AppNavigation } from "./components";
  import { AppHeader, AppMain, AppKnowledgeBase, AppFooter } from "./containers";

  export default {
    name: "app",
    components: {
      AppNavigation,
      AppHeader,
      AppMain,
      AppKnowledgeBase,
      AppFooter
    }
  };
</script>
