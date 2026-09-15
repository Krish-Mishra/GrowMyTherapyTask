import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f6f4ee] min-h-screen">
      {/* Nav Bar */}
      <div className="px-18 pt-4 pb-4 flex items-center justify-between">
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
                  <a
                    href=""
                    className="text-[#2b2b2b] hover:opacity-70 transition-opacity"
                  >
                    ABOUT
                  </a>
                  <a
                    href=""
                    className="text-[#2b2b2b] hover:opacity-70 transition-opacity"
                  >
                    OUR TEAM
                  </a>
                  <a
                    href=""
                    className="text-[#2b2b2b] hover:opacity-70 transition-opacity"
                  >
                    SPECIALITIES
                  </a>
                  <a
                    href=""
                    className="text-[#2b2b2b] hover:opacity-70 transition-opacity"
                  >
                    METHODS
                  </a>
                  <a
                    href=""
                    className="text-[#2b2b2b] hover:opacity-70 transition-opacity"
                  >
                    FAQS
                  </a>
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

      <div className="py-[50px] grid grid-cols-12 items-center">
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
            Online & In-person counseling in
            <br />
            Newbury Park & Across CA
          </h3>

          <div className="mt-32">
            <h1 className="text-[3.5rem] leading-[1.15] text-[#2b2b2b] mb-10 font-serif font-extralight">
              Rebuild your foundation
              <br />
              on solid ground and finally
              <br />
              begin to{" "}
              <span className="italic text-[#7ca8a6] text-[3.5rem]">
                Thrive
              </span>
              .
            </h1>

            <p className="text-[17px] text-[#555] mb-16 font-light">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            <div>
              <a
                href="#"
                className="text-[13px] tracking-[0.15em] font-medium text-[#2b2b2b] uppercase border-b border-[#2b2b2b] pb-2 hover:opacity-70 transition-opacity"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

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

      {/* Section 2 */}
      <div className="py-[50px] grid grid-cols-12 items-stretch mb-25">
        <div className="col-span-8 flex flex-col justify-center pl-30 pr-36 py-16">
          <h2 className="text-[2.75rem] leading-[1.2] text-[#2b2b2b] font-serif font-extralight mb-12">
            You’re holding onto hope that life can be better than it is right
            now.
          </h2>

          <div className="grid grid-cols-2 gap-10 text-[#555] text-[16px] leading-[1.8] font-light">
            <div className="flex flex-col gap-6">
              <p className="tracking-[0.15em] uppercase text-[16px] font-light leading-[1.8] text-[#2b2b2b] font-muli">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A
                REALITY.
              </p>
              <p>
                Whether you're an adult seeking personal growth, looking to work
                through your trauma, a couple working on your relationship, or a
                parent looking for support for your child, we provide a
                compassionate and safe space to help you navigate all of life's
                ups and downs.
              </p>
            </div>
            <div className="flex flex-col">
              <p>
                First and foremost, we believe what you're going through is
                real, valid, and worthy of support. Our team offers clients in
                the Newbury Park area and across CA an environment to discover a
                new life and a deeper sense of self in the midst of their
                struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a
                transformative path forward.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 relative min-h-[600px] w-full">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg?format=1500w"
            alt="Section 2 Image"
            fill
            className="object-cover object-left"
            loading="lazy"
            unoptimized
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="pt-[50px] pb-[100px] bg-white px-18">
        <h2 className="text-[2.75rem] leading-[1.2] text-[#2b2b2b] font-serif font-extralight mb-12">
          <span className="">Who we </span>
          <span className="italic text-[#7ca8a6] text-[2.75rem] font-muli">
            help
          </span>
        </h2>

        <div className="grid grid-cols-3 gap-6 pl-[150px] pr-[10px]">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] w-full mb-10">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg?format=1500w"
                alt="Adults"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#2b2b2b] font-light mb-6">
              Adults
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli">
              Feeling stuck or overwhelmed? We help adults find clarity, build
              resilience, and move forward with confidence by addressing the
              root causes of anxiety, stress, and emotional pain.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] w-full mb-10">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg?format=1500w"
                alt="Couples"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#2b2b2b] font-light mb-6">
              Couples
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli">
              Relationships require effort, and we're here to help you
              strengthen yours. We guide couples through challenges like
              communication breakdowns and trust issues, helping you rebuild
              intimacy and strengthen your relationship.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] w-full mb-10">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg?format=1500w"
                alt="Children & Teens"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#2b2b2b] font-light mb-6">
              Children & Teens
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli">
              Kids need support, too. We help them process big emotions, cope
              with challenging family situations, build coping skills, and feel
              understood, while also working closely with their parents to
              create a nurturing environment.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative w-full h-[550px] flex items-end">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
          alt="Kids running on beach"
          fill
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full pl-24 pr-12 pb-20 max-w-[900px]">
          <h2 className="text-[2.75rem] leading-[1.15] text-[#f6f4ee] font-serif font-extralight drop-shadow-md">
            You deserve a place where your story is heard, valued, and
            understood.{" "}
            <em>Nothing will be too heavy for us to carry together.</em>
          </h2>
        </div>
      </div>

      {/* Section 5 */}
      <div className="py-[90px] bg-white w-full flex justify-center px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-12 gap-16">
          <div className="col-span-4 flex flex-col pt-4">
            <h3 className="text-[2.25rem] leading-[1.2] text-[#2b2b2b] font-serif font-extralight">
              <span className="">Our areas of </span>
              <br />
              <span className="italic text-[#7ca8a6] text-[3rem] font-muli">
                expertise
              </span>
            </h3>
          </div>

          <div className="col-span-8 grid grid-cols-2 gap-x-24">
            {/* Column 1 */}
            <div className="flex flex-col">
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                DISSOCIATION
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                TRAUMA
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                FAMILY CONFLICT
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                SPECIAL NEEDS PARENTING
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                DEPRESSION
              </a>
              <a
                href="#"
                className="py-8 text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                MARRIAGE
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                ANXIETY
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                RELATIONSHIPS
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                CHILDREN
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                TEENS
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                INTIMACY & CONNECTION
              </a>
              <a
                href="#"
                className="py-8 text-[14px] tracking-[0.15em] text-[#555] hover:text-[#2b2b2b] transition-colors font-muli"
              >
                ...AND MORE.
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-[#E0DACB] py-[120px] flex">
        <div className="flex-1 pl-[10vw] pr-20 flex flex-col justify-center">
          <p className="text-[15px] tracking-[0.2em] text-[#2b2b2b] font-muli uppercase mb-25">
            How we work
          </p>
          <h2 className="text-[2.5rem] leading-[1.2] text-[#2b2b2b] font-serif font-extralight mb-15 whitespace-nowrap">
            We’re here to make a difference.
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <p className="text-[15px] leading-[1.8] text-[#000000] font-muli uppercase tracking-widest font-light mb-8">
                THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE,
                IT'S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
              </p>
              <p className="text-[17px] leading-[1.8] text-[#000000] font-muli mb-16 font-light">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that no
                two people are the same and that personalized therapy means an
                intentional, tailored approach. (You won't find anything
                "one-size-fits-all" here.) If you're ready to do the work, we're
                ready to help.
              </p>
              <a
                href="#"
                className="text-[13px] tracking-[0.15em] text-[#2b2b2b] font-muli uppercase border-b border-[#2b2b2b] pb-1 w-fit hover:opacity-70 transition-opacity"
              >
                LEARN MORE ABOUT US
              </a>
            </div>

            <div className="flex flex-col">
              <p className="text-[17px] leading-[1.8] text-[#000000] font-muli font-light">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you've learned in your
                daily life. We take what we do seriously because we know how
                important it is for you to heal from what's hurting you,
                discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering
                support and guidance as you uncover your strengths and embrace
                what the future can hold for you.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[24%] relative min-h-[625px] ml-11">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg?format=750w"
            alt="Woman and child on beach"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
