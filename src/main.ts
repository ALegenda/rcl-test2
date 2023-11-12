import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createI18n} from "vue-i18n";
import {localeMessages} from "@/assets/locale";

const app = createApp(App)

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: localeMessages,
})
app.use(i18n)
app.use(router)

app.mount('#app')
