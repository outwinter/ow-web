import { createRouter,createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      name: 'PageView',
      component: require.ensure([], (require) => require('@/view/PageView')),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: require.ensure([], (require) => require('@/view/HomePage')),
          meta: {
            title: '首页'
          }
        }, {
          path: '/software',
          name: 'software',
          component: require.ensure([], (require) => require('@/view/Software')),
          meta: {
            title: '软件产品'
          },
          children: [
            {
              path: '/software',
              redirect: '/software/smartTown'
            },
            {
              path: '/software/smartTown',
              name: 'software',
              component: require.ensure([], (require) => require('@/view/Software_smartTown')),
              meta: {
                title: '软件产品丨智能小镇管理系统'
              }
            },
            {
              path: '/software/bigData',
              name: 'software',
              component: require.ensure([], (require) => require('@/view/Software_bigData')),
              meta: {
                title: '软件产品丨大数据管理系统'
              }
            }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: require.ensure([], (require) => require('@/view/Service')),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: require.ensure([], (require) => require('@/view/NewsInformation')),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: require.ensure([], (require) => require('@/view/CompanyIntroduction')),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: require.ensure([], (require) => require('@/view/ContactUs')),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: require.ensure([], (require) => require('@/view/ServiceDetail')),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]
})
