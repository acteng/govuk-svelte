<script lang="ts">
  import "../style/main.css";
  import {
    AlphaBanner,
    Radio,
    RadioWithCustom,
    Select,
    SelectWithCustom,
    Footer,
  } from "../lib/index.js";

  let choices = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );
</script>

<AlphaBanner />

<Radio label="Normal Radio" {choices} value="" />

<RadioWithCustom label="Radio with custom" {choices} value="" />

<Select label="Normal Select" {choices} value="" />

<SelectWithCustom label="Select With Custom" {choices} value="" />

<Footer />
