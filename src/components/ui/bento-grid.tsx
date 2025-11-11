"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export type Span = {
    base?: number; // default col/row span for smallest breakpoint
    md?: number;
    lg?: number;
    xl?: number;
};

export type BentoItem = {
    id: string | number;
    title?: ReactNode;
    description?: ReactNode;
    // Either pass an image src or a custom content node
    imageSrc?: string;
    imageAlt?: string;
    content?: ReactNode;
    bgClassName?: string; // tailwind bg classes
    className?: string; // extra classes
    colSpan?: Span;
    rowSpan?: Span;
    /** When true, render the card as a pure media tile (no padding/chrome) */
    variant?: "media" | "default";
};

const spanToClasses = (prefix: "col" | "row", span?: Span) => {
    const s = span ?? {};
    const base = s.base ? `${prefix}-span-${s.base}` : "";
    const md = s.md ? `md:${prefix}-span-${s.md}` : "";
    const lg = s.lg ? `lg:${prefix}-span-${s.lg}` : "";
    const xl = s.xl ? `xl:${prefix}-span-${s.xl}` : "";
    return cn(base, md, lg, xl);
};

export const BentoGrid = ({
    items,
    className,
    autoRowHeightClass = "auto-rows-[120px] md:auto-rows-[140px] lg:auto-rows-[160px]",
}: {
    items: BentoItem[];
    className?: string;
    /** Tailwind utility to control CSS grid-auto-rows across breakpoints */
    autoRowHeightClass?: string;
}) => {
    return (
        <div
            className={cn(
                "grid grid-flow-row-dense grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-10 lg:grid-cols-12 align-center place-content-center",
                autoRowHeightClass,
                className
            )}
        >
            {items.map((item, idx) => (
                <BentoCard key={item.id ?? idx} item={item} />)
            )}
        </div>
    );
};

export const BentoCard = ({ item }: { item: BentoItem }) => {
    const { title, description, imageSrc, imageAlt, content, bgClassName, className, variant } = item;
    const col = spanToClasses("col", item.colSpan);
    const row = spanToClasses("row", item.rowSpan);
    const mediaOnly =
        variant === "media" || (!!imageSrc && !content && !title && !description);

    return (
        <motion.article
            initial={{ opacity: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            className={cn(
                "group relative overflow-hidden rounded-xl",
                mediaOnly
                    ? "border-0 bg-transparent shadow-none"
                    : "border border-border/40 bg-card text-card-foreground shadow-sm",
                "transition-all will-change-transform",
                col,
                row,
                bgClassName,
                className
            )}
        >
            {/* Decorative subtle background */}
            {!mediaOnly && (
                <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:radial-gradient(1000px_400px_at_0%_0%,white,transparent)]" />
            )}
            {/* Subtle glitch effect overlay */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-[1] bg-green-500/5"
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: [0, 0.3, 0, 0.2, 0],
                    x: [0, -2, 2, -1, 0],
                    y: [0, 1, -1, 0.5, 0],
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    delay: Math.random() * 0.3,
                    ease: "easeInOut",
                }}
            />
            <div
                className={cn(
                    "relative z-10 flex h-full w-full flex-col gap-2",
                    mediaOnly ? "p-0" : "p-4 sm:p-5"
                )}
            >
                {imageSrc && (
                    <div className={cn("relative h-full w-full flex-1", mediaOnly ? "" : "mb-2")}>
                        <motion.div
                            key={imageSrc}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={imageSrc}
                                alt={imageAlt ?? "bento image"}
                                fill
                                className={cn("object-cover object-center", mediaOnly ? "" : "rounded-md")}
                                sizes="(min-width: 1024px) 33vw, 50vw"
                                priority={false}
                            />
                        </motion.div>
                        {!mediaOnly && (
                            <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/5 dark:ring-white/5" />
                        )}
                    </div>
                )}

                {content}

                {(title || description) && (
                    <div className="mt-auto">
                        {typeof title === "string" ? (
                            <h3 className="text-balance text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                                {title}
                            </h3>
                        ) : (
                            title
                        )}
                        {description && (
                            <p className="mt-1 text-sm text-muted-foreground md:text-base">{description}</p>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    );
};

export default BentoGrid;
