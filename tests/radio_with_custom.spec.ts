import { expect, test } from "@playwright/test";
import { loadTestPage } from "./shared.js";

test.beforeEach(async ({ page }) => {
    await loadTestPage(page, "radio_with_custom");
});

test("Radio with custom - normal", async ({ page, }) => {
    await page.getByText("Option A").click();
    await expect(page.getByText("Radio with custom selection is: Option A")).toBeVisible();

    await page.getByText("Option C").click();
    await expect(page.getByText("Radio with custom selection is: Option C")).toBeVisible();
});

test("Radio with custom - custom value", async ({ page, }) => {
    await page.getByText("Other, please specify").click();
    await expect(page.getByText("Enter a custom value")).toBeVisible();

    await page.getByLabel("Enter a custom value").fill("example");

    await expect(page.getByText("Radio with custom selection is: example")).toBeVisible();

    await page.getByText("Option C").click();
    await expect(page.getByText("Radio with custom selection is: Option C")).toBeVisible();
});