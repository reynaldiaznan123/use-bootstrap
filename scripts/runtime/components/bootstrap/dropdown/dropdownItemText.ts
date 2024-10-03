import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsDropdownItemText',
 props: {
  ...BlockProps,
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'dropdown-item-text': true,
   },
  };
  //
  return () => h('li', h('span', hProps(block, current), context.slots));
 },
});