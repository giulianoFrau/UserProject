(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_List_vue"],{

/***/ "./resources/js/views/List.vue":
/*!*************************************!*\
  !*** ./resources/js/views/List.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_3b49113d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=3b49113d& */ "./resources/js/views/List.vue?vue&type=template&id=3b49113d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _List_vue_vue_type_template_id_3b49113d___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_3b49113d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/List.vue?vue&type=template&id=3b49113d&":
/*!********************************************************************!*\
  !*** ./resources/js/views/List.vue?vue&type=template&id=3b49113d& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_3b49113d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_3b49113d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_3b49113d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=3b49113d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/List.vue?vue&type=template&id=3b49113d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/List.vue?vue&type=template&id=3b49113d&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/List.vue?vue&type=template&id=3b49113d& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("ol", { staticClass: "breadcrumb" }, [
      _c(
        "li",
        { staticClass: "breadcrumb-item" },
        [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Dashboard")])],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "breadcrumb-item active" }, [
        _vm._v("Categories")
      ])
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-header d-flex" }, [
        _c("i", { staticClass: "fas fa-chart-area" }),
        _vm._v("\n              Categories Management\n            ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("table", { staticClass: "table" }, [
          _c("thead", [
            _c("tr", [
              _c("td", [_vm._v("#")]),
              _vm._v(" "),
              _c("td", [_vm._v("Name")]),
              _vm._v(" "),
              _c("td", [_vm._v("Image")]),
              _vm._v(" "),
              _c("td", [_vm._v("Action")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("1")]),
              _vm._v(" "),
              _c("td", [_vm._v("Shirt")]),
              _vm._v(" "),
              _c("td", [_vm._v("Image")]),
              _vm._v(" "),
              _c("td", [
                _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                  _c("span", { staticClass: "fa fa-edit" })
                ]),
                _vm._v(" "),
                _c("button", { staticClass: "btn btn-danger btn-sm" }, [
                  _c("span", { staticClass: "fa fa-trash" })
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);