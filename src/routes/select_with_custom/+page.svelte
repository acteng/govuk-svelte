<script lang="ts">
  import "../../style/main.css";
  import {
    SelectWithCustom,
  } from "../../lib/index.js";

  let choices = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );
  let selectWithCustomSelection = "";
</script>


<SelectWithCustom label="Select With Custom" {choices} bind:value={selectWithCustomSelection} />

<p>
  Select with custom selection is: {selectWithCustomSelection}
</p>