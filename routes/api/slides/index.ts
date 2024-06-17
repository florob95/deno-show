import { Handlers } from '$fresh/server.ts'
import { DB } from '../../../services/db/index.ts'
import { listSlides } from '../../../services/slides/index.ts'

export const handler: Handlers = {
	async GET(_req) {
		return new Response(JSON.stringify(await listSlides()), {
			headers: { 'Content-Type': 'application/json' },
		})
	},
	async POST(req) {
		const db = await DB.getInstance()
		const rawSlide = await req.json()
		const slide = {
			...rawSlide,
			id: crypto.randomUUID(),
		}

		db.set(['slides', slide.id], slide)

		return new Response(JSON.stringify(slide), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		})
	},
}
