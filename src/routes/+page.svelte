<script lang="ts">
  import "../style/main.css";
  import {
    AlphaBanner,
    DecimalInput,
    Footer,
    Header,
    Radio,
    RadioWithCustom,
    SecondaryButton,
    Select,
    SelectWithCustom,
    StartButton,
  } from "../lib/index.js";

  let choices = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );

  let numberValue = 0;
</script>

<div style="width:70vw;">
  <Header text="example" headerBarColour="green" />
</div>
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

<DecimalInput
  label="Test decimal input"
  value={numberValue}
  width={10}
  min={0}
  max={50}
  hint={"Please provide 2 decimal places"}
/>

<Footer footerTopBarColour="green" />
