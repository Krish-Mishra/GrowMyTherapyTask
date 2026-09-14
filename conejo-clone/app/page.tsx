import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f6f4ee] min-h-screen">
      {/* Nav Bar */}
      <div className="px-16 pt-2 pb-4 flex items-center justify-between">
        <div className="flex-shrink-0 cursor-pointer">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w"
            alt="Conejo Valley Family Counseling"
            width={500}
            height={300}
            className="w-[257px] h-[75px]"
            loading="eager"
            unoptimized
          />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center justify-end">
            <div className="flex gap-2">
              <nav>
                <div className="flex justify-around items-center gap-8 text-[13.5px] uppercase tracking-wider">
                  <a href="" className="text-[#2b2b2b] hover:opacity-70 transition-opacity">ABOUT</a>
                  <a href="" className="text-[#2b2b2b] hover:opacity-70 transition-opacity">OUR TEAM</a>
                  <a href="" className="text-[#2b2b2b] hover:opacity-70 transition-opacity">SPECIALITIES</a>
                  <a href="" className="text-[#2b2b2b] hover:opacity-70 transition-opacity">METHODS</a>
                  <a href="" className="text-[#2b2b2b] hover:opacity-70 transition-opacity">FAQS</a>
                </div>
              </nav>
            </div>
          </div>

          <div>
            <button className="bg-[#f6f4ee] px-8 py-3 text-[13px] tracking-wider uppercase text-[#2b2b2b] cursor-pointer rounded-[100px] border border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-[#f6f4ee] transition-colors">
              CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-12 grid grid-cols-12 items-center">

        {/* Left Image (Touching left edge) */}
        <div className="col-span-4 h-[572px] relative overflow-hidden">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg?format=1500w"
            alt="Conejo Valley Family Counseling"
            fill
            className="object-cover"
            loading="eager"
            unoptimized
          />
        </div>

        {/* Center Content */}
        <div className="col-span-7 flex flex-col h-[572px] justify-start pt-6 pl-24 pr-8">
          <h3 className="text-[14.5px] tracking-[0.15em] text-[#555] uppercase font-medium leading-relaxed">
            Online & In-person counseling in<br />Newbury Park & Across CA
          </h3>

          <div className="mt-32">
            <h1 className="text-[3.5rem] leading-[1.15] text-[#2b2b2b] mb-10 font-serif font-extralight">
              Rebuild your foundation<br />
              on solid ground and finally<br />
              begin to <span className="italic text-[#7ca8a6] text-[3.5rem]">Thrive</span>.
            </h1>

            <p className="text-[17px] text-[#555] mb-16 font-light">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>

            <div>
              <a href="#" className="text-[13px] tracking-[0.15em] font-medium text-[#2b2b2b] uppercase border-b border-[#2b2b2b] pb-2 hover:opacity-70 transition-opacity">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Far Right Image (Peeking in) */}
        <div className="col-span-1 h-[420px] relative overflow-hidden mt-32">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg?format=300w"
            alt="Ocean waves"
            fill
            className="object-cover object-right"
            loading="lazy"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}