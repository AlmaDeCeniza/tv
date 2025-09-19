
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'F:/Desarrollo de SW/Git/tv/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Desarrollo%20de%20SW/Git/tv"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 589, hash: '3690e5c62bb7a9346e9eebb6ada5f56363aeacee66716c1f681148ed52df7aca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: 'e019e96df0817d9c706f2902f02055adb11d1a18dc5466d13e5cdec14ef87d08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
