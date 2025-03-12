<script lang="ts">
  // This is a Select component with an "Other" option. When selected, a TextInput is provided.

  import { Radio, TextInput } from "./index.js";

  export let label: string;
  export let hint = "";
  // A list of [value, label] representing the choices. "Other" will be
  // automatically included at the end of this list.
  export let choices: [string, string][];

  // The current value
  export let value: string;

  let radioChoices = new Set(choices.map((pair) => pair[0]));
  let actualChoices: [string, string][] = [...choices, ["other", "Other, please specify"]];

  function makeRadioValue(value: string): string {
    // If the value isn't set, treat the radio as unset
    if (!value) {
      return "";
    }
    return radioChoices.has(value) ? value : "other";
  }
  let radioValue = makeRadioValue(value);

  function radioChanged() {
    value = radioValue == "other" ? "" : radioValue;
  }
</script>

<div class:grouped={radioValue == "other"}>
  <Radio
    {label}
    {hint}
    choices={actualChoices}
    bind:value={radioValue}
    on:change={radioChanged}
  />

  {#if radioValue == "other"}
    <TextInput label="Enter a custom value" bind:value />
  {/if}
</div>

<style>
  .grouped {
    border: 1px solid black;
    padding: 16px;
  }
</style>
