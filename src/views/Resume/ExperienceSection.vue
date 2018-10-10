<template>
    <div class="container row">
        <div class="time-column">2018 - present</div>
        <div class="details-column">
            <h3 class="position">{{ position }}</h3>
            <p class="company">{{ company }}</p>
            <div class="details-container">
                <section v-if="responsibilities">
                    <p class="subtitle">Responsibilities</p>
                    <ul>
                        <li v-for="item in responsibilities" :key="item">{{ item }}</li>
                    </ul>
                </section>
                <section v-if="achievements">
                    <h4>Achievements</h4>
                    <ul>
                        <li v-for="item in achievements" :key="item">{{ item }}</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    timeframe: String,
    company: String,
    position: String,
    responsibilities: Array,
    achievements: Array
  }
};
</script>

<style scoped>
h4 {
  margin: 0;
}

p {
  margin: 0;
}

ul {
  padding-left: 1rem;
  margin: 0.5rem 0;
}

.position {
  font-weight: 500;
}

.company {
  font-style: italic;
}

.details-column {
  flex: 1;
  padding: 0 1rem;
}

.subtitle {
  font-weight: 500;
}
</style>
