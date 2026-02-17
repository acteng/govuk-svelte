import { expect, test } from "@playwright/test";
import { loadTestPage } from "./shared.js";

test.beforeEach(async ({ page }) => {
    await loadTestPage(page);
});

test("Radio selection displayed - normal", async ({ page, }) => {
    await page.getByText("Option A").click();
    await expect(page.getByText("Normal radio selection is: Option A")).toBeVisible();

    await page.getByText("Option B").click();
    await expect(page.getByText("Normal radio selection is: Option B")).toBeVisible();
});

test("Radio selection displayed - left", async ({ page, }) => {
    await page.getByText("Option E").click();
    await expect(page.getByText("Left radio selection is: Option E")).toBeVisible();

    await page.getByText("Option F").click();
    await expect(page.getByText("Left radio selection is: Option F")).toBeVisible();
});

test("Radio selection displayed - small left", async ({ page, }) => {
    await page.getByText("Option I").click();
    await expect(page.getByText("Small left radio selection is: Option I")).toBeVisible();

    await page.getByText("Option G").click();
    await expect(page.getByText("Small left radio selection is: Option G")).toBeVisible();
});