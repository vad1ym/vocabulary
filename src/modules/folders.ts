import { ref } from "vue";

interface IFolder {
    name: string;
    id: string;
}

export const folders = ref<IFolder[]>([]);

export function addFolder(name: string) {
    folders.value.push({
        name,
        id: String(Math.random()),
    })
}

export function removeFolder(id: string) {
    folders.value = folders.value.filter((folder) => folder.id !== id);
}