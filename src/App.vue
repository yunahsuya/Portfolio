<template>
  <div class="min-h-screen bg-white">
    <!-- 導航欄 -->
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
                  activeSection === 'projects'
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : '',
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

    <!-- Hero Section -->
    <section id="home" class="pt-16 pb-3 sm:pt-20 md:pt-24 lg:pt-2 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- 圖片區域 -->
          <div class="flex justify-center lg:order-1">
            <div class="relative">
              <div
                class="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[30rem] xl:w-[27rem] xl:h-[32rem] bg-gradient-to-br from-yellow-400 to-yellow-400 rounded-full flex items-center justify-center"
              >
                <img
                  src="./assets/me.JPG"
                  alt="Yuna"
                  class="w-60 h-76 sm:w-76 sm:h-92 lg:w-92 lg:h-[28rem] xl:w-[25rem] xl:h-[30rem] rounded-full object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          <!-- 文字內容區域 -->
          <div class="order-1 lg:order-2 text-center lg:text-left">
            <h1
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Hello~我是
              <span class="text-yellow-500">Yuna</span>
            </h1>
            <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              畢業於台北科技大學資訊工程系，熱愛前端開發與使用者體驗設計，並具備資訊安全背景。<br
                class="hidden sm:block"
              />
              擅長 Vue 3 與 RWD 響應式設計，熟悉 Pinia、Vuetify、API
              串接與表單驗證，能將需求轉化為直覺、流暢又兼具安全性的產品。
            </p>
            <div
              class="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <div
                class="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <!-- 查看作品按鈕 -->
                <div
                  class="flex flex-col mt-1 sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <!-- 查看作品按鈕 - 手機版第一個，桌面版第一個 -->
                  <button
                    @click="scrollTo('projects')"
                    class="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center order-1 sm:order-1"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      ></path>
                    </svg>
                    查看作品
                  </button>

                  <!-- GitHub 按鈕 - 手機版第二個，桌面版第二個 -->
                  <a
                    href="https://github.com/yunahsuya?tab=repositories"
                    target="_blank"
                    class="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center order-2 sm:order-2"
                  >
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      ></path>
                    </svg>
                    GitHub
                  </a>

                  <!-- 信箱按鈕 - 手機版第三個，桌面版第三個 -->
                  <a
                    href="mailto:yunahsuya@gmail.com"
                    class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center order-3 sm:order-3"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    信箱
                  </a>

                  <!-- 電話按鈕 - 手機版第四個，桌面版第四個 -->
                  <a
                    href="tel:0905336968"
                    class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center order-4 sm:order-4"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    電話
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="pt-20 pb-40 bg-gray-100">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">關於我</p>
        </div>

        <div class="max-w-8xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- 卡片 1: 關於我 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-blue-600 text-2xl">👋</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900">關於我</h3>
              </div>
              <!-- 核心價值主張 -->
              <div class="mb-6">
                <!-- <h4 class="text-lg font-bold text-gray-900 mb-2">我的使命</h4> -->
                <p class="text-gray-600 leading-relaxed text-lg">
                  將複雜的技術轉化為直覺、流暢的用戶體驗，並融入資安思維，打造既美觀又安全的產品
                </p>
              </div>

              <!-- 專業背景 -->
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-blue-600 text-sm">🛡️</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">資安背景</h5>
                    <p class="text-gray-600 text-base">
                      大學期間專注資安實習，培養嚴謹的風險分析與問題解決能力
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-green-600 text-sm">🔄</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1 text-base">前端轉型</h4>
                    <p class="text-gray-600 text-base">
                      發現對介面設計的熱情，系統性學習前端技術，結合創意與嚴謹思維
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-purple-600 text-sm">✨</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">價值創造</h5>
                    <p class="text-gray-600 text-base">
                      程式是讓設計與價值被具體看見的語言，致力為用戶帶來實際價值與感受
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 卡片 2: 工作經驗 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-green-600 text-2xl">💼</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900">工作經驗</h3>
              </div>

              <!-- 核心成就數據 -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="text-center p-4 bg-blue-50 rounded-xl">
                  <div class="text-2xl font-bold text-blue-600 mb-1">176</div>
                  <div class="text-sm text-gray-600">系統漏洞處理</div>
                </div>
                <div class="text-center p-4 bg-orange-50 rounded-xl">
                  <div class="text-2xl font-bold text-orange-600 mb-1">5,343</div>
                  <div class="text-sm text-gray-600">員工模擬測試</div>
                </div>
                <div class="text-center p-4 bg-red-50 rounded-xl">
                  <div class="text-2xl font-bold text-red-600 mb-1">242</div>
                  <div class="text-sm text-gray-600">風險人員識別</div>
                </div>
                <div class="text-center p-4 bg-purple-50 rounded-xl">
                  <div class="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <div class="text-sm text-gray-600">專案完成率</div>
                </div>
              </div>

              <!-- 經驗亮點 -->
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-blue-600 text-sm">🔧</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">系統漏洞管理</h5>
                    <p class="text-gray-600 text-base">
                      處理 176 項系統漏洞，提出優化建議，提升使用者操作便利性
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-orange-600 text-sm">🎯</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">社交工程演練</h5>
                    <p class="text-gray-600 text-base">
                      設計釣魚測試範本，參與 5,343 名員工大規模模擬，揭露 242 位受影響人員
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-purple-600 text-sm">🔐</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">OAuth 2.0 研究</h5>
                    <p class="text-gray-600 text-base">
                      專注研究認證與授權流程，應用於專案模擬測試，累積紮實實務經驗
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 卡片 3: 轉職過程 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="flex items-center mb-3">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-purple-600 text-2xl">📚</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900">轉職過程</h3>
              </div>

              <!-- 轉職過程描述 -->
              <div class="mb-3">
                <p class="text-gray-600 leading-relaxed text-lg mb-3">
                  在半年的前端職訓課程中，我獨立規劃開發「JiaNice」智慧生活飲食健康管理平台。
                </p>
              </div>

              <!-- 專案概覽 -->
              <div class="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                <div class="flex items-center mb-2">
                  <span class="text-purple-600 text-lg mr-2">🏆</span>
                  <h4 class="font-semibold text-gray-900">JiaNice 智慧健康平台</h4>
                </div>
                <p class="text-gray-600 text-sm mb-3">
                  1 個月獨立開發，整合多項 API 與 AI 技術的全方位健康管理平台
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-white text-purple-600 rounded text-xs">MVC架構</span>
                  <span class="px-2 py-1 bg-white text-blue-600 rounded text-xs">SPA設計</span>
                  <span class="px-2 py-1 bg-white text-green-600 rounded text-xs">API整合</span>
                </div>
              </div>

              <!-- API整合 -->
              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-3 text-base">🔗 API 整合</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >健康署 API</span
                  >
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >OpenAI API</span
                  >
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >政府開放資料</span
                  >
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                    >第三方 API</span
                  >
                </div>
              </div>

              <!-- 心得分享 -->
              <div class="mt-3 mb-3">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-600 text-lg mr-2">💭</span>
                  <h4 class="font-semibold text-gray-900 text-base">學習心得</h4>
                </div>
                <div class="space-y-3 text-base text-gray-700">
                  <p class="leading-relaxed">
                    熟悉 Vue.js 生態系與組件化開發，實踐前後端分離架構。過程中強化了 API
                    整合、錯誤處理與使用者體驗優化能力。從零打造平台，學會將複雜需求拆解成模組化功能，並持續優化程式結構與效能。
                  </p>
                </div>
              </div>
            </div>

            <!-- 卡片 4: 未來展望 -->
            <div
              class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-orange-600 text-2xl">🚀</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900">未來展望</h3>
              </div>

              <!-- 核心願景 -->
              <div class="mb-6">
                <p class="text-gray-600 leading-relaxed text-lg mb-3">
                  持續精進前端與互動式產品設計能力，將創意思維與技術能力結合，打造具有影響力的數位產品
                </p>
              </div>

              <!-- 技術能力提升 -->
              <div class="space-y-4">
                <h4 class="font-semibold text-gray-900 mb-3 text-base">⚡ 技術能力提升</h4>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-blue-600 text-sm">🛡️</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">前後端整合</h5>
                    <p class="text-gray-600 text-base">掌握前後端技術，打造完整的產品生態系統</p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-green-600 text-sm">📊</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">資料視覺化</h5>
                    <p class="text-gray-600 text-base">將複雜數據轉化為直觀易懂的視覺呈現</p>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div
                    class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <span class="text-purple-600 text-sm">🎨</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-1 text-base">用戶體驗設計</h5>
                    <p class="text-gray-600 text-base">
                      以用戶為中心的設計思維，創造直觀且愉悅的互動體驗
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p class="text-xl text-gray-400">工作經歷</p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- Timeline Container -->
          <div class="relative">
            <!-- Timeline Line -->
            <div
              class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-purple-500"
            ></div>

            <div class="space-y-12">
              <!-- Experience 1 - 2024 -->
              <div class="relative flex items-start">
                <!-- Timeline Node -->
                <div class="relative z-10 flex-shrink-0">
                  <!-- 發光效果 - 在背景層 -->
                  <div
                    class="absolute inset-0 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"
                  ></div>
                  <!-- 主圓圈 - 在發光效果之上 -->
                  <div
                    class="relative w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  >
                    <span class="text-white font-bold text-sm relative z-10">2024</span>
                  </div>
                </div>

                <!-- Content Card -->
                <div class="ml-8 flex-1">
                  <div
                    class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                  >
                    <!-- Card Decoration -->
                    <div
                      class="absolute -left-4 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"
                    ></div>

                    <!-- Header -->
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">資安暑期實習生</h3>
                        <p class="text-blue-600 font-semibold text-lg">財團法人資訊工業策進會</p>
                        <p class="text-gray-500 text-sm">2024年7月 - 2024年8月</p>
                      </div>
                      <div class="hidden md:block">
                        <span
                          class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >資安實習</span
                        >
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="space-y-4">
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 class="font-semibold text-gray-900 mb-1">
                            OAuth 2.0 認證與授權流程演練
                          </h4>
                          <p class="text-gray-600">
                            研究並演練 OAuth 2.0
                            認證與授權流程，並應用於專案模擬測試，累積實務經驗。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Experience 2 - 2023 -->
              <div class="relative flex items-start">
                <!-- Timeline Node -->
                <div class="relative z-10 flex-shrink-0">
                  <!-- 發光效果 - 在背景層 -->
                  <div
                    class="absolute inset-0 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-pulse"
                  ></div>
                  <!-- 主圓圈 - 在發光效果之上 -->
                  <div
                    class="relative w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  >
                    <span class="text-white font-bold text-sm relative z-10">2023</span>
                  </div>
                </div>

                <!-- Content Card -->
                <div class="ml-8 flex-1">
                  <div
                    class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                  >
                    <!-- Card Decoration -->
                    <div
                      class="absolute -left-4 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"
                    ></div>

                    <!-- Header -->
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">資安管理實習生</h3>
                        <p class="text-orange-600 font-semibold text-lg">台灣大哥大股份有限公司</p>
                        <p class="text-gray-500 text-sm">2023年5月 - 2023年9月</p>
                      </div>
                      <div class="hidden md:block">
                        <span
                          class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                          >資安管理</span
                        >
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="space-y-4">
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 class="font-semibold text-gray-900 mb-1">專案協作與使用者體驗改善</h4>
                          <p class="text-gray-600">
                            參與專案流程與功能驗證，追蹤 176
                            項系統漏洞並提出優化建議，提升操作便利性。
                          </p>
                        </div>
                      </div>

                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 class="font-semibold text-gray-900 mb-1">社交工程模擬協作</h4>
                          <p class="text-gray-600">
                            參與大規模模擬（5343 名員工），揭露 242 位受影響人員，強化專案協作能力。
                          </p>
                        </div>
                      </div>

                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 class="font-semibold text-gray-900 mb-1">產品分析與策略建議</h4>
                          <p class="text-gray-600">
                            進行競品分析，提出改善方案，增強產品功能規劃與前端設計思維。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Experience 3 - 2022 -->
              <div class="relative flex items-start">
                <!-- Timeline Node -->
                <div class="relative z-10 flex-shrink-0">
                  <!-- 發光效果 - 在背景層 -->
                  <div
                    class="absolute inset-0 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"
                  ></div>
                  <!-- 主圓圈 - 在發光效果之上 -->
                  <div
                    class="relative w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  >
                    <span class="text-white font-bold text-sm relative z-10">2022</span>
                  </div>
                </div>

                <!-- Content Card -->
                <div class="ml-8 flex-1">
                  <div
                    class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                  >
                    <!-- Card Decoration -->
                    <div
                      class="absolute -left-4 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"
                    ></div>

                    <!-- Header -->
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-1">資訊工讀生</h3>
                        <p class="text-purple-600 font-semibold text-lg">
                          新光合成纖維股份有限公司
                        </p>
                        <p class="text-gray-500 text-sm">2022年7月 - 2022年9月</p>
                      </div>
                      <div class="hidden md:block">
                        <span
                          class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                          >資訊工讀</span
                        >
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="space-y-4">
                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 class="font-semibold text-gray-900 mb-1">報表排版與資料整理</h4>
                          <p class="text-gray-600">
                            整理 ERP 系統報表，確保格式清晰易讀，提升資料呈現的專業性。
                          </p>
                        </div>
                      </div>

                      <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 class="font-semibold text-gray-900 mb-1">基本 SQL 查詢與資料分析</h4>
                          <p class="text-gray-600">進行簡單資料查詢，累積資料庫操作經驗。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

            <!-- Skills Section -->
            <section id="skills" class="py-20 bg-gray-100">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p class="text-xl text-gray-400">相關專業技能</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend Skills -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-blue-600 text-xl">🎨</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">前端技術</h3>
            </div>
            <div class="space-y-2">
              <!-- Vue.js -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">Vue.js</h4>
                <p class="text-sm text-gray-600">熟悉 Vue 3 Composition API，具備組件化方式開發並管理狀態。</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- Vite -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">Vite</h4>
                <p class="text-sm text-gray-600">現代化建構工具，快速開發與熱重載，提升開發效率</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- Vuetify -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">Vuetify</h4>
                <p class="text-sm text-gray-600">Material Design 組件庫，快速構建美觀的響應式介面</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- Pinia -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">Pinia</h4>
                <p class="text-sm text-gray-600">Vue 3 官方狀態管理，簡化複雜應用程式的資料流管理</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- 基礎技術 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">基礎技術</h4>
                <p class="text-sm text-gray-600">HTML5、CSS3、JavaScript ES6+，具備 RWD 響應式設計能力</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- 動畫與互動 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">動畫與互動</h4>
                <p class="text-sm text-gray-600">使用 Swiper 做輪播效果，並搭配 GSAP 打造更流暢的動畫體驗。</p>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-green-600 text-xl">⚡</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">後端技術</h3>
            </div>
            <div class="space-y-2">
              <!-- Node.js -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">Node.js</h4>
                <p class="text-sm text-gray-600">JavaScript 後端開發，熟悉 Express 框架與模組化開發</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- RESTful API -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">RESTful API</h4>
                <p class="text-sm text-gray-600">設計與實作 RESTful 架構，支援前、後端分離的架構</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- API 整合 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">API 整合</h4>
                <p class="text-sm text-gray-600">整合第三方 API，包含政府開放資料、健康署 API、OpenAI API 等</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- 資料庫操作 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">資料庫操作</h4>
                <p class="text-sm text-gray-600">MongoDB 操作經驗，具備基本的 SQL 查詢與資料分析能力</p>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-purple-600 text-xl">🛠️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">工具與其他</h3>
            </div>
            <div class="space-y-2">
              <!-- 版本控制 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">版本控制</h4>
                <p class="text-sm text-gray-600">Git 版本控制，熟悉分支管理與協作開發流程</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- 程式碼品質 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">程式碼品質</h4>
                <p class="text-sm text-gray-600">ESLint 程式碼檢查，確保程式碼風格一致性與品質</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- HTTP 請求 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">HTTP 請求</h4>
                <p class="text-sm text-gray-600">Axios 處理 API 請求，具備錯誤處理與攔截器設定經驗</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- 開發環境 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">開發環境</h4>
                <p class="text-sm text-gray-600">熟悉現代開發工具，包含 Cursor、VS Code 等編輯器</p>
              </div>
              
              <div class="border-t border-gray-200"></div>
              
              <!-- 專案管理 -->
              <div class="p-2 rounded-xl">
                <h4 class="font-semibold text-gray-900 mb-1">專案管理</h4>
                <p class="text-sm text-gray-600">具備獨立專案開發經驗，從需求分析到部署上線</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      

    

  

    <!-- JiaNice Featured Project Section -->
    <section id="jianice" class="py-20 bg-white">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">專題作品</h2>
          <p class="text-xl text-gray-600">JiaNice - 智慧健康飲食平台</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <!-- 桌面版：左右分欄 -->
            <div class="hidden lg:grid lg:grid-cols-2">
              <!-- 左側：專案詳情 -->
              <div class="p-8 lg:p-12">
                <div class="mb-6">
                  <h3 class="text-3xl font-bold text-gray-900 mb-4">JiaNice</h3>
                  <p class="text-lg text-gray-600 leading-relaxed mb-6">
                    智慧健康飲食平台，整合 API 與 AI
                    提供個人化健康建議。透過餐廳隨機抽選、營養提醒與回憶錄系統，為使用者打造完整的健康飲食體驗。
                  </p>
                </div>

                <!-- 專題特色 -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">專題特色</h4>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span>整合健康署 API 與 OpenData 資料平台</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span>SPA 架構設計與響應式介面</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span>個人化健康建議與營養分析</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span>餐廳隨機抽選與回憶錄系統</span>
                    </li>
                  </ul>
                </div>

                <!-- 按鈕 -->
                <div class="flex flex-col sm:flex-row gap-4 mt-15">
                  <!-- GitHub -->
                  <a
                    class="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    href="https://github.com/yunahsuya/JIANICE-vuetify-project"
                    target="_blank"
                  >
                    GitHub
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>

                  <!-- Demo -->
                  <a
                    class="inline-flex items-center justify-center px-8 py-4  bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    href="https://yunahsuya.github.io/JIANICE-vuetify-project/"
                    target="_blank"
                  >
                    <span>Demo</span>
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>

                  <!-- 更多作品 -->
                  <!-- <button
                @click="scrollTo('projects')"
                class="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 ease-in-out"
              >
                更多作品
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button> -->
                </div>
              </div>

              <!-- 右側：專案截圖和技術標籤 -->
              <div class="bg-gray-50">
                <!-- 專案截圖 -->
                <div class="p-3 pb-0">
                  <!-- 固定高度的圖片容器 -->
                  <div class="relative w-full h-80 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      :src="jianiceImages[currentImageIndex]"
                      alt="JiaNice 專案截圖"
                      class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                      @error="console.log('圖片載入錯誤:', jianiceImages[currentImageIndex])"
                      @load="console.log('圖片載入成功:', jianiceImages[currentImageIndex])"
                    />

                    <!-- 輪播控制按鈕 -->
                    <button
                      @click="previousImage"
                      class="absolute top-1/2 transform -translate-y-1/2 w-10 h-10 hover:bg-opacity-70 text-black rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    >
                      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      @click="nextImage"
                      class="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 hover:bg-opacity-70 text-black rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    >
                      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- 圖片指示器 -->
                  <div class="flex justify-center mt-4 space-x-2">
                    <button
                      v-for="(image, index) in jianiceImages"
                      :key="index"
                      @click="currentImageIndex = index"
                      :class="[
                        'w-3 h-3 rounded-full transition-all duration-300',
                        currentImageIndex === index ? 'bg-orange-500' : 'bg-gray-300',
                      ]"
                    ></button>
                  </div>
                </div>

                <!-- 技術標籤 -->
                <div class="px-8 lg:px-12 mt-10 pb-8">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">使用技術</h4>
                  <div class="flex flex-wrap gap-3">
                    <span
                      class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >Vue.js</span
                    >
                    <span
                      class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                      >Node.js</span
                    >
                    <span
                      class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >MongoDB</span
                    >
                    <span
                      class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                      >Pinia</span
                    >
                    <span
                      class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >Vuetify</span
                    >
                    <span
                      class="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                      >RESTful API</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- 手機版：上下排列 -->
            <div class="lg:hidden">
              <!-- 專案截圖 -->
              <div class="p-6 bg-gray-50">
                <div class="w-full max-w-md mx-auto">
                  <!-- 固定高度的圖片容器 -->
                  <div class="relative w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      :src="jianiceImages[currentImageIndex]"
                      alt="JiaNice 專案截圖"
                      class="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                    />

                    <!-- 輪播控制按鈕 -->
                    <button
                      @click="previousImage"
                      class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      @click="nextImage"
                      class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- 圖片指示器 -->
                  <div class="flex justify-center mt-4 space-x-2">
                    <button
                      v-for="(image, index) in jianiceImages"
                      :key="index"
                      @click="currentImageIndex = index"
                      :class="[
                        'w-3 h-3 rounded-full transition-all duration-300',
                        currentImageIndex === index ? 'bg-orange-500' : 'bg-gray-300',
                      ]"
                    ></button>
                  </div>
                </div>
              </div>

              <!-- 技術標籤 -->
              <div class="px-6 pb-6 bg-gray-50">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">使用技術</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >Node.js</span
                  >
                  <span
                    class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >MongoDB</span
                  >
                  <span
                    class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                    >Pinia</span
                  >
                  <span
                    class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                    >Vuetify</span
                  >
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >RESTful API</span
                  >
                </div>
              </div>

              <!-- 專案詳情 -->
              <div class="p-6">
                <div class="mb-6">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">JiaNice</h3>
                  <p class="text-base text-gray-600 leading-relaxed mb-6">
                    智慧健康飲食平台，整合 API 與 AI
                    提供個人化健康建議。透過餐廳隨機抽選、營養提醒與回憶錄系統，為使用者打造完整的健康飲食體驗。
                  </p>
                </div>

                <!-- 專題特色 -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">專題特色</h4>
                  <ul class="space-y-2 text-gray-600">
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span class="text-sm">整合健康署 API 與 OpenData 資料平台</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span class="text-sm">SPA 架構設計與響應式介面</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span class="text-sm">個人化健康建議與營養分析</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-500 mr-2 mt-1">✓</span>
                      <span class="text-sm">餐廳隨機抽選與回憶錄系統</span>
                    </li>
                  </ul>
                </div>

                <!-- 按鈕 -->
                <div class="flex flex-col gap-3">
                  <!-- Demo -->
                  <a
                    class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    href="https://yunahsuya.github.io/JIANICE-vuetify-project/"
                    target="_blank"
                  >
                    <span>Demo</span>
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>

                  <!-- GitHub -->
                  <a
                    class="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    href="https://github.com/yunahsuya/JIANICE-vuetify-project"
                    target="_blank"
                  >
                    GitHub
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>

                  <!-- 更多作品 -->
                  <button
                    @click="scrollTo('projects')"
                    class="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 ease-in-out"
                  >
                    更多作品
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-100 pb-30">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Demo</h2>
          <p class="text-xl text-gray-600">作品展示</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 (多益英文單字配對小遊戲) -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div
              class="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
            >
              <img
                src="./assets/JQGame.jpg"
                alt="多益英文單字配對小遊戲"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">多益英文單字配對小遊戲</h3>
              <p class="text-gray-600 mb-4 flex-grow">互動式學習遊戲，提高英文單字記憶效率。</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >JavaScript</span
                >
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >JQuery</span
                >
              </div>

              <div class="flex justify-between items-center mt-auto">
                <!-- GitHub -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://github.com/yunahsuya/JQ_English-Matching-Game"
                  target="_blank"
                >
                  GitHub
                  <span class="mdi mdi-github ml-2"></span>
                </a>

                <!-- Demo -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://yunahsuya.github.io/JQ_English-Matching-Game/"
                  target="_blank"
                  >Demo →</a
                >
              </div>
            </div>
          </div>

          <!-- Project 2 (Yuna's Portfolio 履歷網站) -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"
            >
              <img
                src="./assets/YunaPortfolio.jpg"
                alt="Yuna's Portfolio 履歷網站"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Yuna's Portfolio 履歷網站</h3>
              <p class="text-gray-600 mb-4 flex-grow">
                採用 Vue 3 + Vite 作為核心框架，使用 Tailwind CSS 與 DaisyUI 實現響應式設計，整合
                ESLint 與 Prettier 確保程式碼品質。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vue 3</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Vite</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >Tailwind CSS</span
                >
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >DaisyUI</span
                >

                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ESLint</span>

                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >Prettier</span
                >
              </div>

              <div class="flex justify-between items-center mt-auto">
                <!-- GitHub -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://github.com/yunahsuya/Portfolio"
                  target="_blank"
                >
                  GitHub
                  <span class="mdi mdi-github ml-2"></span>
                </a>

                <!-- Demo -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://yunahsuya.github.io/Portfolio/"
                  target="_blank"
                  >Demo →</a
                >
              </div>
            </div>
          </div>

          <!-- Project 3 (環保餐廳 LineBot 機器人) -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"
            >
              <img
                src="https://camo.githubusercontent.com/25172a16fba260cbf771132dee40ab4ed9a0401700acde9d4c7956f6e7838fec/68747470733a2f2f6861636b6d642e696f2f5f75706c6f6164732f4279687a4663644778672e706e67"
                alt="環保餐廳 LineBot 機器人"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">環保餐廳 LineBot 機器人</h3>
              <p class="text-gray-600 mb-4 flex-grow">
                整合環境部開放資料 API，透過定位自動推薦最近的環保認證餐廳，使用 Node.js 後端與
                Haversine 公式計算距離，提供餐廳資訊與一鍵導航。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >Node.js</span
                >

                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >Express</span
                >

                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >Axios
                </span>

                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >LINE Bot SDK</span
                >

                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >Nodemon
                </span>
              </div>

              <div class="flex justify-between items-center mt-auto">
                <!-- GitHub -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://github.com/yunahsuya/LineBot_ECO-FRIENDLY-RESTAURANT_HW"
                  target="_blank"
                >
                  GitHub
                  <span class="mdi mdi-github ml-2"></span>
                </a>

                <!-- Demo -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://yunahsuya.github.io/Bootstrap/"
                  target="_blank"
                  >Demo →</a
                >
              </div>
            </div>
          </div>

          <!-- Project 4 (CLOCK時鐘) -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div
              class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
            >
              <img src="./assets/CLOCK.jpg" alt="CLOCK時鐘" class="w-full h-full object-cover" />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">CLOCK</h3>
              <p class="text-gray-600 mb-4 flex-grow">
                用 HTML、CSS 與 JavaScript 製作的動態時鐘，結合指針與數字顯示，能即時同步系統時間。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >JavaScript</span
                >
              </div>

              <div class="flex justify-between items-center mt-auto">
                <!-- GitHub -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://github.com/yunahsuya/JS_CLOCK"
                  target="_blank"
                >
                  GitHub
                  <span class="mdi mdi-github ml-2"></span>
                </a>

                <!-- Demo -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://yunahsuya.github.io/JS_CLOCK/"
                  target="_blank"
                  >Demo →</a
                >
              </div>
            </div>
          </div>

          <!-- Project 5 (Bootstrap) -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"
            >
              <img
                src="./assets/bootstrap.jpg"
                alt="Bootstrap切版"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Bootstrap</h3>
              <p class="text-gray-600 mb-4 flex-grow">
                以 Bootstrap 5
                製作的響應式展示網站。能自動依照螢幕大小調整版面，模擬一般商業網站的基本排版。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >JavaScript</span
                >
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >Bootstrap</span
                >
              </div>

              <div class="flex justify-between items-center mt-auto">
                <!-- GitHub -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://github.com/yunahsuya/Bootstrap"
                  target="_blank"
                >
                  GitHub
                  <span class="mdi mdi-github ml-2"></span>
                </a>

                <!-- Demo -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://yunahsuya.github.io/Bootstrap/"
                  target="_blank"
                  >Demo →</a
                >
              </div>
            </div>
          </div>

          <!-- Project 6 (文章介紹) -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center"
            >
              <img
                src="./assets/ArticleIntroduction.jpg"
                alt="文章介紹"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">知識與文章分享</h3>
              <p class="text-gray-600 mb-4 flex-grow">
                我喜歡將專案經驗、學習心得和生活觀察整理成文章分享，不僅能幫助自己梳理思路，也希望透過文字傳遞價值給讀者。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CSS</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >Linux</span
                >

                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >GitHub</span
                >

                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >Unity</span
                >
              </div>

              <div class="flex justify-between items-center mt-auto">
                <!-- GitHub -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://github.com/yunahsuya/Bootstrap"
                  target="_blank"
                >
                  GitHub
                  <span class="mdi mdi-github ml-2"></span>
                </a>

                <!-- Demo -->
                <a
                  class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  href="https://vocus.cc/salon/6647b6a6fd89780001f99044"
                  target="_blank"
                  >Demo →</a
                >
              </div>
            </div>
          </div>

          <!--  -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <!-- <section id="contact" class="py-20 bg-white-50">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-5">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p class="text-xl text-gray-600 mb-10">聯絡我</p>
        </div> -->

    <!-- 歡迎訊息 -->
    <!-- <div class="max-w-3xl mx-auto text-center mb-12">
      <p class="text-lg text-gray-600 leading-relaxed">
        很高興認識你！如果你對我的作品感興趣，或是有任何合作機會，歡迎隨時與我聯繫。
        我通常在 <span class="font-semibold text-yellow-600">週一至週五 9:00-18:00</span> 比較容易聯絡到。
      </p>
    </div>

        <div class="flex justify-center"> -->
    <!-- Contact Info -->
    <!-- <div class="max-w-2xl w-full">
            <div class="grid md:grid-cols-2 gap-6"> -->
    <!-- 聯絡方式 -->
    <!-- <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                  聯絡方式
                </h3>

                <div
                  class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-blue-600">📧</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:yunahsuya@gmail.com"
                      class="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      yunahsuya@gmail.com
                    </a>
                  </div>
                </div>

                <div
                  class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-green-600">📱</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">電話</p>
                    <a
                      href="tel:0905336968"
                      class="text-green-500 hover:text-green-700 transition-colors"
                    >
                      0905 336 968
                    </a>
                  </div>
                </div>

                <div
                  class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                  >
                    <span class="text-purple-600">📍</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">位置</p>
                    <p class="text-gray-600">台北市</p>
                  </div>
                </div>
              </div> -->

    <!-- 相關連結 -->
    <!-- <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">
                  相關連結
                </h3>

                <div
                  class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span class="text-gray-600">💻</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">GitHub</p>
                    <a
                      href="https://github.com/yunahsuya?tab=repositories"
                      target="_blank"
                      class="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      查看我的作品
                    </a>
                  </div>
                </div>

                <div
                  class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span class="text-pink-600">📸</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">文章分享</p>
                    <a
                      href="https://vocus.cc/salon/6647b6a6fd89780001f99044"
                      class="text-pink-500 hover:text-pink-700 transition-colors"
                      target="_blank"
                    >
                      查看我的文章
                    </a>
                  </div>
                </div>

                <div
                  class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-blue-600">💼</span>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">履歷</p>
                    <a
                      href="https://drive.google.com/file/d/108odCkyNMuu4_pu0VKbeOlljNyrCGfmf/view?usp=drive_link"
                      class="text-blue-500 hover:text-blue-700 transition-colors"
                      target="_blank"
                    >
                      個人履歷
                    </a>
                  </div>
                </div>
              </div>
            </div> -->

    <!-- 聯絡時間說明 -->
    <!-- <div class="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <div class="flex items-center justify-center gap-3">
            <span class="text-yellow-600 text-xl">⏰</span>
            <div class="text-center">
              <p class="font-semibold text-gray-900">最佳聯絡時間</p>
              <p class="text-gray-600">週一至週五 9:00-18:00 | 通常會在 24 小時內回覆</p>
            </div>
          </div>
        </div> -->

    <!-- 快速聯絡按鈕 -->
    <!-- <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:yunahsuya@gmail.com" class="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300">
            <span class="mr-2">📧</span>
            發送 Email
          </a>
          <a href="tel:0905336968" class="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300">
            <span class="mr-2">📱</span>
            撥打電話
          </a>
        </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-30 pb-15">
      <!-- 主要內容區域 -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 個人資訊 -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <div
                class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4"
              >
                <!-- <span class="text-2xl">👩‍💻</span> -->
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2423/2423917.png"
                  alt="Vue.js"
                  class="w-18 h-18"
                />
              </div>
              <h3 class="text-5xl font-bold">Yuna's Portfolio</h3>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed text-lg">
              前端開發工程師，專精於 Vue.js、React 和現代前端技術。
              致力於創造美觀且功能豐富的用戶體驗，讓技術與設計完美結合。
            </p>
            <div class="flex space-x-4">
              <a
                href="https://github.com/yunahsuya?tab=repositories"
                target="_blank"
                class="w-15 h-15 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="mailto:yunahsuya@gmail.com"
                class="w-15 h-15 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="tel:0905336968"
                class="w-15 h-15 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <a
                href="https://vocus.cc/salon/6647b6a6fd89780001f99044"
                target="_blank"
                class="w-15 h-15 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </a>
            </div>

            <!-- 額外資訊 -->
            <div class="mt-8 text-center">
              <div class="text-sm text-gray-500">
                <span class="flex">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  最佳聯絡時間：週一至週五 9:00-18:00
                </span>

                <span class="flex items-center mt-2">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  通常會在 24 小時內回覆
                </span>
              </div>
            </div>

            <!-- Yuna's Portfolio 採用的技術 -->
            <!-- <div class="mt-8">
              <h4 class="text-lg font-semibold mb-4 text-yellow-400">
                Yuna's Portfolio 採用的技術
              </h4>
              <div class="space-y-3">
                <div>
                  <h5 class="text-sm font-medium text-gray-400 mb-2">前端框架</h5>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium"
                      >Vue 3</span
                    >
                    <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium"
                      >Vite</span
                    >
                  </div>
                </div>
                <div>
                  <h5 class="text-sm font-medium text-gray-400 mb-2">樣式與工具</h5>
                  <div class="flex flex-wrap gap-2 ">
                    <span class="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-medium"
                      >Tailwind CSS</span
                    >
                    <span class="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-medium"
                      >DaisyUI</span
                    >
                    <span class="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-medium"
                      >ESLint</span
                    >
                    <span class="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-medium"
                      >Prettier</span
                    >
                    <span class="px-3 py-1 bg-cyan-600 text-white rounded-full text-xs font-medium"
                      >Git</span
                    >
                  </div>
                </div>
              </div>
            </div> -->
          </div>

          <!-- 快速導航 -->
          <div>
            <h4 class="text-xl font-semibold mb-6 text-yellow-400 ml-1">快速導航</h4>
            <ul class="space-y-3 text-lg">
              <li>
                <a
                  href="#home"
                  @click="scrollTo('home')"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  首頁
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  @click="scrollTo('about')"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  關於我
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  @click="scrollTo('skills')"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  技能
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  @click="scrollTo('experience')"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  工作經驗
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  @click="scrollTo('projects')"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  作品展示
                </a>
              </li>
              <!-- <li>
                <a
                  href="#contact"
                  @click="scrollTo('contact')"
                  class="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                >
                  <span
                    class="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  聯絡我
                </a>
              </li> -->
            </ul>
          </div>

          <!-- 技術專長 -->
          <div>
            <h4 class="text-xl font-semibold mb-4 text-yellow-400">技術專長</h4>
            <div class="space-y-4">
              <div>
                <h5 class="text-md font-medium text-gray-400 mb-2">前端技術</h5>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">HTML</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">CSS</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >JavaScript</span
                  >
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">RWD</span>

                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Vue.js</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >Vue Router</span
                  >
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Pinia</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Vite</span>

                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Tailwind</span>
                </div>
              </div>

              <!--  -->

              <div>
                <h5 class="text-md font-medium text-gray-400 mb-2 mt-5">套件與框架</h5>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Node.js</span>

                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Axios</span>

                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Vuetify</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Daisyui</span>

                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Swiper</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Gsap</span>
                </div>
              </div>

              <div>
                <h5 class="text-md font-medium text-gray-400 mb-2 mt-5">開發工具與其他</h5>
                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >RESTfulAPI</span
                  >
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">API</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Git</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Eslint</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Prettier</span>

                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Cursor</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Chatgpt</span>
                  <span class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Gemini</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分隔線 -->
        <div class="border-t border-gray-700 mt-10 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- 版權資訊 -->
            <div class="text-center md:text-left md:mb-0">
              <p class="text-gray-400 text-sm">
                © 2025 許庭瑋 (Yuna). 版權所有 |
                <span class="text-yellow-400">Made with ❤️ in Taiwan</span>
              </p>
            </div>

            <!-- 聯絡資訊 -->
            <div
              class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400"
            >
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:yunahsuya@gmail.com" class="hover:text-yellow-400 transition-colors"
                  >yunahsuya@gmail.com</a
                >
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:0905336968" class="hover:text-yellow-400 transition-colors"
                  >0905-336-968</a
                >
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>台北市</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- 回到最上面按鈕 -->
    <Transition
      enter-active-class="transition-all duration-700 ease-out"
      enter-from-class="opacity-0 transform translate-y-4 scale-95"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition-all duration-500 ease-in"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform translate-y-4 scale-95"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl z-50 flex items-center justify-center group"
      >
        <svg
          class="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 響應式數據
const mobileMenuOpen = ref(false)
const currentImageIndex = ref(0)
const activeSection = ref('home') // 追蹤當前選中的區塊
const showBackToTop = ref(false) // 控制回到頂部按鈕的顯示

// 添加圖片陣列 (使用 Vite 的動態導入)
const jianiceImages = ref([
  new URL('./assets/JiaNice.jpg', import.meta.url).href,
  new URL('./assets/JIANICE-restaurant.jpg', import.meta.url).href,
  new URL('./assets/JIANICE-news.jpg', import.meta.url).href,
  new URL('./assets/JIANICE-diary.jpg', import.meta.url).href,
  new URL('./assets/JIANICE-Manager.jpg', import.meta.url).href,
  new URL('./assets/JIANICE-users.jpg', import.meta.url).href,
])

// 手動輪播控制
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % jianiceImages.value.length
}

const previousImage = () => {
  currentImageIndex.value =
    currentImageIndex.value === 0 ? jianiceImages.value.length - 1 : currentImageIndex.value - 1
}

// 在組件掛載時添加滾動監聽
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 在組件卸載時清理滾動監聽
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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

// 回到最上面
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// 監聽滾動事件
const handleScroll = () => {
  // 當滾動超過 300px 時顯示按鈕
  showBackToTop.value = window.scrollY > 300
}
</script>
