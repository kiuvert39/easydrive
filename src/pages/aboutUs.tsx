

function AboutUs() {

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ),
      title: 'Book with flexibility',
      description: 'Easily find car and book with no change fees.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: 'Trusted and free',
      description: 'We\'re completely free to use - no hidden charges or fees.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.142 12.5-10.5 12.5S4.5 17.642 4.5 10.5 11.642 0 15 0s10.5 4.77 10.5 10.5z"
          />
        </svg>
      ),
      title: 'We know travel',
      description: 'With 10 years of experience, we\'re ready to help find your perfect car.',
    },
  ];
  
  return (
    <div className="bg-gray-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Feel the best experience with our luxury car
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="text-center min-w-0"> {/* Key change here */}
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 rounded-full p-6">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-base text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default AboutUs
