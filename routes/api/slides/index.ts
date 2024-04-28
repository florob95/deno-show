import { Handlers } from "$fresh/server.ts";
import { DB } from "../../../services/db/index.ts";

export const handler: Handlers = {
  async GET(_req) {
    const db = await DB.getInstance();
    const iter = await db.list({ prefix: ["slides"] });
    const slides = [];

    for await (const res of iter) slides.push(res.value);

    return new Response(JSON.stringify(slides), {
      headers: { "Content-Type": "application/json" },
    });
  },
  async POST(req) {
    const db = await DB.getInstance();
    const rawSlide = await req.json()
    const slide = {
      ...rawSlide,
      id: crypto.randomUUID()
    }

    db.set(["slides", slide.id], slide)

    return new Response(JSON.stringify(slide), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  },
};
