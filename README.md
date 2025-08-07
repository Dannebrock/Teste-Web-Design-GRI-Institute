# 🧪 Teste Web Design - GRI Institute

Componente visual reutilizável e responsivo, desenvolvido com Vue 3 e Tailwind CSS, conforme layout de referência.

## 📷 Imagem de referência

![Layout](https://cdn.griinstitute.org/uploads/files/web_design_test_2025_8_05_01_22_16_1754356936.png)

---

## 🛠 Tecnologias utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório**

```bash
git clone https://github.com/Dannebrock/Teste-Web-Design-GRI-Institute.git
cd seu-repositorio
npm install
npm run dev
```

**Exemplo de Uso**
```bash
<template>
  <PersonCard
      name="John Doe"
    role="Head of Strategy"
    company="GRI Institute"
    image="/assets/user.jpg"
    countryFlag="/assets/brazil-flag.svg"
    companyLogo="/assets/logo.png"
    skills="Leadership, Strategy, Growth"
    :match="76"
    /> 
</template>

<script setup>
import SkillBadge from './components/SkillBadge.vue'
</script>
```
<script setup>
import PersonCard from './components/PersonCard.vue';
</script>

**Acesse no Navegador**

http://localhost:5173