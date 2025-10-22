<template>
  <nav
    class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-gray-900">Yuna's Portfolio</span>
        </div>
        <div class="hidden md:block">
          <div
            class="mr-10 flex items-baseline space-x-4 lg:space-x-6 xl:space-x-8 text-gray-900 font-bold text-lg lg:text-xl"
          >
            <a
              href="#home"
              @click="scrollTo('home')"
              :class="[
                'relative transition-all duration-300 hover:text-yellow-500 pb-1 whitespace-nowrap',
                activeSection === 'home' ? 'text-yellow-500 border-b-2 border-yellow-500' : '',
              ]"
              >首頁</a
            >
            <a
              href="#about"
              @click="scrollTo('about')"
              :class="[
                'relative transition-all duration-300 hover:text-yellow-500 pb-1 whitespace-nowrap',
                activeSection === 'about' ? 'text-yellow-500 border-b-2 border-yellow-500' : '',
              ]"
              >關於我</a
            >
            <a
              href="#skills"
              @click="scrollTo('skills')"
              :class="[
                'relative transition-all duration-300 hover:text-yellow-500 pb-1 whitespace-nowrap',
                activeSection === 'skills' ? 'text-yellow-500 border-b-2 border-yellow-500' : '',
              ]"
              >技能</a
            >
            <a
              href="#experience"
              @click="scrollTo('experience')"
              :class="[
                'relative transition-all duration-300 hover:text-yellow-500 pb-1 whitespace-nowrap',
                activeSection === 'experience'
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : '',
              ]"
              >工作經驗</a
            >
            <a
              href="#jianice"
              @click="scrollTo('projects')"
              :class="[
                'relative transition-all duration-300 hover:text-yellow-500 pb-1 whitespace-nowrap',
                activeSection === 'projects' ? 'text-yellow-500 border-b-2 border-yellow-500' : '',
              ]"
              >作品展示</a
            >
            <!-- <a
                href="#contact"
                @click="scrollTo('contact')"
                :class="[
                  'relative transition-all duration-300 hover:text-yellow-500 pb-1 whitespace-nowrap',
                  activeSection === 'contact' ? 'text-yellow-500 border-b-2 border-yellow-500' : '',
                ]"
                >聯絡我</a
              > -->
          </div>
        </div>
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-600 hover:text-gray-900">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- 手機版選單 -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#home"
          @click="scrollTo('home')"
          :class="[
            'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
            activeSection === 'home'
              ? 'text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500'
              : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50',
          ]"
          >首頁</a
        >
        <a
          href="#about"
          @click="scrollTo('about')"
          :class="[
            'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
            activeSection === 'about'
              ? 'text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500'
              : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50',
          ]"
          >關於我</a
        >
        <a
          href="#experience"
          @click="scrollTo('experience')"
          :class="[
            'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
            activeSection === 'experience'
              ? 'text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500'
              : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50',
          ]"
          >經歷</a
        >
        <a
          href="#skills"
          @click="scrollTo('skills')"
          :class="[
            'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
            activeSection === 'skills'
              ? 'text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500'
              : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50',
          ]"
          >技能</a
        >
        <a
          href="#projects"
          @click="scrollTo('projects')"
          :class="[
            'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
            activeSection === 'projects'
              ? 'text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500'
              : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50',
          ]"
          >作品</a
        >
        <!-- <a
            href="#contact"
            @click="scrollTo('contact')"
            :class="[
              'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
              activeSection === 'contact'
                ? 'text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500'
                : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-50',
            ]"
            >聯絡我</a
          > -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// 響應式數據
const mobileMenuOpen = ref(false)
const activeSection = ref('home') // 追蹤當前選中的區塊

// 切換手機版選單
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 滾動到指定區塊
const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = elementId // 設置當前選中的區塊
  }
  mobileMenuOpen.value = false
}
</script>
