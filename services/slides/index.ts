import { DB } from '../db/index.ts'
import { DBSlide } from '../../types/slide.ts'

export const listSlides = async (): Promise<DBSlide[]> => {
	const db = await DB.getInstance()
	const iter = await db.list({ prefix: ['slides'] })
	const slides = []

	for await (const res of iter) slides.push(res.value)

	return slides
}
