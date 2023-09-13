<template>
    <div class="grid gap-5 grid-cols-4">
        <NCard 
            class="row-span-2"
            title="Добавить папку"
            :segmented="{
                content: true,
                footer: 'soft'
            }"
        >
            <div class="flex flex-col space-y-2">
                <n-input v-model:value="name" type="text" placeholder="Название папки" />
            </div>
            <template #action>
                <div class="flex justify-end">
                    <n-button type="primary" ghost @click="createNewFolder()">Добавить</n-button>
                </div>
            </template>
        </NCard>

        <NCard :title="folder.name" v-for="(folder, folderIndex) in folders" :key="folderIndex">
            Количество сетов: 0

            <template #header-extra>
                <n-button type="error" ghost size="tiny" @click="removeFolder(folder.id)">X</n-button>
            </template>
        </NCard>
    </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NInput } from 'naive-ui';
import { ref } from 'vue';

import { folders, addFolder, removeFolder } from '../modules/folders';

// Сюда будет записываться введенное значение из инпута
const name = ref('');

function createNewFolder() {
    addFolder(name.value);
    name.value = '';
}
</script>