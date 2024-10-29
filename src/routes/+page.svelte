<script lang="ts">
  import "../style/main.css";
  import {
    AlphaBanner,
    Radio,
    RadioWithCustom,
    Select,
    SelectWithCustom,
    Footer,
    StartButton,
    SecondaryButton,
  } from "../lib/index.js";
  import { base } from "$app/paths";

  let choices = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );
</script>

<StartButton on:click={() => window.alert("Start clicked")} />

<AlphaBanner />

<Radio label="Normal radio" {choices} value="" />

<Radio
  label="Normal radio with label to the left"
  {choices}
  value=""
  leftLabel
/>

<RadioWithCustom label="Radio with custom" {choices} value="" />

<Radio
  label="Radio with label to the left"
  {choices}
  value=""
  inlineSmall
  leftLabel
/>

<Select label="Normal Select" {choices} value="" />

<SelectWithCustom label="Select With Custom" {choices} value="" />

<SecondaryButton noBottomMargin>Button without bottom margin</SecondaryButton>
<p>Some text</p>

<Footer />
