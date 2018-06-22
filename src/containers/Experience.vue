<template>
  <div class="container column" id="experience">
    <h1 class="section-header">Experience</h1>
    <hr class="divider">
    <div class="experience-container column">
      <experience-card v-for="(item, index) in experience" :key="index" v-bind='item' />
    </div>
    <p>I'm currently looking for more experience! If you have any insight feel free to reach out. Contact links are in the footer.</p>
  </div>
</template>

<script>
import { ExperienceCard } from "../components";
export default {
  data: () => ({
    experience: [
      {
        name: "Resync Digital",
        type: "Professional",
        summary: "Fullstack applications for small businesses.",
        githubLink: "https://github.com/Gabriel-Martin/aci-coatings",
        demoLink: ""
      },
      {
        name: "!Employed",
        type: "Personal",
        summary: "Post jobs as a business, or apply for jobs as an individual.",
        githubLink: "https://github.com/Gabriel-Martin/job-placement-app",
        demoLink: ""
      },
      {
        name: "TMB",
        type: "Personal",
        summary: "Find and follow your favorite bands.",
        githubLink: "",
        demoLink: ""
      }
    ]
  }),
  components: { ExperienceCard }
};
</script>

<style scoped>
@import url("../index.css");

.container {
  padding: 4rem;
  align-items: center;
  min-height: calc(100vh - 8rem);
  background: linear-gradient(
    152deg,
    var(--dark-orange) 20%,
    var(--deepPurple) 6%
  );
}

.divider {
  width: 100%;
  margin: 1rem 0 2rem 0;
}

.experience-container {
  max-width: 35rem;
}

.section-header {
  align-self: flex-start;
}

@media screen and (max-width: 425px) {
  .container {
    padding: 3rem;
  }
}
</style>
