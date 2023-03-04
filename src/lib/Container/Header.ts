import { defineComponent, h, PropType } from "vue";

const Header = defineComponent({
  name: 'Header',
  props: {
    height: {
      type: String,
      default: '60px'
    },
    bg: {
      type: String as PropType<Color>,
      default: '#7dbcea'
    }
  },
  setup(props, {slots}) {
    return () => (
      h(
        'header',
        {
          class: 'gulu-header',
          style: [
            { height: props.height },
            { backgroundColor: props.bg }
          ]
        },
        slots.default?.()
      )
    )
  }
});

export default Header;