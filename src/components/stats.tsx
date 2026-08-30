import { FaCrown, FaRegStar, FaLeaf } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaCrown />,
      value: "3 Million",
      description: "Downloads on all platforms",
    },
    {
      icon: <FaRegStar />,
      value: "4.5 Stars",
      description: "Average ratings on iOS and Google Play",
    },
    {
      icon: <FaLeaf />,
      value: "97%",
      description: "Of Summarist members create a better reading habit",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1070px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#032b41]">
          Start growing with Summarist now
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex min-h-[270px] flex-col items-center justify-center rounded-xl bg-[#d7e5ff] px-8 text-center"
            >
              <div className="mb-4 text-5xl text-[#0365f2]">
                {stat.icon}
              </div>

              <h3 className="mb-5 text-4xl font-bold text-[#032b41]">
                {stat.value}
              </h3>

              <p className="text-lg font-light leading-6 text-[#394547]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}