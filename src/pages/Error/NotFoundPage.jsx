export function NotFoundPage() {
    return (
        <div className="h-screen w-full text-center grid justify-center items-center">
            <div>
                <h1 className="mb-4 text-6xl font-semibold text-primary-normal">404</h1>
                <p className="mb-4 text-lg text-dimmed">Oops! Looks like you&apos;re lost.</p>
                <div className="animate-bounce">
                    <svg className="mx-auto h-16 w-16 text-primary-light-active" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
                <p className="mt-4 text-dimmed">Let&apos;s get you back <a href="/" className="font-normal text-primary-normal hover:text-primary-dark">home</a>.</p>
            </div>
        </div>
    )
}