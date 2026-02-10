"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CommunityImage() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-[1000px] overflow-hidden"
      >
        <Image
          src="/images/landing_page_1.jpg"
          alt="The People People community wearing Be A People Person merchandise"
          width={1200}
          height={500}
          className="h-auto w-full object-cover"
          priority={false}
        />
      </motion.div>
    </section>
  );
}
