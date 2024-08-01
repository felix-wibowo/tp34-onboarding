import herobackground from '/public/herobackground-cycleroutes.png'

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
                    Plan your next
                    <span className="text-orange-400"> safe ride</span>
                    </h2>
                    <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                    Community Safe Bicycling Information
                    </p>
                </div>
                </main>
            </div>
        </section>
        <section id="routeform" className='bg-white-200'>
            <div className='flex flex-1 justify-center py-10'>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap mb-2">
                        <div className="w-full px-2 mb-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-start-from"
                        >
                            Start From
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-start-from"
                            type="text"
                            placeholder="101 Collins Street, Melbourne"
                        />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full px-2 mb-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-destination"
                        >
                            Destination
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-destination"
                            type="text"
                            placeholder="101 Burke Street, Melbourne"
                        />
                        
                        </div>
                    </div>
                    <div className='px-2'>
                        <button
                            type="button"
                            className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                            Find Route
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <section id='routemap' className='bg-white-200 flex flex-1 justify-center'>
            <div><h1>Dynamic Map</h1></div>
        </section>
    </>
    );
}