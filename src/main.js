import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
import { defineCustomElements } from '@astrouxds/astro-web-components/dist/custom-elements';
defineCustomElements();

createApp(App).mount('#app')
