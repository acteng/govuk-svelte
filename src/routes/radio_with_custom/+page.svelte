<script lang="ts">
  import "../../style/main.css";
  import {
    RadioWithCustom,
  } from "../../lib/index.js";

  let choices = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );
  let radioWithCustomSelection = "";
</script>
<RadioWithCustom label="Radio with custom" {choices} bind:value={radioWithCustomSelection} />

<p>Radio with custom selection is: {radioWithCustomSelection}</p>
