<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { ErrorMessage, FormElement } from "./index.js";

  export let label: string;
  export let value: number | undefined;
  export let width: number;
  // Inclusive
  export let min: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let hint: string | undefined = undefined;

  let stringValue: string | undefined = value?.toString();

  let id = uuidv4();

  function parse() {
    value = stringValue == undefined ? undefined : Number(stringValue);
  }

  function validate(stringValue: string | undefined): string {
    if (stringValue == "" || stringValue == undefined) {
      return "";
    }
    let n = Number(stringValue);
    if (isNaN(n)) {
      return "Please enter a valid number";
    }
    if (min != undefined && n < min) {
      return `Please enter a number that's at least ${min};`;
    }
    if (max != undefined && n > max) {
      return `Please enter a number that's at most ${max};`;
    }
    return "";
  }
</script>

<FormElement {label} {id}>
  <ErrorMessage errorMessage={validate(stringValue)} />
  {#if hint}
    <div class="govuk-hint">{hint}</div>
  {/if}
  <input
    type="text"
    inputmode="numeric"
    class={`govuk-input govuk-input--width-${width}`}
    {id}
    bind:value={stringValue}
    on:change={parse}
  />
</FormElement>
