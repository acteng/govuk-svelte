import { type Page } from "playwright/test"

export async function loadTestPage(page: Page, path:string=""): Promise<void> {
    await page.goto(`/${path}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
}