import { FaRegFileAlt, FaLightbulb, FaMicrophone } from "react-icons/fa";

export default function Features() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto max-w-[1070px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#032b41]">
          Understand books in few minutes
        </h2>

        <div className="mb-24 grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <FaRegFileAlt className="mb-2 h-[60px] w-[60px] text-[#032b41]" />

            <h3 className="mb-4 text-2xl font-medium text-[#032b41]">
              Read or listen
            </h3>

            <p className="text-lg font-light text-[#394547]">
              Save time by getting the core ideas from the best books.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaLightbulb className="mb-2 h-[60px] w-[60px] text-[#032b41]" />

            <h3 className="mb-4 text-2xl font-medium text-[#032b41]">
              Find your next read
            </h3>

            <p className="text-lg font-light text-[#394547]">
              Explore book lists and personalized recommendations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaMicrophone className="mb-2 h-[60px] w-[60px] text-[#032b41]" />

            <h3 className="mb-4 text-2xl font-medium text-[#032b41]">
              Briefcasts
            </h3>

            <p className="text-lg font-light text-[#394547]">
              Gain valuable insights from briefcasts
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-20">
          <div className="flex w-full flex-col justify-center">
            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Enhance your knowledge
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Achieve greater success
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Improve your health
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Develop better parenting skills
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#2bd97c]">
              Increase happiness
            </h3>

            <h3 className="text-3xl font-medium text-[#6b757b]">
              Be the best version of yourself!
            </h3>
          </div>

          <div className="flex w-full flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10">
            <div className="flex gap-4">
              <span className="mt-1 text-xl font-semibold text-[#0365f2]">
                93%
              </span>
              <p className="text-xl font-light text-[#394547]">
                of Summarist members significantly increase reading frequency.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 text-xl font-semibold text-[#0365f2]">
                96%
              </span>
              <p className="text-xl font-light text-[#394547]">
                of Summarist members establish better habits.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 text-xl font-semibold text-[#0365f2]">
                90%
              </span>
              <p className="text-xl font-light text-[#394547]">
                have made significant positive change to their lives.
              </p>
            </div>
          </div>
         

          </div>

           <div className="mt-20 flex flex-col-reverse gap-8 md:flex-row md:gap-20">
            <div className="flex w-full flex-col justify-center gap-6 bg-[#f1f6f4] px-6 py-10">
            <div className="flex gap-4">
              <span className="mt-1 text-xl font-semibold text-[#0365f2]">
                91%
              </span>
              <p className="text-xl font-light text-[#394547]">
                of Summarist members report feeling more productive
                after incorporating the service into their daily routine.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 text-xl font-semibold text-[#0365f2]">
                94%
              </span>
              <p className="text-xl font-light text-[#394547]">
                of Summarist members have noticed an improvement in
                their overall comprehension and retention of information.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="mt-1 text-xl font-semibold text-[#0365f2]">
                88%
              </span>
              <p className="text-xl font-light text-[#394547]">
                of Summarist members feel more informed about current
                events and industry trends since using the platform.
              </p>
            </div>
          </div>
           <div className="flex w-full flex-col justify-center">
            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Expand you learning
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Accomplish your goals
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Strengthen your vitality
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#6b757b]">
              Become a better caregiver
            </h3>

            <h3 className="mb-4 text-3xl font-medium text-[#2bd97c]">
              Improve your mood
            </h3>

            <h3 className="text-3xl font-medium text-[#6b757b]">
              Maximize your abilities
            </h3>
          </div>
        </div>
         
      </div>
    </section>
  );
}