import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the baysics marketing homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /baysics/);
  assert.match(html, /Train your team before the kitchen gets busy\./);
  assert.match(html, /Learn before the rush\./);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("server-renders employee and manager entry routes", async () => {
  const [employee, manager] = await Promise.all([render("/employee"), render("/manager")]);
  assert.equal(employee.status, 200);
  assert.equal(manager.status, 200);
  assert.match(await employee.text(), /Your kitchen pathway\./);
  assert.match(await manager.text(), /Team readiness at a glance\./);
});
