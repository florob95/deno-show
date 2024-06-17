/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import '$std/dotenv/load.ts'

import { start } from '$fresh/server.ts'
import manifest from './fresh.gen.ts'
import config from './fresh.config.ts'

import { DB } from './services/db/index.ts'

Deno.cron('count slide', '*/1 * * * *', async () => {
    const db = await DB.getInstance()
    const iter = await db.list({ prefix: ['slides'] })
    const slides = []

    for await (const res of iter) slides.push(res.value)

    console.log(`${slides.length} slides in db`)
})


await start(manifest, config)
