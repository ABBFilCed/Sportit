
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/kontakt',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kontakt.vue') }
    ]
  },
  {
    path: '/klubben',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/klubben.vue') }
    ]
  },
  {
    path: '/anlaggningar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Anlaggningar.vue') }
    ]
  },
  {
    path: '/searchresult',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/searchResult.vue') }
    ]
  },
  // importera alla routes
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
