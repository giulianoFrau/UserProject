(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/List.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/List.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      users: {},
      name: "",
      email: "",
      password: "",
      editname: "",
      editemail: "",
      editpassword: ""
    };
  },
  mounted: function mounted() {
    this.getResults();
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("all_users?page=" + page).then(function (response) {
        console.log(response.data);
        _this.users = response.data;
      });
    },
    editUser: function editUser(id) {
      var _this2 = this;

      axios.get('edit_user/' + id).then(function (response) {
        console.log(response);
        _this2.editname = response.data.name;
        _this2.editemail = response.data.email;
        _this2.editpassword = response.data.password;
      });
    }
  }
});

/***/ }),

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
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
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

/***/ "./resources/js/views/List.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("All user")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("table", { staticClass: "table table-dark" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.users.data, function(user, index) {
                    return _c("tr", { key: user.id }, [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(index + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(user.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(user.email))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target": "#exampleModal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editUser(user.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    Edit\n                  "
                            )
                          ]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("pagination", {
                attrs: { data: _vm.users },
                on: { "pagination-change-page": _vm.getResults }
              })
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("form", [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Nome")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editname,
                          expression: "editname"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "exampleInputEmail1",
                        "aria-describedby": "emailHelp",
                        placeholder: "Enter name"
                      },
                      domProps: { value: _vm.editname },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.editname = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "small",
                      {
                        staticClass: "form-text text-muted",
                        attrs: { id: "emailHelp" }
                      },
                      [
                        _vm._v(
                          "We'll never share your email with anyone elsdsddse."
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v("email")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editemail,
                          expression: "editemail"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "exampleInputPassword1",
                        placeholder: "email"
                      },
                      domProps: { value: _vm.editemail },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.editemail = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v("password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editpassword,
                          expression: "editpassword"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "exampleInputPassword1",
                        placeholder: "password"
                      },
                      domProps: { value: _vm.editpassword },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.editpassword = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveUser($event)
                        }
                      }
                    },
                    [_vm._v("\n              Submit\n            ")]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Modal title")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("\n            Close\n          ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "button" } },
        [_vm._v("Save changes")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);