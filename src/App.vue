<script setup>
import HelloWorld from './components/HelloWorld.vue'
import PersonCard from './components/PersonCard.vue';
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">   
    <PersonCard
      name="John Doe"
      role="Software Engineer"
      company="Tech Solutions"
      image="https://cdn.griinstitute.org/uploads/crm_people/0031R00002OUMta_Marketing_Edited_Photo_2025-02-03_11-53-29.jpg"
      countryFlag="https://www.griinstitute.org/assets/img/country_flags/1x1/br.svg"
      companyLogo="https://cdn.griinstitute.org/uploads/crm_company/0033600000DmrRO_Marketing_Edited_Logo_2025-06-14_01-23-10.jpg"
      skills="JavaScript, Vue.js, Node.js"
      match="66"
    />     

    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
