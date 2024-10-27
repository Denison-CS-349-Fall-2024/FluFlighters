"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrow: () => (/* binding */ arrow),\n/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),\n/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate),\n/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition),\n/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),\n/* harmony export */   flip: () => (/* binding */ flip),\n/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors),\n/* harmony export */   hide: () => (/* binding */ hide),\n/* harmony export */   inline: () => (/* binding */ inline),\n/* harmony export */   limitShift: () => (/* binding */ limitShift),\n/* harmony export */   offset: () => (/* binding */ offset),\n/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform),\n/* harmony export */   shift: () => (/* binding */ shift),\n/* harmony export */   size: () => (/* binding */ size),\n/* harmony export */   useFloating: () => (/* binding */ useFloating)\n/* harmony export */ });\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+dom@1.6.11/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n\n\n\n\n\n\nvar index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;\n\n// Fork of `fast-deep-equal` that only does the comparisons we need and compares\n// functions\nfunction deepEqual(a, b) {\n  if (a === b) {\n    return true;\n  }\n  if (typeof a !== typeof b) {\n    return false;\n  }\n  if (typeof a === 'function' && a.toString() === b.toString()) {\n    return true;\n  }\n  let length;\n  let i;\n  let keys;\n  if (a && b && typeof a === 'object') {\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length !== b.length) return false;\n      for (i = length; i-- !== 0;) {\n        if (!deepEqual(a[i], b[i])) {\n          return false;\n        }\n      }\n      return true;\n    }\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) {\n      return false;\n    }\n    for (i = length; i-- !== 0;) {\n      if (!{}.hasOwnProperty.call(b, keys[i])) {\n        return false;\n      }\n    }\n    for (i = length; i-- !== 0;) {\n      const key = keys[i];\n      if (key === '_owner' && a.$$typeof) {\n        continue;\n      }\n      if (!deepEqual(a[key], b[key])) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return a !== a && b !== b;\n}\n\nfunction getDPR(element) {\n  if (typeof window === 'undefined') {\n    return 1;\n  }\n  const win = element.ownerDocument.defaultView || window;\n  return win.devicePixelRatio || 1;\n}\n\nfunction roundByDPR(element, value) {\n  const dpr = getDPR(element);\n  return Math.round(value * dpr) / dpr;\n}\n\nfunction useLatestRef(value) {\n  const ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value);\n  index(() => {\n    ref.current = value;\n  });\n  return ref;\n}\n\n/**\n * Provides data to position a floating element.\n * @see https://floating-ui.com/docs/useFloating\n */\nfunction useFloating(options) {\n  if (options === void 0) {\n    options = {};\n  }\n  const {\n    placement = 'bottom',\n    strategy = 'absolute',\n    middleware = [],\n    platform,\n    elements: {\n      reference: externalReference,\n      floating: externalFloating\n    } = {},\n    transform = true,\n    whileElementsMounted,\n    open\n  } = options;\n  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2__.useState({\n    x: 0,\n    y: 0,\n    strategy,\n    placement,\n    middlewareData: {},\n    isPositioned: false\n  });\n  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_2__.useState(middleware);\n  if (!deepEqual(latestMiddleware, middleware)) {\n    setLatestMiddleware(middleware);\n  }\n  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const setReference = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {\n    if (node !== referenceRef.current) {\n      referenceRef.current = node;\n      _setReference(node);\n    }\n  }, []);\n  const setFloating = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {\n    if (node !== floatingRef.current) {\n      floatingRef.current = node;\n      _setFloating(node);\n    }\n  }, []);\n  const referenceEl = externalReference || _reference;\n  const floatingEl = externalFloating || _floating;\n  const referenceRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);\n  const floatingRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);\n  const dataRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(data);\n  const hasWhileElementsMounted = whileElementsMounted != null;\n  const whileElementsMountedRef = useLatestRef(whileElementsMounted);\n  const platformRef = useLatestRef(platform);\n  const openRef = useLatestRef(open);\n  const update = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {\n    if (!referenceRef.current || !floatingRef.current) {\n      return;\n    }\n    const config = {\n      placement,\n      strategy,\n      middleware: latestMiddleware\n    };\n    if (platformRef.current) {\n      config.platform = platformRef.current;\n    }\n    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(referenceRef.current, floatingRef.current, config).then(data => {\n      const fullData = {\n        ...data,\n        // The floating element's position may be recomputed while it's closed\n        // but still mounted (such as when transitioning out). To ensure\n        // `isPositioned` will be `false` initially on the next open, avoid\n        // setting it to `true` when `open === false` (must be specified).\n        isPositioned: openRef.current !== false\n      };\n      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {\n        dataRef.current = fullData;\n        react_dom__WEBPACK_IMPORTED_MODULE_3__.flushSync(() => {\n          setData(fullData);\n        });\n      }\n    });\n  }, [latestMiddleware, placement, strategy, platformRef, openRef]);\n  index(() => {\n    if (open === false && dataRef.current.isPositioned) {\n      dataRef.current.isPositioned = false;\n      setData(data => ({\n        ...data,\n        isPositioned: false\n      }));\n    }\n  }, [open]);\n  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);\n  index(() => {\n    isMountedRef.current = true;\n    return () => {\n      isMountedRef.current = false;\n    };\n  }, []);\n  index(() => {\n    if (referenceEl) referenceRef.current = referenceEl;\n    if (floatingEl) floatingRef.current = floatingEl;\n    if (referenceEl && floatingEl) {\n      if (whileElementsMountedRef.current) {\n        return whileElementsMountedRef.current(referenceEl, floatingEl, update);\n      }\n      update();\n    }\n  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);\n  const refs = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    reference: referenceRef,\n    floating: floatingRef,\n    setReference,\n    setFloating\n  }), [setReference, setFloating]);\n  const elements = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    reference: referenceEl,\n    floating: floatingEl\n  }), [referenceEl, floatingEl]);\n  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {\n    const initialStyles = {\n      position: strategy,\n      left: 0,\n      top: 0\n    };\n    if (!elements.floating) {\n      return initialStyles;\n    }\n    const x = roundByDPR(elements.floating, data.x);\n    const y = roundByDPR(elements.floating, data.y);\n    if (transform) {\n      return {\n        ...initialStyles,\n        transform: \"translate(\" + x + \"px, \" + y + \"px)\",\n        ...(getDPR(elements.floating) >= 1.5 && {\n          willChange: 'transform'\n        })\n      };\n    }\n    return {\n      position: strategy,\n      left: x,\n      top: y\n    };\n  }, [strategy, transform, elements.floating, data.x, data.y]);\n  return react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    ...data,\n    update,\n    refs,\n    elements,\n    floatingStyles\n  }), [data, update, refs, elements, floatingStyles]);\n}\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */\nconst arrow$1 = options => {\n  function isRef(value) {\n    return {}.hasOwnProperty.call(value, 'current');\n  }\n  return {\n    name: 'arrow',\n    options,\n    fn(state) {\n      const {\n        element,\n        padding\n      } = typeof options === 'function' ? options(state) : options;\n      if (element && isRef(element)) {\n        if (element.current != null) {\n          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n            element: element.current,\n            padding\n          }).fn(state);\n        }\n        return {};\n      }\n      if (element) {\n        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n          element,\n          padding\n        }).fn(state);\n      }\n      return {};\n    }\n  };\n};\n\n/**\n * Modifies the placement by translating the floating element along the\n * specified axes.\n * A number (shorthand for `mainAxis` or distance), or an axes configuration\n * object may be passed.\n * @see https://floating-ui.com/docs/offset\n */\nconst offset = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by shifting it in order to\n * keep it in view when it will overflow the clipping boundary.\n * @see https://floating-ui.com/docs/shift\n */\nconst shift = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift)(options),\n  options: [options, deps]\n});\n\n/**\n * Built-in `limiter` that will stop `shift()` at a certain point.\n */\nconst limitShift = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by flipping the `placement`\n * in order to keep it in view when the preferred placement(s) will overflow the\n * clipping boundary. Alternative to `autoPlacement`.\n * @see https://floating-ui.com/docs/flip\n */\nconst flip = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data that allows you to change the size of the floating element —\n * for instance, prevent it from overflowing the clipping boundary or match the\n * width of the reference element.\n * @see https://floating-ui.com/docs/size\n */\nconst size = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by choosing the placement\n * that has the most space available automatically, without needing to specify a\n * preferred placement. Alternative to `flip`.\n * @see https://floating-ui.com/docs/autoPlacement\n */\nconst autoPlacement = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data to hide the floating element in applicable situations, such as\n * when it is not in the same clipping context as the reference element.\n * @see https://floating-ui.com/docs/hide\n */\nconst hide = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides improved positioning for inline reference elements that can span\n * over multiple lines, such as hyperlinks or range selections.\n * @see https://floating-ui.com/docs/inline\n */\nconst inline = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */\nconst arrow = (options, deps) => ({\n  ...arrow$1(options),\n  options: [options, deps]\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3JlYWN0LWRvbUAyLjEuMl9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMV9fcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvcmVhY3QtZG9tL2Rpc3QvZmxvYXRpbmctdWkucmVhY3QtZG9tLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZPO0FBQzlIO0FBQ2hGO0FBQ29CO0FBQ2I7O0FBRXRDLDhDQUE4QyxrREFBZSxHQUFHLDRDQUFTOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx5Q0FBWTtBQUMxQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMEJBQTBCLDJDQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsR0FBRztBQUNILGtEQUFrRCwyQ0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkNBQWM7QUFDcEQsb0NBQW9DLDJDQUFjO0FBQ2xELHVCQUF1Qiw4Q0FBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLDhDQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUJBQXVCLHlDQUFZO0FBQ25DLHNCQUFzQix5Q0FBWTtBQUNsQyxrQkFBa0IseUNBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBa0I7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCx1QkFBdUIseUNBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZUFBZSwwQ0FBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsMENBQWE7QUFDaEM7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsMENBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUywwQ0FBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFPO0FBQ3hCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFPO0FBQ3RCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx3REFBUTtBQUNiO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVEQUFPO0FBQ1o7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0REFBWTtBQUNqQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFNO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBTTtBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssK0RBQWU7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQU07QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx3REFBUTtBQUNiO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVpRyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsdS1maWdodGVycy8uL25vZGVfbW9kdWxlcy8ucG5wbS9AZmxvYXRpbmctdWkrcmVhY3QtZG9tQDIuMS4yX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9yZWFjdC1kb20vZGlzdC9mbG9hdGluZy11aS5yZWFjdC1kb20ubWpzP2RiYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZVBvc2l0aW9uLCBhcnJvdyBhcyBhcnJvdyQyLCBvZmZzZXQgYXMgb2Zmc2V0JDEsIHNoaWZ0IGFzIHNoaWZ0JDEsIGxpbWl0U2hpZnQgYXMgbGltaXRTaGlmdCQxLCBmbGlwIGFzIGZsaXAkMSwgc2l6ZSBhcyBzaXplJDEsIGF1dG9QbGFjZW1lbnQgYXMgYXV0b1BsYWNlbWVudCQxLCBoaWRlIGFzIGhpZGUkMSwgaW5saW5lIGFzIGlubGluZSQxIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5leHBvcnQgeyBhdXRvVXBkYXRlLCBjb21wdXRlUG9zaXRpb24sIGRldGVjdE92ZXJmbG93LCBnZXRPdmVyZmxvd0FuY2VzdG9ycywgcGxhdGZvcm0gfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxudmFyIGluZGV4ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcblxuLy8gRm9yayBvZiBgZmFzdC1kZWVwLWVxdWFsYCB0aGF0IG9ubHkgZG9lcyB0aGUgY29tcGFyaXNvbnMgd2UgbmVlZCBhbmQgY29tcGFyZXNcbi8vIGZ1bmN0aW9uc1xuZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBsZW5ndGg7XG4gIGxldCBpO1xuICBsZXQga2V5cztcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICAgIGlmICghZGVlcEVxdWFsKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICghe30uaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuXG5mdW5jdGlvbiBnZXREUFIoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICByZXR1cm4gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbn1cblxuZnVuY3Rpb24gcm91bmRCeURQUihlbGVtZW50LCB2YWx1ZSkge1xuICBjb25zdCBkcHIgPSBnZXREUFIoZWxlbWVudCk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogZHByKSAvIGRwcjtcbn1cblxuZnVuY3Rpb24gdXNlTGF0ZXN0UmVmKHZhbHVlKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZjtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGEgZmxvYXRpbmcgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy91c2VGbG9hdGluZ1xuICovXG5mdW5jdGlvbiB1c2VGbG9hdGluZyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCA9ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5ID0gJ2Fic29sdXRlJyxcbiAgICBtaWRkbGV3YXJlID0gW10sXG4gICAgcGxhdGZvcm0sXG4gICAgZWxlbWVudHM6IHtcbiAgICAgIHJlZmVyZW5jZTogZXh0ZXJuYWxSZWZlcmVuY2UsXG4gICAgICBmbG9hdGluZzogZXh0ZXJuYWxGbG9hdGluZ1xuICAgIH0gPSB7fSxcbiAgICB0cmFuc2Zvcm0gPSB0cnVlLFxuICAgIHdoaWxlRWxlbWVudHNNb3VudGVkLFxuICAgIG9wZW5cbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgc3RyYXRlZ3ksXG4gICAgcGxhY2VtZW50LFxuICAgIG1pZGRsZXdhcmVEYXRhOiB7fSxcbiAgICBpc1Bvc2l0aW9uZWQ6IGZhbHNlXG4gIH0pO1xuICBjb25zdCBbbGF0ZXN0TWlkZGxld2FyZSwgc2V0TGF0ZXN0TWlkZGxld2FyZV0gPSBSZWFjdC51c2VTdGF0ZShtaWRkbGV3YXJlKTtcbiAgaWYgKCFkZWVwRXF1YWwobGF0ZXN0TWlkZGxld2FyZSwgbWlkZGxld2FyZSkpIHtcbiAgICBzZXRMYXRlc3RNaWRkbGV3YXJlKG1pZGRsZXdhcmUpO1xuICB9XG4gIGNvbnN0IFtfcmVmZXJlbmNlLCBfc2V0UmVmZXJlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbX2Zsb2F0aW5nLCBfc2V0RmxvYXRpbmddID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHNldFJlZmVyZW5jZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG5vZGUgPT4ge1xuICAgIGlmIChub2RlICE9PSByZWZlcmVuY2VSZWYuY3VycmVudCkge1xuICAgICAgcmVmZXJlbmNlUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgX3NldFJlZmVyZW5jZShub2RlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3Qgc2V0RmxvYXRpbmcgPSBSZWFjdC51c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICBpZiAobm9kZSAhPT0gZmxvYXRpbmdSZWYuY3VycmVudCkge1xuICAgICAgZmxvYXRpbmdSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBfc2V0RmxvYXRpbmcobm9kZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IHJlZmVyZW5jZUVsID0gZXh0ZXJuYWxSZWZlcmVuY2UgfHwgX3JlZmVyZW5jZTtcbiAgY29uc3QgZmxvYXRpbmdFbCA9IGV4dGVybmFsRmxvYXRpbmcgfHwgX2Zsb2F0aW5nO1xuICBjb25zdCByZWZlcmVuY2VSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGZsb2F0aW5nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBkYXRhUmVmID0gUmVhY3QudXNlUmVmKGRhdGEpO1xuICBjb25zdCBoYXNXaGlsZUVsZW1lbnRzTW91bnRlZCA9IHdoaWxlRWxlbWVudHNNb3VudGVkICE9IG51bGw7XG4gIGNvbnN0IHdoaWxlRWxlbWVudHNNb3VudGVkUmVmID0gdXNlTGF0ZXN0UmVmKHdoaWxlRWxlbWVudHNNb3VudGVkKTtcbiAgY29uc3QgcGxhdGZvcm1SZWYgPSB1c2VMYXRlc3RSZWYocGxhdGZvcm0pO1xuICBjb25zdCBvcGVuUmVmID0gdXNlTGF0ZXN0UmVmKG9wZW4pO1xuICBjb25zdCB1cGRhdGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFyZWZlcmVuY2VSZWYuY3VycmVudCB8fCAhZmxvYXRpbmdSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneSxcbiAgICAgIG1pZGRsZXdhcmU6IGxhdGVzdE1pZGRsZXdhcmVcbiAgICB9O1xuICAgIGlmIChwbGF0Zm9ybVJlZi5jdXJyZW50KSB7XG4gICAgICBjb25maWcucGxhdGZvcm0gPSBwbGF0Zm9ybVJlZi5jdXJyZW50O1xuICAgIH1cbiAgICBjb21wdXRlUG9zaXRpb24ocmVmZXJlbmNlUmVmLmN1cnJlbnQsIGZsb2F0aW5nUmVmLmN1cnJlbnQsIGNvbmZpZykudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICAvLyBUaGUgZmxvYXRpbmcgZWxlbWVudCdzIHBvc2l0aW9uIG1heSBiZSByZWNvbXB1dGVkIHdoaWxlIGl0J3MgY2xvc2VkXG4gICAgICAgIC8vIGJ1dCBzdGlsbCBtb3VudGVkIChzdWNoIGFzIHdoZW4gdHJhbnNpdGlvbmluZyBvdXQpLiBUbyBlbnN1cmVcbiAgICAgICAgLy8gYGlzUG9zaXRpb25lZGAgd2lsbCBiZSBgZmFsc2VgIGluaXRpYWxseSBvbiB0aGUgbmV4dCBvcGVuLCBhdm9pZFxuICAgICAgICAvLyBzZXR0aW5nIGl0IHRvIGB0cnVlYCB3aGVuIGBvcGVuID09PSBmYWxzZWAgKG11c3QgYmUgc3BlY2lmaWVkKS5cbiAgICAgICAgaXNQb3NpdGlvbmVkOiBvcGVuUmVmLmN1cnJlbnQgIT09IGZhbHNlXG4gICAgICB9O1xuICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50ICYmICFkZWVwRXF1YWwoZGF0YVJlZi5jdXJyZW50LCBmdWxsRGF0YSkpIHtcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0gZnVsbERhdGE7XG4gICAgICAgIFJlYWN0RE9NLmZsdXNoU3luYygoKSA9PiB7XG4gICAgICAgICAgc2V0RGF0YShmdWxsRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbbGF0ZXN0TWlkZGxld2FyZSwgcGxhY2VtZW50LCBzdHJhdGVneSwgcGxhdGZvcm1SZWYsIG9wZW5SZWZdKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlmIChvcGVuID09PSBmYWxzZSAmJiBkYXRhUmVmLmN1cnJlbnQuaXNQb3NpdGlvbmVkKSB7XG4gICAgICBkYXRhUmVmLmN1cnJlbnQuaXNQb3NpdGlvbmVkID0gZmFsc2U7XG4gICAgICBzZXREYXRhKGRhdGEgPT4gKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaXNQb3NpdGlvbmVkOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwgW29wZW5dKTtcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlRWwpIHJlZmVyZW5jZVJlZi5jdXJyZW50ID0gcmVmZXJlbmNlRWw7XG4gICAgaWYgKGZsb2F0aW5nRWwpIGZsb2F0aW5nUmVmLmN1cnJlbnQgPSBmbG9hdGluZ0VsO1xuICAgIGlmIChyZWZlcmVuY2VFbCAmJiBmbG9hdGluZ0VsKSB7XG4gICAgICBpZiAod2hpbGVFbGVtZW50c01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICByZXR1cm4gd2hpbGVFbGVtZW50c01vdW50ZWRSZWYuY3VycmVudChyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgdXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSwgW3JlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB1cGRhdGUsIHdoaWxlRWxlbWVudHNNb3VudGVkUmVmLCBoYXNXaGlsZUVsZW1lbnRzTW91bnRlZF0pO1xuICBjb25zdCByZWZzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlUmVmLFxuICAgIGZsb2F0aW5nOiBmbG9hdGluZ1JlZixcbiAgICBzZXRSZWZlcmVuY2UsXG4gICAgc2V0RmxvYXRpbmdcbiAgfSksIFtzZXRSZWZlcmVuY2UsIHNldEZsb2F0aW5nXSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlRWwsXG4gICAgZmxvYXRpbmc6IGZsb2F0aW5nRWxcbiAgfSksIFtyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbF0pO1xuICBjb25zdCBmbG9hdGluZ1N0eWxlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwXG4gICAgfTtcbiAgICBpZiAoIWVsZW1lbnRzLmZsb2F0aW5nKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0eWxlcztcbiAgICB9XG4gICAgY29uc3QgeCA9IHJvdW5kQnlEUFIoZWxlbWVudHMuZmxvYXRpbmcsIGRhdGEueCk7XG4gICAgY29uc3QgeSA9IHJvdW5kQnlEUFIoZWxlbWVudHMuZmxvYXRpbmcsIGRhdGEueSk7XG4gICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0eWxlcyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiLFxuICAgICAgICAuLi4oZ2V0RFBSKGVsZW1lbnRzLmZsb2F0aW5nKSA+PSAxLjUgJiYge1xuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHN0cmF0ZWd5LFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeVxuICAgIH07XG4gIH0sIFtzdHJhdGVneSwgdHJhbnNmb3JtLCBlbGVtZW50cy5mbG9hdGluZywgZGF0YS54LCBkYXRhLnldKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICAuLi5kYXRhLFxuICAgIHVwZGF0ZSxcbiAgICByZWZzLFxuICAgIGVsZW1lbnRzLFxuICAgIGZsb2F0aW5nU3R5bGVzXG4gIH0pLCBbZGF0YSwgdXBkYXRlLCByZWZzLCBlbGVtZW50cywgZmxvYXRpbmdTdHlsZXNdKTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgc28gdGhhdCBpdFxuICogYXBwZWFycyBjZW50ZXJlZCB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBUaGlzIHdyYXBzIHRoZSBjb3JlIGBhcnJvd2AgbWlkZGxld2FyZSB0byBhbGxvdyBSZWFjdCByZWZzIGFzIHRoZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93JDEgPSBvcHRpb25zID0+IHtcbiAgZnVuY3Rpb24gaXNSZWYodmFsdWUpIHtcbiAgICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2N1cnJlbnQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdhcnJvdycsXG4gICAgb3B0aW9ucyxcbiAgICBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBwYWRkaW5nXG4gICAgICB9ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zKHN0YXRlKSA6IG9wdGlvbnM7XG4gICAgICBpZiAoZWxlbWVudCAmJiBpc1JlZihlbGVtZW50KSkge1xuICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYXJyb3ckMih7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LmN1cnJlbnQsXG4gICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgfSkuZm4oc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBhcnJvdyQyKHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgfSkuZm4oc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHBsYWNlbWVudCBieSB0cmFuc2xhdGluZyB0aGUgZmxvYXRpbmcgZWxlbWVudCBhbG9uZyB0aGVcbiAqIHNwZWNpZmllZCBheGVzLlxuICogQSBudW1iZXIgKHNob3J0aGFuZCBmb3IgYG1haW5BeGlzYCBvciBkaXN0YW5jZSksIG9yIGFuIGF4ZXMgY29uZmlndXJhdGlvblxuICogb2JqZWN0IG1heSBiZSBwYXNzZWQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvb2Zmc2V0XG4gKi9cbmNvbnN0IG9mZnNldCA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5vZmZzZXQkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgc2hpZnRpbmcgaXQgaW4gb3JkZXIgdG9cbiAqIGtlZXAgaXQgaW4gdmlldyB3aGVuIGl0IHdpbGwgb3ZlcmZsb3cgdGhlIGNsaXBwaW5nIGJvdW5kYXJ5LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3NoaWZ0XG4gKi9cbmNvbnN0IHNoaWZ0ID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLnNoaWZ0JDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogQnVpbHQtaW4gYGxpbWl0ZXJgIHRoYXQgd2lsbCBzdG9wIGBzaGlmdCgpYCBhdCBhIGNlcnRhaW4gcG9pbnQuXG4gKi9cbmNvbnN0IGxpbWl0U2hpZnQgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4ubGltaXRTaGlmdCQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBmbGlwcGluZyB0aGUgYHBsYWNlbWVudGBcbiAqIGluIG9yZGVyIHRvIGtlZXAgaXQgaW4gdmlldyB3aGVuIHRoZSBwcmVmZXJyZWQgcGxhY2VtZW50KHMpIHdpbGwgb3ZlcmZsb3cgdGhlXG4gKiBjbGlwcGluZyBib3VuZGFyeS4gQWx0ZXJuYXRpdmUgdG8gYGF1dG9QbGFjZW1lbnRgLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2ZsaXBcbiAqL1xuY29uc3QgZmxpcCA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5mbGlwJDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0aGF0IGFsbG93cyB5b3UgdG8gY2hhbmdlIHRoZSBzaXplIG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IOKAlFxuICogZm9yIGluc3RhbmNlLCBwcmV2ZW50IGl0IGZyb20gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIGJvdW5kYXJ5IG9yIG1hdGNoIHRoZVxuICogd2lkdGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3NpemVcbiAqL1xuY29uc3Qgc2l6ZSA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5zaXplJDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGNob29zaW5nIHRoZSBwbGFjZW1lbnRcbiAqIHRoYXQgaGFzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZSBhdXRvbWF0aWNhbGx5LCB3aXRob3V0IG5lZWRpbmcgdG8gc3BlY2lmeSBhXG4gKiBwcmVmZXJyZWQgcGxhY2VtZW50LiBBbHRlcm5hdGl2ZSB0byBgZmxpcGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudFxuICovXG5jb25zdCBhdXRvUGxhY2VtZW50ID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLmF1dG9QbGFjZW1lbnQkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIGhpZGUgdGhlIGZsb2F0aW5nIGVsZW1lbnQgaW4gYXBwbGljYWJsZSBzaXR1YXRpb25zLCBzdWNoIGFzXG4gKiB3aGVuIGl0IGlzIG5vdCBpbiB0aGUgc2FtZSBjbGlwcGluZyBjb250ZXh0IGFzIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9oaWRlXG4gKi9cbmNvbnN0IGhpZGUgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uaGlkZSQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIFByb3ZpZGVzIGltcHJvdmVkIHBvc2l0aW9uaW5nIGZvciBpbmxpbmUgcmVmZXJlbmNlIGVsZW1lbnRzIHRoYXQgY2FuIHNwYW5cbiAqIG92ZXIgbXVsdGlwbGUgbGluZXMsIHN1Y2ggYXMgaHlwZXJsaW5rcyBvciByYW5nZSBzZWxlY3Rpb25zLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2lubGluZVxuICovXG5jb25zdCBpbmxpbmUgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uaW5saW5lJDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHNvIHRoYXQgaXRcbiAqIGFwcGVhcnMgY2VudGVyZWQgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogVGhpcyB3cmFwcyB0aGUgY29yZSBgYXJyb3dgIG1pZGRsZXdhcmUgdG8gYWxsb3cgUmVhY3QgcmVmcyBhcyB0aGUgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hcnJvd1xuICovXG5jb25zdCBhcnJvdyA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5hcnJvdyQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG5leHBvcnQgeyBhcnJvdywgYXV0b1BsYWNlbWVudCwgZmxpcCwgaGlkZSwgaW5saW5lLCBsaW1pdFNoaWZ0LCBvZmZzZXQsIHNoaWZ0LCBzaXplLCB1c2VGbG9hdGluZyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs\n");

/***/ })

};
;