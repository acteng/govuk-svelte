import { expect, test } from "@playwright/test";
import { loadTestPage } from "./shared.js";

test.beforeEach(async ({ page }) => {
    await loadTestPage(page);
});

test("Select selection displayed", async ({ page, }) => {
    await new Promise(resolve => setTimeout(resolve, 4000));
    await page.getByLabel("Normal Select").selectOption("Option A");
    await expect(page.getByText("Select selection is: Option A")).toBeVisible();

    await page.getByLabel("Normal Select").selectOption("Option C");
    await expect(page.getByText("Select selection is: Option C")).toBeVisible();
});