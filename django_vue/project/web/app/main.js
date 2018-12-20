/* Vue application Bootstrapper */

import Vue from 'vue';

const req = require.context('./components/', true, /\.(js|vue)$/i);
req.keys().map(function something(key) {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, req(key));
});

const vueLoader = new Vue({
    el: '#app',
});