<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { DefaultButton, ErrorMessage, FormElement } from "./index.js";

  export let label: string;
  export let errorMessage = "";
  export let setToTodayButton = false;
  export let value: string;

  let id = uuidv4();
  let dayId = `${id}-day`;
  let monthId = `${id}-month`;
  let yearId = `${id}-year`;

  let dayString = "";
  let monthString = "";
  let yearString = "";
  $: {
    errorMessage = "";
    const dayInCorrectRange =
      parseInt(dayString) > 0 && parseInt(dayString) < 32;
    const monthInCorrectRange =
      parseInt(monthString) > 0 && parseInt(monthString) < 13;
    const yearCorrectLength = yearString.length === 4;
    if (!dayInCorrectRange && dayString !== "") {
      errorMessage = "Day must be a number between 1 and 31. ";
    }
    if (!monthInCorrectRange && monthString !== "") {
      errorMessage += "Month must be a number between 1 and 12. ";
    }
    if (!yearCorrectLength && yearString !== "") {
      errorMessage += "Year must be a number of length 4.";
    }

    if (dayInCorrectRange && monthInCorrectRange && yearCorrectLength) {
      monthString = ("0" + monthString).slice(-2);
      value = `${yearString}-${monthString}-${dayString}`;
    }
  }

  function setToToday() {
    const date = new Date();
    dayString = date.getDate().toString();
    monthString = (date.getMonth() + 1).toString();
    yearString = date.getFullYear().toString();
  }
</script>

<FormElement {label} {id}>
  <ErrorMessage {errorMessage} />
  <div id="passport-issued-hint" class="govuk-hint">For example, 27 3 2007</div>
  <div class="govuk-date-input" {id}>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for={dayId}>
          Day
        </label>
        <input
          bind:value={dayString}
          class="govuk-input govuk-date-input__input govuk-input--width-2"
          id={dayId}
          name="passport-issued-day"
          type="text"
          inputmode="numeric"
        />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for={monthId}>
          Month
        </label>
        <input
          bind:value={monthString}
          class="govuk-input govuk-date-input__input govuk-input--width-2"
          id={monthId}
          name="passport-issued-month"
          type="text"
          inputmode="numeric"
        />
      </div>
    </div>
    <div class="govuk-date-input__item">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-date-input__label" for={yearId}>
          Year
        </label>
        <input
          bind:value={yearString}
          class="govuk-input govuk-date-input__input govuk-input--width-4"
          id={yearId}
          name="passport-issued-year"
          type="text"
          inputmode="numeric"
        />
      </div>
    </div>
    {#if setToTodayButton}
      <DefaultButton noBottomMargin on:click={setToToday}>
        Set to current date
      </DefaultButton>
    {/if}
  </div>
</FormElement>

<style>
  .govuk-date-input {
    display: flex;
    align-items: center;
  }
</style>
