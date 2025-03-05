

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 lg:py-24">
          <Helmet>
            <title>Privacy - Tech Power</title>
            </Helmet>
      <div className="wrapper small">
        <h1 className="text-3xl md:text-4xl font-bold text-[#082a5e] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-black">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Introduction
            </h2>
            <p className="leading-relaxed">
              At TechPower, your privacy is important to us. This Privacy Policy
              outlines how we collect, use, and safeguard your personal
              information when you interact with our website and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              When you enroll in our courses or use our services, we may collect
              the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, billing details, National ID number, Bank details,
                any other information you provide during registration and
                training.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including IP addresses, browser type, and
                device information.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our educational services.</li>
              <li>Process payments and provide receipts or confirmations.</li>
              <li>Improve our courses, website, and user experience.</li>
              <li>
                Communicate with you about training, updates, courses, or
                changes to our services.
              </li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Data Security
            </h2>
            <p className="leading-relaxed">
              We take the security of your data seriously. TechPower uses
              industry-standard security measures to protect your personal
              information from unauthorized access, disclosure, or misuse.
              However, no system is 100% secure, and we cannot guarantee the
              absolute security of your data.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Cookies
            </h2>
            <p className="leading-relaxed">
              Our website may use cookies to enhance your browsing experience.
              Cookies help us analyze web traffic and improve site
              functionality. By using our site, you agree to the use of cookies
              in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Third-Party Services
            </h2>
            <p className="leading-relaxed">
              We may use third-party services to process payments or analyze
              site traffic. These providers have their own privacy policies,
              and we are not responsible for their practices. However, we choose
              trusted partners to ensure your data is handled safely.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Access, correct, or delete the personal information we hold
                about you.
              </li>
              <li>Opt-out of marketing communications at any time.</li>
              <li>
                Request that we stop using your data for certain purposes.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <Link
                to="mailto:info@techpowerinc.com"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                info@techpowerinc.com
              </Link>
              .
            </p>
          </div>

          {/* Changes to this Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Changes to this Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page, and the date of the latest revision will
              be indicated at the bottom. We encourage you to review this page
              periodically.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-sm text-black mt-12">
          Last updated: March 5, 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;