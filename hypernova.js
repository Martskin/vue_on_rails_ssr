var hypernova = require('hypernova/server');

hypernova({
  devMode: true,
  getComponent(name) {
    console.log("The component name is -> " + name)
    if (name === 'VueComponent.js') {
      return require('./app/javascript/packs/component.js')
    }
    return null;
  },
  port: 7777,
});
