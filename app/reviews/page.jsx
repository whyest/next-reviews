import Link from 'next/link'
import Heading from '@/components/Heading'
const ReviewsPage = () => {
	return (
		<>
			<Heading>Reviews Page</Heading>

			<ul className='flex flex-col gap-3'>
				<li className='bg-white border w-80 rounded shadow hover:shadow-xl'>
					<Link href='/reviews/stardew-valley'>
						<img
							src='/images/stardew-valley.jpg'
							alt='image'
							width='320'
							height='180'
							className='rounded-t mb-2'
						/>
						<h2 className='text-center py-1'>Stardew Valley</h2>
					</Link>
				</li>
				<li className='bg-white border w-80 rounded shadow hover:shadow-xl'>
					<Link href='/reviews/stardew-valley'>
						<img
							src='/images/hollow-knight.jpg'
							alt='image'
							width='320'
							height='180'
							className='rounded-t mb-2'
						/>
						<h2 className='text-center py-1'>Hollow Knight</h2>
					</Link>
				</li>
			</ul>
		</>
	)
}
export default ReviewsPage
