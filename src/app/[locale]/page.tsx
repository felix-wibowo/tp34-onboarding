import Link from 'next/link';
import herobackground from '/public/herobackground-home.jpg'

export default function Page() {
    return (
    <>
        <section id="hero">
            <div
                className="relative h-[50vh] w-full flex items-center justify-start text-left bg-cover bg-center bg-no-repeat"
                style={{
                backgroundImage:
                    `url(${herobackground.src})`
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-65" />
                <main className="px-10 lg:px-24 z-10">
                <div className="text-middle">
                    <h2 className="font-sans text-6xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
                    SAFE
                    <span className="text-orange-400"> Bicycling</span>
                    </h2>
                    <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                    Community Safe Bicycling Information
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex justify-start">
                    <div className="rounded-md shadow">
                        <Link
                        href="/cycleroutes"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                        >
                        Find a Route
                        </Link>
                    </div>
                    </div>
                </div>
                </main>
            </div>
        </section>
    </>
    );
}