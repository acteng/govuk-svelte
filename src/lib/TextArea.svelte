<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { ErrorMessage, FormElement } from "./index.js";

  export let label: string;
  export let hint = "";
  export let value: string;
  export let rows: number = 5;
  export let errorMessage = "";

  let id = uuidv4();
</script>

<FormElement {label} {id}>
  <ErrorMessage {errorMessage} />
  {#if hint}
    <div class="govuk-hint">{hint}</div>
  {/if}
  <textarea class="govuk-textarea" {id} {rows} bind:value />
</FormElement>
