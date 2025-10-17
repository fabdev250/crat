import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  // SEO Meta tags
  useEffect(() => {
    document.title = "Contact Us - Crat_Agri | Get in Touch";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with Crat_Agri for agricultural solutions, FarmCloud™ demos, and expert consultation. Contact our team of agricultural experts today."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Get in touch with Crat_Agri for agricultural solutions, FarmCloud™ demos, and expert consultation. Contact our team of agricultural experts today.";
      document.head.appendChild(meta);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Crat_Agri - Innovative Farming Solutions";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
