import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <section className="py-16 lg:py-24">
           <Helmet>
             <title>Privacy - Tech Power</title>
            </Helmet>
      <div className="wrapper small">
        <h1 className="text-3xl md:text-4xl font-bold text-[#082a5e] mb-8">
          Terms of Use
        </h1>

        <div className="space-y-8 text-black">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to TechPower! By using our website, enrolling in courses,
              or purchasing products and services, you agree to abide by these
              Terms and Conditions. Please read them carefully before
              proceeding.
            </p>
          </div>

          {/* Course Enrollment & Access */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Course Enrollment & Access
            </h2>
            <p className="mb-4">
              Upon successful enrollment and payment, you will gain access to
              the selected course materials.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Course access is personal to you and cannot be shared with
                others. Any unauthorized distribution of course materials will
                result in termination of access.
              </li>
            </ul>
          </div>

          {/* Payments and Pricing */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Payments and Pricing
            </h2>
            <p className="mb-4">
              All fees for courses and services are listed on our website and
              must be paid in full before accessing any content.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Prices may vary and are subject to change at TechPower’s
                discretion. However, any changes will not affect already
                purchased courses or services.
              </li>
            </ul>
          </div>

          {/* No Refund Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              No Refund Policy
            </h2>
            <p className="mb-4">
              Please note that all payments made for our courses, products, and
              services are final. There will be no refunds issued once a
              payment has been made, regardless of course completion status or
              satisfaction level.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                By completing the purchase, you acknowledge and accept the
                no-refund policy.
              </li>
            </ul>
          </div>

          {/* User Conduct */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              User Conduct
            </h2>
            <p className="mb-4">
              You agree to use our website and services only for lawful
              purposes.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You will not upload or share harmful, offensive, or malicious
                content on our platform.
              </li>
              <li>
                Any violation of these rules may result in suspension or
                termination of your account, without any refund.
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Intellectual Property
            </h2>
            <p className="mb-4">
              All content on the TechPower platform, including course
              materials, videos, graphics, and text, is the intellectual
              property of TechPower and its partners.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You may not reproduce, distribute, or publicly display any
                course materials without prior written consent from TechPower.
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Limitation of Liability
            </h2>
            <p className="mb-4">
              TechPower provides its services “as is” and makes no guarantees
              regarding the accuracy, effectiveness, or outcomes of the
              courses.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We are not liable for any direct, indirect, incidental, or
                consequential damages arising from your use of our website or
                services.
              </li>
            </ul>
          </div>

          {/* Account Termination */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Account Termination
            </h2>
            <p className="mb-4">
              TechPower reserves the right to terminate or suspend your account
              at any time if you breach these terms or engage in illegal
              activities.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                In the event of account termination due to a violation, no
                refunds will be issued.
              </li>
            </ul>
          </div>

          {/* Modification of Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Modification of Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be posted on this page, and continued use of
              our services signifies your acceptance of the updated terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Governing Law
            </h2>
            <p className="leading-relaxed">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the Federal Republic of Nigeria,
              without regard to its conflict of law principles.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#082a5e] mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              For questions or concerns about this Privacy Policy or Terms and
              Conditions, please contact us at{" "}
              <Link
                to="mailto:info@techpowerinc.com"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                info@techpowerinc.com
              </Link>
              .
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

export default TermsOfUse;