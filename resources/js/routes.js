import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home';
import Work from './components/Work';
import i18n from './i18n'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: `/${i18n.locale}`
        },
        {
            path: '/:lang',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'work',
                    component: Work
                }
            ]
        }
    ]
})