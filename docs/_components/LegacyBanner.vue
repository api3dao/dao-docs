<!--
Site-wide banner pointing to the current DAO documentation.
-->

<template>
  <div class="api3-legacy-banner">
    <p>
      API3 DAO governance has moved to Snapshot and the staking pool no longer
      pays rewards.
      <a href="https://docs.api3.org/dao/">Read the current DAO docs</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'LegacyBanner',
};
</script>

<style>
:root {
  --vp-layout-top-height: 64px;
}

@media (min-width: 960px) {
  :root {
    --vp-layout-top-height: 40px;
  }
}
</style>

<style scoped>
.api3-legacy-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--vp-z-index-layout-top);
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--vp-layout-top-height);
  padding: 0 16px;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  font-size: 13px;
  line-height: 18px;
  text-align: center;
}

.api3-legacy-banner p {
  margin: 0;
}

.api3-legacy-banner a {
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  white-space: nowrap;
}

@media (min-width: 960px) {
  .api3-legacy-banner {
    font-size: 14px;
  }
}
</style>
