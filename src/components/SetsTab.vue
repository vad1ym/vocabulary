<template>
    <div class="grid gap-5 grid-cols-4">
        <NCard 
            class="row-span-2"
            title="Добавить сет"
            :segmented="{
                content: true,
                footer: 'soft'
            }"
        >
            <div class="flex flex-col space-y-2">
                <n-input v-model:value="name" type="text" placeholder="Название сета" />
                <n-select v-model:value="folderId" :options="folders" placeholder="Добавить в папку" clearable />
            </div>
            <template #action>
                <div class="flex justify-end">
                    <n-button type="primary" ghost @click="addSet()">Добавить</n-button>
                </div>
            </template>
        </NCard>

        <NCard :title="set.name" v-for="(set, setIndex) in sets" :key="setIndex">
            Количество слов: 0

            <template #header-extra>
                <n-button type="error" ghost size="tiny" @click="removeSet(setIndex)">X</n-button>
            </template>
        </NCard>
    </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NInput, NSelect } from 'naive-ui';
import { ref } from 'vue';

const name = ref('');
const folderId = ref();

const sets = ref<any[]>([
    {
        name: 'Мой любимый сет'
    }
]);

const folders = ref<any[]>([
    {
        label: 'Моя любимая папка',
        value: 1,
    }
]);

function addSet() {
    //
}

function removeSet(wordIndex: number) {
    //
}
</script>