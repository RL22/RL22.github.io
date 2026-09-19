"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BuildingItem } from "../blog/content";
import { typeLabel } from "../blog/format";

export default function BuildingList({ items }: { items: BuildingItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <motion.a
          key={item.slug}
          href={`/blog/${item.slug}/`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
          className="group flex flex-col bg-cream/40 rounded-2xl border border-cream-dark p-5 hover:border-brand/40 transition-colors"
        >
          <div className="relative aspect-[1200/630] rounded-lg overflow-hidden mb-4 bg-brand/10">
            <img
              src={`/blog/${item.slug}/opengraph-image`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-brand-dark text-xs font-bold uppercase tracking-widest block mb-1">
              {typeLabel[item.type]}
            </span>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-1.5">
              <span className="group-hover:text-brand-dark transition-colors">{item.title}</span>
              <ArrowUpRight
                className="w-4 h-4 text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.blurb}</p>
            <p className="text-sm font-medium text-gray-600">{item.meta}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
