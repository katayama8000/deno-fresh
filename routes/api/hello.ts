// helloworld
import { HandlerContext } from '$fresh/server.ts';

export const handler = (_req: Request, _ctx: HandlerContext) => {
  return new Response('Hello World!');
};
