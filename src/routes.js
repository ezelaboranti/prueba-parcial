import Vue from  'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue";
import Contactos from "./components/Contactos.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/formulario'},
      {path: '/formulario', component: Formulario},
      {path: '/contactos', component: Contactos}
    ]
})

  