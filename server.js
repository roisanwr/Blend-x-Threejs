import { serve } from "bun";

const server = serve({
  port: 8090,
  hostname: "0.0.0.0",
  fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;
    if (pathname === "/" || pathname === "") {
      pathname = "/index.html";
    }
    const filePath = import.meta.dir + pathname;
    const file = Bun.file(filePath);
    return new Response(file, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  },
});

console.log(`Bun fast server running on http://0.0.0.0:${server.port}`);
