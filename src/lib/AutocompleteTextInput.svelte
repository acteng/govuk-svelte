<script lang="ts">
    import { FormElement } from "./index.js";
    import { v4 as uuidv4 } from "uuid";
  
    export let label: string;
    export let name: string;
    export let value: string;
    export let options: [string,string][];
    export let dataTestId: string = "";
    
    let dataList: HTMLDataListElement;
    let id = `${name}-${uuidv4()}` 

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
      id={`${id}-input`}
      data-testid={dataTestId}
      list={`${id}-list`}
      bind:value
    />
    <datalist id={`${id}-list`} bind:this={dataList} />
  </FormElement>
  