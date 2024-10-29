<script lang="ts">
  export let noBottomMargin = false;
</script>

<button
  type="button"
  class="govuk-button govuk-button--secondary"
  data-module="govuk-button"
  {...$$props}
  on:click
  on:mouseenter
  on:mouseleave
  class:no-bottom-margin={noBottomMargin}
>
  <slot />
</button>

<style>
  .no-bottom-margin {
    margin-bottom: 0px;
  }
</style>
