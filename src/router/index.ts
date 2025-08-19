import { createWebHashHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'main',
      },
      children: [
        {
          path: 'main',
          name: 'main',
          component: () => import('@/views/main.vue'),
          redirect: {
            name: 'dev',
          },
          children: [
            {
              path: 'dev',
              name: 'dev',
              component: () => import('@/views/dev.vue'),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
