<template>
    <div class="grid gap-5 grid-cols-4">
        <NCard 
            class="row-span-2"
            title="Добавить слово"
            :segmented="{
                content: true,
                footer: 'soft'
            }"
        >
            <div class="flex flex-col space-y-2">
                <n-input v-model:value="word" type="text" placeholder="Слово" />
                <n-input v-model:value="translate" type="text" placeholder="Перевод" />
                <n-select v-model:value="setId" :options="sets" placeholder="Добавить в сет" clearable />
            </div>
            <template #action>
                <div class="flex justify-end">
                    <n-button type="primary" ghost @click="addWord()">Добавить</n-button>
                </div>
            </template>
        </NCard>

        <NCard :title="word.word" v-for="(word, wordIndex) in words" :key="wordIndex">
            {{ word.translate }}

            <template #header-extra>
                <n-button type="error" ghost size="tiny" @click="removeWord(wordIndex)">X</n-button>
            </template>
        </NCard>
    </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NInput, NSelect } from 'naive-ui';
import { ref } from 'vue';

const word = ref('');
const translate = ref('');
const setId = ref();

const words = ref<any[]>([
    {
        word: 'One',
        translate: 'Один'
    },
    {
        word: 'Two',
        translate: 'Два'
    }
]);

const sets = ref<any[]>([
    { label: 'Мой любимый сет', value: 1 },
])

function addWord() {
    // 
}

function removeWord(wordIndex: number) {
    //
}
</script>