<script lang="ts">
  import { FormElement } from "./index.js";
  import { v4 as uuidv4 } from "uuid";

  export let label: string;
  export let value: string;
  // A list of [value, label] pairs that can be autocompleted
  export let options: [string, string][];

  let id = uuidv4();
</script>
  
<FormElement {label} {id} >
  <input
    class="govuk-input govuk-input--width-20"
    {id}
    list={`${id}-list`}
    bind:value
  />
  <datalist id={`${id}-list`} >
    {#each options as [value, label]}
      <option {value} {label} /> 
    {/each}
  </datalist>
</FormElement>
