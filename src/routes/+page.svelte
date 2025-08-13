<script lang="ts">
  import "../style/main.css";
  import DecimalInput from "$lib/DecimalInput.svelte";
  import {
    AlphaBanner,
    Footer,
    Radio,
    RadioWithCustom,
    SecondaryButton,
    Select,
    SelectWithCustom,
    StartButton,
  } from "../lib/index.js";
    import NumberInput from "$lib/NumberInput.svelte";

  let choices = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );

  let radioSelection = "";
  let radioWithCustomSelection = "";
  let selectSelection = "";
  let selectWithCustomSelection = "";
  let numberValue = 0;
  let decimalValue = 0;
</script>

<StartButton on:click={() => window.alert("Start clicked")} />

<AlphaBanner />

<Radio label="Normal radio" {choices} bind:value={radioSelection} />

<Radio
  label="Normal radio with label to the left"
  {choices}
  bind:value={radioSelection}
  leftLabel
/>
<Radio
  label="Radio with label to the left"
  {choices}
  bind:value={radioSelection}
  inlineSmall
  leftLabel
/>

<p>
  Radio selection is: {radioSelection}
</p>

<RadioWithCustom label="Radio with custom" {choices} bind:value={radioWithCustomSelection} />

<p>Radio with custom selection is: {radioWithCustomSelection}</p>


<Select label="Normal Select" {choices} bind:value={selectSelection}  />

<p>
  Select selection is: {selectSelection}
</p>

<SelectWithCustom label="Select With Custom" {choices} bind:value={selectWithCustomSelection} />

<p>
  Select with custom selection is: {selectWithCustomSelection}
</p>

<SecondaryButton noBottomMargin>Button without bottom margin</SecondaryButton>
<p>Some text</p>

<NumberInput
  label="Test decimal input"
  bind:value={numberValue}
  width={10}
  min={0}
  max={40}
/>

<p>
  Number value is: {numberValue}
</p>

<DecimalInput
  label="Test decimal input"
  bind:value={decimalValue}
  width={10}
  min={0}
  max={50}
  hint={"Please provide 2 decimal places"}
/>

<p>
  Decimal value is: {decimalValue}
</p>

<Footer footerTopBarColour="green" />
