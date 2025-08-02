export function HeroSection() {
  return (
    <section className="relative h-[540px] w-full overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://lh5.googleusercontent.com/g2nmws9aygwvsqpf3ewtq2nf4xbbquyyqizwzqsc0acld9jggxf8gpvqcs6x807p4jjdog3lgezskxagh68xxqfzwpwjhg6y9xsom3tefvhszrfd_bkknacqkhhjhassakadc0ip9fk=w16383")`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-12 w-full">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Left Column - Empty for spacing */}
            <div className="col-span-2 hidden lg:block">
              <div className="px-6"></div>
            </div>

            {/* Center Column - Main Image */}
            <div className="col-span-12 lg:col-span-8">
              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <img
                    src="https://lh5.googleusercontent.com/wMCuhAyeXclporVJ5ysey0CsuwJsH8Dm-Pz302v0vPsa6tw0DGVp6SRHwmUyLhB2OdcU36wu3vg4V23AHwjyg6thvF4jWO4GeXbv7PPuOKFZ8EAD51445rwzPD97OJH24zRqLI4gF9XiMCIkpqwhDWHEDs31ney6p2ZLMLcmlWi5uePoWOLaHQ=w1280"
                    alt="Featured content"
                    className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Empty for spacing */}
            <div className="col-span-2 hidden lg:block">
              <div className="px-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
