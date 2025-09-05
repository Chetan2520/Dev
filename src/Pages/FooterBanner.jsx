import React from 'react'

const FooterBanner = () => {
  return (
    <section
      className="relative overflow-hidden h-[700px] lg:h-[956px]  w-full bg-[#FEF5CD] "
      style={{
        backgroundImage: "url('/footerbanner.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
      }}
    >
      {/* Decorative leaf overlay */}
      <img
        src="/leaf.png"
        alt="leaf"
        className="pointer-events-none select-none absolute 
        bottom-0 left-0 w-32  sm:w-40 md:w-48 lg:w-56 xl:w-64 opacity-90 z-10"
      />

      {/* Mobile Layout */}
      <div className="relative flex flex-col lg:hidden px-4 py-8 h-full">
        {/* Top content for mobile */}
        <div className="text-center mb-8 ">
          <h2 className="text-[#8C4A08] text-2xl leading-tight font-semibold drop-shadow mb-4" style={{ fontFamily: '"Kotta One", serif' }}>
            "Where Taste Meets Tradition - Pressed Oils for a Healthier Life"
          </h2>
          
          <h3 className="text-[#455E2F] text-xs font-extrabold tracking-wide mb-3">
            CRAFTED WITH TRADITION, DELIVERED WITH CARE
          </h3>
          
          <p className="text-xs leading-relaxed mb-4 px-2">
            Discover the wholesome goodness of traditionally pressed oils, right from nature to your
            kitchen. Our oils are extracted using age-old methods that preserve the natural aroma,
            flavor, and nutrients of the seeds. Free from chemicals, preservatives, and additives, each
            bottle guarantees 100% purity and authenticity.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="inline-flex items-center rounded-md border border-[#8C4A08] px-2 py-1 text-xs text-black shadow-sm">
              100% Natural
            </span>
            <span className="inline-flex items-center rounded-md border border-[#8C4A08] px-2 py-1 text-xs text-black shadow-sm">
              No Preservative
            </span>
            <span className="inline-flex items-center rounded-md border border-[#8C4A08] px-2 py-1 text-xs text-black shadow-sm">
              Unrefined Oil
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden lg:flex items-center mx-auto sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16 h-full">
        {/* Left content */}
        <div className="w-full lg:w-[55%]">
          <h2 className="text-[#8C4A08] text-3xl sm:text-4xl lg:text-[44px] leading-snug font-semibold drop-shadow text-center lg:text-left" style={{ fontFamily: '"Kotta One", serif' }}>
            "Where Taste Meets Tradition –
            <br className="hidden sm:block" />
            Pressed Oils for a Healthier Life"
          </h2>

          <div className="mt-6">
            <h3 className="text-[#455E2F] text-sm md:text-base font-extrabold tracking-wide">
              CRAFTED WITH TRADITION, DELIVERED WITH CARE
            </h3>
            <p className="mt-3 text-xs md:text-sm max-w-2xl leading-relaxed">
              Discover the wholesome goodness of traditionally pressed oils, right from nature to your
              kitchen. Our oils are extracted using age-old methods that preserve the natural aroma,
              flavor, and nutrients of the seeds. Free from chemicals, preservatives, and additives, each
              bottle guarantees 100% purity and authenticity.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-md border border-[#8C4A08] px-3 py-1 text-xs sm:text-sm text-black shadow-sm">
                100% Natural
              </span>
              <span className="inline-flex items-center rounded-md border border-[#8C4A08] px-3 py-1 text-xs sm:text-sm text-black shadow-sm">
                No Preservative
              </span>
              <span className="inline-flex items-center rounded-md border border-[#8C4A08] px-3 py-1 text-xs sm:text-sm text-black shadow-sm">
                Unrefined Oil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterBanner