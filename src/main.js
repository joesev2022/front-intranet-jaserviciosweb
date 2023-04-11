import { createApp } from 'vue'
import App from './components/App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import Multiselect from '@vueform/multiselect';
//import VueMultiselect from 'vue-multiselect';
import Datepicker from '@vuepic/vue-datepicker';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@vueform/multiselect/themes/default.css';
import '@vuepic/vue-datepicker/dist/main.css'

import router from './router'

const app = createApp(App)
app.use(router)
app.component(Multiselect)
app.component('Datepicker', Datepicker);
app.use(VueSweetalert2)
app.mount('#app')
