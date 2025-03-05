import { Helmet } from "react-helmet-async";

function TechPowerSchema({ locale = 'en' }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": locale === 'en' ? "Tech Power Africa" : "Tech Power Africa(Nigeria)",
    "url": "https://techpowerinc.com",
    "logo": "https://techpowerinc.com/logo.png",
    "description": locale === 'en' 
      ? "Tech Power Africa is a technology academy dedicated to empowering individuals with cutting-edge digital skills. The academy provides training in various tech fields, including web development, software engineering, data science, cybersecurity, and more. With a mission to bridge the digital skills gap in Africa, Tech Power Africa offers hands-on learning experiences, mentorship, and career support to help learners excel in the tech industry."
      : "Tech Power Africa es una academia de tecnología dedicada a empoderar a las personas con habilidades digitales de vanguardia. La academia ofrece capacitación en diversos campos tecnológicos, como desarrollo web, ingeniería de software, ciencia de datos, ciberseguridad y más. Con la misión de cerrar la brecha de habilidades digitales en África, Tech Power Africa proporciona experiencias de aprendizaje prácticas, mentoría y apoyo profesional para ayudar a los estudiantes a destacarse en la industria tecnológica.",
    "sameAs": [
      "https://www.instagram.com/techpowerafrica/?hl=en",
      "https://www.facebook.com/share/1QuQuc7UVB/",
      "https://www.linkedin.com/company/techpower-africa/about/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@techpowerinc.com",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos",
      "postalCode": "100001",
      "addressCountry": "Nigeria"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default TechPowerSchema;