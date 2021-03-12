import { defineComponent } from 'vue'

const Button = defineComponent({
  setup(_, { slots }) {
    return () => (
      <button>{slots && slots.default ? slots.default() : null}</button>
    )
  },
})

export default Button
