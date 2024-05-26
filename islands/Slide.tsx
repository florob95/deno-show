import { Swipeable } from '../components/Swipeable.tsx'
import { DBSlide } from '../types/slide.ts'

type SlideProps = {
	slides: DBSlide[]
}

export default function Slide({ slides }: SlideProps) {
	return (
		<div className='h-screen'>
			<Swipeable>
				{slides.map((slide) => {
					return (
						<div className='w-full h-full bg-yellowBright flex items-center justify-center gap-4'>
							<div>
								<div className='flex flex-col items-center'>
									<div className='flex flex-col items-center'>
										{slide.logo
											? (
												<img
													className='mb-4'
													src={slide.logo}
													width='128'
													height='128'
												/>
											)
											: null}
										<h1 className='text-3xl mb-4'>
											{slide.title}
										</h1>
									</div>
									<p className='mb-4'>{slide.description}</p>
									{slide.code
										? (
											<pre className='bg-gray-100 border border-gray-300 p-4 rounded'>
                                        <code className="whitespace-pre">
                                            {slide.code}
                                        </code>
											</pre>
										)
										: null}
								</div>
							</div>
						</div>
					)
				})}
			</Swipeable>
		</div>
	)
}
