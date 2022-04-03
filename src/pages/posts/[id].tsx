import Link from 'next/link'

function post() {
    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link href="/login">
                <a className="text-sm text-gray-700 underline">Login</a>
            </Link>

            <Link href="/register">
                <a className="ml-4 text-sm text-gray-700 underline">Register</a>
            </Link>
        </div>
    )
}

export default post
