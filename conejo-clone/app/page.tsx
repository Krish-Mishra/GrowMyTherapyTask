import Image from "next/image";
import FAQSection from "../components/FAQSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div id="home" className="bg-[#F2F3EC] min-h-screen">
      <Navbar />

      <div className="py-[50px] grid grid-cols-1 lg:grid-cols-12 items-center gap-y-10 lg:gap-y-0">
        <div className="lg:col-span-4 h-[300px] md:h-[400px] lg:h-[572px] relative overflow-hidden order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1758272008311-80e0f1f48306?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QSUyMGNvYXN0YWwlMkMlMjBtaW5pbWFsaXN0aWMlMjBuYXR1cmUlMjBzY2VuZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Conejo Valley Family Counseling"
            fill
            className="object-cover"
            loading="eager"
            unoptimized
          />
        </div>

        {/* Center Content */}
        <div className="lg:col-span-7 flex flex-col justify-start pt-6 px-8 md:px-16 lg:pl-24 lg:pr-8 order-1 lg:order-2 h-auto lg:h-[572px]">
          <h3 className="text-[14.5px] tracking-[0.15em] text-[#555] uppercase font-medium leading-relaxed text-center lg:text-left">
            IN-PERSON THERAPY IN SANTA MONICA
            <br />
            & TELEHEALTH ACROSS CALIFORNIA
          </h3>

          <div className="mt-12 lg:mt-32 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-[#6B78C2] mb-10 font-serif font-extralight">
              Move beyond simply{" "}
              <br />
              "functioning"and find
              <br />
              <span className="font-allura text-[#6E7E65] text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
                true grounding.
              </span>
            </h1>

            <p className="text-[17px] text-[#555] mb-12 font-light text-center lg:text-left max-w-[400px] lg:max-w-none">
              Helping thoughtful adults heal from the past
              and release the weight of chronic stress.
            </p>

            <div>
              <button
                type="button"
                className="group relative text-[13px] tracking-[0.15em] font-medium text-[#393E50] uppercase pb-2 hover:text-[#6B78C2] transition-colors duration-500"
              >
                Get Started Today
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#393E50] transition-all duration-500 group-hover:w-0"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1 h-[420px] relative overflow-hidden mt-32 order-3">
          <Image
            src="https://media.istockphoto.com/id/2290236344/photo/flock-of-eurasian-whimbrels-flying-over-a-calm-ocean-during-coastal-migration-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=fIADUuOMHSCCEW3edWi1LnEDaTBFRoK_Nn4e5A50wQI="
            alt="Ocean waves"
            fill
            className="object-cover object-right"
            loading="lazy"
            unoptimized
          />
        </div>
      </div>

      {/* Section 2 */}
      <div id="about" className="py-[50px] grid grid-cols-1 lg:grid-cols-12 items-stretch mb-10 lg:mb-25">
        <div className="lg:col-span-8 flex flex-col justify-center px-8 md:px-16 lg:pl-30 lg:pr-30 py-10 lg:py-16 order-2 lg:order-1">
          <h2 className="text-[2.25rem] md:text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12 text-center lg:text-left">
            Stop bracing for the worst and start <em className="text-[#6E7E65] font-allura text-[1.2em]">feeling safe</em> in your own life.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#555] text-[16px] leading-[1.8] font-light">
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

        <div className="lg:col-span-4 flex flex-col order-1 lg:order-2 px-8 lg:px-0">
          <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full">
            <Image
              src="/therapist.jpg"
              alt="Dr. Maya Reynolds"
              fill
              className="object-cover object-center"
              loading="lazy"
              unoptimized
            />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <span className="text-[19px] tracking-[0.15em] font-serif text-[#393E50] uppercase leading-tight text-center">
              Dr. Maya Reynolds, PSYD
            </span>
            <span className="text-[14px] tracking-[0.2em] font-muli text-[#6E7E65] uppercase leading-tight mt-1 text-center">
              Clinical Psychologist
            </span>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id="focus" className="pt-[50px] pb-[100px] bg-white px-8 md:px-16 lg:px-18">
        <h2 className="text-[2.25rem] md:text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12 text-center lg:text-left">
          <span className="">Finding Your{" "} </span>
          <span className="font-allura text-[#6E7E65] text-[3rem] md:text-[3.5rem] block md:inline">
            Center
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 lg:pl-[150px] lg:pr-[10px]">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] w-full mb-10">
              <Image
                src="https://images.unsplash.com/photo-1617720197345-5e5235ec6220?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVhY2V8ZW58MHx8MHx8fDA%3D"
                alt="Anxiety and Overthinking"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6 text-center lg:text-left">
              Anxiety <em className="text-[#6E7E65] font-allura text-[1.4em]">&</em> Overthinking
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli text-center lg:text-left">
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
                src="https://plus.unsplash.com/premium_photo-1764425842051-5dafa5732e43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QSUyMHNvbGl0YXJ5JTIwYWR1bHQlMjB3YWxraW5nJTIwb24lMjBhJTIwcGF0aCUyMG9yJTIwc3RhbmRpbmclMjBpbiUyMGElMjBwZWFjZWZ1bCUyMGVudmlyb25tZW50fGVufDB8fDB8fHww"
                alt="Lingering Trauma"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6 text-center lg:text-left">
              Lingering Trauma
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli text-center lg:text-left">
              Past experiences can leave lingering effects that impact your confidence,
              relationships, and sense of safety. Using a carefully paced approach
              integrating EMDR and somatic techniques, we will focus on stabilization
              so you can feel deeply regulated in your daily life.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1 md:items-center lg:items-stretch">
            <div className="relative aspect-[4/5] w-full md:w-1/2 lg:w-full mb-10">
              <Image
                src="https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEElMjBjbG9zZWQlMjBsYXB0b3AlMkMlMjBhJTIwY29tZm9ydGFibGUlMjBlbXB0eSUyMGNoYWlyJTJDJTIwYSUyMHN0ZWFtaW5nJTIwY3VwJTIwb2YlMjB0ZWElMkMlMjBvciUyMGFuJTIwYWR1bHQlMjByZXN0aW5nJTIwdGhlaXIlMjBleWVzJTIwb24lMjBhJTIwY29tZm9ydGFibGUlMjBzb2ZhfGVufDB8fDB8fHww"
                alt="Burnout and Perfectionism"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6 text-center lg:text-left">
              Burnout <em className="text-[#6E7E65] font-allura text-[1.4em]">&</em> Perfectionism
            </h3>
            <p className="text-[#555] text-[16px] font-light leading-[1.8] font-muli text-center lg:text-left md:max-w-xl lg:max-w-none">
              After years of pushing through high internal pressure and chronic stress,
              it is easy to feel disconnected from yourself. Therapy provides a grounded
              space for professionals to slow down, process exhaustion, and develop more
              sustainable ways of living and working.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative w-full h-[400px] lg:h-[550px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1598826815648-f13bdd595ffe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEElMjB3aWRlJTIwc2hvdCUyMG9mJTIwdGhlJTIwb2NlYW4lMjBhdCUyMHR3aWxpZ2h0JTJDJTIwZGVlcCUyMGJsdWUlMjB3YXRlciUyMHJvbGxpbmclMjBpbiUyQyUyMG9yJTIwYSUyMG1pc3R5JTIwbW9ybmluZyUyMG9uJTIwdGhlJTIwQ2FsaWZvcm5pYSUyMGNvYXN0LnxlbnwwfHwwfHx8Mg%3D%3D"
          alt="Wide shot of the ocean"
          fill
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full px-8 md:px-16 lg:pl-32 lg:pr-12 pb-10 lg:pb-20 max-w-[950px]">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.3] lg:leading-[1.5] text-[#F2F3EC] font-serif font-extralight drop-shadow-md text-center lg:text-left">
            You don&apos;t have to have it all together before you walk through the door.{" "}
            <em className="block mt-2 lg:inline lg:mt-0">This is a space to simply be as you are.</em>
          </h2>
        </div>
      </div>

      {/* Section 5 */}
      <div id="specialities" className="py-[60px] lg:py-[90px] bg-white w-full flex justify-center px-8 md:px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col pt-4">
            <h3 className="text-[2rem] md:text-[2.25rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight text-center lg:text-left">
              <span className="">What We Navigate </span>
              <br />
              <em className="text-[#6E7E65] text-[3rem] md:text-[3.5rem] font-allura">
                Together
              </em>
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-24 text-center md:text-left">
            {/* Column 1 */}
            <div className="flex flex-col">
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                ANXIETY
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                PANIC
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                TRAUMA
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                PROFESSIONAL BURNOUT
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                PERFECTIONISM
              </button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                CHRONIC STRESS
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                RELATIONSHIPS
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                EMDR THERAPY
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                SELF CONNECTION
              </button>
              <button
                type="button"
                className="py-8 border-b border-[#f0f0f0] text-[16px] tracking-[0.15em] text-[#555] hover:text-[#6B78C2] transition-colors font-muli text-left"
              >
                ...AND MORE.
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-[#F2F3EC] py-[60px] lg:py-[120px] flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className="flex-1 px-8 md:px-16 lg:pl-[10vw] lg:pr-20 flex flex-col justify-center order-2 lg:order-1 mt-10 lg:mt-0">
          <p className="text-[15px] tracking-[0.2em] text-[#393E50] font-muli uppercase mb-10 lg:mb-25 text-center lg:text-left">
            TRAUMA THERAPY & SUPPORT
          </p>
          <h2 className="text-[2.25rem] lg:text-[2.5rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-10 lg:mb-15 whitespace-normal lg:whitespace-nowrap text-center lg:text-left">
            Reclaim your sense of safety{" "}
            <br />
            at a pace that <span className="text-[#6E7E65] font-allura text-[1.2em]">feels right to you.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <button
                type="button"
                className="group relative text-[13px] tracking-[0.15em] text-[#393E50] font-muli uppercase pb-1 w-fit hover:text-[#6B78C2] transition-colors duration-500"
              >
                EXPLORE TRAUMA SUPPORT
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#393E50] transition-all duration-500 group-hover:w-0"></span>
              </button>
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
        <div className="w-full lg:w-[24%] relative min-h-[400px] lg:min-h-[625px] lg:ml-11 order-1 lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlYWNlZnVsfGVufDB8fDB8fHww"
            alt="Peaceful nature scene"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Section 7 */}
      <div className="w-full bg-[#6B78C2] flex flex-col lg:flex-row items-stretch">
        {/* Left Image */}
        <div className="w-full lg:w-[53%] relative h-[400px] lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1677475455583-6fd07f04914c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29tZW9uZSUyMHNpdHRpbmclMjBxdWlldGx5JTIwb24lMjBhJTIwY29tZm9ydGFibGUlMjBjaGFpciUyMGxvb2tpbmclMjBvdXQlMjBhJTIwd2luZG93JTJDJTIwb3IlMjBzdGFuZGluZyUyMGFsb25lJTIwb24lMjBhJTIwcXVpZXQlMjBiZWFjaHxlbnwwfHwwfHx8Mg%3D%3D"
            alt="Someone sitting quietly on a beach"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0 lg:pl-18 lg:pr-16 text-center lg:text-left">
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.25] text-white font-serif font-extralight">
            Slow down, reconnect &amp; build
            lasting resilience.
          </h2>
        </div>
      </div>

      {/* Section 8 */}
      <div id="benefits" className="w-full bg-white py-[60px] lg:py-[120px] flex justify-center px-8 md:px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Heading */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-[2rem] md:text-[2.25rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight">
              <span className="">Beyond just{" "} </span>
              <br />
              <span className="font-allura text-[#6E7E65] text-[2.75rem]">symptom </span>
              <span className="">relief</span>
            </h3>
          </div>

          {/* Right Grid Content */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 lg:gap-y-24 text-center md:text-left">

            {/* Item 1 */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">Deepened Insight</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                I look beneath the surface to understand both the emotional and physiological roots of your exhaustion. By making sense of how past experiences impact your present, you can step out of the cycle of overthinking and find true clarity.
              </p>
              <button type="button" className="group relative text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase pb-1 w-fit hover:text-[#6B78C2] transition-colors duration-500">
                HOW WE EXPLORE THE PAST
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#555] transition-all duration-500 group-hover:w-0"></span>
              </button>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">Lasting Resilience</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                True healing means feeling more regulated in your daily life, not just during our sessions. Together, we will build practical, evidence-based tools that help you handle high-pressure environments and calm your mind when stress arises.
              </p>
              <button type="button" className="group relative text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase pb-1 w-fit hover:text-[#6B78C2] transition-colors duration-500">
                TOOLS FOR DAILY LIFE
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#555] transition-all duration-500 group-hover:w-0"></span>
              </button>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">Sustainable Living</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                You do not have to stay stuck in a loop of functioning on autopilot until you reach burnout. We will work collaboratively to develop new, healthier ways of living and working that allow you to thrive without constantly running on empty.
              </p>
              <button type="button" className="group relative text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase pb-1 w-fit hover:text-[#6B78C2] transition-colors duration-500">
                OVERCOMING BURNOUT
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#555] transition-all duration-500 group-hover:w-0"></span>
              </button>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[1.75rem] text-[#6B78C2] font-serif font-extralight mb-6">A Stronger Sense of Self</h4>
              <p className="text-[17px] leading-[1.8] text-[#555] font-muli font-light mb-8">
                Years of perfectionism and pushing through chronic stress can leave you feeling completely disconnected from who you are. Therapy provides a dedicated space to slow down, rebuild your confidence, and foster a deeper, kinder relationship with yourself.
              </p>
              <button type="button" className="group relative text-[13px] tracking-[0.15em] text-[#555] font-muli uppercase pb-1 w-fit hover:text-[#6B78C2] transition-colors duration-500">
                RECONNECTING WITH YOU
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#555] transition-all duration-500 group-hover:w-0"></span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Office Section */}
      <div id="office" className="w-full bg-[#F2F3EC] py-[60px] lg:py-[100px] flex justify-center px-8 md:px-10">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <h2 className="text-[2.25rem] md:text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-6 text-center">
            The Space of <span className="font-allura text-[#6E7E65] text-[3.5rem]">Serenity</span>
          </h2>
          <p className="text-[#555] text-[16px] leading-[1.8] font-light font-muli text-center max-w-[800px] mb-4">
            Therapy is most effective when your nervous system feels safe. My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.
          </p>
          <p className="text-[#6B78C2] text-[13px] md:text-[15px] italic font-muli text-center mb-10 lg:mb-16">
            In-Person Sessions in Santa Monica | Secure Telehealth Across California
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/office-1.jpg"
                alt="Therapy Office Interior"
                fill
                className="object-cover rounded-sm"
                unoptimized
              />
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/office-2.jpg"
                alt="Therapy Office Detail"
                fill
                className="object-cover rounded-sm"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 9 */}
      <div id="contact" className="w-full bg-white py-[60px] lg:py-[100px] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-0">
        {/* Left Image */}
        <div className="w-full md:w-1/2 lg:w-[12%] relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1758799819958-6bfece84708a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHN0b25lcyUyMHN0YWNrZWR8ZW58MHx8MHx8fDI%3D"
            alt="Stacked stones"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Center Text */}
        <div className="w-full lg:w-[48%] flex flex-col px-8 md:px-16 lg:pr-10 lg:pl-18 text-center lg:text-left items-center lg:items-start order-1 lg:order-2">
          <p className="text-[15px] tracking-[0.2em] text-[#555] font-muli uppercase mb-10 lg:mb-24">
            TAKE THE NEXT STEP
          </p>
          <h2 className="text-[2.25rem] lg:text-[2.5rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-10">
            You don't have to carry<br /> this <em className="text-[#6E7E65] text-[1.4em] font-allura">weight {" "}</em> alone.
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#393E50] font-muli font-light mb-8 lg:pr-12">
            Therapy is a dedicated space for you to finally slow down, step out of survival mode, and reconnect with yourself. My goal is to help you process the emotional and physiological exhaustion of high internal pressure so you can stop bracing for the worst. Whether we meet in my quiet Santa Monica office or through secure telehealth, we will pace the work carefully to ensure you feel respected, understood, and genuinely grounded.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#393E50] font-muli font-light mb-8">
            Reach out today to take the first step toward true relief.
          </p>
          <button type="button" className="text-[13px] tracking-[0.15em] text-[#393E50] font-muli uppercase border border-[#393E50] rounded-full px-8 py-4 w-fit hover:bg-[#6B78C2] hover:text-white transition-colors">
            GET STARTED
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-3/4 lg:w-[35%] relative h-[400px] lg:h-[620px] order-3">
          <Image
            src="https://images.unsplash.com/photo-1758523668629-84908c91a66c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGElMjBzb2xvJTIwcHJvZmVzc2lvbmFsJTIwYWR1bHQlMjBsb29raW5nJTIwcmVsYXhlZCVFMiU4MCU5NHBlcmhhcHMlMjBzaXR0aW5nJTIwYnklMjBhJTIwd2luZG93JTIwaG9sZGluZyUyMGElMjB3YXJtJTIwbXVnJTJDJTIwb3IlMjBhJTIwY2xvc2UtdXAlMjBvZiUyMGhhbmRzJTIwcmVzdGluZyUyMHBlYWNlZnVsbHklMjBpbiUyMHRoZWlyJTIwbGFwfGVufDB8fDB8fHwy"
            alt="Relaxed professional"
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
      <div className="w-full bg-[#6B78C2] pt-[50px] pb-[100px] flex justify-center px-8 md:px-10">
        <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 lg:col-span-5 pr-0 lg:pr-20 flex flex-col items-center lg:items-start text-center lg:text-left">
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
          <div className="lg:col-span-3 flex flex-col pt-4 items-center lg:items-start text-center lg:text-left">
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
          <div className="lg:col-span-4 flex flex-col pt-4 items-center lg:items-start text-center lg:text-left">
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
      <div className="w-full bg-[#F2F3EC] py-4 md:py-3 flex justify-center px-6 md:px-10">
        <div className="w-full">
          <p className="text-center text-[13px] md:text-[15px] lg:text-[17px] text-[#393E50] font-muli font-light leading-relaxed md:leading-normal">
            <span className="hover:text-[#6B78C2] transition-colors cursor-pointer block md:inline mb-2 md:mb-0">Terms &nbsp;<span className="hidden md:inline">|</span></span> 
            <span className="hover:text-[#6B78C2] transition-colors block md:inline mb-2 md:mb-0">&nbsp;Privacy Policy &nbsp;<span className="hidden md:inline">|</span></span> 
            <span className="hover:text-[#6B78C2] transition-colors block md:inline mb-2 md:mb-0">&nbsp;Disclaimer &nbsp;<span className="hidden md:inline">|</span></span> 
            <span className="hover:text-[#6B78C2] transition-colors block md:inline">&nbsp;Website made by Krish Mishra</span>
          </p>
        </div>
      </div>
    </div>
  );
}
