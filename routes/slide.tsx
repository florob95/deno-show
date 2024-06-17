import { type PageProps } from '$fresh/server.ts'
import Slide from '../islands/Slide.tsx'
import { DBSlide } from '../types/slide.ts'
import { Handlers } from '$fresh/server.ts'
import { listSlides } from '../services/slides/index.ts'

export const handler: Handlers<DBSlide[]> = {
	async GET(req, ctx) {
		const slides = await listSlides()

		return ctx.render(slides)
	},
}

export default function SliderPage(props: PageProps<DBSlide[]>) {
	return <Slide slides={props.data} />
}
