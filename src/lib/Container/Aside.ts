import { defineComponent, h, PropType } from "vue";

const Aside = defineComponent({
  name: 'Aside',
  props: {
    width: {
      type: String,
      default: '300px'
    },
    bg: {
      type: String as PropType<Color>,
      default: '#3ba0e9'
    }
  },
  setup(props, { slots }) {
    return () => (
      h(
        'aside',
        {
          class: 'gulu-aside',
          style: [
            { width: props.width },
            { backgroundColor: props.bg }
          ]
        },
        slots.default?.()
      )
    )
  }
});

export default Aside;