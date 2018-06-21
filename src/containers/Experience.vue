<template>
  <div class="container column" id="experience">
    <h1 class="section-header">Experience</h1>
    <hr>
    <div class="experience-container">
      <experience-card v-for="(item, index) in experience" :key="index" :experience='item' />
    </div>
    <p>I'm currently looking for more experience! If you have any insight feel free to reach out via the links in the footer.</p>
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
        summary: "Fullstack applications for small businesses."
      },
      {
        name: "!Employed",
        type: "Personal",
        summary: "Post jobs as a business, or apply for jobs as an individual."
      },
      {
        name: "TMB",
        type: "Personal",
        summary:
          "Find and follow your favorite bands. Get album, track and concert info."
      }
    ]
  }),
  components: {
    ExperienceCard
  }
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

.experience-container {
  width: 80%;
  margin: 2em 0;
  display: grid;
  padding: 2rem;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
}

.section-header {
  margin-bottom: 1rem;
  align-self: flex-start;
}

hr {
  margin: 0;
  width: 100%;
}
</style>
