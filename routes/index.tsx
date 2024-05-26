export default function Home() {
	return (
		<div class='flex flex-col items-center w-full h-full'>
			<div class='flex flex-col items-center bg-yellowBright w-full'>
				<div className='flex justify-center'>
					<img
						className='my-6'
						src='/svg/deno.svg'
						width='128'
						height='128'
					/>
				</div>
				<h1 className='text-5xl color-lightBlack font-bold mb-8'>
					Deno Ecosystem
				</h1>
			</div>
			<p class='mt-10 text-lg'>
				Powered by Deno (Fresh + KV + Deploy)
			</p>
			<div class='flex justify-center mt-10'>
				<a href='/slide'>
					<button class='primary-button'>Start</button>
				</a>
			</div>
		</div>
	)
}
