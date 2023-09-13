<template>
  <div class="p-10 w-full flex gap-10">
    <n-card title="Личный кабинет">
      <n-tabs type="line" animated>
        <n-tab-pane name="words" tab="Слова">
          <WordsTab />
        </n-tab-pane>
        <n-tab-pane name="sets" tab="Сеты">
          <SetsTab />
        </n-tab-pane>
        <n-tab-pane name="folders" tab="Папки">
          <FoldersTab />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NTabs, NTabPane } from 'naive-ui'
import WordsTab from './components/WordsTab.vue';
import SetsTab from './components/SetsTab.vue';
import FoldersTab from './components/FoldersTab.vue';
</script>