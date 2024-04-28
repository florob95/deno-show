import { Handlers } from "$fresh/server.ts";
import { DB } from "../../../services/db/index.ts";

export const handler: Handlers = {
    async GET(_req,ctx) {
        const db = await DB.getInstance();

        const slide = await db.get(["slides", ctx.params.id]);

        return new Response(JSON.stringify(slide), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    },
    async DELETE(_req,ctx) {
        const db = await DB.getInstance();

        await db.delete( ["slides", ctx.params.id]);

        return new Response(null, {
            status: 204,
            headers: { "Content-Type": "application/json" },
        });
    },
    async PUT(req,ctx) {
        const db = await DB.getInstance();
        const rawSlide = await req.json()
        const slide = await db.get(["slides", ctx.params.id]);

        db.set(["slides", slide.value.id], {...slide.value, ...rawSlide})

        return new Response(null, {
            status: 204,
            headers: { "Content-Type": "application/json" },
        });
    }
};
