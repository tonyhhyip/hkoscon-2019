export default {
  functional: true,
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  render(h, { props, slots, children }) {
    if (!props.event.topic) {
      return slots().default[0];
    }
    const url = new URL(props.event.internal);
    const to = url.pathname.replace('/event/', '/topic/');
    return h('nuxt-link', { props: { to }, staticClass: 'topicWrapper' }, children);
  },
};
