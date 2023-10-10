import Link from 'next/link'
const ReviewsPage = () => {
  return (
    <>
      <h1>Reviews Page</h1>

      <ul>
        <li>
          <Link href='/reviews/stardew-valley'>Stardew Valley</Link>
        </li>
        <li>
          <Link href='/reviews/hollow-knight'>Hollow Knight</Link>
        </li>
      </ul>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        velit et non vero recusandae excepturi distinctio magni beatae explicabo
        voluptas.
      </p>
    </>
  )
}
export default ReviewsPage
