(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SocialContacts = {}));
}(this, (function (exports) { 'use strict';

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 21 40"}},[_c('path',{attrs:{"d":"M13.632 40V21.756h6.189l.928-7.113h-7.117v-4.54c0-2.059.575-3.461 3.563-3.461L21 6.64V.278C20.342.194 18.084 0 15.455 0c-5.49 0-9.247 3.314-9.247 9.399v5.244H0v7.113h6.208V40h7.424z","fill":"currentColor"}})])};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Facebook = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      {},
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 32 32"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M16 0c-4.345 0-4.89.018-6.597.096C7.7.174 6.537.444 5.52.84a7.843 7.843 0 00-2.834 1.845A7.843 7.843 0 00.84 5.52C.444 6.537.174 7.7.096 9.403.018 11.11 0 11.655 0 16c0 4.345.018 4.89.096 6.597.078 1.703.348 2.866.744 3.884a7.843 7.843 0 001.845 2.834A7.844 7.844 0 005.52 31.16c1.018.395 2.181.666 3.884.744C11.11 31.982 11.655 32 16 32c4.345 0 4.89-.018 6.597-.096 1.703-.078 2.866-.349 3.884-.744a7.844 7.844 0 002.834-1.845 7.844 7.844 0 001.845-2.834c.395-1.018.666-2.181.744-3.884C31.982 20.89 32 20.345 32 16c0-4.345-.018-4.89-.096-6.597-.078-1.703-.349-2.866-.744-3.884a7.844 7.844 0 00-1.845-2.834A7.843 7.843 0 0026.48.84C25.463.444 24.3.174 22.597.096 20.89.018 20.345 0 16 0zm0 2.883c4.272 0 4.778.016 6.465.093 1.56.071 2.408.332 2.971.551.747.29 1.28.637 1.84 1.197s.907 1.093 1.197 1.84c.22.563.48 1.41.55 2.97.078 1.688.094 2.194.094 6.466s-.016 4.778-.093 6.465c-.071 1.56-.332 2.407-.551 2.971a4.957 4.957 0 01-1.197 1.84c-.56.56-1.093.907-1.84 1.197-.563.219-1.41.48-2.97.55-1.688.078-2.194.094-6.466.094-4.273 0-4.778-.016-6.465-.093-1.56-.071-2.408-.332-2.971-.551a4.956 4.956 0 01-1.84-1.197 4.956 4.956 0 01-1.197-1.84c-.219-.564-.48-1.41-.55-2.97-.078-1.688-.094-2.194-.094-6.466s.016-4.778.093-6.465c.071-1.56.332-2.408.551-2.971.29-.747.637-1.28 1.197-1.84a4.957 4.957 0 011.84-1.197c.563-.219 1.41-.48 2.97-.55 1.688-.078 2.194-.094 6.466-.094zM7.784 16a8.216 8.216 0 1116.432 0 8.216 8.216 0 01-16.432 0zM16 21.333a5.333 5.333 0 110-10.666 5.333 5.333 0 010 10.666zM24.54 9.38a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84z","fill":"currentColor"}})])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    var __vue_inject_styles__$1 = undefined;
    /* scoped */
    var __vue_scope_id__$1 = undefined;
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Instagram = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      {},
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 36 36"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M18.001 0C8.061 0 0 8.059 0 18.001c0 7.369 4.433 13.702 10.777 16.485-.051-1.255-.009-2.766.31-4.134.348-1.46 2.316-9.807 2.316-9.807s-.573-1.149-.573-2.849c0-2.667 1.547-4.659 3.471-4.659 1.637 0 2.428 1.23 2.428 2.703 0 1.645-1.05 4.107-1.59 6.387-.45 1.911.957 3.467 2.841 3.467 3.41 0 5.707-4.38 5.707-9.57 0-3.944-2.657-6.896-7.49-6.896-5.458 0-8.86 4.07-8.86 8.617 0 1.57.462 2.675 1.186 3.53.334.397.378.553.258 1.006-.085.328-.284 1.128-.367 1.444-.12.455-.488.62-.9.45-2.516-1.026-3.687-3.78-3.687-6.877 0-5.112 4.312-11.246 12.864-11.246 6.873 0 11.397 4.976 11.397 10.313 0 7.061-3.925 12.336-9.714 12.336-1.941 0-3.77-1.05-4.397-2.241 0 0-1.045 4.146-1.265 4.947-.381 1.386-1.129 2.775-1.812 3.854 1.619.479 3.33.739 5.1.739 9.941 0 18-8.059 18-17.999C36 8.06 27.941 0 18.001 0z","fill":"currentColor"}})])};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    var __vue_inject_styles__$2 = undefined;
    /* scoped */
    var __vue_scope_id__$2 = undefined;
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Pinterest = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      {},
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 34 31"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M34 30.91h-7.515V20.042c0-2.844-1.175-4.785-3.76-4.785-1.977 0-3.076 1.31-3.588 2.573-.192.453-.162 1.084-.162 1.716v11.362H11.53s.097-19.248 0-20.997h7.445v3.295c.44-1.44 2.819-3.497 6.615-3.497 4.71 0 8.41 3.02 8.41 9.524v11.675zM4.002 7.284h-.048C1.555 7.285 0 5.68 0 3.645 0 1.572 1.601 0 4.048 0c2.445 0 3.948 1.568 3.996 3.64 0 2.034-1.551 3.645-4.042 3.645zM.858 9.912h6.627v20.997H.858V9.912z","fill":"currentColor"}})])};
  var __vue_staticRenderFns__$3 = [];

    /* style */
    var __vue_inject_styles__$3 = undefined;
    /* scoped */
    var __vue_scope_id__$3 = undefined;
    /* module identifier */
    var __vue_module_identifier__$3 = undefined;
    /* functional template */
    var __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Linkedin = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      {},
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 36 30"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M36 3.551a14.427 14.427 0 01-4.24 1.192A7.557 7.557 0 0035.006.555a14.548 14.548 0 01-4.693 1.835A7.284 7.284 0 0024.924 0c-4.077 0-7.384 3.391-7.384 7.573 0 .594.064 1.17.19 1.725C11.593 8.982 6.152 5.97 2.507 1.382a7.711 7.711 0 00-1 3.812 7.623 7.623 0 003.286 6.303 7.25 7.25 0 01-3.347-.944v.093c0 3.67 2.547 6.732 5.927 7.425a7.042 7.042 0 01-1.946.267 7.24 7.24 0 01-1.39-.134c.94 3.007 3.666 5.198 6.899 5.256a14.584 14.584 0 01-9.173 3.244A14.64 14.64 0 01.001 26.6 20.563 20.563 0 0011.322 30c13.587 0 21.014-11.538 21.014-21.547 0-.33-.006-.659-.019-.982A15.159 15.159 0 0036 3.551z","fill":"currentColor"}})])};
  var __vue_staticRenderFns__$4 = [];

    /* style */
    var __vue_inject_styles__$4 = undefined;
    /* scoped */
    var __vue_scope_id__$4 = undefined;
    /* module identifier */
    var __vue_module_identifier__$4 = undefined;
    /* functional template */
    var __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Twitter = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      {},
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 38 26"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.211 17.795V7.408l9.917 5.211-9.917 5.176zM36.987 5.608s-.359-2.547-1.459-3.668C34.132.467 32.568.46 31.851.374 26.713 0 19.008 0 19.008 0h-.016S11.29 0 6.152.374C5.434.46 3.871.467 2.473 1.94c-1.1 1.121-1.458 3.668-1.458 3.668S.648 8.6.648 11.591v2.805c0 2.992.367 5.983.367 5.983s.358 2.547 1.458 3.669c1.398 1.472 3.232 1.426 4.048 1.58 2.937.284 12.48.372 12.48.372s7.713-.012 12.85-.386c.716-.087 2.281-.094 3.677-1.566 1.1-1.122 1.459-3.67 1.459-3.67s.367-2.99.367-5.982v-2.805c0-2.99-.367-5.983-.367-5.983z","fill":"currentColor"}})])};
  var __vue_staticRenderFns__$5 = [];

    /* style */
    var __vue_inject_styles__$5 = undefined;
    /* scoped */
    var __vue_scope_id__$5 = undefined;
    /* module identifier */
    var __vue_module_identifier__$5 = undefined;
    /* functional template */
    var __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Youtube = normalizeComponent_1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      {},
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  //

  var components = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    pinterest: Pinterest,
    linkedin: Linkedin,
    youtube: Youtube
  };

  var script = {
    components: {
      Facebook: Facebook,
      Instagram: Instagram,
      Pinterest: Pinterest,
      Linkedin: Linkedin,
      Twitter: Twitter,
      Youtube: Youtube
    },
    props: {
      contacts: {
        type: Object,
        required: true
      },
      bgColor: {
        type: String,
        default: function () { return '#ffffff'; }
      },
      iconColor: {
        type: String,
        default: function () { return '#000000'; }
      }
    },
    methods: {
      getComponent: function getComponent (contact) {
        return components[contact] || null
      }
    }
  };

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) { style.element.setAttribute('media', css.media); }
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"social-links",style:({ '--bg-color': _vm.bgColor, '--icon-color': _vm.iconColor })},_vm._l((Object.keys(_vm.contacts)),function(contact){return _c('a',{key:contact,staticClass:"social",attrs:{"href":_vm.contacts[contact],"target":"_blank"}},[_c('div',{staticClass:"social__bg"}),_vm._v(" "),(_vm.getComponent(contact))?_c('div',{staticClass:"social__icon"},[_c(_vm.getComponent(contact),{tag:"component"})],1):_vm._e()])}),0)};
  var __vue_staticRenderFns__$6 = [];

    /* style */
    var __vue_inject_styles__$6 = function (inject) {
      if (!inject) { return }
      inject("data-v-4541d826_0", { source: ".social-links[data-v-4541d826]{display:flex;align-items:center;position:relative;width:100%}.social-links .social[data-v-4541d826]{width:3rem;height:3rem;padding:1.2rem;display:flex;justify-content:center;align-items:center;position:relative;margin:0 .75rem}.social-links .social[data-v-4541d826]:first-child{margin-left:0}.social-links .social[data-v-4541d826]:last-child{margin-right:0}.social-links .social__bg[data-v-4541d826]{background-color:var(--bg-color);width:100%;height:100%;position:absolute;top:0;border-radius:50%;left:0;transition:transform .6s ease-out}.social-links .social__icon[data-v-4541d826]{position:relative;z-index:4;display:flex;justify-content:center;align-items:center;width:100%;height:100%;color:var(--icon-color)}.social-links .social__icon[data-v-4541d826]  svg{width:auto;height:100%}.social-links .social:hover .social__bg[data-v-4541d826]{transform:scale(1.1)}", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$6 = "data-v-4541d826";
    /* module identifier */
    var __vue_module_identifier__$6 = undefined;
    /* functional template */
    var __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    

    
    var component = normalizeComponent_1(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      browser,
      undefined
    );

  function install(Vue) {
    if (install.installed) { return }
    install.installed = true;
    Vue.component('SocialContacts', component);
  }

  var plugin = {
    install: install
  };

  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  component.install = install;

  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
