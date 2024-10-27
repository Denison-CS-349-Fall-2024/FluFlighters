"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/simulation/page",{

/***/ "(app-pages-browser)/./src/app/simulation/components/SimulationInstance.tsx":
/*!**************************************************************!*\
  !*** ./src/app/simulation/components/SimulationInstance.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PopulationCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopulationCanvas */ \"(app-pages-browser)/./src/app/simulation/components/PopulationCanvas.tsx\");\n/* harmony import */ var _StatusChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusChart */ \"(app-pages-browser)/./src/app/simulation/components/StatusChart.tsx\");\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Person */ \"(app-pages-browser)/./src/app/simulation/components/Person.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SimulationInstance = (param)=>{\n    let { parameters, index } = param;\n    _s();\n    // State management for this simulation\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: [\n            {\n                label: \"Healthy\",\n                data: [],\n                borderColor: \"blue\",\n                fill: false\n            },\n            {\n                label: \"Infected\",\n                data: [],\n                borderColor: \"red\",\n                fill: false\n            },\n            {\n                label: \"Recovered\",\n                data: [],\n                borderColor: \"green\",\n                fill: false\n            }\n        ]\n    });\n    // Initialize population\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newPeople = [];\n        for(let i = 0; i < parameters.populationSize; i++){\n            const x = Math.random() * 800;\n            const y = Math.random() * 600;\n            const vaccinated = Math.random() < parameters.populationVaccinated;\n            newPeople.push(new _Person__WEBPACK_IMPORTED_MODULE_4__[\"default\"](x, y, vaccinated));\n        }\n        setPeople(newPeople);\n    }, [\n        parameters\n    ]);\n    // Chart data update function\n    const updateChartData = (healthy, infected, recovered, frame)=>{\n        setChartData((prevData)=>({\n                labels: [\n                    ...prevData.labels,\n                    frame\n                ],\n                datasets: [\n                    {\n                        ...prevData.datasets[0],\n                        data: [\n                            ...prevData.datasets[0].data,\n                            healthy\n                        ]\n                    },\n                    {\n                        ...prevData.datasets[1],\n                        data: [\n                            ...prevData.datasets[1].data,\n                            infected\n                        ]\n                    },\n                    {\n                        ...prevData.datasets[2],\n                        data: [\n                            ...prevData.datasets[2].data,\n                            recovered\n                        ]\n                    }\n                ]\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            gap: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopulationCanvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    people: people,\n                    vaccineEfficacy: parameters.vaccineEfficacy,\n                    infectionProbability: parameters.infectionProbability,\n                    vaccinatedRecoveryRate: parameters.vaccinatedRecoveryRate,\n                    unvaccinatedRecoveryRate: parameters.unvaccinatedRecoveryRate,\n                    totalDays: parameters.totalDays,\n                    updateChartData: updateChartData\n                }, void 0, false, {\n                    fileName: \"/Users/lukabagashvili/Desktop/FluFlighters/src/app/simulation/components/SimulationInstance.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lukabagashvili/Desktop/FluFlighters/src/app/simulation/components/SimulationInstance.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StatusChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    chartData: chartData\n                }, void 0, false, {\n                    fileName: \"/Users/lukabagashvili/Desktop/FluFlighters/src/app/simulation/components/SimulationInstance.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lukabagashvili/Desktop/FluFlighters/src/app/simulation/components/SimulationInstance.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lukabagashvili/Desktop/FluFlighters/src/app/simulation/components/SimulationInstance.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SimulationInstance, \"ikvEoi0266QdqSQ8NyIHd21NwHQ=\");\n_c = SimulationInstance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimulationInstance);\nvar _c;\n$RefreshReg$(_c, \"SimulationInstance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2ltdWxhdGlvbi9jb21wb25lbnRzL1NpbXVsYXRpb25JbnN0YW5jZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBQ007QUFDVjtBQUNWO0FBMEI5QixNQUFNSyxxQkFBd0Q7UUFBQyxFQUM3REMsVUFBVSxFQUNWQyxLQUFLLEVBQ047O0lBQ0MsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBWTtRQUNwRFcsUUFBUSxFQUFFO1FBQ1ZDLFVBQVU7WUFDUjtnQkFBRUMsT0FBTztnQkFBV0MsTUFBTSxFQUFFO2dCQUFFQyxhQUFhO2dCQUFRQyxNQUFNO1lBQU07WUFDL0Q7Z0JBQUVILE9BQU87Z0JBQVlDLE1BQU0sRUFBRTtnQkFBRUMsYUFBYTtnQkFBT0MsTUFBTTtZQUFNO1lBQy9EO2dCQUFFSCxPQUFPO2dCQUFhQyxNQUFNLEVBQUU7Z0JBQUVDLGFBQWE7Z0JBQVNDLE1BQU07WUFBTTtTQUNuRTtJQUNIO0lBRUEsd0JBQXdCO0lBQ3hCakIsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsWUFBc0IsRUFBRTtRQUM5QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSWIsV0FBV2MsY0FBYyxFQUFFRCxJQUFLO1lBQ2xELE1BQU1FLElBQUlDLEtBQUtDLE1BQU0sS0FBSztZQUMxQixNQUFNQyxJQUFJRixLQUFLQyxNQUFNLEtBQUs7WUFDMUIsTUFBTUUsYUFBYUgsS0FBS0MsTUFBTSxLQUFLakIsV0FBV29CLG9CQUFvQjtZQUNsRVIsVUFBVVMsSUFBSSxDQUFDLElBQUl2QiwrQ0FBTUEsQ0FBQ2lCLEdBQUdHLEdBQUdDO1FBQ2xDO1FBQ0FoQixVQUFVUztJQUNaLEdBQUc7UUFBQ1o7S0FBVztJQUVmLDZCQUE2QjtJQUM3QixNQUFNc0Isa0JBQWtCLENBQ3RCQyxTQUNBQyxVQUNBQyxXQUNBQztRQUVBckIsYUFBYSxDQUFDc0IsV0FBYztnQkFDMUJyQixRQUFRO3VCQUFJcUIsU0FBU3JCLE1BQU07b0JBQUVvQjtpQkFBTTtnQkFDbkNuQixVQUFVO29CQUNSO3dCQUNFLEdBQUdvQixTQUFTcEIsUUFBUSxDQUFDLEVBQUU7d0JBQ3ZCRSxNQUFNOytCQUFJa0IsU0FBU3BCLFFBQVEsQ0FBQyxFQUFFLENBQUNFLElBQUk7NEJBQUVjO3lCQUFRO29CQUMvQztvQkFDQTt3QkFDRSxHQUFHSSxTQUFTcEIsUUFBUSxDQUFDLEVBQUU7d0JBQ3ZCRSxNQUFNOytCQUFJa0IsU0FBU3BCLFFBQVEsQ0FBQyxFQUFFLENBQUNFLElBQUk7NEJBQUVlO3lCQUFTO29CQUNoRDtvQkFDQTt3QkFDRSxHQUFHRyxTQUFTcEIsUUFBUSxDQUFDLEVBQUU7d0JBQ3ZCRSxNQUFNOytCQUFJa0IsU0FBU3BCLFFBQVEsQ0FBQyxFQUFFLENBQUNFLElBQUk7NEJBQUVnQjt5QkFBVTtvQkFDakQ7aUJBQ0Q7WUFDSDtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU87WUFBRUMsU0FBUztZQUFRQyxLQUFLO1FBQU87OzBCQUV6Qyw4REFBQ0g7Z0JBQ0NDLE9BQU87b0JBQ0xHLE1BQU07b0JBQ05GLFNBQVM7b0JBQ1RHLGVBQWU7b0JBQ2ZGLEtBQUs7Z0JBQ1A7MEJBRUEsNEVBQUNuQyx5REFBZ0JBO29CQUNmTSxRQUFRQTtvQkFDUmdDLGlCQUFpQmxDLFdBQVdrQyxlQUFlO29CQUMzQ0Msc0JBQXNCbkMsV0FBV21DLG9CQUFvQjtvQkFDckRDLHdCQUF3QnBDLFdBQVdvQyxzQkFBc0I7b0JBQ3pEQywwQkFBMEJyQyxXQUFXcUMsd0JBQXdCO29CQUM3REMsV0FBV3RDLFdBQVdzQyxTQUFTO29CQUMvQmhCLGlCQUFpQkE7Ozs7Ozs7Ozs7OzBCQUlyQiw4REFBQ007Z0JBQUlDLE9BQU87b0JBQUVHLE1BQU07Z0JBQUU7MEJBQ3BCLDRFQUFDbkMsb0RBQVdBO29CQUFDTyxXQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0FoRk1MO0tBQUFBO0FBa0ZOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaW11bGF0aW9uL2NvbXBvbmVudHMvU2ltdWxhdGlvbkluc3RhbmNlLnRzeD83ZWY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9wdWxhdGlvbkNhbnZhcyBmcm9tIFwiLi9Qb3B1bGF0aW9uQ2FudmFzXCI7XG5pbXBvcnQgU3RhdHVzQ2hhcnQgZnJvbSBcIi4vU3RhdHVzQ2hhcnRcIjtcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vUGVyc29uXCI7XG5cbnR5cGUgQ2hhcnREYXRhID0ge1xuICBsYWJlbHM6IG51bWJlcltdO1xuICBkYXRhc2V0czoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgZGF0YTogbnVtYmVyW107XG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgICBmaWxsOiBib29sZWFuO1xuICB9W107XG59O1xuXG5pbnRlcmZhY2UgU2ltdWxhdGlvbkluc3RhbmNlUHJvcHMge1xuICBwYXJhbWV0ZXJzOiB7XG4gICAgdmFjY2luZUVmZmljYWN5OiBudW1iZXI7XG4gICAgcG9wdWxhdGlvblZhY2NpbmF0ZWQ6IG51bWJlcjtcbiAgICBpbmZlY3Rpb25Qcm9iYWJpbGl0eTogbnVtYmVyO1xuICAgIHZhY2NpbmF0ZWRSZWNvdmVyeVJhdGU6IG51bWJlcjtcbiAgICB1bnZhY2NpbmF0ZWRSZWNvdmVyeVJhdGU6IG51bWJlcjtcbiAgICBwZWFrSW5mZWN0aW9uRGF5OiBudW1iZXI7XG4gICAgdG90YWxEYXlzOiBudW1iZXI7XG4gICAgcG9wdWxhdGlvblNpemU6IG51bWJlcjtcbiAgfTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuY29uc3QgU2ltdWxhdGlvbkluc3RhbmNlOiBSZWFjdC5GQzxTaW11bGF0aW9uSW5zdGFuY2VQcm9wcz4gPSAoe1xuICBwYXJhbWV0ZXJzLFxuICBpbmRleCxcbn0pID0+IHtcbiAgLy8gU3RhdGUgbWFuYWdlbWVudCBmb3IgdGhpcyBzaW11bGF0aW9uXG4gIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZTxQZXJzb25bXT4oW10pO1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8Q2hhcnREYXRhPih7XG4gICAgbGFiZWxzOiBbXSxcbiAgICBkYXRhc2V0czogW1xuICAgICAgeyBsYWJlbDogXCJIZWFsdGh5XCIsIGRhdGE6IFtdLCBib3JkZXJDb2xvcjogXCJibHVlXCIsIGZpbGw6IGZhbHNlIH0sXG4gICAgICB7IGxhYmVsOiBcIkluZmVjdGVkXCIsIGRhdGE6IFtdLCBib3JkZXJDb2xvcjogXCJyZWRcIiwgZmlsbDogZmFsc2UgfSxcbiAgICAgIHsgbGFiZWw6IFwiUmVjb3ZlcmVkXCIsIGRhdGE6IFtdLCBib3JkZXJDb2xvcjogXCJncmVlblwiLCBmaWxsOiBmYWxzZSB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIC8vIEluaXRpYWxpemUgcG9wdWxhdGlvblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Blb3BsZTogUGVyc29uW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlcnMucG9wdWxhdGlvblNpemU7IGkrKykge1xuICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiA4MDA7XG4gICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIDYwMDtcbiAgICAgIGNvbnN0IHZhY2NpbmF0ZWQgPSBNYXRoLnJhbmRvbSgpIDwgcGFyYW1ldGVycy5wb3B1bGF0aW9uVmFjY2luYXRlZDtcbiAgICAgIG5ld1Blb3BsZS5wdXNoKG5ldyBQZXJzb24oeCwgeSwgdmFjY2luYXRlZCkpO1xuICAgIH1cbiAgICBzZXRQZW9wbGUobmV3UGVvcGxlKTtcbiAgfSwgW3BhcmFtZXRlcnNdKTtcblxuICAvLyBDaGFydCBkYXRhIHVwZGF0ZSBmdW5jdGlvblxuICBjb25zdCB1cGRhdGVDaGFydERhdGEgPSAoXG4gICAgaGVhbHRoeTogbnVtYmVyLFxuICAgIGluZmVjdGVkOiBudW1iZXIsXG4gICAgcmVjb3ZlcmVkOiBudW1iZXIsXG4gICAgZnJhbWU6IG51bWJlclxuICApID0+IHtcbiAgICBzZXRDaGFydERhdGEoKHByZXZEYXRhKSA9PiAoe1xuICAgICAgbGFiZWxzOiBbLi4ucHJldkRhdGEubGFiZWxzLCBmcmFtZV0sXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgLi4ucHJldkRhdGEuZGF0YXNldHNbMF0sXG4gICAgICAgICAgZGF0YTogWy4uLnByZXZEYXRhLmRhdGFzZXRzWzBdLmRhdGEsIGhlYWx0aHldLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4ucHJldkRhdGEuZGF0YXNldHNbMV0sXG4gICAgICAgICAgZGF0YTogWy4uLnByZXZEYXRhLmRhdGFzZXRzWzFdLmRhdGEsIGluZmVjdGVkXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnByZXZEYXRhLmRhdGFzZXRzWzJdLFxuICAgICAgICAgIGRhdGE6IFsuLi5wcmV2RGF0YS5kYXRhc2V0c1syXS5kYXRhLCByZWNvdmVyZWRdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IFwiMjBweFwiIH19PlxuICAgICAgey8qIExlZnQgU2VjdGlvbjogQ2FudmFzICovfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBnYXA6IFwiMjBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UG9wdWxhdGlvbkNhbnZhc1xuICAgICAgICAgIHBlb3BsZT17cGVvcGxlfVxuICAgICAgICAgIHZhY2NpbmVFZmZpY2FjeT17cGFyYW1ldGVycy52YWNjaW5lRWZmaWNhY3l9XG4gICAgICAgICAgaW5mZWN0aW9uUHJvYmFiaWxpdHk9e3BhcmFtZXRlcnMuaW5mZWN0aW9uUHJvYmFiaWxpdHl9XG4gICAgICAgICAgdmFjY2luYXRlZFJlY292ZXJ5UmF0ZT17cGFyYW1ldGVycy52YWNjaW5hdGVkUmVjb3ZlcnlSYXRlfVxuICAgICAgICAgIHVudmFjY2luYXRlZFJlY292ZXJ5UmF0ZT17cGFyYW1ldGVycy51bnZhY2NpbmF0ZWRSZWNvdmVyeVJhdGV9XG4gICAgICAgICAgdG90YWxEYXlzPXtwYXJhbWV0ZXJzLnRvdGFsRGF5c31cbiAgICAgICAgICB1cGRhdGVDaGFydERhdGE9e3VwZGF0ZUNoYXJ0RGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFJpZ2h0IFNlY3Rpb246IFN0YXR1cyBDaGFydCAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgPFN0YXR1c0NoYXJ0IGNoYXJ0RGF0YT17Y2hhcnREYXRhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW11bGF0aW9uSW5zdGFuY2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb3B1bGF0aW9uQ2FudmFzIiwiU3RhdHVzQ2hhcnQiLCJQZXJzb24iLCJTaW11bGF0aW9uSW5zdGFuY2UiLCJwYXJhbWV0ZXJzIiwiaW5kZXgiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJvcmRlckNvbG9yIiwiZmlsbCIsIm5ld1Blb3BsZSIsImkiLCJwb3B1bGF0aW9uU2l6ZSIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsInZhY2NpbmF0ZWQiLCJwb3B1bGF0aW9uVmFjY2luYXRlZCIsInB1c2giLCJ1cGRhdGVDaGFydERhdGEiLCJoZWFsdGh5IiwiaW5mZWN0ZWQiLCJyZWNvdmVyZWQiLCJmcmFtZSIsInByZXZEYXRhIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FwIiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJ2YWNjaW5lRWZmaWNhY3kiLCJpbmZlY3Rpb25Qcm9iYWJpbGl0eSIsInZhY2NpbmF0ZWRSZWNvdmVyeVJhdGUiLCJ1bnZhY2NpbmF0ZWRSZWNvdmVyeVJhdGUiLCJ0b3RhbERheXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/simulation/components/SimulationInstance.tsx\n"));

/***/ })

});