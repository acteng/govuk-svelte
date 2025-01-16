<script lang="ts">
  export let noBottomMargin = false;
</script>

<button
  type="button"
  class="govuk-button"
  data-module="govuk-button"
  {...$$props}
  class:no-bottom-margin={noBottomMargin}
  on:click
>
  <slot />
</button>

<style>
  .no-bottom-margin {
    margin-bottom: 0px;
  }
</style>
