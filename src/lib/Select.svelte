<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { ErrorMessage, FormElement } from "./index.js";

  export let label: string;
  export let hint = "";
  // A list of [value, label] representing the choices
  export let choices: [string, string][];
  // Make the first option the empty string
  export let emptyOption = false;
  export let disabled = false;
  export let errorMessage = "";

  // The current value
  export let value: string;

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  <ErrorMessage {errorMessage} />
  {#if hint}
    <div class="govuk-hint">{hint}</div>
  {/if}
  <select class="govuk-select" {id} bind:value {disabled} on:change>
    {#if emptyOption}
      <option value="" />
    {/if}

    {#each choices as [thisValue, thisLabel]}
      <option value={thisValue}>{thisLabel}</option>
    {/each}
  </select>
</FormElement>
