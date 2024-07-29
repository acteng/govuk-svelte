<script lang="ts">
    import { FormElement } from "./index.js";
  
    export let label: string;
    export let name: string;
    export let value: string;
    export let options: [string,string][];
    export let dataTestId: string = "";
    
  let dataList: HTMLDataListElement;

 $: {
    for (let option of options) {
      let dataListOption = document.createElement("option");
      dataListOption.value = option[0];
      dataListOption.label = option[1];
      dataList.appendChild(dataListOption);
    }

 } 

  </script>
  
  <FormElement {label} id={`${name}-input`}>
    <input
      class="govuk-input govuk-input--width-20"
      id={`${name}-input`}
      data-testid={dataTestId}
      list={`${name}-list`}
      bind:value
    />
    <datalist id={`${name}-list`} bind:this={dataList} />
  </FormElement>
  