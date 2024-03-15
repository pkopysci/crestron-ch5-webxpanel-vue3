import './assets/main.css'

import createCrestronXpanelPlugin from './plugins/crestronCom/xpanel/crestronXpanel'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import createErudaPlugin from './plugins/eruda'
import createCrestronPlugin from './plugins/crestronCom/crestronFeedback'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// load touchscreen UI developer tools.
createErudaPlugin()

// Initialize & establish an XPanel connection with a target control system.
createCrestronXpanelPlugin()

// Build state control & initialize CrComLib.
createCrestronPlugin()