import { HandlerContext } from '$fresh/server.ts';
import puppeteer from 'https://deno.land/x/puppeteer@16.2.0/mod.ts';

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  console.log('puppeteer');
  try {
    await Deno.permissions.request({ name: 'read', path: '<your file path>' });
    await Deno.permissions.request({ name: 'write', path: '<your file path>' });
    await Deno.permissions.request({ name: 'env' });
    await Deno.permissions.request({ name: 'run' });

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
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
