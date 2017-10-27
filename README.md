# myvue
在vue-cli框架的基础上，结合element写的网站，适配手机，pc

第一步  使用 vue-cli 初始化项目，命令如下:
> npm i -g vue-cli
> mkdir my-project && cd my-project
> vue init webpack
> npm i && npm i element-ui

第二步   引入 Element

1》完整引入  在 main.js 中写入以下内容：
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

2》按需引入
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
首先，安装 babel-plugin-component：
npm install babel-plugin-component -D
然后，将 .babelrc 修改为：
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]]
}
接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
完整组件列表和引入方式（完整组件列表以 components.json 为准）
