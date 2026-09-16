import Image from "next/image";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <div id="home" className="bg-[#F2F3EC] min-h-screen">
      {/* Nav Bar */}
      <div className="px-18 pt-4 pb-4 flex items-center justify-between bg-[#6B78C2]">
        <div className="flex-shrink-0 cursor-pointer flex flex-col items-center justify-center h-[75px]">
          <span className="text-[22px] tracking-[0.15em] font-serif text-white leading-tight">
            DR. MAYA REYNOLDS
          </span>
          <span className="text-[14px] tracking-[0.3em] font-muli text-white leading-tight">
            CLINICAL PSYCHOLOGIST
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center justify-end">
            <div className="flex gap-2">
              <nav>
                <div className="flex justify-around items-center gap-8 text-[13.5px] uppercase tracking-wider">
                  <a
                    href="#about"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    ABOUT
                  </a>
                  <a
                    href="#focus"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    FOCUS
                  </a>
                  <a
                    href="#specialities"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    SPECIALITIES
                  </a>
                  <a
                    href="#benefits"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    BENIFITS
                  </a>
                  <a
                    href="#faqs"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    FAQS
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div>
            <a href="#contact" className="inline-block bg-transparent px-8 py-3 text-[13px] tracking-wider uppercase text-white cursor-pointer rounded-[100px] border border-white hover:bg-white hover:text-[#6B78C2] transition-colors">
              CONTACT
            </a>
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
            IN-PERSON THERAPY IN SANTA MONICA
            <br />
            & TELEHEALTH ACROSS CALIFORNIA
          </h3>

          <div className="mt-32">
            <h1 className="text-[4rem] leading-[1.1] text-[#6B78C2] mb-10 font-serif font-extralight">
              Move beyond simply{" "}
              <br />
              "functioning"and find
              <br />
              <span className="italic text-[#6E7E65] text-[3.5rem]">
                true grounding.
              </span>
            </h1>

            <p className="text-[17px] text-[#555] mb-12 font-light">
              Helping thoughtful adults heal from the past
              and release the weight of chronic stress.
            </p>

            <div>
              <a
                href="#"
                className="text-[13px] tracking-[0.15em] font-medium text-[#393E50] uppercase border-b border-[#393E50] pb-2 hover:text-[#6B78C2] transition-colors"
              >
                Get Started Today
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
      <div id="about" className="py-[50px] grid grid-cols-12 items-stretch mb-25">
        <div className="col-span-8 flex flex-col justify-center pl-30 pr-30 py-16">
          <h2 className="text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12">
            Stop bracing for the worst and start <em className="text-[#6E7E65] font-muli">feeling safe</em> in your own life.
          </h2>

          <div className="grid grid-cols-2 gap-10 text-[#555] text-[16px] leading-[1.8] font-light">
            <div className="flex flex-col gap-6">
              <p className="tracking-[0.15em] uppercase text-[16px] font-light leading-[1.8] text-[#393E50] font-muli">
                EVIDENCE-BASED PSYCHOLOGY FOR ANXIETY, TRAUMA & BURNOUT
              </p>
              <p>
                Welcome, I&apos;m Dr. Maya Reynolds. I offer a calm, grounding space for professionals, creatives, and entrepreneurs
                who feel disconnected from themselves after years of high internal pressure.
                If you are dealing with perfectionism, panic, or chronic stress,
                you do not have to carry it alone.
              </p>
            </div>
            <div className="flex flex-col">
              <p>
                My approach is warm, collaborative, and structured to feel supportive while leaving space for depth. By integrating evidence-based methods like CBT, EMDR, and mindfulness, we address the emotional and physical toll of your experiences. Whether you are navigating burnout or long-standing trauma, my goal is to help you shift from feeling on edge to feeling deeply grounded.
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
      <div id="focus" className="pt-[50px] pb-[100px] bg-white px-18">
        <h2 className="text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12">
          <span className="">Finding Your{" "} </span>
          <span className="italic text-[#6E7E65] text-[2.75rem] font-muli">
            Center
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
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6">
              Anxiety <em className="text-[#6E7E65] font-muli">&</em> Overthinking
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli">
              You may look highly functional on the outside, but internally you feel
              exhausted and emotionally on edge. We will use evidence-based tools to
              quiet constant worry, release physical tension in your body, and help
              you stop bracing for the next thing to go wrong.
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
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6">
              Lingering Trauma
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli">
              Past experiences can leave lingering effects that impact your confidence,
              relationships, and sense of safety. Using a carefully paced approach
              integrating EMDR and somatic techniques, we will focus on stabilization
              so you can feel deeply regulated in your daily life.
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
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6">
              Burnout <em className="text-[#6E7E65] font-muli">&</em> Perfectionism
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli">
              After years of pushing through high internal pressure and chronic stress,
              it is easy to feel disconnected from yourself. Therapy provides a grounded
              space for professionals to slow down, process exhaustion, and develop more
              sustainable ways of living and working.
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
          <h2 className="text-[2.75rem] leading-[1.15] text-[#F2F3EC] font-serif font-extralight drop-shadow-md">
            You deserve a place where your story is heard, valued, and
            understood.{" "}
            <em>Nothing will be too heavy for us to carry together.</em>
          </h2>
        </div>
      </div>

      {/* Section 5 */}
      <div id="specialities" className="py-[90px] bg-white w-full flex justify-center px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-12 gap-16">
          <div className="col-span-4 flex flex-col pt-4">
            <h3 className="text-[2.25rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight">
              <span className="">What We Navigate </span>
              <br />
              <em className="text-[#6E7E65] text-[3rem] font-muli">
                Together
              </em>
            </h3>
          </div>

          <div className="col-span-8 grid grid-cols-2 gap-x-24">
            {/* Column 1 */}
            <div className="flex flex-col">
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                ANXIETY
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                PANIC
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                TRAUMA
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                PROFESSIONAL BURNOUT
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                PERFECTIONISM
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                CHRONIC STRESS
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                RELATIONSHIPS
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                EMDR THERAPY
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                SELF CONNECTION
              </a>
              <a
                href="#"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli"
              >
                ...AND MORE.
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-[#F2F3EC] py-[120px] flex">
        <div className="flex-1 pl-[10vw] pr-20 flex flex-col justify-center">
          <p className="text-[15px] tracking-[0.2em] text-[#393E50] font-muli uppercase mb-25">
            TRAUMA THERAPY & SUPPORT
          </p>
          <h2 className="text-[2.5rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-15 whitespace-nowrap">
            Reclaim your sense of safety{" "}
            <br />
            at a pace that <span className="text-[#6E7E65]">feels right to you.</span>
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <p className="text-[15px] leading-[1.8] text-[#000000] font-muli uppercase tracking-widest font-light mb-5">
                NAVIGATING THE IMPACT OF PAST EXPERIENCES WITH COMPASSIONATE CARE
                IN SANTA MONICA AND ACROSS CALIFORNIA
              </p>
              <p className="text-[17px] leading-[1.8] text-[#000000] font-muli mb-16 font-light">
                Unresolved past experiences can quietly shape your relationships and
                sense of security, leaving you with an exhausting need to always brace
                for the worst. Processing these deep-rooted patterns requires profound
                trust, which is why our work together is never rushed.
              </p>
              <a
                href="#"
                className="text-[13px] tracking-[0.15em] text-[#393E50] font-muli uppercase border-b border-[#393E50] pb-1 w-fit hover:text-[#6B78C2] transition-colors"
              >
                EXPLORE TRAUMA SUPPORT
              </a>
            </div>

            <div className="flex flex-col">
              <p className="text-[17px] leading-[1.8] text-[#000000] font-muli font-light">
                Whether dealing with a single overwhelming event or complex,
                long-standing patterns from childhood, our priority is always your
                immediate safety. We focus first on stabilization, helping your
                nervous system find its natural baseline. My goal is to help you feel
                genuinely regulated and secure in your everyday life not just during
                our sessions. Healing is possible, and you don’t have to navigate it alone.
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
      <div className="w-full bg-[#6B78C2] flex items-center">
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
        <div className="flex-1 flex flex-col justify-center pl-18 pr-16">
          <h2 className="text-[3.5rem] leading-[1.25] text-white font-serif font-extralight">
            Slow down, reconnect &amp; build
            lasting resilience.
          </h2>
        </div>
      </div>

      {/* Section 8 */}
      <div id="benefits" className="w-full bg-white py-[120px] flex justify-center px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-12 gap-16">
          {/* Left Heading */}
          <div className="col-span-4 flex flex-col">
            <h3 className="text-[2.25rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight">
              <span className="">Beyond just{" "} </span>
              <br />
              <span className="italic text-[#6E7E65] text-[2.25rem] font-muli">symptom </span>
              <span className="">relief</span>
            </h3>
          </div>

          {/* Right Grid Content */}
          <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-24">

            {/* Item 1 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">Deepened Insight</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                I look beneath the surface to understand both the emotional and physiological roots of your exhaustion. By making sense of how past experiences impact your present, you can step out of the cycle of overthinking and find true clarity.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:text-[#6B78C2] transition-colors">
                HOW WE EXPLORE THE PAST
              </a>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">Lasting Resilience</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                True healing means feeling more regulated in your daily life, not just during our sessions. Together, we will build practical, evidence-based tools that help you handle high-pressure environments and calm your mind when stress arises.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:text-[#6B78C2] transition-colors">
                TOOLS FOR DAILY LIFE
              </a>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">Sustainable Living</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                You do not have to stay stuck in a loop of functioning on autopilot until you reach burnout. We will work collaboratively to develop new, healthier ways of living and working that allow you to thrive without constantly running on empty.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:text-[#6B78C2] transition-colors">
                OVERCOMING BURNOUT
              </a>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">A Stronger Sense of Self</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                Years of perfectionism and pushing through chronic stress can leave you feeling completely disconnected from who you are. Therapy provides a dedicated space to slow down, rebuild your confidence, and foster a deeper, kinder relationship with yourself.
              </p>
              <a href="#" className="text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase border-b border-[#555] pb-1 w-fit hover:text-[#6B78C2] transition-colors">
                RECONNECTING WITH YOU
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div id="contact" className="w-full bg-[#F2F3EC] py-[150px] flex justify-between items-end">
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
            TAKE THE NEXT STEP
          </p>
          <h2 className="text-[2.5rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-10">
            You don't have to carry<br /> this <em className="text-[#6E7E65] text-[1.1em] font-muli">weight {" "}</em> alone.
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#393E50] font-muli font-light mb-8 pr-12">
            Therapy is a dedicated space for you to finally slow down, step out of survival mode, and reconnect with yourself. My goal is to help you process the emotional and physiological exhaustion of high internal pressure so you can stop bracing for the worst. Whether we meet in my quiet Santa Monica office or through secure telehealth, we will pace the work carefully to ensure you feel respected, understood, and genuinely grounded.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#393E50] font-muli font-light mb-8">
            Reach out today to take the first step toward true relief.
          </p>
          <a href="#" className="text-[13px] tracking-[0.15em] text-[#393E50] font-muli uppercase border border-[#393E50] rounded-full px-8 py-4 w-fit hover:bg-[#6B78C2] hover:text-white transition-colors">
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

      <div id="faqs">
        <FAQSection />
      </div>

      {/* Footer Main */}
      <div className="w-full bg-[#6B78C2] pt-[50px] pb-[100px] flex justify-center px-6">
        <div className="w-full max-w-[1300px] grid grid-cols-12 gap-8">
          {/* Logo & Description */}
          <div className="col-span-5 pr-20">
            <div className="flex-shrink-0 cursor-pointer flex flex-col items-center justify-center mb-8 pt-2 w-fit">
              <span className="text-[28px] tracking-[0.15em] font-serif text-white leading-tight">
                DR. MAYA REYNOLDS
              </span>
              <span className="text-[18px] tracking-[0.3em] font-muli text-white leading-tight mt-1">
                CLINICAL PSYCHOLOGIST
              </span>
            </div>
            <p className="text-[19px] leading-[1.8] text-white font-muli font-light">
              I want to make getting started simple and comfortable. You are welcome to meet in person at my quiet, grounding office in Santa Monica, or schedule secure virtual sessions from anywhere in California, whichever feels right for you.
            </p>
          </div>

          {/* Navigate */}
          <div className="col-span-3 flex flex-col pt-4">
            <h4 className="text-[19px] tracking-[0.15em] text-white font-muli uppercase mb-8">NAVIGATE</h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">Home</a>
              <a href="#about" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">About</a>
              <a href="#focus" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">Focus</a>
              <a href="#specialities" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">Specialities</a>
              <a href="#benefits" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">Benefits</a>
              <a href="#faqs" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">FAQs</a>
              <a href="#contact" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-4 flex flex-col pt-4">
            <h4 className="text-[19px] tracking-[0.15em] text-white font-muli uppercase mb-8">CONTACT</h4>
            <div className="flex flex-col gap-1 mb-6">
              <p className="text-[17px] text-white font-muli font-light">123th Street 45 W,</p>
              <p className="text-[17px] text-white font-muli font-light"> Santa Monica,</p>
              <p className="text-[17px] text-white font-muli font-light">CA 90401</p>
            </div>
            <div className="flex flex-col gap-1 mb-10">
              <a href="mailto:info@conejovalleycounseling.com" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">hello@drmayareynolds.com</a>
              <a href="tel:805.242.3120" className="text-[17px] text-white font-muli font-light hover:opacity-80 transition-opacity">(310) 555-0198</a>
            </div>
            <em className="text-[17px] leading-[1.8] text-white font-muli font-light">
              Serving Santa Monica, the Greater Los Angeles area, and all of California via secure telehealth.
            </em>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full bg-[#F2F3EC] py-3 flex justify-center px-10">
        <div className="w-full">
          <p className="text-center text-[17px] text-[#393E50] font-muli font-light">
            <span className="hover:text-[#6B78C2] transition-colors cursor-pointer">Terms</span> &nbsp;|&nbsp; <span className="hover:text-[#6B78C2] transition-colors">Privacy Policy</span> &nbsp;|&nbsp; <span className="hover:text-[#6B78C2] transition-colors">Disclaimer</span> &nbsp;|&nbsp; <span className="hover:text-[#6B78C2] transition-colors">Website made by Krish Mishra</span>
          </p>
        </div>
      </div>
    </div>
  );
}
