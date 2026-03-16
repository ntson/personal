<template>
  <div class="min-h-screen bg-white transition-colors flex flex-col">
    <header class="border-b border-gray-200">
      <nav class="max-w-4xl mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-xl font-medium text-black">
            ntson.dev
          </NuxtLink>
          <div class="flex items-center gap-6">
            <div class="flex gap-8">
              <NavLink path="/blog">Blog</NavLink>
              <NavLink path="/resume">Resume</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-12 flex-1 w-full">
      <slot></slot>
    </main>

    <footer class="border-t border-gray-200 mt-24">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <div class="flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Nguyen Tien Son.</p>
          <div class="flex gap-6">
            <NuxtLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-black transition-colors"
            >
              GitHub
            </NuxtLink>
            <NuxtLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-black transition-colors"
            >
              LinkedIn
            </NuxtLink>
            <NuxtLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-black transition-colors"
            >
              Twitter
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
