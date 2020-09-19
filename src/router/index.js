let routerSet = {
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      redirect: '/index/recommend',
      component: resolve => require(['@/pages/index'], resolve),
      children: [
        {
          path: 'recommend',
          component: resolve => require(['@/pages/recommend'], resolve)
        },
        {
          path: 'discovery',
          component: resolve => require(['@/pages/discovery'], resolve)
        },
        {
          path: 'feed',
          component: resolve => require(['@/pages/feed'], resolve)
        },
      ]
    },
    {
      path: '/group',
      component: resolve => require(['@/pages/group'], resolve)
    },
    {
      path: '/notify',
      component: resolve => require(['@/pages/notify'], resolve)
    },
    {
      path: '/me',
      component: resolve => require(['@/pages/me'], resolve)
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
};

export default routerSet;