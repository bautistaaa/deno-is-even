import isEven from "npm:is-even";

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// deno-lint-ignore require-await
const handler = async (_request: Request): Promise<Response> => {
  const what = isEven(3);

  return new Response(what, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

serve(handler);
