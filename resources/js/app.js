/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;


import routes from './routes'
import i18n from './i18n'

routes.beforeEach((to, from, next) => {

    // use the language from the routing param or default language
    let language = to.params.lang;
    if (!language) {
      language = 'en'
    }
  
    // set the current language for i18n.
    i18n.locale = language
    next()
  })

const app = new Vue({
    el: '#app',
    i18n,
    router: routes
});

