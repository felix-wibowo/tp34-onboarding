import herobackground from '/public/aboutus.jpg'

const people = [
  {
    name: 'Xiaoli Hu',
    role: 'MIT',
    imageUrl: '/eva.jpg',
  },
  {
    name: 'Felix Wibowo',
    role: 'MCS',
    imageUrl: '/felix.jpeg',
  },
  {
    name: 'Atharva Hendre',
    role: 'MDS',
    imageUrl: '/atharva.jpg',
  },
  {
    name: 'Komal',
    role: 'MDS',
    imageUrl: '/komal.jpeg',
  },
  {
    name: 'Zuxu Tian',
    role: 'MBIS',
    imageUrl: '/zuxu.jpeg',
  },
];

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
                    About
                    <span className="text-orange-400"> us</span>
                    </h2>
                    <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-semi-bold">
                    Stellar Springters
                    </p>
                </div>
                </main>
            </div>
        </section>
        <section id='teammember' className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    We are Stellar Sprinters, a dedicated group of environmentalists and cycling enthusiasts passionate about making a difference. Our project, Safe Bicycling, is focused on transforming cycling into a safer, greener way to commute in Melbourne. From advocating for more bike lanes to developing innovative digital tools that enhance cycling safety, we strive to create a more livable, breathable, and vibrant city.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                    <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                            <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
        <section id="routeform" className='bg-white-200'>
            {/* why choose us */}
            <div className="mt=10 px-10 lg:px-24">
                <div className="mt-8 bg-white rounded-lg border-4 border-orange-300 p-12">
                    <h3 className="text-3xl font-semibold text-orange-400 mb-5">
                        Why Choose Us ?
                    </h3>
                    <p className="text-lg text-black mb-3">
                    Enhancing Safety: Advanced data collection, analysis, and innovative safety measures help reduce cycling accidents, ensuring every cyclist’s safety.
                    </p>
                    <p className="text-lg text-black mb-3">
                    Promoting Sustainability: Our digital platform offers eco-friendly route options, encouraging more people to choose cycling as their daily mode of transportation.
                    </p>   
                </div>
            </div>
        </section>
    </>
    );
}