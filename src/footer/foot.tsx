import { Link } from "react-router-dom";
import logoMain from "../assets/logo.png";

const date = new Date().getFullYear();
const year = date.toString();

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: logoMain,
    alt: "tech power logo",
    title: "",
    url: "/",
  },
  tagline = "Building the Future with Tech Education.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/about-us" },
        { text: "Sponsor", url: "/sponsor" },
        { text: "Scholarship", url: "/scholarship" },
        { text: "Programs", url: "/programs" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Facebook", url: "https://www.facebook.com/share/1QuQuc7UVB/" },
        { text: "Instagram", url: "https://www.instagram.com/techpowerafrica/?hl=en" },
        { text: "LinkedIn", url: "https://www.linkedin.com/company/techpower-africa/about/" },
      ],
    },
  ],
  copyright = `© ${year} Copyright. All rights reserved.`,
  bottomLinks = [
    { text: "Terms Of Use", url: "/terms-of-use" },
    { text: "Privacy Policy", url: "/privacy-policy" },
  ],
}: Footer2Props) => {
  // Helper function to determine if a URL is external
  const isExternalUrl = (url: string) => {
    return url.startsWith("http") || url.startsWith("www");
  };

  return (
    <div className="py-2 lg:py-2 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <footer className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Link to={logo.url} className="flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                {logo.title && (
                  <p className="text-xl font-semibold text-white">
                    {logo.title}
                  </p>
                )}
              </div>
              <p className="text-white max-w-md">{tagline}</p>
            </div>

            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {isExternalUrl(link.url) ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-300 transition-colors duration-200"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <Link
                          to={link.url}
                          className="hover:text-blue-300 transition-colors duration-200"
                        >
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <p className="text-sm text-white">{copyright}</p>
              <ul className="flex flex-wrap justify-center gap-6">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.url}
                      className="text-sm text-white hover:text-blue-300 transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Footer2 };