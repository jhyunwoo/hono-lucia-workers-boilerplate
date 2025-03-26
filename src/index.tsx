import { Hono } from "hono";
import { Bindings } from "./bindings";
import auth from "./auth";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.route("/auth", auth);

export default app;
