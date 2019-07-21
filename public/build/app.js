
global = this;
global.process = global.process || {};
global.process.env = global.process.env || {};
process.env["NODE_ENV"] = "development";
global.process.browser = true;
if(!global.Buffer) {
  global.Buffer = function() {
    throw Error("Buffer is not included in the browser environment. Consider using the polyfill")
  };
  global.Buffer.isBuffer = function() {return false};
}
if(!global.setImmediate) {
  global.setImmediate = setTimeout;
  global.clearImmediate = clearTimeout;
}
// This function is a modified version of the one created by the Webpack project
(function(modules) {
  // The module cache
  var installedModules = {};

  function __fastpack_require__(fromModule, request) {
    var moduleId =
      fromModule === null ? request : modules[fromModule].d[request];

    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      id: moduleId,
      l: false,
      exports: {}
    });

    var r = __fastpack_require__.bind(null, moduleId);
    var helpers = Object.getOwnPropertyNames(__fastpack_require__.helpers);
    for (var i = 0, l = helpers.length; i < l; i++) {
      r[helpers[i]] = __fastpack_require__.helpers[helpers[i]];
    }
    r.imp = r.imp.bind(null, moduleId);
    r.state = state;
    modules[moduleId].m.call(
      module.exports,
      module,
      module.exports,
      r,
      r.imp
    );

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  var loadedChunks = {};
  var state = {
    publicPath: ""
  };

  global.__fastpack_update_modules__ = function(newModules) {
    for (var id in newModules) {
      if (modules[id]) {
        throw new Error(
          "Chunk tries to replace already existing module: " + id
        );
      } else {
        modules[id] = newModules[id];
      }
    }
  };

  __fastpack_require__.helpers = {
    omitDefault: function(moduleVar) {
      var keys = Object.keys(moduleVar);
      var ret = {};
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        if (key !== "default") {
          ret[key] = moduleVar[key];
        }
      }
      return ret;
    },

    default: function(exports) {
      return exports.__esModule ? exports.default : exports;
    },

    imp: function(fromModule, request) {
      if (!global.Promise) {
        throw Error("global.Promise is undefined, consider using a polyfill");
      }
      var sourceModule = modules[fromModule];
      var chunks = (sourceModule.c || {})[request] || [];
      var promises = [];
      for (var i = 0, l = chunks.length; i < l; i++) {
        var js = chunks[i];
        var p = loadedChunks[js];
        if (!p) {
          p = loadedChunks[js] = new Promise(function(resolve, reject) {
            var script = document.createElement("script");
            script.onload = function() {
              setTimeout(resolve);
            };
            script.onerror = function() {
              reject();
              throw new Error("Script load error: " + script.src);
            };
            script.src = state.publicPath + chunks[i];
            document.head.append(script);
          });
          promises.push(p);
        }
      }
      return Promise.all(promises).then(function() {
        return __fastpack_require__(fromModule, request);
      });
    }
  };

  return __fastpack_require__(null, (__fastpack_require__.s = "$fp$main"));
}) /* --runtimeMain-- */
({
/* !s: node_modules/preact/dist/preact.module.js */
"NM$$preact$dist$preactDOT$$module":{m:function(module, exports, __fastpack_require__) {
eval("Object.defineProperty(module.exports, \"__esModule\", {value: !0});\nvar n,l,u,t,i={},r=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function o(n,l){for(var u in l)n[u]=l[u];return n}function e(n){var l=n.parentNode;l&&l.removeChild(n)}function c(n,l,u){var t,i,r,f,e=arguments;if(l=o({},l),arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(e[t]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===l[i]&&(l[i]=n.defaultProps[i]);return f=l.key,null!=(r=l.ref)&&delete l.ref,null!=f&&delete l.key,s(n,l,f,r)}function s(l,u,t,i){var r={type:l,props:u,key:t,ref:i,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(r),r}function a(){return{}}function h(n){return n.children}function v(n){if(null==n||\"boolean\"==typeof n)return null;if(\"string\"==typeof n||\"number\"==typeof n)return s(null,n,null,null);if(null!=n.__e||null!=n.__c){var l=s(n.type,n.props,n.key,null);return l.__e=n.__e,l}return n}function p(n,l){this.props=n,this.context=l}function y(n,l){if(null==l)return n.__p?y(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return\"function\"==typeof n.type?y(n):null}function d(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return d(n)}}function m(t){!t.__d&&(t.__d=!0)&&1===l.push(t)&&(n.debounceRendering||u)(w)}function w(){var n;for(l.sort(function(n,l){return l.__v.__b-n.__v.__b});n=l.pop();)n.__d&&n.forceUpdate(!1)}function g(n,l,u,t,f,o,c,s){var a,h,p,d,m,w,g,_,b=l.__k||k(l.props.children,l.__k=[],v,!0),x=u&&u.__k||r,C=x.length;for(s==i&&(s=null!=o?o[0]:C?y(u,0):null),h=0;h<b.length;h++)if(null!=(a=b[h]=v(b[h]))){if(a.__p=l,a.__b=l.__b+1,null===(d=x[h])||d&&a.key==d.key&&a.type===d.type)x[h]=void 0;else for(p=0;p<C;p++){if((d=x[p])&&a.key==d.key&&a.type===d.type){x[p]=void 0;break}d=null}if(m=P(n,a,d=d||i,t,f,o,c,null,s),(p=a.ref)&&d.ref!=p&&(_||(_=[])).push(p,a.__c||m,a),null!=m){if(null==g&&(g=m),null!=a.l)m=a.l,a.l=null;else if(o==d||m!=s||null==m.parentNode)n:if(null==s||s.parentNode!==n)n.appendChild(m);else{for(w=s,p=0;(w=w.nextSibling)&&p<C;p+=2)if(w==m)break n;n.insertBefore(m,s)}s=m.nextSibling,\"function\"==typeof l.type&&(l.l=m)}}if(l.__e=g,null!=o&&\"function\"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&e(o[h]);for(h=C;h--;)null!=x[h]&&j(x[h],x[h]);if(_)for(h=0;h<_.length;h++)$(_[h],_[++h],_[++h])}function k(n,l,u,t){if(null==l&&(l=[]),null==n||\"boolean\"==typeof n)t&&l.push(null);else if(Array.isArray(n))for(var i=0;i<n.length;i++)k(n[i],l,u,t);else l.push(u?u(n):n);return l}function _(n,l,u,t,i){var r;for(r in u)r in l||x(n,r,null,u[r],t);for(r in l)i&&\"function\"!=typeof l[r]||\"value\"===r||\"checked\"===r||u[r]===l[r]||x(n,r,l[r],u[r],t)}function b(n,l,u){\"-\"===l[0]?n.setProperty(l,u):n[l]=\"number\"==typeof u&&!1===f.test(l)?u+\"px\":u}function x(n,l,u,t,i){var r,f,o,e,c;if(\"key\"===(l=i?\"className\"===l?\"class\":l:\"class\"===l?\"className\":l)||\"children\"===l);else if(\"style\"===l)if(r=n.style,\"string\"==typeof u)r.cssText=u;else{if(\"string\"==typeof t&&(r.cssText=\"\",t=null),t)for(f in t)u&&f in u||b(r,f,\"\");if(u)for(o in u)t&&u[o]===t[o]||b(r,o,u[o])}else if(\"o\"===l[0]&&\"n\"===l[1])e=l!==(l=l.replace(/Capture$/,\"\")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,C,e),(n.u||(n.u={}))[l]=u):n.removeEventListener(l,C,e);else if(\"list\"!==l&&\"tagName\"!==l&&!i&&l in n)if(n.length&&\"value\"==l)for(l=n.length;l--;)n.options[l].selected=n.options[l].value==u;else n[l]=null==u?\"\":u;else\"function\"!=typeof u&&\"dangerouslySetInnerHTML\"!==l&&(l!==(l=l.replace(/^xlink:?/,\"\"))?null==u||!1===u?n.removeAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase()):n.setAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function C(l){return this.u[l.type](n.event?n.event(l):l)}function P(l,u,t,i,r,f,e,c,s){var a,y,d,m,w,_,b,x,C,P,N=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if(\"function\"==typeof N){if(x=u.props,C=(a=N.contextType)&&i[a.__c],P=a?C?C.props.value:a.__p:i,t.__c?b=(y=u.__c=t.__c).__p=y.__E:(N.prototype&&N.prototype.render?u.__c=y=new N(x,P):(u.__c=y=new p(x,P),y.constructor=N,y.render=z),C&&C.sub(y),y.props=x,y.state||(y.state={}),y.context=P,y.__n=i,d=y.__d=!0,y.__h=[]),null==y.__s&&(y.__s=y.state),null!=N.getDerivedStateFromProps&&o(y.__s==y.state?y.__s=o({},y.__s):y.__s,N.getDerivedStateFromProps(x,y.__s)),d)null==N.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&e.push(y);else{if(null==N.getDerivedStateFromProps&&null==c&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(x,P),!c&&null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(x,y.__s,P)){y.props=x,y.state=y.__s,y.__d=!1,y.__v=u,u.__e=t.__e,u.__k=t.__k;break n}null!=y.componentWillUpdate&&y.componentWillUpdate(x,y.__s,P)}for(m=y.props,w=y.state,y.context=P,y.props=x,y.state=y.__s,(a=n.__r)&&a(u),y.__d=!1,y.__v=u,y.__P=l,k(null!=(a=y.render(y.props,y.state,y.context))&&a.type==h&&null==a.key?a.props.children:a,u.__k=[],v,!0),null!=y.getChildContext&&(i=o(o({},i),y.getChildContext())),d||null==y.getSnapshotBeforeUpdate||(_=y.getSnapshotBeforeUpdate(m,w)),g(l,u,t,i,r,f,e,s),y.base=u.__e;a=y.__h.pop();)a.call(y);d||null==m||null==y.componentDidUpdate||y.componentDidUpdate(m,w,_),b&&(y.__E=y.__p=null)}else u.__e=T(t.__e,u,t,i,r,f,e);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,t)}return u.__e}function N(l,u){for(var t;t=l.pop();)try{t.componentDidMount()}catch(l){n.__e(l,t.__v)}n.__c&&n.__c(u)}function T(n,l,u,t,f,o,e){var c,s,a,h,v=u.props,p=l.props;if(f=\"svg\"===l.type||f,null==n&&null!=o)for(c=0;c<o.length;c++)if(null!=(s=o[c])&&(null===l.type?3===s.nodeType:s.localName===l.type)){n=s,o[c]=null;break}if(null==n){if(null===l.type)return document.createTextNode(p);n=f?document.createElementNS(\"http://www.w3.org/2000/svg\",l.type):document.createElement(l.type),o=null}return null===l.type?v!==p&&(n.data=p):l!==u&&(null!=o&&(o=r.slice.call(n.childNodes)),a=(v=u.props||i).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,null==o&&(h||a)&&(h&&a&&h.__html==a.__html||(n.innerHTML=h&&h.__html||\"\")),_(n,p,v,f,null!=o),h||g(n,l,u,t,\"foreignObject\"!==l.type&&f,o,e,i),null==o&&(\"value\"in p&&void 0!==p.value&&p.value!==n.value&&(n.value=null==p.value?\"\":p.value),\"checked\"in p&&void 0!==p.checked&&p.checked!==n.checked&&(n.checked=p.checked))),n}function $(l,u,t){try{\"function\"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function j(l,u,t){var i,r,f;if(n.unmount&&n.unmount(l),(i=l.ref)&&$(i,null,u),t||\"function\"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.l=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(f=0;f<i.length;f++)i[f]&&j(i[f],u,t);null!=r&&e(r)}function z(n,l,u){return this.constructor(n,u)}function A(l,u,t){var f,o;n.__p&&n.__p(l,u),f=t&&t.__k||u.__k,l=c(h,null,[l]),o=[],P(u,(t||u).__k=l,f||i,i,void 0!==u.ownerSVGElement,t?[t]:f?null:r.slice.call(u.childNodes),o,!1,t||i),N(o,l)}function D(n,l){l.__k=null,A(n,l)}function H(n,l){return l=o(o({},n.props),l),arguments.length>2&&(l.children=r.slice.call(arguments,2)),s(n.type,l,l.key||n.key,l.ref||n.ref)}function I(n){var l={},u={__c:\"__cC\"+t++,__p:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(n){t.some(function(l){l.__P&&(l.context=n.value,m(l))})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={},p.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=o({},this.state));(\"function\"!=typeof n||(n=n(u,this.props)))&&o(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},p.prototype.forceUpdate=function(n){var l,u,t,i=this.__v,r=this.__v.__e,f=this.__P;f&&(l=!1!==n,u=[],t=P(f,i,o({},i),this.__n,void 0!==f.ownerSVGElement,null,u,l,null==r?y(i):r),N(u,i),t!=r&&d(i)),n&&n()},p.prototype.render=h,l=[],u=\"function\"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n.__e=function(n,l,u){for(var t;l=l.__p;)if((t=l.__c)&&!t.__p)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(n));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(n)}return m(t.__E=t)}catch(l){n=l}throw n},t=0;Object.defineProperty(exports, \"render\", {enumerable: true, get: function() {return A;}});Object.defineProperty(exports, \"hydrate\", {enumerable: true, get: function() {return D;}});Object.defineProperty(exports, \"createElement\", {enumerable: true, get: function() {return c;}});Object.defineProperty(exports, \"h\", {enumerable: true, get: function() {return c;}});Object.defineProperty(exports, \"Fragment\", {enumerable: true, get: function() {return h;}});Object.defineProperty(exports, \"createRef\", {enumerable: true, get: function() {return a;}});Object.defineProperty(exports, \"Component\", {enumerable: true, get: function() {return p;}});Object.defineProperty(exports, \"cloneElement\", {enumerable: true, get: function() {return H;}});Object.defineProperty(exports, \"createContext\", {enumerable: true, get: function() {return I;}});Object.defineProperty(exports, \"toChildArray\", {enumerable: true, get: function() {return k;}});Object.defineProperty(exports, \"_unmount\", {enumerable: true, get: function() {return j;}});Object.defineProperty(exports, \"options\", {enumerable: true, get: function() {return n;}});\n//# sourceMappingURL=preact.module.js.map\n\n//# sourceURL=fpack:///node_modules/preact/dist/preact.module.js");
},
d: {}
},
/* !s: node_modules/preact/hooks/dist/hooks.module.js */
"NM$$preact$hooks$dist$hooksDOT$$module":{m:function(module, exports, __fastpack_require__) {
eval("Object.defineProperty(module.exports, \"__esModule\", {value: !0});\nconst _1_preact = __fastpack_require__(\"preact\");\nvar t,r,u=[],i=_1_preact.options.__r;_1_preact.options.__r=function(n){i&&i(n),t=0,(r=n.__c).__H&&(r.__H.t=w(r.__H.t))};var o=_1_preact.options.diffed;_1_preact.options.diffed=function(n){o&&o(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=w(r.u))}};var f=_1_preact.options.unmount;function c(t){_1_preact.options.__h&&_1_preact.options.__h(r);var u=r.__H||(r.__H={i:[],t:[],u:[]});return t>=u.i.length&&u.i.push({}),u.i[t]}function e(n){return a(q,n)}function a(n,u,i){var o=c(t++);return o.__c||(o.__c=r,o.o=[i?i(u):q(null,u),function(t){var r=n(o.o[0],t);o.o[0]!==r&&(o.o[0]=r,o.__c.setState({}))}]),o.o}function v(n,u){var i=c(t++);F(i.v,u)&&(i.o=n,i.v=u,r.__H.t.push(i),_(r))}function m(n,u){var i=c(t++);F(i.v,u)&&(i.o=n,i.v=u,r.__H.u.push(i))}function p(n){return s(function(){return{current:n}},[])}function l(n,r,u){var i=c(t++);F(i.v,u)&&(i.v=u,n&&(n.current=r()))}function s(n,r){var u=c(t++);return F(u.v,r)?(u.v=r,u.m=n,u.o=n()):u.o}function d(n,t){return s(function(){return n},t)}function y(n){var u=r.context[n.__c];if(!u)return n.__p;var i=c(t++);return null==i.o&&(i.o=!0,u.sub(r)),u.props.value}function T(t,r){_1_preact.options.useDebugValue&&_1_preact.options.useDebugValue(r?r(t):t)}_1_preact.options.unmount=function(n){f&&f(n);var t=n.__c;if(t){var r=t.__H;r&&r.i.forEach(function(n){return n.p&&n.p()})}};var _=function(){};function g(){u.some(function(n){n.l=!1,n.__P&&(n.__H.t=w(n.__H.t))}),u=[]}function w(n){return n.forEach(A),n.forEach(E),[]}function A(n){n.p&&n.p()}function E(n){var t=n.o();\"function\"==typeof t&&(n.p=t)}function F(n,t){return!n||t.some(function(t,r){return t!==n[r]})}function q(n,t){return\"function\"==typeof t?t(n):t}\"undefined\"!=typeof window&&(_=function(t){!t.l&&(t.l=!0)&&1===u.push(t)&&(_1_preact.options.requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n)},r=setTimeout(t,100),u=requestAnimationFrame(t)})(g)});Object.defineProperty(exports, \"useState\", {enumerable: true, get: function() {return e;}});Object.defineProperty(exports, \"useReducer\", {enumerable: true, get: function() {return a;}});Object.defineProperty(exports, \"useEffect\", {enumerable: true, get: function() {return v;}});Object.defineProperty(exports, \"useLayoutEffect\", {enumerable: true, get: function() {return m;}});Object.defineProperty(exports, \"useRef\", {enumerable: true, get: function() {return p;}});Object.defineProperty(exports, \"useImperativeHandle\", {enumerable: true, get: function() {return l;}});Object.defineProperty(exports, \"useMemo\", {enumerable: true, get: function() {return s;}});Object.defineProperty(exports, \"useCallback\", {enumerable: true, get: function() {return d;}});Object.defineProperty(exports, \"useContext\", {enumerable: true, get: function() {return y;}});Object.defineProperty(exports, \"useDebugValue\", {enumerable: true, get: function() {return T;}});\n//# sourceMappingURL=hooks.module.js.map\n\n//# sourceURL=fpack:///node_modules/preact/hooks/dist/hooks.module.js");
},
d: {"preact":"NM$$preact$dist$preactDOT$$module"}
},
/* !s: src/components/App.tsx */
"NM$$swc$$_$$loader$src$indexDOT$$js$$B$$src$components$AppDOT$$tsx":{m:function(module, exports, __fastpack_require__) {
eval("Object.defineProperty(module.exports, \"__esModule\", {value: !0});\nconst _1_preact = __fastpack_require__(\"preact\");\nconst _2_preact_hooks = __fastpack_require__(\"preact/hooks\");\n\n\nfunction App(){var ref=_2_preact_hooks.useState(11),val=ref[0],changeVal=ref[1];var handleUp=_2_preact_hooks.useCallback(function(){return changeVal(function(val){return val+1;});},[]);return _1_preact.h(_1_preact.Fragment,null,_1_preact.h('h2',null,'Hello world! '),_1_preact.h('div',null,'Counter: ',val),_1_preact.h('button',{onClick:handleUp},'toggle'));}\nexports.default = App;\n;\n\n//# sourceURL=fpack:///node_modules/swc-loader/src/index.js!src/components/App.tsx");
},
d: {"preact":"NM$$preact$dist$preactDOT$$module","preact/hooks":"NM$$preact$hooks$dist$hooksDOT$$module"}
},
/* !s: src/index.tsx */
"NM$$swc$$_$$loader$src$indexDOT$$js$$B$$src$indexDOT$$tsx":{m:function(module, exports, __fastpack_require__) {
eval("Object.defineProperty(module.exports, \"__esModule\", {value: !0});\nconst _1_preact = __fastpack_require__(\"preact\");\nconst _2__components_App = __fastpack_require__(\"./components/App\");\n\n\nvar root=document.getElementById('root');if(root){_1_preact.render(_1_preact.h((__fastpack_require__.default(_2__components_App)),null),root);}\n//# sourceURL=fpack:///node_modules/swc-loader/src/index.js!src/index.tsx");
},
d: {"preact":"NM$$preact$dist$preactDOT$$module","./components/App":"NM$$swc$$_$$loader$src$indexDOT$$js$$B$$src$components$AppDOT$$tsx"}
},
/* !s: main */
"$fp$main":{m:function(module, exports, __fastpack_require__) {
eval("Object.defineProperty(module.exports, \"__esModule\", {value: !0});\n__fastpack_require__(\"./src\");\n\n\n\n//# sourceURL=fpack:///$fp$main");
},
d: {"./src":"NM$$swc$$_$$loader$src$indexDOT$$js$$B$$src$indexDOT$$tsx"}
},

});
