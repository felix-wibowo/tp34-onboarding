import herobackground from '/public/herobackground-incidents.png'

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
                    Bicycle
                    <span className="text-orange-400"> Incident Information</span>
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
                <div className="text-middle">
                    <h2 className="font-sans text-3xl tracking-tight leading-10 font-extrabold text-black">
                    Bicycle incident in  
                    <span className="text-orange-400"> different Region in Melbourne.</span>
                    </h2>
                    <p className="mt-3 text-grey text-lg font-light">
                    It indicate that xxx area has the most accidents related with bicycle ride. Click on each area to explore more.
                    </p>
                </div>
            </div>
        </section>
        <section id='incidentmap' className='bg-white-200 flex flex-1 justify-center'>
            <div><h1>Incident Dynamic Map Component</h1></div>
        </section>
    </>
    );
}