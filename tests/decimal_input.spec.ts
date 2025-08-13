import {expect, test} from "@playwright/test";

test("Warning displayed", async({page,})=> {
    await page.goto("/");
    await expect(page.getByText("Test decimal input", { exact: true })).toBeVisible();
});