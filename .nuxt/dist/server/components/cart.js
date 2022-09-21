exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=cart.js.map