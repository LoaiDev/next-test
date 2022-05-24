import Link from 'next/link'
import { useRouter } from 'next/router'

function post() {
    const router = useRouter()
    const id = router.query.id
    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link href="/posts/5161">
                <a className="text-sm text-gray-700 underline">{id}</a>
            </Link>

            <Link href="/register">
                <a className="ml-4 text-sm text-gray-700 underline">Register</a>
            </Link>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '404' } }],
        fallback: true,
    }
}

export async function getStaticProps() {
    return {
        props: {},
    }
}

export default post
