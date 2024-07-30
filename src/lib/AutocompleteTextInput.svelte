<script>
  import { FormElement } from "./index.js";
  import { v4 as uuidv4 } from "uuid";

  export let label;
  export let name;
  export let value;
  export let options;
  export let dataTestId = "";

  let id = `${name}-${uuidv4()}`;
</script>
  
<FormElement {label} id={`${name}-${id}-input`}>
  <input
    class="govuk-input govuk-input--width-20"
    id={`${name}-${id}-input`}
    data-testid={dataTestId}
    list={`${name}-${id}-list`}
    bind:value
  />
  <datalist id={`${name}-${id}-list`} >
    {#each options as option}
      <option 
        value={option[0]}
        label = {option[1]}
      /> 
    {/each}
  </datalist>
</FormElement>
