<template>
  <div id="app">
    <navigation />
    <home />
    <experience />
    <knowledge-base />
    <contact />
  </div>
</template>

<script>
import { Navigation } from "./components";
import { Home, Experience, KnowledgeBase, Contact } from "./containers";

export default {
  name: "app",
  components: {
    Navigation,
    Home,
    Experience,
    KnowledgeBase,
    Contact
  }
};
</script>
