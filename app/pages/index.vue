<script setup lang="ts">
const { skills, isCompleted, isError } = await useSkills();
</script>

<template>
  <div class="space-y-16">
    <section class="space-y-6 flex items-start justify-between gap-8">
      <div class="space-y-6 flex-1">
        <h1 class="text-5xl text-black">Hi, I'm Son.</h1>
        <p class="text-xl text-gray-600 max-w-2xl leading-relaxed">
          I'm a frontend developer passionate about building beautiful,
          accessible, and performant web experiences.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwMTcxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Profile photo"
        class="w-32 h-32 rounded-full object-cover shrink-0"
      />
    </section>

    <section class="space-y-8">
      <h2 class="text-2xl text-black">About Me</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>
          I specialize in React, TypeScript, and modern web technologies. With
          over 7 years of experience, I've worked on everything from small
          startup MVPs to large-scale enterprise applications serving millions
          of users.
        </p>
        <p>
          My approach to development emphasizes clean code, thoughtful
          architecture, and user-centric design. I believe the best interfaces
          are invisible - they just work, intuitively and reliably.
        </p>
        <p>
          When I'm not coding, you'll find me contributing to open source,
          writing technical blog posts, or exploring the latest web
          technologies. I'm always excited to learn and share knowledge with the
          developer community.
        </p>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-2xl text-black">What I Do</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-2">
          <h3 class="font-medium text-black">Frontend Development</h3>
          <p class="text-gray-600 leading-relaxed">
            Building responsive, accessible web applications with React,
            TypeScript, and modern CSS.
          </p>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-black">UI/UX Implementation</h3>
          <p class="text-gray-600 leading-relaxed">
            Translating designs into pixel-perfect, performant user interfaces
            that delight users.
          </p>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-black">Performance Optimization</h3>
          <p class="text-gray-600 leading-relaxed">
            Analyzing and improving application performance for faster load
            times and better UX.
          </p>
        </div>
        <div class="space-y-2">
          <h3 class="font-medium text-black">Technical Mentorship</h3>
          <p class="text-gray-600 leading-relaxed">
            Guiding junior developers and sharing best practices to help teams
            grow and succeed.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-8" v-if="isCompleted && !isError">
      <h2 class="text-2xl text-black">Skills</h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill of skills"
          :key="skill.id"
          class="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm"
        >
          {{ skill.name }}
        </span>
      </div>
    </section>
  </div>
</template>
