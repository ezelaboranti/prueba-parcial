import Vue from 'vue'

Vue.filter('versalita', function(value) {
    let minus = value.toLowerCase()
    return minus.charAt(0).toUpperCase() + minus.slice(1);
})