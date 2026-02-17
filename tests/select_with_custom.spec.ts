import { expect, test } from "@playwright/test";
import { loadTestPage } from "./shared.js";

test.beforeEach(async ({ page }) => {
    await loadTestPage(page, "select_with_custom");
});

test("Select with custom - normal", async ({ page, }) => {
    await new Promise(resolve => setTimeout(resolve, 4000));
    await page.getByLabel("Select With Custom").selectOption("Option A");
    await expect(page.getByText("Select with custom selection is: Option A")).toBeVisible();

    await page.getByLabel("Select With Custom").selectOption("Option C");
    await expect(page.getByText("Select with custom selection is: Option C")).toBeVisible();
});

test("Select with custom - custom value", async ({ page, }) => {
    await new Promise(resolve => setTimeout(resolve, 4000));
    await page.getByLabel("Select With Custom").selectOption("Other, please specify");
    await expect(page.getByText("Enter a custom value")).toBeVisible();

    await page.getByLabel("Enter a custom value").fill("example");

    await expect(page.getByText("Select with custom selection is: example")).toBeVisible();

    await page.getByLabel("Select With Custom").selectOption("Option C");
    await expect(page.getByText("Select with custom selection is: Option C")).toBeVisible();
});