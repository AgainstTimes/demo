import {defineStore} from "pinia";
import {ref,reactive} from "vue";

export const webStore = defineStore('web', () => {
    const web = reactive({
        title: "Akeelah",
        description: "Akeelah&&Jessika",
    })
    const user = ref(1000)
    const userAdd = () => {
        user.value++
    }
    return {web, userAdd, user}
},{
    persist: true,
})