<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { FormElement } from "./index.js";

  export let label: string;
  export let value: string;
  // A list of [value, label] pairs that can be autocompleted
  export let options: [string, string][];
  export let hint = "";

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  {#if hint}
    <div class="govuk-hint">{hint}</div>
  {/if}
  <input
    class="govuk-input govuk-input--width-20"
    {id}
    list={`${id}-list`}
    bind:value
    on:change
  />
  <datalist id={`${id}-list`}>
    {#each options as [value, label]}
      <option {value} {label} />
    {/each}
  </datalist>
</FormElement>
