import { createApp } from 'vue'
import App from './App.vue'

//mitt 적용법
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

//store 사용법
import store from './store';

app.use(store).mount('#app')
