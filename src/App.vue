<template>
  <div id="app">
    <app-navigation />
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
  import { AppNavigation } from "components";
  import { AppHeader, AppMain, AppFooter } from "containers";

  export default {
    name: "app",
    components: {
      AppNavigation,
      AppHeader,
      AppMain,
      AppFooter
    }
  };
</script>
