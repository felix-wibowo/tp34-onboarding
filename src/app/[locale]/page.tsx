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
                    Making Melbourne&apos;s urban cycling safer, sustainable, and friendly.
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
            {/* Welcome to Safe Bicycling */}
            <div className="mt=10 px-10 lg:px-24">
                <div className="mt-8 bg-white rounded-lg p-6">
                    <h3 className="text-4xl font-semibold text-balck mb-8">
                        Welcome to Safe Bicycling
                    </h3>
                    <p className="text-lg text-black mb-3">
                    Welcome to Safe Bicycling! Our mission is to make cycling a safer, easier, and greener transportation option for everyone in Melbourne. Rooted in a deep commitment to urban sustainability and community health, our programs address the challenges faced by urban cyclists through comprehensive infrastructure development and community engagement.
                    </p>
                    
                </div>
            </div>

            {/* The Problem */}
            <div className="mt=10 px-10 lg:px-24">
                <div className="mt-8 bg-white rounded-lg p-6">
                    <h3 className="text-4xl font-semibold text-orange-400 mb-8">
                        The Problem We Are Facing
                    </h3>
                    <p className="text-lg text-black mb-3">
                    Melbourne is a bustling city offering vibrant urban life, but it poses significant challenges for cyclists. The city&apos;s infrastructure and complex traffic situation haven&apos;t fully met the growing demand for safe and convenient cycle paths.
                    </p>
                    
                </div>
            </div>

            {/* Our Mission*/}
            <div className="mt=10 px-10 lg:px-24">
                <div className="mt-8 bg-white rounded-lg p-6">
                    <h3 className="text-4xl font-semibold text-black mb-8">
                        Our Mission
                    </h3>
                    <p className="text-lg text-black mb-3">
                    Promoting Sustainability: We advocate for cycling not only as a mode of transport but also as a way to reduce our carbon footprint and combat urban pollution.
                    </p>
                    <p className="text-lg text-black mb-10">
                    Community Involvement: We raise awareness about the benefits of cycling, encouraging community members to contribute to cycling safety and engaging them in creating bike-friendly cities.
                    </p>
                    <div className="flex justify-center mb-5">
                        <img 
                        src="./home-mission.jpg" 
                        alt="Our Mission Image" 
                        className="w-full h-auto max-h-96 rounded-lg"  
                        style={{ maxHeight: '600px',
                            filter: 'grayscale(30%) brightness(100%)'
                         }}
                        />
                    </div>
                    
                </div>
            </div>

            {/* What we do */}
            <div className="mt=10 px-10 lg:px-24">
                <div className="mt-8 bg-white rounded-lg border-4 border-orange-300 p-12">
                    <h3 className="text-3xl font-semibold text-orange-400 mb-5">
                        What We Do ?
                    </h3>
                    <p className="text-lg text-black mb-3">
                    Safe Bicycling empowers users by providing:
                    </p>
                    <p className="text-lg text-black mb-3">
                    Risk Identification: Through analysis of comprehensive historical cycling safety data, users can identify potential risks.
                    </p>
                    <p className="text-lg text-black mb-3">
                    Interactive Map: An interactive map showing cycling accident hotspots in Melbourne helps users plan safer routes.
                    </p>
                    <p className="text-lg text-black mb-3">
                    Route Planning: A user-friendly system allows cyclists to enter start and end points, displaying designated bike lanes and paths for informed decision-making.
                    </p>    
                </div>
            </div>

        </section>
    </>
    );
}