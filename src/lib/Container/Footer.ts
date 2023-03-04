import { defineComponent, h, PropType } from "vue";

const Footer = defineComponent({
  name: 'Footer',
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
  setup(props, { slots }) {
    return () => (
      h(
        'footer',
        {
          class: 'gulu-footer',
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

export default Footer;