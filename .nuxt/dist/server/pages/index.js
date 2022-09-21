exports.ids = [4,1,2,3];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/details.vue?vue&type=template&id=ee40d7da&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "details"
    }
  }, [_vm._ssrNode("<div class=\"image mb-2 mr-4\"><img" + _vm._ssrAttr("src", _vm.$config.imgBaseUrl + _vm.details[0].image) + " alt srcset></div> <div class=\"content\"><h1 class=\"mb-0\">" + _vm._ssrEscape(_vm._s(_vm.details[0].no)) + "</h1> <h2>" + _vm._ssrEscape(_vm._s(_vm.details[0].name)) + "</h2> <div class=\"d-flex\"><div class=\"bottle mr-4\"><b>Bottle</b> <br>" + _vm._ssrEscape("Kshs " + _vm._s(_vm.details[0].cost.bottle)) + "<br></div> <div class=\"case\"><b>Case</b> <br>" + _vm._ssrEscape("Kshs " + _vm._s(_vm.details[0].cost.case)) + "<br></div></div> <p class=\"mt-4\">" + _vm._ssrEscape(_vm._s(_vm.details[0].details)) + "</p></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/details.vue?vue&type=template&id=ee40d7da&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/details.vue?vue&type=script&lang=js&
/* harmony default export */ var detailsvue_type_script_lang_js_ = ({
  props: {
    details: {
      type: [Array],
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/modal/details.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_detailsvue_type_script_lang_js_ = (detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08e8cc94"
  
)

/* harmony default export */ var details = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/cart.vue?vue&type=template&id=696b7448&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "cart"
    }
  }, [_c('a-table', {
    attrs: {
      "bordered": "",
      "data-source": _vm.dataSource,
      "columns": _vm.columns,
      "pagination": false
    },
    scopedSlots: _vm._u([{
      key: "product",
      fn: function (product, record, index) {
        return [_c('strong', [_vm._v(_vm._s(product.name))]), _vm._v(" "), record.sub_total.bottle !== 0 ? _c('div', {
          staticClass: "d-flex"
        }, [_c('div', {
          staticClass: "w-75"
        }, [_vm._v("\n          " + _vm._s(index + 1) + ". " + _vm._s(record.items.name) + " (Bottle)\n          "), _c('strong', [_vm._v(_vm._s(record.items.qtyBottle) + " x\n            " + _vm._s(Math.round(record.items.cost.bottle)))])])]) : record.sub_total.case !== 0 ? _c('div', {
          staticClass: "d-flex"
        }, [_c('div', {
          staticClass: "w-75"
        }, [_vm._v("\n          " + _vm._s(index + 1) + ". " + _vm._s(record.items.name) + " (Case)\n          "), _c('strong', [_vm._v(_vm._s(record.items.qtyCase) + " x\n            " + _vm._s(Math.round(record.items.cost.case)))])])]) : _vm._e()];
      }
    }, {
      key: "image",
      fn: function (image) {
        return [_c('img', {
          attrs: {
            "src": _vm.$config.imgBaseUrl + image,
            "alt": ""
          }
        })];
      }
    }, {
      key: "operation",
      fn: function (text, record, index) {
        return [_vm.dataSource.length ? _c('a-popconfirm', {
          attrs: {
            "title": "Sure to delete?"
          },
          on: {
            "confirm": () => _vm.onDelete(index)
          }
        }, [_c('a', {
          attrs: {
            "href": "javascript:;"
          }
        }, [_vm._v("x")])]) : _vm._e()];
      }
    }])
  }), _vm._ssrNode(" "), _c('a-page-header', {
    staticStyle: {
      "border": "1px solid rgb(235, 237, 240)"
    },
    attrs: {
      "title": 'Kshs ' + _vm.totalInCart
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/cart.vue?vue&type=template&id=696b7448&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/cart.vue?vue&type=script&lang=js&
/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  name: 'Cart',
  props: {
    cart: {
      type: [Array],
      required: true
    }
  },

  data() {
    return {
      dataSource: this.cart,
      columns: [{
        title: '',
        dataIndex: 'items.image',
        width: '1%',
        scopedSlots: {
          customRender: 'image'
        }
      }, {
        title: 'Product',
        dataIndex: 'items',
        scopedSlots: {
          customRender: 'product'
        }
      }, {
        title: 'Cost',
        dataIndex: 'total',
        width: '20%',
        scopedSlots: {
          customRender: 'total'
        }
      }, {
        title: '',
        dataIndex: 'operation',
        width: '1%',
        scopedSlots: {
          customRender: 'operation'
        }
      }]
    };
  },

  computed: {
    totalInCart() {
      return this.dataSource.reduce(function (total, value) {
        return total + Number(value.total);
      }, 0);
    }

  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find((item, index) => index === key);

      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },

    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter((item, index) => index !== key);
    }

  }
});
// CONCATENATED MODULE: ./components/modal/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fc546184"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/checkout.vue?vue&type=template&id=08de0f2e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "cart"
    }
  }, [_c('a-form-model', {
    ref: "formData",
    attrs: {
      "layout": "inline",
      "model": _vm.formData,
      "rules": _vm.rules
    }
  }, [_c('h4', [_c('strong', [_vm._v("Your Billing Details")])]), _vm._v(" "), _c('a-form-model-item', {
    attrs: {
      "has-feedback": ""
    }
  }, [_c('a-input', {
    attrs: {
      "placeholder": "Full names"
    },
    model: {
      value: _vm.formData.full_names,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "full_names", $$v);
      },
      expression: "formData.full_names"
    }
  }, [_c('a-icon', {
    attrs: {
      "slot": "prefix",
      "type": "user"
    },
    slot: "prefix"
  })], 1)], 1), _vm._v(" "), _c('a-form-model-item', {
    attrs: {
      "has-feedback": ""
    }
  }, [_c('a-input', {
    attrs: {
      "type": "text",
      "placeholder": "Estate"
    },
    model: {
      value: _vm.formData.estate,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "estate", $$v);
      },
      expression: "formData.estate"
    }
  }, [_c('a-icon', {
    attrs: {
      "slot": "prefix",
      "type": "flag"
    },
    slot: "prefix"
  })], 1)], 1), _vm._v(" "), _c('a-form-model-item', {
    attrs: {
      "has-feedback": ""
    }
  }, [_c('a-input', {
    attrs: {
      "type": "number",
      "min": "1"
    },
    model: {
      value: _vm.formData.phone_no,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "phone_no", $$v);
      },
      expression: "formData.phone_no"
    }
  }, [_c('a-icon', {
    staticStyle: {
      "color": "rgba(0, 0, 0, 0.25)"
    },
    attrs: {
      "slot": "prefix",
      "type": "number"
    },
    slot: "prefix"
  })], 1)], 1), _vm._v(" "), _c('a-form-model-item', {
    attrs: {
      "has-feedback": ""
    }
  }, [_c('a-input', {
    attrs: {
      "type": "textarea",
      "autocomplete": "off"
    },
    model: {
      value: _vm.formData.address,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "address", $$v);
      },
      expression: "formData.address"
    }
  }, [_c('a-icon', {
    staticStyle: {
      "color": "rgba(0, 0, 0, 0.25)"
    },
    attrs: {
      "slot": "prefix",
      "type": "file"
    },
    slot: "prefix"
  })], 1)], 1), _vm._v(" "), _c('h4', {
    staticClass: "mt-2"
  }, [_c('strong', [_vm._v("Your Order")])]), _vm._v(" "), _c('a-table', {
    attrs: {
      "bordered": "",
      "data-source": _vm.dataSource,
      "columns": _vm.columns,
      "pagination": false
    },
    scopedSlots: _vm._u([{
      key: "product",
      fn: function (product, record, index) {
        return [_c('strong', [_vm._v(_vm._s(product.name))]), _vm._v(" "), record.sub_total.bottle !== 0 ? _c('div', {
          staticClass: "d-flex"
        }, [_c('div', {
          staticClass: "w-75"
        }, [_vm._v("\n            " + _vm._s(index + 1) + ". " + _vm._s(record.items.name) + " (Bottle)\n            "), _c('strong', [_vm._v(_vm._s(record.items.qtyBottle) + " x\n              " + _vm._s(Math.round(record.items.cost.bottle)))])])]) : record.sub_total.case !== 0 ? _c('div', {
          staticClass: "d-flex"
        }, [_c('div', {
          staticClass: "w-75"
        }, [_vm._v("\n            " + _vm._s(index + 1) + ". " + _vm._s(record.items.name) + " (Case)\n            "), _c('strong', [_vm._v(_vm._s(record.items.qtyCase) + " x\n              " + _vm._s(Math.round(record.items.cost.case)))])])]) : _vm._e()];
      }
    }, {
      key: "image",
      fn: function (image) {
        return [_c('img', {
          attrs: {
            "src": _vm.$config.imgBaseUrl + image,
            "alt": ""
          }
        })];
      }
    }])
  }), _vm._v(" "), _c('div', {
    staticClass: "placeholder"
  }, [_c('h3', [_vm._v("Kshs " + _vm._s(_vm.totalInCart))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v("Select your payment method")])]), _vm._v(" "), _c('a-checkbox', {
    model: {
      value: _vm.formData.paymentMethod,
      callback: function ($$v) {
        _vm.$set(_vm.formData, "paymentMethod", $$v);
      },
      expression: "formData.paymentMethod"
    }
  }, [_vm._v("\n        Direct bank transfer\n      ")])], 1)], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal/checkout.vue?vue&type=template&id=08de0f2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal/checkout.vue?vue&type=script&lang=js&
/* harmony default export */ var checkoutvue_type_script_lang_js_ = ({
  props: {
    cart: {
      type: [Array],
      required: true
    }
  },

  data() {
    return {
      formData: {
        full_names: '',
        estate: '',
        phone_no: '',
        address: '',
        paymentMethod: true
      },
      dataSource: this.cart,
      columns: [{
        title: 'Total',
        dataIndex: 'total',
        width: '30%',
        scopedSlots: {
          customRender: 'total'
        }
      }, {
        title: 'Product',
        dataIndex: 'items',
        scopedSlots: {
          customRender: 'product'
        }
      }],
      rules: {
        full_names: {
          required: true,
          message: 'Please input your full names.'
        },
        estate: {
          required: true,
          message: 'Please input your Estate.'
        },
        phone_no: {
          required: true,
          message: 'Please input your phone number.'
        },
        address: {
          required: true,
          message: 'Please input your full address.'
        }
      }
    };
  },

  computed: {
    totalInCart() {
      return this.dataSource.reduce(function (total, value) {
        return total + Number(value.total);
      }, 0);
    }

  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find((item, index) => index === key);

      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/modal/checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_checkoutvue_type_script_lang_js_ = (checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal/checkout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1900eb64"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=32506c71&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('a-layout-content', [_c('a-row', [_c('a-col', {
    attrs: {
      "xs": {
        span: 24,
        offset: 0
      },
      "sm": {
        span: 24,
        offset: 0
      },
      "md": {
        span: 24,
        offset: 0
      },
      "lg": {
        span: 22,
        offset: 1
      },
      "xl": {
        span: 18,
        offset: 3
      }
    }
  }, [_c('a-row', {
    staticClass: "mb-4"
  }, [_c('a-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "md": 24,
      "lg": 6,
      "xl": 6
    }
  }, [_c('a-input-search', {
    staticStyle: {
      "padding-right": "15px"
    },
    attrs: {
      "placeholder": "Search...",
      "enter-button": ""
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c('a-tabs', {
    staticClass: "mt-2"
  }, [_c('a-tab-pane', {
    key: "1"
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    attrs: {
      "type": "filter"
    }
  }), _vm._v("\n                Show me\n              ")], 1), _vm._v(" "), _c('div', [_vm._l(_vm.getProductsTags, function (tags) {
    return [_c('a-checkable-tag', {
      key: tags,
      attrs: {
        "checked": _vm.selectedTags.indexOf(tags) > -1
      },
      on: {
        "change": checked => _vm.onSelectTags(tags, checked)
      }
    }, [_vm._v("\n                    " + _vm._s(tags) + "\n                  ")])];
  })], 2)]), _vm._v(" "), _c('a-button', {
    attrs: {
      "slot": "tabBarExtraContent",
      "type": "link"
    },
    on: {
      "click": _vm.showAll
    },
    slot: "tabBarExtraContent"
  }, [_vm._v("\n              Show all\n            ")])], 1)], 1), _vm._v(" "), _c('a-col', {
    attrs: {
      "xs": 24,
      "sm": 24,
      "md": 24,
      "lg": 18,
      "xl": 18
    }
  }, [_c('a-card', {
    staticClass: "cart-summary-box"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_vm.cart.length !== 0 ? _c('ul', {
    staticClass: "list-unstyled w-50 mb-0 pl-2"
  }, _vm._l(_vm.cart.slice().reverse(), function (val, index) {
    return _c('li', {
      key: index
    }, [val.sub_total.bottle !== 0 ? _c('div', {
      staticClass: "d-flex"
    }, [_c('div', {
      staticClass: "w-75"
    }, [_vm._v("\n                      " + _vm._s(index + 1) + ". " + _vm._s(val.items.name) + " (Bottle)\n                      "), _c('strong', [_vm._v(_vm._s(val.items.qtyBottle) + " x\n                        " + _vm._s(Math.round(val.items.cost.bottle)))])]), _vm._v(" "), _c('div', {
      staticClass: "text-right w-25 mr-2"
    }, [_vm._v("\n                      Kshs " + _vm._s(val.sub_total.bottle) + "\n                    ")])]) : val.sub_total.case !== 0 ? _c('div', {
      staticClass: "d-flex"
    }, [_c('div', {
      staticClass: "w-75"
    }, [_vm._v("\n                      " + _vm._s(index + 1) + ". " + _vm._s(val.items.name) + " (Case)\n                      "), _c('strong', [_vm._v(_vm._s(val.items.qtyCase) + " x\n                        " + _vm._s(Math.round(val.items.cost.case)))])]), _vm._v(" "), _c('div', {
      staticClass: "text-right w-25 mr-2"
    }, [_vm._v("\n                      Kshs " + _vm._s(val.sub_total.case) + "\n                    ")])]) : _vm._e()]);
  }), 0) : _c('ul', {
    staticClass: "list-unstyled w-50 mb-0 pl-2 alert"
  }, [_c('li', [_c('a-alert', {
    attrs: {
      "message": "Empty cart",
      "banner": "",
      "type": "info"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "w-25 total"
  }, [_vm._v("TOTAL Kshs " + _vm._s(_vm.total))]), _vm._v(" "), _c('div', {
    staticClass: "w-25"
  }, [_c('a-button', {
    staticClass: "border-radius-0",
    on: {
      "click": function ($event) {
        return _vm.cartModal('cart');
      }
    }
  }, [_vm._v("CART")]), _vm._v(" "), _c('a-button', {
    staticClass: "border-radius-0",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.checkoutModal('checkout');
      }
    }
  }, [_vm._v("\n                  CHECKOUT\n                ")])], 1)])])], 1)], 1), _vm._v(" "), _vm.products.length !== 0 ? _c('span', _vm._l(Math.ceil(_vm.products.length / 3), function (i) {
    return _c('a-row', {
      key: i
    }, _vm._l(_vm.products.slice((i - 1) * 3, i * 3), function (product, index) {
      return _c('a-col', {
        key: index,
        attrs: {
          "xs": 24,
          "sm": 24,
          "md": 12,
          "lg": 8,
          "xl": 8
        }
      }, [_c('a-card', {
        staticClass: "products-box"
      }, [_c('div', {
        staticClass: "image"
      }, [_c('img', {
        attrs: {
          "src": _vm.$config.imgBaseUrl + product.image,
          "alt": "",
          "srcset": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "content"
      }, [_c('h1', {
        staticClass: "mb-0"
      }, [_vm._v(_vm._s(product.no))]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c('div', {
        staticClass: "d-flex mt-4"
      }, [_c('div', {
        staticClass: "bottle"
      }, [_c('b', [_vm._v("Bottle")]), _vm._v(" "), _c('br'), _vm._v("Kshs " + _vm._s(product.cost.bottle)), _c('br'), _vm._v(" "), _c('a-input-number', {
        staticClass: "mr-1",
        attrs: {
          "size": "small",
          "min": 0,
          "max": 100,
          "default-value": 0
        },
        on: {
          "change": function ($event) {
            return _vm.addQtyBootleToProducts($event, product.no, 'bottle');
          }
        }
      }), _vm._v("QTY\n                  ")], 1), _vm._v(" "), _c('div', {
        staticClass: "case"
      }, [_c('b', [_vm._v("Case")]), _vm._v(" "), _c('br'), _vm._v("Kshs " + _vm._s(product.cost.case)), _c('br'), _vm._v(" "), _c('a-input-number', {
        staticClass: "mr-1",
        attrs: {
          "size": "small",
          "min": 0,
          "max": 100,
          "default-value": 0
        },
        on: {
          "change": function ($event) {
            return _vm.addQtyBootleToProducts($event, product.no, 'case');
          }
        }
      }), _vm._v("QTY\n                  ")], 1)]), _vm._v(" "), _c('a-button-group', {
        staticClass: "mt-3"
      }, [_c('a-button', {
        staticClass: "border-radius-0",
        on: {
          "click": function ($event) {
            return _vm.detailsModal(product.no, 'details');
          }
        }
      }, [_vm._v("Details")]), _vm._v(" "), _c('a-button', {
        staticClass: "border-radius-0",
        attrs: {
          "type": "primary"
        },
        on: {
          "click": function ($event) {
            return _vm.addToCart(product.no);
          }
        }
      }, [_vm._v("\n                    Add to Cart\n                  ")])], 1)], 1)])], 1);
    }), 1);
  }), 1) : _c('span', [_c('a-empty')], 1)], 1)], 1), _vm._v(" "), _c('a-modal', {
    attrs: {
      "title": _vm.modalType == 'cart' ? 'Cart' :  false || _vm.modalType == 'checkout' ? 'Checkout' : '',
      "visible": _vm.visible,
      "confirm-loading": _vm.loading,
      "centered": "",
      "closable": false,
      "mask-closable": false,
      "on-ok": "handleOk",
      "footer": "",
      "width": _vm.modalType == 'cart' ? 900 :  true ? 600 : undefined
    }
  }, [_vm.modalType == 'details' ? _c('Details', {
    attrs: {
      "details": _vm.details
    }
  }) : _vm._e(), _vm._v(" "), _vm.modalType == 'cart' ? _c('Cart', {
    attrs: {
      "cart": _vm.cart
    }
  }) : _vm._e(), _vm._v(" "), _vm.modalType == 'checkout' ? _c('Checkout', {
    attrs: {
      "cart": _vm.cart
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "ant-modal-footer"
  }, [_c('a-button', {
    key: "close",
    attrs: {
      "disabled": _vm.loading ? true : false
    },
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _vm.modalType == 'qty' ? _c('a-button', {
    key: "qty",
    attrs: {
      "type": "primary",
      "disabled": _vm.loading ? true : false
    }
  }, [_vm._v("\n        Submit\n      ")]) : _vm._e(), _vm._v(" "), _vm.modalType == 'cart' ? _c('a-button', {
    key: "cart",
    attrs: {
      "type": "primary",
      "disabled": _vm.cart.length !== 0 ? false : true
    },
    on: {
      "click": function ($event) {
        return _vm.checkoutModal('checkout');
      }
    }
  }, [_vm._v("\n        Checkout\n      ")]) : _vm._e(), _vm._v(" "), _vm.modalType == 'checkout' ? _c('a-button', {
    key: "checkout",
    attrs: {
      "html-type": "submit",
      "type": "primary",
      "disabled": _vm.cart.length !== 0 ? false : true
    },
    on: {
      "click": function ($event) {
        return _vm.placeHolder();
      }
    }
  }, [_vm._v("\n        Place Order\n      ")]) : _vm._e()], 1)], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=32506c71&

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(48);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(49);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(53);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(55);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(56);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&













/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Shop',

  async asyncData(context) {
    if (context.store.state.products.products.length === 0) {
      await context.store.dispatch('products/fetchProducts');
    }
  },

  data() {
    return {
      checked1: '',
      search: '',
      products: this.$store.state.products.products,
      selectedProds: [],
      selectedTags: [],
      details: [],
      cart: [],
      //
      visible: false,
      loading: false,
      modalType: ''
    };
  },

  computed: {
    getProducts() {
      const productsData = this.$store.state.products.products; // search

      if (this.search !== '') {
        const searchValue = this.search.toLowerCase().slice(1);
        return productsData.filter((product, index) => {
          return product.name.toLowerCase().includes(searchValue) || product.no.toLowerCase().includes(searchValue) || product.details.toLowerCase().includes(searchValue);
        });
      }

      return productsData;
    },

    getProductsTags() {
      // merge all tags
      const tags = [];
      const products = this.$store.state.products.products;

      for (let index = 0; index < products.length; index++) {
        tags.push(products[index].tags);
      }

      const mergedArray = tags.flat(); // remove dublicates

      return [...new Map(mergedArray.map(tag => [tag, tag])).values()];
    },

    total() {
      return this.cart.reduce(function (total, value) {
        return total + Number(value.total);
      }, 0);
    }

  },
  // watch for any changes in getProducts
  watch: {
    getProducts() {
      this.products = this.getProducts;
    },

    onSelectTags() {},

    cart() {},

    addQtyBootleToProducts() {},

    addToCart() {}

  },
  methods: {
    // ---- 1. FILTER TAGS/CATEGORIES
    onSelectTags(tag, checked) {
      // get selected tags to an arrray this.selectedTags
      const {
        selectedTags
      } = this;
      const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
      this.selectedTags = nextSelectedTags;
      const products = this.$store.state.products.products; // filter selected tags

      if (this.selectedTags.length !== 0) {
        this.products = products.filter((product, index) => {
          return this.selectedTags.some(item => product.tags.includes(item));
        });
      } else {
        this.products = this.$store.state.products.products;
      }
    },

    // ---- 2. SHOW MORE DETAILS MODAL
    detailsModal(idNo, modalType) {
      this.visible = true;
      this.modalType = modalType;
      const products = this.$store.state.products.products;
      this.details = products.filter(product => {
        return product.no.includes(idNo);
      });
    },

    cartModal(modalType) {
      this.visible = true;
      this.modalType = modalType;
    },

    checkoutModal(modalType) {
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
        this.modalType = modalType;
      }, 500);
    },

    placeHolder() {
      try {
        // const result = await this.$refs[formData].validate()
        // if (this.formData.paymentMethod) {
        this.$notification.success({
          message: 'Order',
          description: 'Your order has been placed successfully!',
          duration: 4
        });
        setTimeout(() => {
          this.visible = false;
          this.cart = [];
        }, 1500); // }
      } catch (error) {// console.log(error)
      }
    },

    // ---- 3. ADD TO CART
    addToCart(idNo) {
      const products = this.$store.state.products.products;

      for (let index = 0; index < products.length; index++) {
        if (products[index].no === idNo) {
          // check QTY is selected
          if (products[index].qtyBottle || products[index].qtyCase) {
            //
            const bottleSubTotal = Math.round(products[index].qtyBottle * products[index].cost.bottle) || 0;
            const caseSubTotal = Math.round(products[index].qtyCase * products[index].cost.case) || 0;
            this.cart.push({
              items: products[index],
              sub_total: {
                bottle: bottleSubTotal,
                case: caseSubTotal
              },
              total: bottleSubTotal + caseSubTotal
            });
            this.$message.loading('Adding ' + products[index].name + ' to cart...', 2.5).then(() => this.$message.success('Successfully added ' + products[index].name + ' to cart.', 2.5));
          } else {
            this.$notification.error({
              message: 'Add to Cart',
              description: 'Kindly select Quantity (QTY) for ' + products[index].name,
              duration: 8
            });
          }
        }
      }
    },

    addQtyBootleToProducts(number, idNo, qtyType) {
      const products = this.products;

      for (let index = 0; index < products.length; index++) {
        if (products[index].no === idNo) {
          if (qtyType === 'bottle') {
            products[index].qtyBottle = number;
          } else if (qtyType === 'case') {
            products[index].qtyCase = number;
          }
        }
      }
    },

    // addQtyCaseToProducts(idNo, qtyNumber) {},
    // ---- 5. RESET/ SHOW ALL PRODUCTS
    showAll() {
      this.products = this.$store.state.products.products;
      this.selectedTags = [];
      this.search = '';
    },

    handleCancel() {
      this.visible = false;
      this.modalType = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b3a0757a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Details: __webpack_require__(60).default,Cart: __webpack_require__(61).default,Checkout: __webpack_require__(62).default})


/***/ })

};;
//# sourceMappingURL=index.js.map