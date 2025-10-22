<template>
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
                          研究並演練 OAuth 2.0 認證與授權流程，並應用於專案模擬測試，累積實務經驗。
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
                      <p class="text-purple-600 font-semibold text-lg">新光合成纖維股份有限公司</p>
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
</template>
