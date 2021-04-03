import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contato from './components/Contato.vue'

Vue.use(Router)

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./markdowns/posts/${child.id}.md`),

  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('./views/Blog.vue'),
    children
  }
})


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/Contato',
      name: 'contato',
      component: Contato
    },
    
    ...blogRoutes
  ]

})