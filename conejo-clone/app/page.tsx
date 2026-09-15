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

      {/* Section 7 */}
      <div className="w-full bg-white pt-[100px] pb-[100px] flex items-end">
        {/* Left Image */}
        <div className="w-[53%] relative h-[500px]">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg?format=2500w"
            alt="Family on beach"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col justify-end pl-18 pr-16">
          <h2 className="text-[2.75rem] leading-[1.25] text-[#2b2b2b] font-serif font-extralight">
            Honoring where you’ve <br />
            been <span className="italic text-[#7ca8a6] text-[1.2em] font-muli align-middle">&amp;</span> helping shape <br />
            where you’re headed.
          </h2>
        </div>
      </div>

      {/* Section 8 */}
      <div className="w-full bg-white py-[120px] flex justify-center px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-12 gap-16">
          {/* Left Heading */}
          <div className="col-span-4 flex flex-col">
            <h3 className="text-[2.25rem] leading-[1.2] text-[#2b2b2b] font-serif font-extralight">
              <span className="">Our </span>
              <span className="italic text-[#7ca8a6] text-[3.25rem] font-muli">specialties</span><br />
              <span className="">include...</span>
            </h3>
          </div>

          {/* Right Grid Content */}
          <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-24">

            {/* Item 1 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#555] font-serif font-extralight mb-6">Trauma</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay "stuck," and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:opacity-70 transition-opacity">
                LEARN MORE
              </a>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#555] font-serif font-extralight mb-6">EMDR</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:opacity-70 transition-opacity">
                LEARN MORE
              </a>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#555] font-serif font-extralight mb-6">Dissociation</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:opacity-70 transition-opacity">
                LEARN MORE
              </a>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#555] font-serif font-extralight mb-6">Special Needs Parenting</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:opacity-70 transition-opacity">
                LEARN MORE
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div className="w-full bg-[#f6f4ee] py-[150px] flex justify-between items-end">
        {/* Left Image */}
        <div className="w-[12%] relative h-[500px]">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg?format=500w"
            alt="Person on beach"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Center Text */}
        <div className="w-[48%] flex flex-col pr-10 pl-18">
          <p className="text-[15px] tracking-[0.2em] text-[#555] font-muli uppercase mb-24">
            SCHEDULE AN APPOINTMENT
          </p>
          <h2 className="text-[2.5rem] leading-[1.2] text-[#2b2b2b] font-serif font-extralight mb-10">
            Find a therapist who is the<br /> right fit for <span className="italic text-[#7ca8a6] text-[1.1em] font-muli">you</span>.
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#2b2b2b] font-muli font-light mb-8 pr-12">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#2b2b2b] font-muli font-light mb-8">
            Click the button below to schedule an appointment.
          </p>
          <a href="#" className="text-[13px] tracking-[0.15em] text-[#2b2b2b] font-muli uppercase border border-[#2b2b2b] rounded-full px-8 py-4 w-fit hover:bg-[#2b2b2b] hover:text-[#f6f4ee] transition-colors">
            BOOK NOW
          </a>
        </div>

        {/* Right Image */}
        <div className="w-[35%] relative h-[620px]">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg?format=1000w"
            alt="Person on beach"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>
      </div>

      {/* Footer Main */}
      <div className="w-full bg-white pt-[50px] pb-[100px] flex justify-center px-6">
        <div className="w-full max-w-[1300px] grid grid-cols-12 gap-8">
          {/* Logo & Description */}
          <div className="col-span-4 pr-12">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png?format=1500w"
              alt="Conejo Valley Family Counseling"
              width={500}
              height={300}
              className="w-[600px] h-auto -ml-4"
              unoptimized
            />
            <p className="text-[17px] leading-[1.8] text-[#2b2b2b] font-muli font-light mt-4">
              We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Navigate */}
          <div className="col-span-2 flex flex-col pt-4">
            <h4 className="text-[17px] tracking-[0.15em] text-[#555] font-muli uppercase mb-6">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Home</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">About</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">FAQs</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Contact</a>
            </div>
          </div>

          {/* Our Team */}
          <div className="col-span-3 flex flex-col pt-4">
            <h4 className="text-[17px] tracking-[0.15em] text-[#2b2b2b] font-muli uppercase mb-6">OUR TEAM</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Jennifer Anderson</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Heather Williams-Baumgart</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Autumn Bodily</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Candace Bletscher</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Samantha Johnson</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Andrea Watkins</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Rosa Gomez</a>
              <a href="#" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">Chad Flores</a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-3 flex flex-col pt-4">
            <h4 className="text-[17px] tracking-[0.15em] text-[#2b2b2b] font-muli uppercase mb-6">CONTACT</h4>
            <div className="flex flex-col gap-1">
              <p className="text-[15px] text-[#2b2b2b] font-muli font-light">925 Broadbeck Dr</p>
              <p className="text-[15px] text-[#2b2b2b] font-muli font-light">Suites 200 and 225</p>
              <p className="text-[15px] text-[#2b2b2b] font-muli font-light">Newbury Park, CA 91320</p>
            </div>
            <div className="flex flex-col gap-1 mb-8">
              <a href="mailto:info@conejovalleycounseling.com" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">info@conejovalleycounseling.com</a>
              <a href="tel:805.242.3120" className="text-[15px] text-[#2b2b2b] font-muli font-light hover:opacity-70 transition-opacity">805.242.3120</a>
            </div>
            <em className="text-[15px] leading-[1.8] text-[#2b2b2b] font-muli font-light">
              Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
            </em>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full bg-[#90BEC3] py-3 flex justify-center px-10">
        <div className="w-full max-w-[1200px]">
          <p className="text-[15px] text-white font-muli font-light">
            <a href="#" className="hover:opacity-80 transition-opacity">Terms</a> &nbsp;|&nbsp; <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a> &nbsp;|&nbsp; <a href="#" className="hover:opacity-80 transition-opacity">Disclaimer</a> &nbsp;|&nbsp; <a href="#" className="hover:opacity-80 transition-opacity">Website by Walker Strategy Co.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
