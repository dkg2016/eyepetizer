let routerSet = {
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/allrec'
    },
    {
      path: '/allrec',
      component: resolve => require(['@/pages/allrec'], resolve)
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
      path: '/rec',
      component: resolve => require(['@/pages/rec'], resolve)
    },
    {
      path: '*',
      redirect: '/allrec'
    }
  ]
};

export default routerSet;