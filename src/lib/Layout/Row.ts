import { computed, defineComponent, h, provide } from 'vue';
import type { PropType } from 'vue';
import type { RowType, RowProps } from './Row.d';

const CoastRow = defineComponent({
  name: 'Row',
  props: {
    gutter: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    justify: {
      type: String as PropType<RowType>,
      required: false,
      validator: (val: string) => {
        return ['end', 'start', 'center', 'space-between', 'space-around'].includes(val);
      },
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter);
    provide('Row', { gutter });

    const style = computed(() => {
      const marginValue = props.gutter ? `${-props.gutter / 2}px` : '';
      return {
        marginLeft: marginValue,
        marginRight: marginValue,
      };
    });

    const classes = computed(() => [
      'gulu-row',
      { [`gulu-justify-${props.justify}`]: props.justify },
    ]);

    return () =>
      h(
        'div',
        {
          class: classes.value,
          style: style.value,
        },
        slots.default?.(),
      );
  },
});

export default CoastRow;
