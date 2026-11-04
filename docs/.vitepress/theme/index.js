import DefaultTheme from 'vitepress/theme';
import { h, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import PageHeader from '../../_components/PageHeader.vue';
import CopyIcon from '../../_components/CopyIcon.vue';
import Video from '../../_components/Video.vue';
import LegacyBanner from '../../_components/LegacyBanner.vue';

import './zoom.css';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(LegacyBanner),
    });
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },

  enhanceApp({ app }) {
    app.component('PageHeader', PageHeader);
    app.component('CopyIcon', CopyIcon);
    app.component('Video', Video);
  },
};
