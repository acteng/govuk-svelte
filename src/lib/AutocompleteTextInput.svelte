<script lang="ts">
    import { FormElement } from "./index.js";
  
    export let label: string;
    export let name: string;
    export let value: string;
    export let options: HTMLDataListElement;
    export let dataTestId: string = "";
  </script>
  
  <FormElement {label} id={`${name}-input`}>
    <input
      class="govuk-input govuk-input--width-20"
      id={`${name}-input`}
      data-testid={dataTestId}
      list={`${name}-list`}
      bind:value
    />
    <datalist id={`${name}-list`} bind:this={options} />
  </FormElement>
  