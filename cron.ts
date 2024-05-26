import { DB } from './services/db/index.ts'

Deno.cron('count slide', '*/1 * * * *', async () => {
	const db = await DB.getInstance()
	const iter = await db.list({ prefix: ['slides'] })

	console.log(`${iter.length} slides in db`)
})
