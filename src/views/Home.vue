<template>
  <div class="home">
    <navigation></navigation>
    <home></home>
    <experience></experience>
    <knowledge-base></knowledge-base>
    <contact></contact>
  </div>
</template>

<script>
// @ is an alias to /src
import { Navigation } from "@/components";
import { Contact, Experience, Home, KnowledgeBase } from "../containers";

export default {
  components: { Contact, Experience, Home, KnowledgeBase, Navigation }
};
</script>
