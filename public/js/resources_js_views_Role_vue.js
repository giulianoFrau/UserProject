(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Role_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Role.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Role.vue?vue&type=script&lang=js& ***!
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
      id: "",
      name: "",
      email: "",
      password: "",
      editname: "",
      editemail: ""
    };
  },
  mounted: function mounted() {
    this.getResults();
  },
  methods: {
    saveUser: function saveUser() {
      var _this = this;

      axios.post("save_user", {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(function (response) {
        _this.name = "";
        _this.email = "";
        _this.password = "";

        _this.getResults();
      });
    },
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("all_users?page=" + page).then(function (response) {
        console.log(response.data);
        _this2.users = response.data;
      });
    },
    editUser: function editUser(id) {
      var _this3 = this;

      axios.get("edit_user/" + id).then(function (response) {
        _this3.id = response.data.id;
        _this3.editname = response.data.name;
        _this3.editemail = response.data.email;
      });
    },
    updateUser: function updateUser() {
      var _this4 = this;

      axios.put("update_user", {
        id: this.id,
        name: this.editname,
        email: this.editemail
      }).then(function (response) {
        _this4.getResults();
      });
    },
    deleteUser: function deleteUser(id) {
      var _this5 = this;

      axios["delete"]("delete_user/" + id).then(function (response) {
        _this5.getResults();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Role.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Role.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Role_vue_vue_type_template_id_499f95d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=499f95d6& */ "./resources/js/views/Role.vue?vue&type=template&id=499f95d6&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./resources/js/views/Role.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Role_vue_vue_type_template_id_499f95d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Role_vue_vue_type_template_id_499f95d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Role.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Role.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Role.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Role.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Role.vue?vue&type=template&id=499f95d6&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Role.vue?vue&type=template&id=499f95d6& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_499f95d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_499f95d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_499f95d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Role.vue?vue&type=template&id=499f95d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Role.vue?vue&type=template&id=499f95d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Role.vue?vue&type=template&id=499f95d6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Role.vue?vue&type=template&id=499f95d6& ***!
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
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card border shadow" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Inserisci un nuovo Ruolo : ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("form", [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v("Nome Ruolo")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "exampleInputEmail1",
                    "aria-describedby": "emailHelp",
                    placeholder: "Inserisci il nome del ruolo"
                  },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                  _vm._v("Permesso")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "exampleInputPassword1",
                    placeholder: "Inserisci il tipo di permesso"
                  },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-success",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.saveUser($event)
                    }
                  }
                },
                [_vm._v("\n                Inserisci\n              ")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "card border shadow" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Lista Ruoli :")]),
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
                      _c("td", [_vm._v(_vm._s(user.email))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-primary",
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
                              "\n                      Edit\n                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-danger",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.deleteUser(user.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                      Delete\n                    "
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
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v("Email")
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
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-success",
                      attrs: { type: "submit", "data-dismiss": "modal" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.updateUser($event)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                Conferma Modifica\n              "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [
                      _vm._v(
                        "\n                Chiudi Finestra\n              "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" })
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nome Ruolo")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Permesso")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Azioni")])
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
        [_vm._v("Modifica")]
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
  }
]
render._withStripped = true



/***/ })

}]);