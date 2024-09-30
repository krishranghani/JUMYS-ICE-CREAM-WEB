import React from 'react';
import Footer2 from '../Components/Footer2';

function Error404() {
  return (
    <div>
      {/* Error 404 Template */}
      <section className="flex items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[260px] font-bold text-gray-900">404</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Oops! That Page Can't Be Found.
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-600">
            We're really sorry, but we can't seem to find the page you were looking for.
          </p>
          <a className="inline-block text-white bg-black hover:bg-red-600 duration-300 rounded-full px-6 py-3 text-sm sm:text-base md:text-lg" href="/" role="button">
            Back to Homepage
          </a>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

export default Error404;
