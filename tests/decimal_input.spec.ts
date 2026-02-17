import { expect, test } from "@playwright/test";
import { loadTestPage } from "./shared.js";

test.beforeEach(async({ page }) => {
    await loadTestPage(page);
});

test("Warning displayed", async ({ page, }) => {
    await expect(page.getByText("Test decimal input")).toBeVisible();

    await page.getByLabel("Test decimal input").fill("10", { force: true });
    await page.getByLabel("Test decimal input").fill("10", { force: true });
    await page.getByText("Test decimal input").click();

    await expect(page.getByText("Please enter a number")).not.toBeVisible();
    await expect(page.getByText("Decimal value is: 10")).toBeVisible();

    await page.getByLabel("Test decimal input").fill("-1", { force: true });
    await page.getByText("Test decimal input").click();

    await expect(page.getByText("Please enter a number that's at least 0;")).toBeVisible();
    await expect(page.getByText("Decimal value is: -1")).toBeVisible();

    await page.getByLabel("Test decimal input").fill("51", { force: true });
    await page.getByText("Test decimal input").click();

    await expect(page.getByText("Please enter a number that's at most 50")).toBeVisible();
    await expect(page.getByText("Decimal value is: 51")).toBeVisible();
});