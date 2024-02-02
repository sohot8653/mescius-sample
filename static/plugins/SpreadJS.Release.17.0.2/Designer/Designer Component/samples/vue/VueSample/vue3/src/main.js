import { createApp } from 'vue'
import App from './App.vue'
import Designer from "@mescius/spread-sheets-designer-vue"
let app = createApp(App);
app.component("gc-spread-sheets-designer", Designer);
app.mount('#app')
