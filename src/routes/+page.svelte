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

  let choices1 = ["Option A", "Option B", "Option C"].map(
    (x) => [x, x] as [string, string],
  );
  let choices2 = ["Option D", "Option E", "Option F"].map(
    (x) => [x, x] as [string, string],
  );
  let choices3 = ["Option G", "Option H", "Option I"].map(
    (x) => [x, x] as [string, string],
  );
  let choices4 = ["Option J", "Option K", "Option L"].map(
    (x) => [x, x] as [string, string],
  );

  let selectChoices1 = ["Selection A", "Selection B", "Selection C"].map(
    (x) => [x, x] as [string, string],
  );
  let selectChoices2 = ["Selection D", "Selection E", "Selection F"].map(
    (x) => [x, x] as [string, string],
  );

  let radioSelection1 = "";
  let radioSelection2 = "";
  let radioSelection3 = "";
  let radioWithCustomSelection = "";
  let selectSelection = "";
  let selectWithCustomSelection = "";
  let numberValue = 0;
  let decimalValue = 0;
</script>

<StartButton on:click={() => window.alert("Start clicked")} />

<AlphaBanner />

<Radio label="Normal radio" choices={choices1} bind:value={radioSelection1} />

<p>
  Normal radio selection is: {radioSelection1}
</p>

<Radio
  label="Normal radio with label to the left"
  choices={choices2}
  bind:value={radioSelection2}
  leftLabel
/>

<p>
  Left radio selection is: {radioSelection2}
</p>

<Radio
  label="Radio with label to the left"
  choices={choices3}
  bind:value={radioSelection3}
  inlineSmall
  leftLabel
/>

<p>
  Small left radio selection is: {radioSelection3}
</p>

<RadioWithCustom label="Radio with custom" choices={choices4} bind:value={radioWithCustomSelection} />

<p>Radio with custom selection is: {radioWithCustomSelection}</p>


<Select label="Normal Select" choices={selectChoices1} bind:value={selectSelection}  />

<p>
  Select selection is: {selectSelection}
</p>

<SelectWithCustom label="Select With Custom" choices={selectChoices2} bind:value={selectWithCustomSelection} />

<p>
  Select with custom selection is: {selectWithCustomSelection}
</p>

<SecondaryButton noBottomMargin>Button without bottom margin</SecondaryButton>
<p>Some text</p>

<NumberInput
  label="Test number input"
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
