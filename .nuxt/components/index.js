export const Cart = () => import('../..\\components\\modal\\cart.vue' /* webpackChunkName: "components/cart" */).then(c => wrapFunctional(c.default || c))
export const Checkout = () => import('../..\\components\\modal\\checkout.vue' /* webpackChunkName: "components/checkout" */).then(c => wrapFunctional(c.default || c))
export const Details = () => import('../..\\components\\modal\\details.vue' /* webpackChunkName: "components/details" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const PageFooter = () => import('../..\\components\\page\\PageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c))
export const PageHeader = () => import('../..\\components\\page\\PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
