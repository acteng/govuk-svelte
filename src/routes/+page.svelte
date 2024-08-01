<script lang="ts">
  import "../style/main.css";
  import {
    AlphaBanner,
    AutocompleteTextInput,
    ButtonGroup,
    CheckboxGroup,
    Checkbox,
    CollapsibleCard,
    DecimalInput,
    DefaultButton,
    ErrorMessage,
    FileInput,
    FormElement,
    GenericSelect,
    MoneyInput,
    NumberInput,
    Radio,
    RadioWithCustom,
    Select,
    SelectWithCustom,
    TextArea,
    TextInput,
    WarningButton,
    WarningText,
  } from "../lib/index.ts";

  let options: [string, string][] = ["Option A", "Option B", "Option C"].map(
    pair,
  );

  function pair<T>(thing: T): [T, T][] {
    return [thing, thing];
  }

  let contacts = [
    ["First Dev", "first@dev.com"],
    ["Second Dev", "second@dev.com"],
    ["Third Dev", "third@dev.com"],
  ];
</script>

<AlphaBanner {contacts} />

<Radio label="Normal Radio" choices={options} value="" , />

<RadioWithCustom label="Radio with custom" choices={options} value="" , />

<Select label="Normal Select" choices={options} value="" , />

<SelectWithCustom label="Select With Custom" choices={options} value="" , />
