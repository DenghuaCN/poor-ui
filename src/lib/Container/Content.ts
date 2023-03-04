import { defineComponent, h, PropType } from "vue";

const Content = defineComponent({
  name: 'Content',
  props: {
    bg: {
      type: String as PropType<Color>,
      default: '#108ee9'
    }
  },
  setup(props, {slots}) {
    return () => (
      h(
        'main',
        {
          class: 'gulu-content',
          style: [
            { backgroundColor: props.bg }
          ]
        },
        slots.default?.())
    )
  }
})

export default Content;