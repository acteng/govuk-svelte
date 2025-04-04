<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { ErrorMessage } from "./index.js";

  // A label for the entire group of radio buttons
  export let label: string;
  export let hint = "";
  // A list of [value, label] representing the choices
  export let choices: [string, string][];
  // Lay out radio buttons horizontally and decrease font size
  export let inlineSmall = false;
  // Do not let the radio buttons wrap;
  export let nowrap = false;
  // Remove bottom margin to save space;
  export let noBottomMargin = false;
  // Place the label to the left of the radios, instead of the top
  export let leftLabel = false;
  // Show an error if no option is chosen
  export let required = false;

  // The current value
  export let value: string;

  $: errorMessage = required && value == "" ? "Required" : "";

  let id = uuidv4();
</script>

<div style="display: flex">
  {#if leftLabel && !inlineSmall}
    <legend
      class="govuk-fieldset__legend govuk-fieldset__legend--s"
      style="margin-right: 8px"
    >
      {label}
    </legend>
  {/if}

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      {#if !leftLabel}
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
          {label}
        </legend>
      {/if}
      <ErrorMessage {errorMessage} />
      {#if hint}
        <div class="govuk-hint">{hint}</div>
      {/if}
      <div
        class="govuk-radios"
        class:govuk-radios--inline={inlineSmall}
        class:govuk-radios--small={inlineSmall}
        class:nowrap
        class:no-bottom-margin={noBottomMargin}
        data-module="govuk-radios"
      >
        {#if leftLabel && inlineSmall}
          <legend
            class="govuk-fieldset__legend govuk-fieldset__legend--s"
            style="margin-right: 8px"
          >
            {label}
          </legend>
        {/if}
        {#each choices as [thisValue, thisLabel]}
          <div class="govuk-radios__item">
            <input
              class="govuk-radios__input"
              id={id + thisValue}
              type="radio"
              bind:group={value}
              value={thisValue}
              on:change
            />
            <label class="govuk-label govuk-radios__label" for={id + thisValue}>
              {thisLabel}
            </label>
          </div>
        {/each}
      </div>
    </fieldset>
  </div>
</div>

<style>
  .nowrap {
    flex-wrap: nowrap;
  }

  .no-bottom-margin {
    margin-bottom: 0;
  }
</style>
