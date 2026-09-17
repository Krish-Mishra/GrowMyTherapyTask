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
                    SPECIALTIES
                  </a>
                  <a
                    href="#benefits"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    BENEFITS
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
            src="https://images.unsplash.com/photo-1758272008311-80e0f1f48306?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QSUyMGNvYXN0YWwlMkMlMjBtaW5pbWFsaXN0aWMlMjBuYXR1cmUlMjBzY2VuZXxlbnwwfHwwfHx8MA%3D%3D"
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
              <span className="font-allura text-[#6E7E65] text-[3.75rem]">
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
      <div id="about" className="py-[50px] grid grid-cols-12 items-stretch mb-25">
        <div className="col-span-8 flex flex-col justify-center pl-30 pr-30 py-16">
          <h2 className="text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12">
            Stop bracing for the worst and start <em className="text-[#6E7E65] font-allura text-[1.2em]">feeling safe</em> in your own life.
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

        <div className="col-span-4 flex flex-col">
          <div className="relative min-h-[600px] w-full">
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
            <span className="text-[19px] tracking-[0.15em] font-serif text-[#393E50] uppercase leading-tight">
              Dr. Maya Reynolds, PSYD
            </span>
            <span className="text-[14px] tracking-[0.2em] font-muli text-[#6E7E65] uppercase leading-tight mt-1">
              Clinical Psychologist
            </span>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id="focus" className="pt-[50px] pb-[100px] bg-white px-18">
        <h2 className="text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-12">
          <span className="">Finding Your{" "} </span>
          <span className="font-allura text-[#6E7E65] text-[3.5rem]">
            Center
          </span>
        </h2>

        <div className="grid grid-cols-3 gap-6 pl-[150px] pr-[10px]">
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
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6">
              Anxiety <em className="text-[#6E7E65] font-allura text-[1.4em]">&</em> Overthinking
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
                src="https://plus.unsplash.com/premium_photo-1764425842051-5dafa5732e43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QSUyMHNvbGl0YXJ5JTIwYWR1bHQlMjB3YWxraW5nJTIwb24lMjBhJTIwcGF0aCUyMG9yJTIwc3RhbmRpbmclMjBpbiUyMGElMjBwZWFjZWZ1bCUyMGVudmlyb25tZW50fGVufDB8fDB8fHww"
                alt="Lingering Trauma"
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
                src="https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEElMjBjbG9zZWQlMjBsYXB0b3AlMkMlMjBhJTIwY29tZm9ydGFibGUlMjBlbXB0eSUyMGNoYWlyJTJDJTIwYSUyMHN0ZWFtaW5nJTIwY3VwJTIwb2YlMjB0ZWElMkMlMjBvciUyMGFuJTIwYWR1bHQlMjByZXN0aW5nJTIwdGhlaXIlMjBleWVzJTIwb24lMjBhJTIwY29tZm9ydGFibGUlMjBzb2ZhfGVufDB8fDB8fHww"
                alt="Burnout and Perfectionism"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>
            <h3 className="text-[1.75rem] font-serif text-[#6B78C2] font-light mb-6">
              Burnout <em className="text-[#6E7E65] font-allura text-[1.4em]">&</em> Perfectionism
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
          src="https://images.unsplash.com/photo-1598826815648-f13bdd595ffe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEElMjB3aWRlJTIwc2hvdCUyMG9mJTIwdGhlJTIwb2NlYW4lMjBhdCUyMHR3aWxpZ2h0JTJDJTIwZGVlcCUyMGJsdWUlMjB3YXRlciUyMHJvbGxpbmclMjBpbiUyQyUyMG9yJTIwYSUyMG1pc3R5JTIwbW9ybmluZyUyMG9uJTIwdGhlJTIwQ2FsaWZvcm5pYSUyMGNvYXN0LnxlbnwwfHwwfHx8Mg%3D%3D"
          alt="Wide shot of the ocean"
          fill
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full pl-32 pr-12 pb-20 max-w-[950px]">
          <h2 className="text-[2.75rem] leading-[1.5] text-[#F2F3EC] font-serif font-extralight drop-shadow-md">
            You don&apos;t have to have it all together before you walk through the door.{" "}
            <em>This is a space to simply be as you are.</em>
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
              <em className="text-[#6E7E65] text-[3.5rem] font-allura">
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
            at a pace that <span className="text-[#6E7E65] font-allura text-[1.2em]">feels right to you.</span>
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
            src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlYWNlZnVsfGVufDB8fDB8fHww"
            alt="Peaceful nature scene"
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
            src="https://images.unsplash.com/photo-1677475455583-6fd07f04914c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29tZW9uZSUyMHNpdHRpbmclMjBxdWlldGx5JTIwb24lMjBhJTIwY29tZm9ydGFibGUlMjBjaGFpciUyMGxvb2tpbmclMjBvdXQlMjBhJTIwd2luZG93JTJDJTIwb3IlMjBzdGFuZGluZyUyMGFsb25lJTIwb24lMjBhJTIwcXVpZXQlMjBiZWFjaHxlbnwwfHwwfHx8Mg%3D%3D"
            alt="Someone sitting quietly on a beach"
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
              <span className="font-allura text-[#6E7E65] text-[2.75rem]">symptom </span>
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

      {/* Office Section */}
      <div id="office" className="w-full bg-[#F2F3EC] py-[100px] flex justify-center px-10">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <h2 className="text-[2.75rem] leading-[1.2] text-[#6B78C2] font-serif font-extralight mb-6 text-center">
            The Space of <span className="font-allura text-[#6E7E65] text-[3.5rem]">Serenity</span>
          </h2>
          <p className="text-[#555] text-[16px] leading-[1.8] font-light font-muli text-center max-w-[800px] mb-4">
            Therapy is most effective when your nervous system feels safe. My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.
          </p>
          <p className="text-[#6B78C2] text-[15px] italic font-muli text-center mb-16">
            In-Person Sessions in Santa Monica | Secure Telehealth Across California
          </p>
          <div className="grid grid-cols-2 gap-10 w-full">
            <div className="relative w-full h-[500px]">
              <Image
                src="/office-1.jpg"
                alt="Therapy Office Interior"
                fill
                className="object-cover rounded-sm"
                unoptimized
              />
            </div>
            <div className="relative w-full h-[500px]">
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
      <div id="contact" className="w-full bg-white py-[100px] flex justify-between items-end">
        {/* Left Image */}
        <div className="w-[12%] relative h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1758799819958-6bfece84708a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHN0b25lcyUyMHN0YWNrZWR8ZW58MHx8MHx8fDI%3D"
            alt="Stacked stones"
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
            You don't have to carry<br /> this <em className="text-[#6E7E65] text-[1.4em] font-allura">weight {" "}</em> alone.
          </h2>
          <p className="text-[17px] leading-[1.8] text-[#393E50] font-muli font-light mb-8 pr-12">
            Therapy is a dedicated space for you to finally slow down, step out of survival mode, and reconnect with yourself. My goal is to help you process the emotional and physiological exhaustion of high internal pressure so you can stop bracing for the worst. Whether we meet in my quiet Santa Monica office or through secure telehealth, we will pace the work carefully to ensure you feel respected, understood, and genuinely grounded.
          </p>
          <p className="text-[17px] leading-[1.8] text-[#393E50] font-muli font-light mb-8">
            Reach out today to take the first step toward true relief.
          </p>
          <a href="#" className="text-[13px] tracking-[0.15em] text-[#393E50] font-muli uppercase border border-[#393E50] rounded-full px-8 py-4 w-fit hover:bg-[#6B78C2] hover:text-white transition-colors">
            GET STARTED
          </a>
        </div>

        {/* Right Image */}
        <div className="w-[35%] relative h-[620px]">
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
