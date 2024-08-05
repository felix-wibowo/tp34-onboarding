"use client"
import herobackground from '/public/herobackground-accidents.png'
import AccidentMap from './accidentmap';

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
                    <span className="text-orange-400"> Accident Information</span>
                    </h2>
                    <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                    Community Safe Bicycling Information
                    </p>
                </div>
                </main>
            </div>
        </section>
        <section id="routeform" className='bg-white-200'>
            <div className='flex flex-1 justify-center items-center py-5'>
                <div className="">
                    <h2 className="font-sans text-3xl tracking-tight leading-10 font-extrabold text-black">
                    Bicycle accidents in  
                    <span className="text-orange-400"> different Region in Melbourne.</span>
                    </h2>
                    <p className="mt-3 text-grey ">
                    Our interactive map provides detailed insights into accident locations throughout Melbourne. By pinpointing the exact locations of these incidents, users can identify safer areas for cycling. This valuable information helps cyclists plan their routes more effectively, ensuring a safer and more enjoyable biking experience.
                    </p>
                    <p className="mt-3 text-grey ">
                    <span className='text-md font-semibold'>Instructions: </span> Zoom in and out to explore accidents that occurred in Melbourne. Use the dropdown menu to filter by different types of accidents. Click on each accident to view detailed information.
                    </p>
                </div>
            </div>
        </section>
        <section id='accidentmap' className='bg-white-200 py-5'>
            <div className=''>
                <AccidentMap/>
            </div>
        </section>
    </>
    );
}
