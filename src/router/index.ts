import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Task List',
    component: () => import('@/views/TaskList.vue'),
  },
  {
    path: '/new-task',
    name: 'Task Form',
    component: () => import('@/views/TaskForm.vue'),
  },
  {
    path: '/add-events-to-google-calendar',
    name: 'Add to calendar',
    component: () => import('@/views/GoogleCalendar.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = <string>to.name;
  next();
});

export default router
