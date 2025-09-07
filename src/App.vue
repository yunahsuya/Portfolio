<template>
  <div class="min-h-screen bg-gray-50">
    
    <!-- 導航欄 -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-gray-900">Yuna Portfolio</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-9 text-gray-900 font-bold text-xl">
              <a href="#home" @click="scrollTo('home')" class="nav-link">首頁</a>
              <a href="#about" @click="scrollTo('about')" class="nav-link">關於我</a>
              <a href="#skills" @click="scrollTo('skills')" class="nav-link">技能</a>
              <a href="#experience" @click="scrollTo('experience')" class="nav-link">工作經驗</a>
              <a href="#projects" @click="scrollTo('projects')" class="nav-link">作品展示</a>
              <a href="#contact" @click="scrollTo('contact')" class="nav-link">聯絡</a>
            </div>
          </div>
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-600 hover:text-gray-900">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- 手機版選單 -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" @click="scrollTo('home')" class="mobile-nav-link">首頁</a>
          <a href="#about" @click="scrollTo('about')" class="mobile-nav-link">關於我</a>
          <a href="#experience" @click="scrollTo('experience')" class="mobile-nav-link">經歷</a>
          <a href="#skills" @click="scrollTo('skills')" class="mobile-nav-link">技能</a>
          <a href="#projects" @click="scrollTo('projects')" class="mobile-nav-link">作品</a>
          <a href="#contact" @click="scrollTo('contact')" class="mobile-nav-link">聯絡我</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
         <div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello~我是
              <span class="text-yellow-500">Yuna</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              畢業於台北科技大學資訊工程系。熱愛 前端開發與使用者體驗設計，同時具備 資安背景🔒<br>
            </p>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              曾獨立開發「JiaNice 智慧健康飲食平台」，整合多種 API 並實作前後端分離架構<br>
            </p>
            
             <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              我的專長是將 複雜需求轉化為直覺、流暢的使用者體驗，同時兼顧安全性與穩定性✨<br>
            </p>

            <!-- <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              前端開發工程師，專精於 Vue.js、React 和現代前端技術。
              致力於創造美觀且功能豐富的用戶體驗，讓技術與設計完美結合。
            </p> -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="scrollTo('projects')" class="btn-primary">
                查看作品
              </button>
              <button @click="scrollTo('contact')" class="btn-secondary">
                聯絡我
              </button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div class="w-80 h-98 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <img src="./assets/me.JPG" 
                     alt="Yuna" 
                     class="w-72 h-90 rounded-full object-cover shadow-xl" />
              </div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span class="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">關於我</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            一位熱愛技術的前端開發工程師，擁有豐富的網頁開發經驗
          </p>
        </div>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">我的故事</h3>
              <div class="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  我是一位充滿熱忱的前端開發工程師，專精於使用 Vue.js、React、TypeScript 等現代前端技術來建立
                  美觀且功能豐富的用戶介面。我相信好的設計和優秀的用戶體驗是成功產品的關鍵。
                </p>
                <p>
                  在過去的工作經驗中，我參與了多個大型專案的開發，從電商平台到企業級應用系統，
                  每個專案都讓我學習到新的技術和最佳實踐。我熱愛學習新技術，並持續關注前端領域的最新發展。
                </p>
                <p>
                  除了技術能力外，我也注重團隊合作和溝通，相信透過良好的協作能夠創造出更好的產品。
                  我期待能夠在新的挑戰中繼續成長，並為團隊帶來價值。
                </p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div class="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div class="text-gray-600">年開發經驗</div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div class="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div class="text-gray-600">專案完成</div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div class="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div class="text-gray-600">技術棧掌握</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">工作經歷</h2>
          <p class="text-xl text-gray-600">豐富的工作經驗，持續成長與學習</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <!-- Experience 1 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-bold">2022</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">資深前端工程師</h3>
                <p class="text-blue-600 font-semibold mb-4">科技股份有限公司</p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2 mt-1">•</span>
                    負責公司主要產品的前端開發與維護，使用 Vue 3 + TypeScript 技術棧
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2 mt-1">•</span>
                    帶領 3 人前端團隊，制定開發規範並提升團隊開發效率 40%
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2 mt-1">•</span>
                    優化網站效能，透過代碼分割和懶加載將載入速度提升 60%
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 mr-2 mt-1">•</span>
                    與設計師和後端工程師密切合作，確保產品品質和用戶體驗
                  </li>
                </ul>
              </div>
            </div>

            <!-- Experience 2 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-green-600 font-bold">2021</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">前端工程師</h3>
                <p class="text-green-600 font-semibold mb-4">數位行銷公司</p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">•</span>
                    開發多個客戶網站與電商平台，使用 React 和現代 CSS 框架
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">•</span>
                    建立響應式網頁應用，確保在各種裝置上的完美顯示
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">•</span>
                    與設計師合作實現 UI/UX 設計，並協助客戶提升網站轉換率 25%
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">•</span>
                    參與敏捷開發流程，與跨職能團隊協作完成專案目標
                  </li>
                </ul>
              </div>
            </div>

            <!-- Experience 3 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-purple-600 font-bold">2020</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">前端實習生</h3>
                <p class="text-purple-600 font-semibold mb-4">網路科技公司</p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="text-purple-500 mr-2 mt-1">•</span>
                    學習前端開發基礎知識，包括 HTML、CSS、JavaScript 和 Vue.js
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 mr-2 mt-1">•</span>
                    協助維護公司內部系統，修復 bug 並添加新功能
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 mr-2 mt-1">•</span>
                    參與團隊程式碼審查，學習最佳實踐和程式碼規範
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 mr-2 mt-1">•</span>
                    完成多個小型專案開發，累積實務經驗
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-7xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p class="text-xl text-gray-600">相關專業技能</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend Skills -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">前端技術</h3>
            </div>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Vue.js</span>
                  <span class="text-gray-500">90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">React</span>
                  <span class="text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">TypeScript</span>
                  <span class="text-gray-500">80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">JavaScript</span>
                  <span class="text-gray-500">95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Styling -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-green-600 text-xl">🎨</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">樣式設計</h3>
            </div>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">CSS3</span>
                  <span class="text-gray-500">90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Tailwind CSS</span>
                  <span class="text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">SCSS/Sass</span>
                  <span class="text-gray-500">80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">UI/UX 設計</span>
                  <span class="text-gray-500">75%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-purple-600 text-xl">🛠️</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">開發工具</h3>
            </div>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Git</span>
                  <span class="text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Webpack</span>
                  <span class="text-gray-500">80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Node.js</span>
                  <span class="text-gray-500">75%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Docker</span>
                  <span class="text-gray-500">70%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 70%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">精選作品</h2>
          <p class="text-xl text-gray-600">展現技術實力與創意的專案</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <span class="text-4xl">��</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">電商購物平台</h3>
              <p class="text-gray-600 mb-4">使用 Vue 3 + TypeScript 開發的現代化電商平台，包含購物車、結帳、會員系統等功能。</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">TypeScript</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Tailwind CSS</span>
              </div>
              <button class="text-blue-600 hover:text-blue-700 font-medium">查看詳情 →</button>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <span class="text-4xl">��</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">數據分析儀表板</h3>
              <p class="text-gray-600 mb-4">React + D3.js 建立的互動式數據視覺化儀表板，支援即時數據更新與多種圖表類型。</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">D3.js</span>
                <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Chart.js</span>
              </div>
              <button class="text-blue-600 hover:text-blue-700 font-medium">查看詳情 →</button>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <span class="text-4xl">��</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">任務管理系統</h3>
              <p class="text-gray-600 mb-4">Vue.js 開發的團隊協作工具，支援任務分配、進度追蹤、即時通知等功能。</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Socket.io</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Node.js</span>
              </div>
              <button class="text-blue-600 hover:text-blue-700 font-medium">查看詳情 →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">聯絡我</h2>
          <p class="text-xl text-gray-600">讓我們聊聊合作機會</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">讓我們聊聊吧！</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">
              如果您對我的作品感興趣，或者有任何合作機會，歡迎隨時與我聯絡。
              我很樂意與您討論如何幫助您實現想法。
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600">📧</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Email</p>
                  <p class="text-gray-600">tess@example.com</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-green-600">📱</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">電話</p>
                  <p class="text-gray-600">+886 912 345 678</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-purple-600">📍</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">地址</p>
                  <p class="text-gray-600">台北市信義區信義路五段7號</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">發送訊息</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <input type="text" v-model="form.name" placeholder="請輸入您的姓名" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" v-model="form.email" placeholder="請輸入您的Email" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">主旨</label>
                <input type="text" v-model="form.subject" placeholder="請輸入主旨" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">訊息內容</label>
                <textarea v-model="form.message" rows="4" placeholder="請輸入您的訊息" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent" required></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium">
                發送訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">Tess</h3>
          <p class="text-gray-400 mb-6">前端開發工程師</p>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Email</a>
          </div>
          <p class="text-gray-500 mt-8">© 2024 Tess. 版權所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 響應式數據
const mobileMenuOpen = ref(false)
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
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
  }
  mobileMenuOpen.value = false
}

// 提交表單
const submitForm = () => {
  alert('感謝您的訊息！我會盡快回覆您。')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>