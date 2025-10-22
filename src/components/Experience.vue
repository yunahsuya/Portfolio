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
            class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b"
            :class="`from-${experiences[0].color}-500 via-${experiences[1].color}-500 to-${experiences[2].color}-500`"
          ></div>

          <div class="space-y-12">
            <div v-for="item in experiences" class="relative flex items-start">
              <!-- Timeline Node -->
              <div class="relative z-10 flex-shrink-0">
                <!-- 發光效果 - 在背景層 -->
                <div
                  class="absolute inset-0 w-16 h-16 rounded-full opacity-20 animate-pulse"
                  :class="`bg-${item.color}-500`"
                ></div>
                <!-- 主圓圈 - 在發光效果之上 -->
                <div
                  class="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  :class="`bg-${item.color}-500`"
                >
                  <span class="text-white font-bold text-sm relative z-10">{{ item.year }}</span>
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
                      <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ item.title }}</h3>
                      <p class="font-semibold text-lg" :class="`text-${item.color}-600`">
                        {{ item.company }}
                      </p>
                      <p class="text-gray-500 text-sm">{{ item.duration }}</p>
                    </div>
                    <div class="hidden md:block">
                      <span
                        class="px-4 py-2 rounded-full text-sm font-medium"
                        :class="`bg-${item.color}-100 text-${item.color}-700`"
                        >{{ item.tag }}</span
                      >
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="space-y-4">
                    <div v-for="detail in item.details" class="flex items-start space-x-3">
                      <div
                        class="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        :class="`bg-${item.color}-500`"
                      ></div>
                      <div>
                        <h4 class="font-semibold text-gray-900 mb-1">
                          {{ detail.title }}
                        </h4>
                        <p class="text-gray-600">
                          {{ detail.desc }}
                        </p>
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

<script setup>
const experiences = [
  {
    year: 2024,
    color: 'blue',
    title: '資安暑期實習生',
    company: '財團法人資訊工業策進會',
    duration: '2024年7月 - 2024年8月',
    tag: '資安實習',
    details: [
      {
        title: 'OAuth 2.0 認證與授權流程演練',
        desc: '研究並演練 OAuth 2.0 認證與授權流程，並應用於專案模擬測試，累積實務經驗。',
      },
    ],
  },
  {
    year: 2023,
    color: 'orange',
    title: '資安管理實習生',
    company: '台灣大哥大股份有限公司',
    duration: '2023年5月 - 2023年9月',
    tag: '資安管理',
    details: [
      {
        title: '專案協作與使用者體驗改善',
        desc: '參與專案流程與功能驗證，追蹤 176 項系統漏洞並提出優化建議，提升操作便利性。',
      },
      {
        title: '社交工程模擬協作',
        desc: '參與大規模模擬（5343 名員工），揭露 242 位受影響人員，強化專案協作能力。',
      },
      {
        title: '產品分析與策略建議',
        desc: '進行競品分析，提出改善方案，增強產品功能規劃與前端設計思維。',
      },
    ],
  },
  {
    year: 2022,
    color: 'purple',
    title: '資訊工讀生',
    company: '新光合成纖維股份有限公司',
    duration: '2022年7月 - 2022年9月',
    tag: '資訊工讀',
    details: [
      {
        title: '報表排版與資料整理',
        desc: '整理 ERP 系統報表，確保格式清晰易讀，提升資料呈現的專業性。',
      },
      {
        title: '基本 SQL 查詢與資料分析',
        desc: '進行簡單資料查詢，累積資料庫操作經驗。',
      },
    ],
  },
]
</script>
