<template>
  <div class="min-h-screen bg-gray-50">
    
    <!-- 導航欄 -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-gray-900">Yuna's Portfolio</span>
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

          <div class="flex justify-center">
            <div class="relative">

              <!-- <div class="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                <img src="./assets/vue.svg"  alt="" class="w-25 h-25 rounded-full shadow-md" />
              </div>

              <div class="absolute -top-15 -left-2 w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
                <img src="./assets/vue.svg"  alt="" class="w-25 h-25 rounded-full shadow-md" />
              </div> -->

              <div class="w-98 h-102 bg-gradient-to-br from-yellow-400 to-yellow-400 rounded-full flex items-center justify-center">
                <img src="./assets/me.JPG" 
                     alt="Yuna" 
                     class="w-90 h-95 rounded-full object-cover shadow-xl" />
              </div>
              <!-- <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span class="text-2xl">💻</span>
              </div> -->
            </div>
          </div>

         <div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello~我是
              <span class="text-yellow-500">Yuna</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              畢業於台北科技大學資訊工程系，熱愛前端開發與使用者體驗設計，同時具備資安背景。
              熟悉 Vue.js、JavaScript、HTML、CSS 等核心技術，擅長 API 串接整合、 RWD 響應式設計、互動式介面開發。
              能獨立完成專案規劃與實作，將需求轉化為 直覺、流暢、安全 的產品，並兼顧設計美感與技術穩定性。
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
          <!-- <div class="flex justify-center">
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
          </div> -->
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            關於我
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <!-- <h3 class="text-2xl font-bold text-gray-900 mb-6">我的故事</h3> -->
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>
            在實習期間，參與 OAuth 2.0 認證實作、資安檢測與事件分析，累積細心與問題解決能力。
          </p>

          <p>
            後來投入前端學習與專題實作，獨立完成 JiaNice 智慧健康飲食平台，使用 Vue 與 Node.js 建構 MVC 架構，整合 OpenAI、健康署及政府開放資料平台 API，兼顧使用者體驗與系統安全性。
          </p>
          
          <p>
            目前持續精進 API 串接整合與前端互動設計能力，期望在前端領域發揮跨域優勢，打造兼具安全、美感與功能性的產品。
          </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p class="text-xl text-gray-400">工作經歷</p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <!-- Experience 1 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-bold">2024</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">資安暑期實習生</h3>
                <p class="text-blue-600 font-semibold mb-4">財團法人資訊工業策進會</p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                  <span class="text-blue-500 mr-2 mt-1">OAuth 2.0 認證與授權流程演練：</span> <br>
                  </li>
              
                    <span>研究並模擬專案應用，累積實務經驗並熟悉授權流程。</span>
                
                </ul>
              </div>
            </div>

            <!-- Experience 2 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-green-600 font-bold">2023</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">資安管理實習生</h3>
                <p class="text-green-600 font-semibold mb-4">台灣大哥大股份有限公司</p>
                <ul class="space-y-2 text-gray-600">
                  
                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">專案協作與使用者體驗改善：</span>
                  </li>
                  <span>參與專案流程與功能驗證，追蹤 176 項系統漏洞並提出優化建議，提升操作便利性。</span> <br>

                  <br>


                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">社交工程模擬協作：</span>
                  </li>
                  <span>參與大規模模擬（5343 名員工），揭露 242 位受影響人員，強化專案協作能力。</span><br>

                  <br>

                  <li class="flex items-start">
                    <span class="text-green-500 mr-2 mt-1">產品分析與策略建議：</span>
                  </li>
                  <span>進行競品分析，提出改善方案，增強產品功能規劃與前端設計思維。</span> <br>

                </ul>
              </div>
            </div>

            <!-- Experience 3 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-purple-600 font-bold">2022</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">資訊工讀生</h3>
                <p class="text-purple-600 font-semibold mb-4">新光合成纖維股份有限公司</p>
                <ul class="space-y-2 text-gray-600">
                    <li class="flex items-start">
                      <span class="text-purple-500 mr-2 mt-1">報表排版：</span> 
                    </li>
                    <span>整理 ERP 系統報表，確保格式清晰易讀。</span> <br>
                    
                    <br>

                    <li class="flex items-start">
                      <span class="text-purple-500 mr-2 mt-1">基本 SQL 查詢：進行</span> 
                    </li>
                    <span>簡單資料查詢支援報表整理。</span> <br>

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
          <p class="text-xl text-gray-400">相關專業技能</p>
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
              <img src="./assets/vue.png" alt="" class="w-20 h-20 inline-block mr-2">
              
              <img src="./assets/Vite.png" alt="" class="w-20 h-20 inline-block mr-2">

              <img src="./assets/vuetify.png" alt="" class="w-20 h-20 inline-block mr-2">

              <img src="./assets/pinia.png" alt="" class="w-20 h-20 inline-block mr-2 mt-5">

              <img src="./assets/swiper.png" alt="" class="w-20 h-20 inline-block mr-2 mt-5">

              <img src="./assets/gsap.png" alt="" class="w-20 h-20 inline-block mr-2 mt-5">


              <img src="./assets/html.png" alt="" class="w-20 h-20 inline-block mr-2 mt-5">

              <img src="./assets/css.png" alt="" class="w-20 h-20 inline-block mr-2 mt-5">


              <img src="./assets/js.png" alt="" class="w-20 h-20 inline-block mr-2 mt-5">

                <!-- <div class="flex justify-between mb-1">
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
                </div>-->
              </div> 
            </div>
          </div>

          <!-- Styling -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <span class="text-green-600 text-xl">🎨</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900">後端技術</h3>
            </div>
            <div class="space-y-4">
              <div>
                <div>
                  <img src="./assets/nodeJS.png" alt="" class="w-20 h-20 inline-block mr-2">

                  <img src="./assets/restfulAPI.png" alt="" class="w-20 h-20 inline-block mr-2">

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
              <h3 class="text-xl font-bold text-gray-900">工具</h3>
            </div>
                       <div class="space-y-4">
              <div>
                <div>
                  <img src="./assets/eslint.png" alt="" class="w-20 h-20 inline-block mr-2">   

                  <img src="./assets/GIT.png" alt="" class="w-20 h-20 inline-block mr-2">

                  
                  <img src="./assets/AXIOS.png" alt="" class="w-20 h-20 inline-block mr-2">




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
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <img src="./assets/JiaNice.jpg" alt="JiaNice 專案截圖" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">JiaNice</h3>
              <p class="text-gray-600 mb-4 flex-grow">智慧健康飲食平台，整合 API 與 AI 提供個人化健康建議。</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">MongoDB</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Pinia</span>

              </div>

              <div class="text-right mt-auto">
                <a class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/JIANICE-vuetify-project/">Live Demo →</a>
              </div>

            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div class="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <img src="./assets/JQGame.jpg" alt="多益英文單字配對小遊戲" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">多益英文單字配對小遊戲</h3>
              <p class="text-gray-600 mb-4 flex-grow">互動式學習遊戲，提高英文單字記憶效率。</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">JQuery</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">JavaScript</span>
              </div>


              <div class="text-right mt-auto">
                <a class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/JQ_English-Matching-Game/">Live Demo →</a>
              </div>

            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <img src="./assets/bootstrap.jpg" alt="Bootstrap切版" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">前端切版 + Bootstrap</h3>
              <p class="text-gray-600 mb-4 flex-grow">這是一個以 Bootstrap 5 製作的響應式展示網站。整體設計模擬商業網站的常見功能，涵蓋完整的前端結構與互動效果。</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Bootstrap</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">JavaScript</span>
              </div>
             

              <div class="text-right mt-auto">
                <a class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/Bootstrap/">Live Demo →</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p class="text-xl text-gray-600">聯絡我</p>
        </div>
        
        <div class="flex justify-center">
          <!-- Contact Info -->
          <div class="max-w-md w-full">
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600">📧</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Email</p>
                  <p class="text-gray-600">yunahsuya@gmail.com</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-green-600">📱</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">電話</p>
                  <p class="text-gray-600">0905 336 968</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-purple-600">📍</span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">GitHub</p>
                  <a class="text-blue-500" href="https://github.com/yunahsuya?tab=repositories">https://github.com/yunahsuya?tab=repositories</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">Yuna</h3>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Email</a>
          </div>
          <p class="text-gray-500 mt-8">© 2025 Yuna. 版權所有</p>
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