import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contactos: []
    },
    actions: {
        getContactos({ commit }, contactos) {
            commit('getContactos', contactos)
        }
    },
    mutations: {
        getContactos(state, contactos) {
            state.contactos = contactos
        }
    }
})
