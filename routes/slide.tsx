import { Handlers } from '$fresh/server.ts'
import { Slide } from '../types/slide.ts'
import { type PageProps } from '$fresh/server.ts'

export const handler: Handlers<Slide[]> = {
	async GET(_req, ctx) {
		const res = await fetch('http://localhost:8000/api/slides')
		const slides = await res.json() as Slide[]

		return ctx.render(slides)
	},
}

export default function SliderPage(props: PageProps<Slide[]>) {
	return (
		<div class='bg-yellowBright h-full'>
			<div class='pt-4 ml-2'>
				<a
					href='/'
					className='border-2 border-lightBlack p-2 rounded-lg'
				>
					Back to home
				</a>
			</div>
			<div class='flex flex-col items-center'>
				<h1 className='text-2xl mb-4'>Deno Ecosystème</h1>
				{props.data.map((slide) => {
					return (
						<div class='mt-4 slide-border flex flex-col items-center'>
							<h2 className='font-bold text-xl mb-2'>
								{slide.title}
							</h2>
							<p>{slide.description}</p>
							<code class='language-javascript mt-2'>
								console.log(1)
							</code>
						</div>
					)
				})}
			</div>
		</div>
	)
}
