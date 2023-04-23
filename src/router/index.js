import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import WorksItem from '../views/WorksItem.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/works', name: 'works', component: Works },
    { path: '/works/:id', name: 'worksItem', component: WorksItem, props: true },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/resume', name: 'resume', component: Resume }
  ]
})

export default router
