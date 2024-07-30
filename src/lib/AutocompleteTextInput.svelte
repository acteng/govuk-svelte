<script lang="ts">
    import { FormElement } from "./index.js";
    import {onMount} from "svelte";
    import { v4 as uuidv4 } from "uuid";
  
    export let label: string;
    export let name: string;
    export let value: string;
    export let options: [string,string][];
    export let dataTestId: string = "";
    
    let id = `${name}-${uuidv4()}`;
</script>
  
  <FormElement {label} id={`${name}-${id}-input`}>
    <input
      class="govuk-input govuk-input--width-20"
      id={`${id}-input`}
      data-testid={dataTestId}
      list={`${id}-list`}
      bind:value
    />
    <datalist id={`${id}-list`} >
      {#each options as option}
        <option 
          value={option[0]}
          label = {option[1]}
        /> 
      {/each}
      </datalist>
  </FormElement>
  