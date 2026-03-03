"use client";

import { useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "../SectionHeading";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ExternalLink } from "lucide-react";

const BLOGS = [
    {
        title: "CISA's Guidance After: Oracle Cloud Hack",
        description: "The recent hack of Oracle Cloud has sent shockwaves through the cybersecurity community, exposing around 6 million records and affecting over 140,000 tenants.",
        image: "/images/blogs/oracleimage.png",
        link: "https://www.linkedin.com/posts/harshit-namdev_cybersecurity-oraclecloud-cisa-activity-7319591620264312833-ui15",
    },
    {
        title: "If Your Social Media Account is Hacked, Don't Worry!",
        description: "Comprehensive guide on recovering from social media account breaches and implementing preventive security measures.",
        image: "/images/blogs/social-media-security.png",
        link: "https://www.linkedin.com/posts/harshit-namdev_cybersecurity-socialmedia-accountsecurity-activity-7315632537853513728-Ug8Q",
    },
    {
        title: "What Happened on August 13, 2024, on X/Twitter?",
        description: "Analysis of the major security incident that affected X/Twitter platform and its implications for user security.",
        image: "/images/blogs/x-ddos.jpg",
        link: "https://www.linkedin.com/posts/harshit-namdev_cybersecurity-twitter-socialmedia-activity-7315632537853513728-Ug8Q",
    },
];

export default function Blog() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards: HTMLElement[] = gsap.utils.toArray(".blog-card");
        cards.forEach((card) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 85%" },
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section id="blog" ref={sectionRef} className="py-24 md:py-32 relative">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#7c3aed]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading number="06." title="My Blogs" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {BLOGS.map((blog, idx) => (
                        <a
                            key={idx}
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="blog-card group bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_10px_40px_rgba(100,255,218,0.1)] transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-[200px] overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-heading font-bold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-4">
                                    {blog.description}
                                </p>
                                <span className="flex items-center gap-2 text-accent font-mono text-xs group-hover:gap-3 transition-all">
                                    Read More <ExternalLink size={14} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
