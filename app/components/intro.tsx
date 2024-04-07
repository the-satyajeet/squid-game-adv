import React from 'react'

const Intro = () => {
  return (
    <section>
        <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Lorem ipsum dolor sit amet
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-full md:w-1/2">
                <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src="https://dummyimage.com/720x600"
                alt=""
                />
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Lorem ipsum dolor sit amet
                </h3>
                <p className="text-justify text-gray-700 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vehicula, libero in ultricies dictum, justo odio ultricies dui, ac
                vulputate eros sapien nec est. Aliquam erat volutpat. Sed
                scelerisque, arcu nec aliquam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin vehicula, libero in ultricies
                dictum, justo odio ultricies dui, ac vulputate eros sapien nec est.
                Aliquam erat volutpat. Sed scelerisque, arcu nec aliquam.
                </p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Intro
