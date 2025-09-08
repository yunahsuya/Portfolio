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
              <a href="#contact" @click="scrollTo('contact')" class="nav-link">聯絡我</a>
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

              <div class="w-98 h-108 bg-gradient-to-br from-yellow-400 to-yellow-400 rounded-full flex items-center justify-center">
                <img src="./assets/me.JPG" 
                     alt="Yuna" 
                     class="w-90 h-100 rounded-full object-cover shadow-xl" />
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
              畢業於台北科技大學資訊工程系，熱愛前端開發與使用者體驗設計，並具備資訊安全背景。<br>
              擅長 Vue 3、RWD 響應式設計、互動式介面 與 API 串接整合包括 OpenData、健康署 API、第三方服務與 OpenAI API。<br>
              
              熟悉 Pinia、Vuetify、Vite、Axios、表單驗證 等工具，並具備 OAuth 2.0、資安檢測 等實務經驗，能將需求轉化為 安全、直覺、流暢，同時兼顧美感與功能性的產品。
              
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
              <h1 class="text-xl font-bold text-gray-900 mt-6">『關於我』</h1>
              <p class="text-xl">
                我叫許庭瑋，畢業於台北科技大學資訊工程系，對前端開發充滿熱情。近期專注於 Vue 3、Pinia 與 Vuetify 技術，並透過專題「JiaNice」實作完整前端平台，涵蓋 SPA 架構、UI 設計、前後端資料串接，以及健康署與 OpenData API 的整合。我熟悉 MVC 架構下前後端協作流程。專題核心功能包括餐廳隨機抽選、營養提醒與回憶錄系統，我從規劃頁面互動流程到優化使用者體驗都有實作經驗，具備快速學習與問題拆解能力，能有效應對前端專案中的技術與設計挑戰。
          </p>

          <h1 class="text-xl font-bold text-gray-900 mt-6">『工作經驗』</h1>
          <p class="text-xl">
            在過去的實習中，我協助公司處理資安事件與專案開發，參與系統漏洞測試與風險分析，並參與大型社交工程演練，涵蓋超過 5000 名員工，成功揭露受影響人員。在此過程中，我養成了系統化思考能力，並將分析與測試成果應用於實際專案中，累積了規劃、協作與解決問題的經驗。這些經驗雖屬資安領域，但也強化了我對流程管理與前端開發中資料串接與介面設計的敏銳度，為轉型前端工程師奠定了堅實基礎。
          </p>
          
          <h1 class="text-xl font-bold text-gray-900 mt-6">『自我進修』</h1>
          <p class="text-xl">
            我曾參加職訓局前端課程，透過專題實作深化 Vue 3、Pinia 與 Vuetify 的實務應用，並練習設計使用者介面、串接後端 API 與整合第三方資料源。我同時透過撰寫教學文章與專題紀錄，整理學習成果，提升技術理解與團隊溝通能力。
          </p>

          <h1 class="text-xl font-bold text-gray-900 mt-6">『未來展望』</h1>
          <p class="text-xl">
            未來，希望持續精進前端與互動式產品設計能力，透過 SIDE PROJECT 的實作，例如 AI 互動履歷網站、LINEBOT 智能記帳系統，以及詐騙防治網站等，累積前、後端整合、API 串接與資料視覺化能力。期望將創意思維與技術能力結合，打造兼具實用性與趣味性的產品，並為公司提供具有差異化的用戶體驗與技術解決方案。
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
            <div class="timeline flex gap-6">
              <div class="flex-shrink-0">
                <div class="timeline-start w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-bold text-xl">2024</span>
                </div>
              </div>
              <div class=" timeline-middle flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">資安暑期實習生</h1>
                <p class=" text-blue-600 font-semibold mb-4">財團法人資訊工業策進會</p>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                  <span class="text-blue-500 mr-2 mt-1 font-bold text-xl ">OAuth 2.0 認證與授權流程演練：</span> <br>
                  </li>
              
                    <span class="text-lg">研究並模擬專案應用，累積實務經驗並熟悉授權流程。</span>
                
                </ul>
              </div>
            </div>

            <!-- Experience 2 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span class="text-orange-600 font-bold text-xl">2023</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">資安管理實習生</h3>
                <p class="text-orange-600 font-semibold mb-4">台灣大哥大股份有限公司</p>
                <ul class="space-y-2 text-gray-600">
                  
                  <li class="flex items-start">
                    <span class="text-orange-500 mr-2 mt-1 font-bold text-xl">專案協作與使用者體驗改善：</span>
                  </li>
                  <span class="text-lg">參與專案流程與功能驗證，追蹤 176 項系統漏洞並提出優化建議，提升操作便利性。</span> <br>

                  <br>


                  <li class="flex items-start">
                    <span class="text-orange-500 mr-2 mt-1 font-bold text-xl">社交工程模擬協作：</span>
                  </li>
                  <span class="text-lg">參與大規模模擬（5343 名員工），揭露 242 位受影響人員，強化專案協作能力。</span><br>

                  <br>

                  <li class="flex items-start">
                    <span class="text-orange-500 mr-2 mt-1 font-bold text-xl">產品分析與策略建議：</span>
                  </li>
                  <span class="text-lg">進行競品分析，提出改善方案，增強產品功能規劃與前端設計思維。</span> <br>

                </ul>
              </div>
            </div>

            <!-- Experience 3 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-purple-600 font-bold text-xl">2022</span>
                </div>
              </div>
              <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h1 class="text-2xl  font-bold text-gray-900 mb-2">資訊工讀生</h1>
                <p class="text-purple-600 font-semibold mb-4">新光合成纖維股份有限公司</p>
                <ul class="space-y-2 text-gray-600">
                    <li class="flex items-start">
                      <span class="text-purple-500 mr-2 mt-1 font-bold text-xl">報表排版：</span> 
                    </li>
                    <span class="text-lg">整理 ERP 系統報表，確保格式清晰易讀。</span> <br>
                    
                    <br>

                    <li class="flex items-start">
                      <span class="text-purple-500 mr-2 mt-1 font-bold text-xl">基本 SQL 查詢：進行</span> 
                    </li>
                    <span class="text-lg">簡單資料查詢支援報表整理。</span> <br>

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
                <ul class="list-disc list-inside text-gray-600">
                  <li class="text-gray-900">vue</li>
                  <li class="text-gray-900">Vite</li>
                  <li class="text-gray-900">vuetify</li>
                  
                  <li class="text-gray-900">pinia</li>
                  <li class="text-gray-900">swiper</li>
                  <li class="text-gray-900">gsap</li>

                  <li class="text-gray-900">html</li>
                  <li class="text-gray-900">css</li>
                  <li class="text-gray-900">JavaScript</li>
                </ul>
             
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
                   <ul class="list-disc list-inside text-gray-600">
                  <li class="text-gray-900">node.js</li>
                  <li class="text-gray-900">restfulAPI</li>
            
                </ul>

               

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

                <ul class="list-disc list-inside text-gray-600">
                  <li class="text-gray-900">GIT</li>
                  <li class="text-gray-900">eslint</li>
                  <li class="text-gray-900">axios</li>
                </ul>




              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- JiaNice Featured Project Section -->
    <section id="jianice" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">精選專案</h2>
          <p class="text-xl text-gray-600">JiaNice - 智慧健康飲食平台</p>
        </div>
        
        <div class="max-gray w-6xl mx-auto">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div class="grid lg:grid-cols-2 gap-0">

<!-- 左側：專案截圖 -->
<div class="aspect-video lg:aspect-square flex items-center justify-center relative">
  <img 
    :src="jianiceImages[currentImageIndex]" 
    alt="JiaNice 專案截圖" 
    class="w-11/12 h-11/12 object-contain transition-opacity duration-500"
    @error="console.log('圖片載入錯誤:', jianiceImages[currentImageIndex])"
    @load="console.log('圖片載入成功:', jianiceImages[currentImageIndex])"
  >
  
  <!-- 調試信息 -->
  <div class="absolute top-2 left-2 bg-black/50 text-white p-2 rounded text-xs">
    當前索引: {{ currentImageIndex }} / {{ jianiceImages.length - 1 }}
  </div>
  
  <!-- 圖片指示器 -->
  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    <button 
      v-for="(image, index) in jianiceImages" 
      :key="index"
      @click="currentImageIndex = index"
      :class="[
        'w-3 h-3 rounded-full transition-all duration-300',
        currentImageIndex === index ? 'bg-white' : 'bg-white/50'
      ]"
    ></button>
  </div>
</div>
              
              <!-- 右側：專案詳情 -->
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="mb-6">
                  <h3 class="text-3xl font-bold text-gray-900 mb-4">JiaNice</h3>
                  <p class="text-lg text-gray-600 leading-relaxed mb-6">
                    智慧健康飲食平台，整合 API 與 AI 提供個人化健康建議。透過餐廳隨機抽選、營養提醒與回憶錄系統，為使用者打造完整的健康飲食體驗。
                  </p>
                </div>
                
                <!-- 技術標籤 -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">使用技術</h4>
                  <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Vue.js</span>
                    <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
                    <span class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">MongoDB</span>
                    <span class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Pinia</span>
                    <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Vuetify</span>
                    <span class="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">RESTful API</span>
                  </div>
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
                <div class="flex flex-col sm:flex-row gap-4">

                    <!-- 更多作品 -->
                    <button @click="scrollTo('projects')" class="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 ease-in-out">
                    更多作品
                    <span class="mdi mdi-chevron-down ml-2 " ></span>
                  </button>

                  <!-- GitHub -->
                  <a class="inline-flex items-center justify-center px-8 py-4 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out " href="https://github.com/yunahsuya/JIANICE-vuetify-project" target="_blank">
                    GitHub
                    <span class="mdi mdi-github ml-2 text-2xl"></span>
                  </a>


                  <!-- Demo -->
                  <a class="inline-flex items-center justify-center px-8 py-4 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/JIANICE-vuetify-project/" target="_blank">
                    <span>Demo</span>
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    


    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">精選作品</h2>
          <p class="text-xl text-gray-600">展現技術實力與創意的專案</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- Project 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div class="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <img src="./assets/JQGame.jpg" alt="多益英文單字配對小遊戲" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">多益英文單字配對小遊戲</h3>
              <p class="text-gray-600 mb-4 flex-grow">互動式學習遊戲，提高英文單字記憶效率。</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">JavaScript</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">JQuery</span>
              </div>


              <div class="flex justify-between items-center mt-auto ">
                
                <!-- GitHub -->
                <a class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://github.com/yunahsuya/JQ_English-Matching-Game" target="_blank">
                  GitHub
                  <span class="mdi mdi-github ml-2" ></span>
                </a>
                
                <!-- Demo -->
                <a class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/JQ_English-Matching-Game/" target="_blank">Demo →</a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <img src="./assets/bootstrap.jpg" alt="Bootstrap切版" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Bootstrap</h3>
              <p class="text-gray-600 mb-4 flex-grow">以 Bootstrap 5 製作的響應式展示網站。能自動依照螢幕大小調整版面，模擬一般商業網站的基本排版。</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">JavaScript</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Bootstrap</span>
              </div>

              <div class="flex justify-between items-center mt-auto ">
                
                <!-- GitHub -->
                <a class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://github.com/yunahsuya/Bootstrap" target="_blank">
                  GitHub
                  <span class="mdi mdi-github ml-2" ></span>
                </a>
                
                <!-- Demo -->
                <a class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/Bootstrap/" target="_blank">Demo →</a>
              </div>
            </div>

            
          </div>
           <!-- Project 3 -->
           <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <img src="./assets/CLOCK.jpg" alt="JiaNice 專案截圖" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-2">CLOCK</h3>
              <p class="text-gray-600 mb-4 flex-grow">用 HTML、CSS 與 JavaScript 製作的動態時鐘，結合指針與數字顯示，能即時同步系統時間。</p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HTML5</span>
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">JavaScript</span>

              </div>

              <div class="flex justify-between items-center mt-auto ">
                
                <!-- GitHub -->
                <a class="inline-flex items-center px-6 py-3 bg-gray-700 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://github.com/yunahsuya/JS_CLOCK" target="_blank">
                  GitHub
                  <span class="mdi mdi-github ml-2" ></span>
                </a>
                
                <!-- Demo -->
                <a class="inline-flex items-center px-6 py-3 bg-orange-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 ease-in-out" href="https://yunahsuya.github.io/JS_CLOCK/" target="_blank">Demo →</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    

    <!-- Contact Section -->
<section id="contact" class="py-20 bg-white-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-5">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
      <p class="text-xl text-gray-600 mb-10">聯絡我</p>
    </div>
    
    <!-- 歡迎訊息 -->
    <!-- <div class="max-w-3xl mx-auto text-center mb-12">
      <p class="text-lg text-gray-600 leading-relaxed">
        很高興認識你！如果你對我的作品感興趣，或是有任何合作機會，歡迎隨時與我聯繫。
        我通常在 <span class="font-semibold text-yellow-600">週一至週五 9:00-18:00</span> 比較容易聯絡到。
      </p>
    </div> -->
    
    <div class="flex justify-center">
      <!-- Contact Info -->
      <div class="max-w-2xl w-full">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- 聯絡方式 -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">聯絡方式</h3>
            
            <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-blue-600">📧</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">Email</p>
                <a href="mailto:yunahsuya@gmail.com" class="text-blue-500 hover:text-blue-700 transition-colors">
                  yunahsuya@gmail.com
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-green-600">📱</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">電話</p>
                <a href="tel:0905336968" class="text-green-500 hover:text-green-700 transition-colors">
                  0905 336 968
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span class="text-purple-600">📍</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">位置</p>
                <p class="text-gray-600">台北市</p>
              </div>
            </div>
          </div>
          
          <!-- 社交媒體 -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">社交媒體</h3>
            
            <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span class="text-gray-600">💻</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">GitHub</p>
                <a href="https://github.com/yunahsuya?tab=repositories" target="_blank" class="text-blue-500 hover:text-blue-700 transition-colors">
                  查看我的作品
                </a>
              </div>
            </div>

             <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span class="text-pink-600">📸</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">文章分享</p>
                <a href="https://vocus.cc/salon/6647b6a6fd89780001f99044" class="text-pink-500 hover:text-pink-700 transition-colors" target="_blank">
                  查看我的文章
                </a>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="text-blue-600">💼</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">履歷</p>
                <a href="../許庭瑋_前端履歷.pdf" class="text-blue-500 hover:text-blue-700 transition-colors" target="_blank">
                  個人履歷 
                </a>
              </div>
            </div>
            
           
          </div>
        </div>
        
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
        </div> -->
        
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
import { ref, onMounted, onUnmounted } from 'vue'

// 響應式數據
const mobileMenuOpen = ref(false)
const currentImageIndex = ref(0)

// 添加圖片陣列
const jianiceImages = ref([
  '/src/assets/JiaNice.jpg',
  '/src/assets/JIANICE餐廳.jpg',
  '/src/assets/JIANICE新聞.jpg',
  '/src/assets/JIANICE回憶牆.jpg',
  '/src/assets/JIANICE使用者後台管理.jpg',
  '/src/assets/JIANICE管理者後台管理.jpg'
])

// 自動輪播
let autoPlayInterval = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % jianiceImages.value.length
  }, 3000) // 每3秒切換一次
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// 在組件掛載時開始自動播放
onMounted(() => {
  startAutoPlay()
})

// 在組件卸載時清理定時器
onUnmounted(() => {
  stopAutoPlay()
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

// 表單相關
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

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