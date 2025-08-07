<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl flex flex-col gap-4 relative">
    <!-- Badge sobreposto -->
    <span class="absolute sm:-top-6 left-4 sm:left-6 flex items-center gap-2 text-base sm:text-xl font-semibold text-gray-400 bg-white px-4 sm:px-6 py-2 rounded-full shadow z-10">
      <img :src="badgeIcon" alt="Badge" class="w-6 h-6 sm:w-8 sm:h-8" />
      REPRESENTATIVE
    </span>

    <!-- Topo: Foto, nome, logo -->
    <div class="mt-10 sm:mt-1 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
      <!-- Foto + bandeira -->
      <div class="relative">
        <img :src="image" alt="Foto" class="rounded-full w-28 h-28 sm:w-40 sm:h-40 object-cover mt-3 mx-auto md:mx-0" />
        <img v-if="countryFlag" :src="countryFlag" alt="Bandeira" class="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
      </div>

      <!-- Nome e cargo -->
      <div class="flex flex-col justify-center flex-1 text-center md:text-left">
        <h2 class="text-2xl sm:text-4xl font-bold text-[#c2b281] leading-tight">{{ name }}</h2>
        <p class="text-lg sm:text-2xl text-gray-400 font-semibold">{{ role }}</p>
        <p class="text-lg sm:text-2xl text-gray-400 font-semibold">{{ company }}</p>
        <p class="text-lg sm:text-2xl font-bold text-[#42568b] mt-4 sm:mt-8">{{ skills }}</p>
      </div>

      <!-- Logo empresa + estrela (sem alterar no desktop) -->
      <div class="mt-4 md:mt-0 w-full md:w-auto flex flex-row sm:flex-col items-center md:items-end gap-2 justify-between sm:justify-normal">
        <div class="border border-gray-300 w-24 h-16 sm:w-32 sm:h-20 flex items-center justify-center rounded-xl bg-white">
          <img :src="companyLogo" alt="Company Logo" class="h-12 sm:h-18 max-w-full" />
        </div>
        <div class="md:flex justify-end  sm:mt-12">
          <img :src="starIcon" alt="Badge" class="w-10 h-10 text-[#BFA046]" />
        </div>
      </div>
    </div>

    <!-- Match progress -->
    <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2">
      <div class="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
        <div class="h-full bg-[#42568b] rounded-full" :style="{ width: match + '%' }"></div>
      </div>
      <div class="flex gap-2 text-lg sm:text-2xl font-bold text-black">
        <span>{{ match }}%</span>
        <span class="font-semibold">Match</span>
      </div>
    </div>

    <!-- Ações -->
    <div class="flex flex-col sm:flex-row gap-4 mt-6">
      <button class="w-full sm:flex-1 border-2 border-[#ccb24d] text-[#ccb24d] rounded-xl py-3 sm:py-4 text-lg sm:text-2xl font-bold bg-white hover:bg-[#BFA046]/10 transition">
        Intro request
      </button>
      <button class="w-full sm:flex-1 border-2 border-[#ccb24d] text-[#ccb24d] rounded-xl py-3 sm:py-4 text-lg sm:text-2xl font-bold bg-white hover:bg-[#BFA046]/10 transition">
        Private Meeting
      </button>
      <button class="w-full sm:w-auto bg-[#ccb24d] text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition">
        <img :src="chatIcon" alt="Chat" class="w-10 h-10 text-[#BFA046]" />
        Chat
      </button>
    </div>
  </div>
</template>

<script setup>
import badgeIcon from '../assets/badge.svg'
import starIcon from '../assets/starIcon.svg'
import chatIcon from '../assets/chatIcon.svg'

defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },
  countryFlag: { type: String, default: null },
  companyLogo: { type: String, required: true },
  skills: { type: String, required: true },
  match: { type: Number, required: true }
})
</script>
