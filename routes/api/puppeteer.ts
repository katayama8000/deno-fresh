import { HandlerContext } from '$fresh/server.ts';
import puppeteer from 'https://deno.land/x/puppeteer@16.2.0/mod.ts';

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  console.log('puppeteer');
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    // await page.screenshot({ path: 'example.png' });

    await browser.close();
    return new Response('success');
  } catch (e) {
    console.log(e);
    return new Response('error');
  }
};
