import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsCardText',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'p',
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'card-text': true,
   },
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});