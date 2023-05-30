import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const isEven = (n: number): boolean => n % 2 === 0;
// deno-lint-ignore require-await
const handler = async (req: Request): Promise<Response> => {
  const x = new URL(req.url).searchParams;
  const input = x.get("input");
  const test = isEven(Number(input)) ? "even" : "odd";

  return new Response(test, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

serve(handler);
