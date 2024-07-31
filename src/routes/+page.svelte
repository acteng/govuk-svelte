<script lang="ts">
  import {
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
  } from "../lib/index.ts"
  
  let options: [string, string][] = ["Option A", "Option B", "Option C"].map(pair);

  function pair<T>(thing:T): [T, T][] {
    return [thing, thing];
  }

</script>

<Radio
  label="Normal Radio"
  choices={options}
  value="",
/>

<RadioWithCustom
  label="Radio with custom"
  choices={options}
  value="",
/>


<Select
  label="Normal Select"
  choices={options}
  value="",
/>

<SelectWithCustom
  label="Select With Custom"
  choices={options}
  value="",
/>
