import { useBlock, BlockProps } from '../../../composables/base/useBlock';
import { hProps, hasValue, isPropDefined } from '../../../composables/utils/useProps';
import { defineComponent, h } from '#imports';
//
export default defineComponent({
 name: 'BsModalDialog',
 props: {
  ...BlockProps,
  tag: {
   type: String,
   default: 'div',
  },
  scrollable: {
   type: Boolean,
   default: false,
  },
  centered: {
   type: Boolean,
   default: false,
  },
  size: {
   type: String,
   default: undefined,
  },
  fullscreen: {
   type: String,
   default: undefined,
  },
 },
 setup(props, context) {
  //
  const block = useBlock(props);
  //
  const current = {
   class: {
    'modal-dialog': true,
    'modal-dialog-scrollable': props.scrollable,
    'modal-dialog-centered': props.centered,
    [`modal-${props.size}`]: props.size,
    [`modal-fullscreen${hasValue(props.fullscreen) ? `-${props.fullscreen}` : ''}`]: isPropDefined(props.fullscreen),
   },
  };
  //
  return () => h(props.tag, hProps(current, block), context.slots);
 },
});