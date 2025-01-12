import type { APIContext, MiddlewareNext } from "astro";

// Credit: https://andrewmara.com/blog/generate-unique-ids-per-request-in-astro
export function onRequest(context: APIContext, next: MiddlewareNext) {
  context.locals.useId = (() => {
    // The map to store how many times each prefix has been used in this request.
    const map = new Map<string, number>();
    return (prefix: string) => {
      const count = (map.get(prefix) ?? 0) + 1;
      map.set(prefix, count);
      return `${prefix}-${count}`;
    };
  })();

  return next();
}
