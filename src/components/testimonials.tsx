export default function Testimonials() {
  const testimonials = [
    {
      name: "Hanna M.",
      text: "This app has been a game-changer for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers.",
    },
    {
      name: "David B.",
      text: "I love this app! It provides concise and accurate summaries of books in a way that is easy to understand. It's also very user-friendly and intuitive.",
    },
    {
      name: "Nathan S.",
      text: "This app is a great way to get the main takeaways from a book without having to read the entire thing. The summaries are well-written and informative. Definitely worth downloading.",
    },
    {
      name: "Ryan R.",
      text: "If you're a busy person who loves reading but doesn't have the time to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[600px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#032b41]">
          What our members say
        </h2>

        <div className="flex flex-col gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-md bg-[#fff3d7] px-5 py-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-base text-[#394547]">
                  {testimonial.name}
                </span>

                <span className="text-xl text-[#0365f2]">
                  ★★★★★
                </span>
              </div>

              <p className="text-base font-light leading-7 text-[#394547]">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="w-full max-w-[400px] rounded bg-[#2bd97c] py-3 text-lg text-[#032b41] transition hover:bg-[#20ba68]">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}