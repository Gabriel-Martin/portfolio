<template>
  <div class="container">
    <div class="resume-container row">
      <div class="side-col">
        <SideColumnHeader name="Gabriel Martin" position="Freelance Web Developer"/>
        <div class="image-container">
          <img class="profile-image" src="../../assets/profile_image.jpg" alt="profile">
        </div>
        <SideColumnSection :title="personalInfo.title" :items="personalInfo.items"/>
        <SideColumnSection :title="skills.title" :items="skills.items"/>
        <SideColumnSection :title="languages.title" :items="languages.items"/>
      </div>
      <div class="main">
        <p>Motivated web developer with a passion for learning and a drive to excel. Two years experience in web development using technologies such as React, Express, RethinkDB and Google Firebase. Strong supporter of team collaboration, communication and peer review. Experience with small team management and business operations.</p>
        <hr>
        <h2 class="section-title">Experience</h2>
        <hr>
        <ExperienceSection
          :key="item.company"
          :company="item.company"
          :position="item.position"
          v-for="item in experienceItems"
          :achievements="item.achievements"
          :responsibilities="item.responsibilities"
        />
        <hr>
        <h2 class="section-title">Interests</h2>
        <hr>
        <p>Travel</p>
        <p>Backpacking</p>
        <p>Disc Golf</p>
      </div>
    </div>
  </div>
</template>

<script>
import SideColumnHeader from "./SideColumnHeader.vue";
import SideColumnSection from "./SideColumnSection.vue";
import ExperienceSection from "./ExperienceSection.vue";

export default {
  data: () => ({
    personalInfo: {
      title: "Personal Info",
      items: [
        {
          title: "Address",
          subItems: ["4445 SE Gladstone St", "Portland, OR", "97206"]
        },
        { title: "Phone", subItems: ["208-597-6736"] },
        { title: "Email", subItems: ["gabriel.martin91@gmail.com"] },
        { title: "LinkedIn", subItems: ["linkedin.com/in/gl-martin"] },
        { title: "Gitgub", subItems: ["github.com/gabriel-martin"] }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        {
          title: null,
          subItems: [
            "ReactJS, VueJS",
            "GraphQL, REST",
            "Express, Hapi",
            "RethinkDB, Firebase RTD, Firestore, Prisma"
          ]
        }
      ]
    },
    languages: {
      title: "Languages",
      items: [{ title: null, subItems: ["HTML5, CSS3, JAVASCRIPT (ES6)"] }]
    },
    experienceItems: [
      {
        company: "Haden Senior Center",
        position: "Primary Developer",
        timeframe: "2018 - present",
        responsibilities: [
          "Design, develop and launch a tracking system for daily guests and volunteers",
          "Train current staff members on usage and workflow of application",
          "Assist with the transition from current workflow to application implementation"
        ],
        achievements: [
          "Increased efficiency of daily workflow",
          "Eliminated redundant data-entry",
          "Decreased weekly workload by 4-6 hours"
        ]
      },
      {
        company: "Resync Digital",
        position: "Developer",
        timeframe: "2017 - 2018",
        responsibilities: [
          "Assist in the design and development of small business CRM platforms",
          "Develop, test and implement reusable components"
        ]
      },
      {
        company: "Devtree Academy",
        position: "Assistant Instructor",
        timeframe: "2017 - 2018",
        responsibilities: [
          "Help create curriculum material",
          "Teach classes on introductory web development technologies (html, css, javascript)",
          "Assist lead instructor during class sessions"
        ]
      }
    ]
  }),
  components: { SideColumnSection, SideColumnHeader, ExperienceSection }
};
</script>

<style scoped>
@import url("../../index.css");

:root {
  --blue: #0074a9;
  --darkblue: #00547a;
}

p {
  margin: 0;
}

.resume-container {
  margin: auto;
  max-width: 8.5in;
  min-height: 100vh;
  box-shadow: 0px 0px 30px 0px #b3b3b3;
}

.side-col {
  flex: 1;
  padding: 1rem;
  background-color: var(--blue);
}

.main {
  flex: 2.5;
  padding: 1rem;
  color: #222222;
  font-size: 1rem;
}

.image-container {
  text-align: center;
}

.profile-image {
  max-width: 100%;
}

.section-title {
  font-weight: 500;
  color: var(--blue);
}

@media print {
  @page {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    border: none;
  }

  .resume-container {
    margin: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
}
</style>
