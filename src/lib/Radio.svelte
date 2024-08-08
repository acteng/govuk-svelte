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
  // Show an error if no option is chosen
  export let required = false;

  // The current value
  export let value: string;

  $: errorMessage = required && value == "" ? "Required" : "";

  let id = uuidv4();
</script>

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
      {label}
    </legend>
    <ErrorMessage {errorMessage} />
    {#if hint}
      <div class="govuk-hint">{hint}</div>
    {/if}
    <div
      class="govuk-radios"
      class:govuk-radios--inline={inlineSmall}
      class:govuk-radios--small={inlineSmall}
      data-module="govuk-radios"
    >
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
