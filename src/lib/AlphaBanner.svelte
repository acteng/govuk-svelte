<script lang="ts">
  export let contacts: [string, string][] = [];
</script>

<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">Alpha</strong>
    <span class="govuk-phase-banner__text">
      This is a new service. 
      {#if contacts.length > 0} 
        Contact
        {#each contacts as [name, email], i }
          {#if i > 0 && i == contacts.length - 1} 
            &nbspand 
          {/if}
          <a href={`mailto:${email}`}>{name} </a>
        {/each}
        with any feedback.
      {:else}
        Please give us feedback.
      {/if}
    </span>
  </p>
</div>
