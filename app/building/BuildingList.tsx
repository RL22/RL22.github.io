"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BuildingItem } from "../blog/content";

export default function BuildingList({ items }: { items: BuildingItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-14">
      {items.map((item, i) => (
        <motion.a
          key={item.slug}
          href={`/blog/${item.slug}/`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
          className="group border-t border-gray-200 py-6 block"
        >
          <img
            src={`/blog/${item.slug}/opengraph-image`}
            alt=""
            className="w-full aspect-video object-cover rounded-lg mb-4 bg-brand/10"
            loading="lazy"
          />
          <h3 className="font-semibold text-lg mb-1 flex items-center gap-1.5">
            <span className="group-hover:text-brand-dark transition-colors">{item.title}</span>
            <ArrowUpRight
              className="w-4 h-4 text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-2">{item.meta}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{item.blurb}</p>
        </motion.a>
      ))}
    </div>
  );
}
