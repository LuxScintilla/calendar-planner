// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"46McK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clickedDate", ()=>clickedDate);
parcelHelpers.export(exports, "tasks", ()=>tasks);
parcelHelpers.export(exports, "profile", ()=>profile);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "executeOrder", ()=>executeOrder);
parcelHelpers.export(exports, "renderProfile", ()=>renderProfile);
parcelHelpers.export(exports, "renderProfileWeather", ()=>renderProfileWeather);
var _modalJs = require("./modal.js");
"use strict";
const calendar = document.querySelector(".organiser__dates");
const monthYear = document.getElementById("month-year");
const btnPrevious = document.querySelector(".month__button--previous");
const btnNext = document.querySelector(".month__button--next");
const avatarEl = document.querySelector(".profile__avatar");
const usernameEl = document.querySelector(".profile__username");
const locationEl = document.querySelector(".profile__location");
const profileWeatherDiv = document.querySelector(".profile__weather");
const profileWeatherImg = document.querySelector(".profile__weather-img");
const profileWeatherText = document.querySelector(".profile__weather-text");
const weekdaysArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
let currentDate = new Date();
let originalDate = new Date().getDate();
let clickedDate;
let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
let profile = localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : [];
const state = {};
// Gets all the data for the date you are working with
const getDate = function() {
    state.day = currentDate.getDay();
    state.month = currentDate.getMonth();
    state.year = currentDate.getFullYear();
    state.daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    state.firstDayOfMonth = new Date(state.year, state.month, 1);
    state.dateString = state.firstDayOfMonth.toLocaleDateString("en-UK", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    state.paddingDays = weekdaysArray.indexOf(state.dateString.split(", ")[0]);
};
// Adds a class modifier depending on what date it is currently
const addCurrentMarkup = function(i) {
    if (i === originalDate && state.month === new Date().getMonth()) return `--current`;
    else return "";
};
// Returns the html markup needed for rendering the appropriate task titles
const renderTaskTitle = function(i, line) {
    const filtered = tasks.filter((task)=>{
        return task.taskDate === i && state.month === task.taskMonth;
    });
    if (filtered[line] && filtered[line].taskMonth === state.month) return `${filtered[line].taskTitle}`;
    else return "";
};
// Renders the add task button at the top of the dates, unless date has passed
const renderAddTaskBtn = function(i) {
    if (i < originalDate) return "";
    else return `<button class="tasks__btn tasks__btn--add" aria-label="button to add task for this date" data-date="${i}"><i class="fa-solid fa-plus"></i></button>`;
};
// Renders the edit button at the top of the dates, unless there are no tasks for that date
const renderEditTaskBtn = function(i) {
    if (tasks.some((task)=>task.taskDate === i)) return `<button class="tasks__btn tasks__btn--edit" aria-label="button to edit existing tasks for this date" data-date="${i}"><i class="fa-solid fa-pen-to-square"></i></button>`;
    else return "";
};
// Renders the delete button at the top of the dates, unless there are no tasks for that date
const renderDeleteTaskBtn = function(i) {
    if (tasks.some((task)=>task.taskDate === i)) return `<button class="tasks__btn tasks__btn--delete" aria-label="button to delete some tasks for this date" data-date="${i}"><i class="fa-solid fa-trash"></i></button>`;
    else return "";
};
// Renders the weather button at the top of every date, which will get the weather info from API and display it
const renderWeatherBtn = function(i) {
    if (i === originalDate) return `<button class="tasks__btn tasks__btn--weather" aria-label="button to see current weather for this date" data-date="${i}"><i class="fa-solid fa-cloud-sun"></i></button>`;
    else return "";
};
// Generates all the html markup for all the dates of the month
const renderDates = function() {
    // Collects all the markup when finished
    let markup = "";
    for(let i = 1; i <= state.paddingDays + state.daysInMonth; i++)if (i > state.paddingDays) markup += `
      <div class="tasks">
          <div class="tasks__date${addCurrentMarkup(i - state.paddingDays)}"><span>${i - state.paddingDays}</span></div>
          <div class="tasks__divider">
            ${renderWeatherBtn(i - state.paddingDays)}
            ${renderAddTaskBtn(i - state.paddingDays)}
            ${renderEditTaskBtn(i - state.paddingDays)}
            ${renderDeleteTaskBtn(i - state.paddingDays)}
          </div>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-1-${i - state.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-1-${i - state.paddingDays}" data-task="task-1-${i - state.paddingDays}">${renderTaskTitle(i - state.paddingDays, 0) ? renderTaskTitle(i - state.paddingDays, 0) : ""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-2-${i - state.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-2-${i - state.paddingDays}" data-task="task-2-${i - state.paddingDays}">${renderTaskTitle(i - state.paddingDays, 1) ? renderTaskTitle(i - state.paddingDays, 1) : ""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-3-${i - state.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-3-${i - state.paddingDays}" data-task="task-3-${i - state.paddingDays}">${renderTaskTitle(i - state.paddingDays, 2) ? renderTaskTitle(i - state.paddingDays, 2) : ""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-4-${i - state.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-4-${i - state.paddingDays}" data-task="task-4-${i - state.paddingDays}">${renderTaskTitle(i - state.paddingDays, 3) ? renderTaskTitle(i - state.paddingDays, 3) : ""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-5-${i - state.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-5-${i - state.paddingDays}" data-task="task-5-${i - state.paddingDays}">${renderTaskTitle(i - state.paddingDays, 4) ? renderTaskTitle(i - state.paddingDays, 4) : ""}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-6-${i - state.paddingDays}">
          </div>
          <label class="tasks__todo" for="task-6-${i - state.paddingDays}" data-task="task-6-${i - state.paddingDays}">${renderTaskTitle(i - state.paddingDays, 5) ? renderTaskTitle(i - state.paddingDays, 5) : ""}</label>
        </div>
      `;
    else markup += `
      <div class="padding"></div>
      `;
    // Clear and insert html markup into the calendar
    calendar.innerHTML = "";
    calendar.insertAdjacentHTML("afterbegin", markup);
};
// Renders and updates the current month and year text at the top of the calendar
const renderMonthYear = function() {
    monthYear.textContent = `${new Intl.DateTimeFormat("en-UK", {
        month: "long"
    }).format(currentDate)} ${currentDate.getFullYear()}`;
};
const executeOrder = function() {
    tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    // Renders and updates the current month and year text at the top of the calendar
    renderMonthYear();
    // Gets the current (or requested by previous or next month buttons) dates and saves it in state object
    getDate();
    // Renders all the markup for each date of currently viewed month
    renderDates();
    // Attaches eventlisteners to the add, edit, and delete buttons
    attachBtnHandler();
    // Renders the css styles according to whether the checkbox is checked or not
    attachCheckBoxHandler();
};
// Button for going through the months - Previous Month
btnPrevious.addEventListener("click", function() {
    if (currentDate.getMonth() === 0) currentDate = new Date(state.year - 1, 11);
    else currentDate = new Date(state.year, state.month - 1);
    executeOrder();
});
// Button for going through the months - Next Month
btnNext.addEventListener("click", function() {
    if (currentDate.getMonth() === 11) currentDate = new Date(state.year + 1, 0);
    else currentDate = new Date(state.year, state.month + 1);
    executeOrder();
});
////////////////////////////////////
// Function which adds all the eventlisteners to the buttons on every date
////////////////////////////////////
// Add eventlisteners to all the "add task" buttons on all the dates
// Also collects the dataset for the date of the clicked button
const attachBtnHandler = function() {
    const addTaskBtns = document.querySelectorAll(".tasks__btn--add");
    const editTaskBtns = document.querySelectorAll(".tasks__btn--edit");
    const deleteTaskBtns = document.querySelectorAll(".tasks__btn--delete");
    const weatherBtns = document.querySelectorAll(".tasks__btn--weather");
    addTaskBtns.forEach((btn)=>btn.addEventListener("click", function(event) {
            // Get the dataset from the button itself when clicking the icon within the button
            clickedDate = event.target.closest(".tasks__btn--add").dataset.date;
            // Opens the add task modal, creates object of date info and task title, and saves to localstorage
            _modalJs.openAddTask();
        }));
    editTaskBtns.forEach((btn)=>{
        btn.addEventListener("click", function(event) {
            // Get the dataset from the button itself when clicking the icon within the button
            clickedDate = event.target.closest(".tasks__btn--edit").dataset.date;
            // Opens the edit modal, filters, and renders tasks for that day inside the modal
            _modalJs.openEditTask();
            // Checks which tasks have been edited and saves them into localstorage
            editTaskHandler();
        });
    });
    deleteTaskBtns.forEach((btn)=>{
        btn.addEventListener("click", function(event) {
            // Get the dataset from the button itself when clicking the icon within the button
            clickedDate = event.target.closest(".tasks__btn--delete").dataset.date;
            // Opens the delete modal, filters, and renders tasks for that day inside the modal
            _modalJs.openDeleteTask();
            // Checks which tasks have been deleted and saves changes into localstorage
            deleteTaskHandler();
        });
    });
    weatherBtns.forEach((btn)=>{
        btn.addEventListener("click", function(event) {
            // Get the dataset from the button itself when clicking the icon within the button
            clickedDate = event.target.closest(".tasks__btn--weather").dataset.date;
            // Opens the weather modal, and renders the weather from an API (openweathermap) for that day inside the modal
            _modalJs.openWeatherModal();
        });
    });
};
const editTaskHandler = function() {
    // Select the dynamically rendered (by the modal.openEditTask) btns and inputs inside the edit modal
    const editTaskBtns = document.querySelectorAll(".edit-task-btn");
    const taskInputs = document.querySelectorAll(".modal__task-input");
    // Original and new values for the task titles to compare and update
    let originalValue;
    let newValue;
    editTaskBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if (btn.textContent === "Edit") {
                btn.textContent = "Save";
                taskInputs.forEach((input)=>{
                    // Sets the inputs from readonly to editable
                    if (btn.dataset.task === input.dataset.task && input.hasAttribute("readonly")) {
                        // Sets original value to be compared later
                        originalValue = input.value;
                        input.removeAttribute("readonly");
                    }
                });
            // Sets inputs back to readonly, compares each input with original values and updates the changed titles, and finally updates localstorage
            } else if (btn.textContent === "Save") {
                btn.textContent = "Edit";
                taskInputs.forEach((input)=>{
                    if (btn.dataset.task === input.dataset.task && !input.hasAttribute("readonly")) {
                        // Sets new value to replace with in tasks later
                        newValue = input.value;
                        const mappedTasks = tasks.map((task)=>{
                            if (task.taskDate !== Number(clickedDate) && task.taskMonth === state.month) return task;
                            else if (task.taskDate === Number(clickedDate) && task.taskTitle !== originalValue && task.taskMonth === state.month) return task;
                            else if (task.taskDate === Number(clickedDate) && task.taskTitle === originalValue && task.taskMonth === state.month) {
                                task.taskTitle = newValue;
                                return task;
                            }
                        });
                        input.setAttribute("readonly", "readonly");
                        localStorage.setItem("tasks", JSON.stringify(mappedTasks));
                    }
                });
            }
        });
    });
};
const deleteTaskHandler = function() {
    // Select the dynamically rendered (by the modal.openDeleteTask) btns and inputs inside the delete task modal
    const deleteTaskBtns = document.querySelectorAll(".delete-task-btn");
    const taskInputs = document.querySelectorAll(".modal__task-input");
    let originalValueArray = [];
    deleteTaskBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if (btn.textContent === "Delete") btn.textContent = "Confirm";
            else if (btn.textContent === "Confirm") {
                btn.textContent = "Delete";
                taskInputs.forEach((item)=>{
                    if (btn.dataset.task === item.dataset.task) {
                        // After confirm is clicked this value will be added to array which will later be used to filter out these to be deteled tasks from the main list of tasks
                        originalValueArray.push(item.value);
                        // After confirming deletion set input and button to display none
                        btn.style.display = "none";
                        item.style.display = "none";
                    }
                    const filteredTasks = tasks.filter((task)=>{
                        if (task.taskDate !== Number(clickedDate) && task.taskMonth === state.month) return task;
                        else if (task.taskDate === Number(clickedDate) && !originalValueArray.some((item)=>item === task.taskTitle) && task.taskMonth === state.month) return task;
                        else if (task.taskDate === Number(clickedDate) && originalValueArray.some((item)=>item === task.taskTitle) && task.taskMonth === state.month) return;
                    });
                    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
                });
            }
        });
    });
};
// Listen to and get info from the checkboxes clicked
const attachCheckBoxHandler = function() {
    const checkBox = document.querySelectorAll('input[type="checkbox"]');
    const taskLabel = document.querySelectorAll(".tasks__todo");
    checkBox.forEach((box)=>box.addEventListener("change", function() {
            if (this.checked) taskLabel.forEach((label)=>{
                // Label dataset and checkbox id have matching values representing the month and date
                if (label.dataset.task === this.id) {
                    label.style.opacity = 0.5;
                    label.style.textDecoration = "line-through";
                    // Traverses the DOM until it finds the textContent for the task
                    const data = this.parentElement.nextElementSibling.textContent;
                    // Sets the checked status for this task in the localstorage
                    addCheckedStatus(data, true);
                }
            });
            else taskLabel.forEach((label)=>{
                // Label dataset and checkbox id have matching values representing the month and date
                if (label.dataset.task === this.id) {
                    label.style.opacity = 1;
                    label.style.textDecoration = "none";
                    // Traverses the DOM until it finds the textContent for the task
                    const data = this.parentElement.nextElementSibling.textContent;
                    // Sets the checked status for this task in the localstorage
                    addCheckedStatus(data, false);
                }
            });
        }));
    checkBox.forEach((box)=>{
        const data = box.parentElement.nextElementSibling.textContent;
        tasks.forEach((task)=>{
            if (task.taskTitle === data && task.checked === true) {
                box.setAttribute("checked", "");
                taskLabel.forEach((label)=>{
                    if (label.textContent === data) {
                        label.style.opacity = 0.5;
                        label.style.textDecoration = "line-through";
                    }
                });
            }
        });
    });
};
const addCheckedStatus = function(data, status) {
    tasks.forEach((task)=>{
        if (task.taskTitle === data) {
            task.checked = status;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });
};
////////////////////////////////////
// PROFILE SECTION
////////////////////////////////////
avatarEl.addEventListener("click", function() {
    _modalJs.openProfileModal();
});
const renderProfile = function() {
    profile = JSON.parse(localStorage.getItem("profile"));
    if (localStorage.getItem("profile")) {
        usernameEl.textContent = profile.username;
        locationEl.textContent = profile.location;
    } else {
        usernameEl.textContent = "User";
        locationEl.textContent = "Location";
    }
};
const renderProfileWeather = async function() {
    try {
        profileWeatherImg.classList.add("spinner-class");
        let data;
        if (localStorage.getItem("profile")) {
            const profile = JSON.parse(localStorage.getItem("profile"));
            data = await _modalJs.weatherAPI(profile.location);
            if (!data.current) throw new Error("Invalid location in your profile");
            else {
                // Apply the data to the markup elements
                profileWeatherImg.classList.remove("spinner-class");
                profileWeatherImg.src = getWeatherIcon[data.current.condition.code];
                profileWeatherText.textContent = `${data.current.temp_c}\xb0C`;
            }
        } else if (!localStorage.getItem("profile")) {
            profileWeatherImg.classList.remove("spinner-class");
            profileWeatherImg.style.display = "none";
            profileWeatherText.textContent = "No Location";
        }
    } catch (error) {
        console.error(error);
        profileWeatherImg.classList.remove("spinner-class");
        profileWeatherImg.style.display = "none";
        profileWeatherText.textContent = "Invalid Location";
    }
};
const getWeatherIcon = {
    1000: "./src/img/weather/clear-day.svg",
    1003: "./src/img/weather/partly-cloudy-day.svg",
    1006: "./src/img/weather/cloudy.svg",
    1009: "./src/img/weather/overcast.svg",
    1030: "./src/img/weather/mist.svg",
    1063: "./src/img/weather/partly-cloudy-day-rain.svg",
    1066: "./src/img/weather/partly-cloudy-day-snow.svg",
    1069: "./src/img/weather/partly-cloudy-day-sleet.svg",
    1072: "./src/img/weather/partly-cloudy-day-hail.svg",
    1087: "./src/img/weather/thunderstorms-day.svg",
    1114: "./src/img/weather/snow.svg",
    1117: "./src/img/weather/extreme-snow.svg",
    1135: "./src/img/weather/fog.svg",
    1147: "./src/img/weather/overcast-fog.svg",
    1150: "./src/img/weather/overcast-day-drizzle.svg",
    1153: "./src/img/weather/drizzle.svg",
    1168: "./src/img/weather/hail.svg",
    1171: "./src/img/weather/hail.svg",
    1180: "./src/img/weather/partly-cloudy-day-rain.svg",
    1183: "./src/img/weather/drizzle.svg",
    1186: "./src/img/weather/rain.svg",
    1189: "./src/img/weather/rain.svg",
    1192: "./src/img/weather/overcast-rain.svg",
    1195: "./src/img/weather/overcast-rain.svg",
    1198: "./src/img/weather/hail.svg",
    1201: "./src/img/weather/hail.svg",
    1204: "./src/img/weather/sleet.svg",
    1207: "./src/img/weather/extreme-sleet.svg",
    1210: "./src/img/weather/partly-cloudy-day-snow.svg",
    1213: "./src/img/weather/snow.svg",
    1216: "./src/img/weather/partly-cloudy-day-snow.svg",
    1219: "./src/img/weather/snow.svg",
    1222: "./src/img/weather/overcast-snow.svg",
    1225: "./src/img/weather/extreme-snow.svg",
    1237: "./src/img/weather/hail.svg",
    1240: "./src/img/weather/rain.svg",
    1243: "./src/img/weather/extreme-rain.svg",
    1246: "./src/img/weather/extreme-rain.svg",
    1249: "./src/img/weather/sleet.svg",
    1252: "./src/img/weather/extreme-sleet.svg",
    1255: "./src/img/weather/snow.svg",
    1258: "./src/img/weather/overcast-snow.svg",
    1261: "./src/img/weather/hail.svg",
    1264: "./src/img/weather/extreme-hail.svg",
    1273: "./src/img/weather/thunderstorms-day-rain.svg",
    1276: "./src/img/weather/thunderstorms-extreme-rain.svg",
    1279: "./src/img/weather/thunderstorms-day-snow.svg",
    1282: "./src/img/weather/thunderstorms-extreme-snow.svg"
};
////////////////////////////////////
// THEME SECTION
////////////////////////////////////
const themeBtns = document.querySelectorAll(".themes__btn");
let themeID = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "purple";
themeBtns.forEach((btn)=>{
    btn.addEventListener("click", function() {
        localStorage.setItem("theme", JSON.stringify(btn.id));
        loadTheme();
        location.replace(location.href);
    });
});
// Function that loads the theme depending on whether there is one saved in local storage or not
const loadTheme = function() {
    document.documentElement.classList.add(themeID);
};
loadTheme();
renderProfile();
renderProfileWeather();
getDate();
renderMonthYear();
renderDates();
attachBtnHandler();
attachCheckBoxHandler();

},{"./modal.js":"aHHgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHHgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openAddTask", ()=>openAddTask);
parcelHelpers.export(exports, "openEditTask", ()=>openEditTask);
parcelHelpers.export(exports, "openDeleteTask", ()=>openDeleteTask);
parcelHelpers.export(exports, "openWeatherModal", ()=>openWeatherModal);
parcelHelpers.export(exports, "weatherAPI", ()=>weatherAPI);
parcelHelpers.export(exports, "openProfileModal", ()=>openProfileModal);
var _mainJs = require("./main.js");
"use strict";
const backDrop = document.querySelector(".modal__backdrop");
const addTaskModal = document.querySelector(".modal__new-task");
const editTaskModal = document.querySelector(".modal__edit-task");
const deleteTaskModal = document.querySelector(".modal__delete-task");
const weatherModal = document.querySelector(".modal__weather");
const profileModal = document.querySelector(".modal__profile");
const modalForm = document.querySelector(".modal__form");
const addTaskInput = document.querySelector(".modal__task-input");
const usernameInput = document.querySelector(".username-input");
const locationInput = document.querySelector(".location-input");
const editContainer = document.querySelector(".modal__render-edit-container");
const deleteContainer = document.querySelector(".modal__render-delete-container");
const saveBtn = document.querySelector(".modal__btn-save");
const profileSaveBtn = document.querySelector(".modal__btn-profile-save");
const doneBtn = document.querySelectorAll(".modal__btn-done");
const cancelBtn = document.querySelectorAll(".modal__btn-cancel");
const okBtn = document.querySelector(".modal__btn-ok");
modalForm.addEventListener("keydown", function(event) {
    // Stop anything from happening when user presses the enter key
    if (event.key === "Enter") event.preventDefault();
});
///////////////////////////////////////////////
// SAVE BUTTON
///////////////////////////////////////////////
saveBtn.addEventListener("click", function(event) {
    // Object that will be saved into localstorage
    const dataObject = {
        taskDate: Number(_mainJs.clickedDate),
        taskMonth: _mainJs.state.month,
        taskTitle: addTaskInput.value
    };
    // Push object to the end of the main tasks array
    _mainJs.tasks[_mainJs.tasks.length] = dataObject;
    localStorage.setItem("tasks", JSON.stringify(_mainJs.tasks));
    backDrop.style.display = "none";
    addTaskModal.style.display = "none";
    // Stop scrolling when modal is open
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    // Clear input field
    addTaskInput.value = "";
    // Render the calendar with the new data
    _mainJs.executeOrder();
});
const openAddTask = function() {
    backDrop.style.display = "block";
    addTaskModal.style.display = "flex";
    addTaskInput.focus();
    // Stop scrolling when modal is open
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
};
const openEditTask = function() {
    // Collects the entire markup to be attached when done
    let markup = "";
    // Counter for the task numbers when rendering dynamically
    let i = 1;
    // Get only the tasks for the day and month you clicked
    const filtered = _mainJs.tasks.filter((task)=>task.taskDate === Number(_mainJs.clickedDate) && task.taskMonth === _mainJs.state.month);
    // For each task of selected generate the html markup
    filtered.forEach((task)=>{
        markup += `<div class="modal__task-container">
      <label class="modal__task-label--edit" for="task">Task ${i}:</label>
      <input class="modal__task-input" name="task" type="text" data-task=${i} value="${task.taskTitle}" autocomplete="off" maxlength="30"
      readonly>
      <button class="edit-task-btn" data-task=${i}>Edit</button>
    </div>`;
        i++;
    });
    editContainer.innerHTML = "";
    editContainer.insertAdjacentHTML("afterbegin", markup);
    backDrop.style.display = "block";
    editTaskModal.style.display = "flex";
    // Stop scrolling when modal is open
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
};
const openDeleteTask = function() {
    // Collects the entire markup to be attached when done
    let markup = "";
    // Counter for the task numbers when rendering dynamically
    let i = 1;
    // Get only the tasks for the day and month you clicked
    const filtered = _mainJs.tasks.filter((task)=>task.taskDate === Number(_mainJs.clickedDate) && task.taskMonth === _mainJs.state.month);
    // For each task of selected generate the html markup
    filtered.forEach((task)=>{
        markup += `<div class="modal__task-container">
      <label class="modal__task-label--delete" for="task">Task ${i}:</label>
      <input class="modal__task-input" name="task" type="text" data-task=${i} value="${task.taskTitle}" autocomplete="off" maxlength="30"
      readonly>
      <button class="delete-task-btn" data-task=${i}>Delete</button>
    </div>`;
        i++;
    });
    deleteContainer.innerHTML = "";
    deleteContainer.insertAdjacentHTML("afterbegin", markup);
    backDrop.style.display = "block";
    deleteTaskModal.style.display = "flex";
    // Stop scrolling when modal is open
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
};
///////////////////////////////////////////////
// OPEN WEATHER MODAL
///////////////////////////////////////////////
const weatherIMG = document.querySelector(".weather__img");
const weatherTemperature = document.querySelector(".weather__temp");
const humidityIMG = document.querySelector(".humidity");
const weatherHumidity = document.querySelector(".humidity__text");
const windIMG = document.querySelector(".wind");
const weatherWind = document.querySelector(".wind__text");
const KEY = "9b3d812c470e4cc4abf95058240901";
const openWeatherModal = async function() {
    backDrop.style.display = "block";
    weatherModal.style.display = "flex";
    // Stop scrolling when modal is open
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    try {
        weatherIMG.classList.add("spinner-class");
        let data;
        if (localStorage.getItem("profile")) {
            const profile = JSON.parse(localStorage.getItem("profile"));
            data = await weatherAPI(profile.location);
            showElements();
            if (!data.current) throw new Error("Invalid location in your profile");
            else {
                // Apply the data to the markup elements
                weatherIMG.classList.remove("spinner-class");
                weatherIMG.src = data.current.condition.icon;
                weatherTemperature.textContent = `${data.current.temp_c}\xb0C`;
                weatherHumidity.textContent = `${data.current.humidity}%`;
                weatherWind.textContent = `${data.current.wind_mph} mph`;
            }
        } else if (!localStorage.getItem("profile")) weatherMarkup("Enter a location into your profile (top left)");
    } catch (error) {
        console.error(error);
        weatherMarkup("Invalid location! Please change your location to a valid city or country name");
    }
};
const weatherMarkup = function(message) {
    weatherIMG.style.display = "none";
    weatherTemperature.style.fontSize = "2.4rem";
    weatherTemperature.textContent = message;
    humidityIMG.style.display = "none";
    weatherHumidity.style.display = "none";
    windIMG.style.display = "none";
    weatherWind.style.display = "none";
};
const showElements = function() {
    weatherIMG.style.display = "block";
    humidityIMG.style.display = "block";
    weatherHumidity.style.display = "inline-block";
    windIMG.style.display = "block";
    weatherWind.style.display = "inline-block";
};
const weatherAPI = async function(location) {
    try {
        // Request data from weatherAPI
        const apiJSON = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}&aqi=no`);
        // Check if data has succesfully been retrieved
        if (!apiJSON.ok) throw new Error("Invalid request, change location and try again");
        // Convert data from JSON format
        const data = await apiJSON.json();
        console.log(data);
        return data;
    } catch (error) {
        // If something goes wrong crashes are caught here
        console.error(error);
    }
};
const openProfileModal = function() {
    _mainJs.profile = JSON.parse(localStorage.getItem("profile"));
    if (localStorage.getItem("profile")) {
        usernameInput.placeholder = _mainJs.profile.username;
        locationInput.placeholder = _mainJs.profile.location;
    } else {
        usernameInput.placeholder = "Username";
        locationInput.placeholder = "Location";
    }
    backDrop.style.display = "block";
    profileModal.style.display = "flex";
    usernameInput.focus();
    // Stop scrolling when modal is open
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
};
///////////////////////////////////////////////
// PROFILE SAVE BUTTON
///////////////////////////////////////////////
const profileWeatherImg = document.querySelector(".profile__weather-img");
profileSaveBtn.addEventListener("click", function() {
    const dataObject = {
        username: localStorage.getItem("profile") && usernameInput.value === "" ? _mainJs.profile.username : usernameInput.value,
        location: localStorage.getItem("profile") && locationInput.value === "" ? _mainJs.profile.location : locationInput.value
    };
    localStorage.setItem("profile", JSON.stringify(dataObject));
    _mainJs.renderProfile();
    _mainJs.renderProfileWeather();
    profileWeatherImg.style.display = "block";
    backDrop.style.display = "none";
    profileModal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    // Clear input field
    usernameInput.value = "";
    locationInput.value = "";
});
///////////////////////////////////////////////
// CANCEL BUTTON
///////////////////////////////////////////////
cancelBtn.forEach((btn)=>{
    btn.addEventListener("click", function() {
        backDrop.style.display = "none";
        addTaskModal.style.display = "none";
        editTaskModal.style.display = "none";
        deleteTaskModal.style.display = "none";
        profileModal.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
    });
});
///////////////////////////////////////////////
// DONE BUTTON
///////////////////////////////////////////////
doneBtn.forEach((btn)=>{
    btn.addEventListener("click", function() {
        backDrop.style.display = "none";
        addTaskModal.style.display = "none";
        editTaskModal.style.display = "none";
        deleteTaskModal.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
        // Render the calendar with the new data
        _mainJs.executeOrder();
    });
});
///////////////////////////////////////////////
// OK BUTTON
///////////////////////////////////////////////
okBtn.addEventListener("click", function() {
    backDrop.style.display = "none";
    weatherModal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
});

},{"./main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["46McK","1SICI"], "1SICI", "parcelRequirefc94")

//# sourceMappingURL=index.18dbc454.js.map
