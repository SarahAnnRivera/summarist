import Link from "next/link";

const footerSections = [
  {
    title: "Actions",
    links: [
      "Summarist Magazine",
      "Cancel Subscription",
      "Help",
      "Contact us",
    ],
  },
  {
    title: "Useful Links",
    links: [
      "Pricing",
      "Summarist Business",
      "Gift Cards",
      "Authors & Publishers",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Code of Conduct"],
  },
  {
    title: "Other",
    links: [
      "Sitemap",
      "Legal Notice",
      "Terms of Service",
      "Privacy Policies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f1f6f4] px-6 py-16 text-[#032b41]">
      <div className="mx-auto max-w-[1070px]">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 cursor-not-allowed">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-bold">
                {section.title}
              </h3>

              <ul className="flex flex-col gap-2 cursor-not-allowed">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm transition hover:opacity-60"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center font-semibold">
          Copyright © 2023 Summarist.
        </p>
      </div>
    </footer>
  );
}