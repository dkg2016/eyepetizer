let routerSet = {
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: resolve => require(['@/pages/recommend'], resolve)
    },
    {
      path: '/discovery',
      component: resolve => require(['@/pages/discovery'], resolve)
    },
    {
      path: '/feed',
      component: resolve => require(['@/pages/feed'], resolve)
    },
    {
      path: '/group',
      component: resolve => require(['@/pages/group'], resolve)
    },
    {
      path: '*',
      redirect: '/recommend'
    }
  ]
};

export default routerSet;