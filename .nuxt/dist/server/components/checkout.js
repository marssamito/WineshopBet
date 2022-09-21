exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=checkout.js.map