import React from 'react'

const HeadContent = () => {
    return (
        <div>
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32">
                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className="flex grid items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <div
                                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-8 text-3xl font-bold">Car Hub</h2>

                                    <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best team
                                        </p>

                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best quality
                                        </p>

                                        <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best experience
                                        </p>
                                    </div>

                                    <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                                    Car Hub is a car rental agency in Morocco. since 1986, Specialized in the rental of cars for personal, and professional use. the quality of our service, the friendliness of our agents, and the good condition of our cars are the assets that distinguish us.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <img src="/marseille.jpg"
                                    className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeadContent
