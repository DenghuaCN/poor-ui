import { computed, defineComponent, h, inject } from "vue";
import type { PropType } from "vue";
import type { SizeType, ColProps } from './Col.d';

const Col = defineComponent({
  name: "Col",
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String],
    },
    xs: {
      type: [Number, String, Object] as PropType<number | string | SizeType>,
      default: () => ({} as SizeType)
    },
    sm: {
      type: [Number, String, Object] as PropType<number | string | SizeType>,
      default: () => ({} as SizeType)
    },
    md: {
      type: [Number, String, Object] as PropType<number | string | SizeType>,
      default: () => ({} as SizeType)
    },
    lg: {
      type: [Number, String, Object] as PropType<number | string | SizeType>,
      default: () => ({} as SizeType)
    },
    xl: {
      type: [Number, String, Object] as PropType<number | string | SizeType>,
      default: () => ({} as SizeType)
    },
    bg: {
      type: String as PropType<Color>
    }
  },
  setup(props, { slots }) {
    const { gutter } = inject('Row', { gutter: { value: 0 } });

    console.log('gutter', gutter.value);


    const classes = computed(() => {
      const ret = [
        'gulu-col',
        {
          [`gulu-col-span-${props.span}`]: props.span,
          [`gulu-col-offset-${props.offset}`]: props.offset,
        },
      ];

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      sizes.forEach(size => {
        const propsSizeValue = props[size];
        const propsSizeType = typeof propsSizeValue;

        if (propsSizeType === 'number' || propsSizeType === 'string') {
          ret.push(`gulu-col-${size}-span-${propsSizeValue}`);
        } else if (propsSizeType === 'object') {
          Object.keys(propsSizeValue).forEach(prop => {
            ret.push(`gulu-col-${size}-${prop}-${propsSizeValue[prop]}`);
          });
        }
      });

      return ret;
    });

    const style = computed(() => {
      const paddingValue = gutter.value ? `${gutter.value / 2}px` : '';
      return {
        paddingLeft: paddingValue,
        paddingRight: paddingValue,
      };
    });

    return () => (
      h(
        'div',
        {
          class: classes.value,
          style: [
            style.value,
            { backgroundColor: props.bg }
          ],
        },
        slots.default?.(),
      )
    )
  }
})

export default Col;