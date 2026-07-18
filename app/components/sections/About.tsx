"use client";

import Container from "../ui/Container";
import AnimatedTitle from "../ui/AnimatedTitle";

export default function About() {
    return (
        <section
            id="about"
            className="bg-white py-28"
        >
            <Container>

                <div className="mb-16">
                    <AnimatedTitle text="Why WebSoon?" />
                </div>

                <div className="grid gap-16 lg:grid-cols-2">

                    <p className="text-2xl leading-relaxed tracking-tight text-slate-900">
                        Every business has a story, but many websites fail to tell it.
                        We begin by understanding your business, your customers and the
                        challenges you face before making design or development decisions.
                    </p>

                    <div>

                        <p className="leading-8 text-slate-600">
                            Based in Kerala, India, WebSoon focuses on building thoughtful
                            websites and web applications that are fast, reliable and easy
                            to use. We believe quality comes from listening carefully,
                            solving real problems and paying attention to the details that
                            people often overlook.
                        </p>

                        <div className="mt-10 h-px w-20 bg-slate-200" />

                        <p className="mt-6 text-sm tracking-wide text-slate-500">
                            Kerala, India
                        </p>

                    </div>

                </div>

            </Container>
        </section>
    );
}