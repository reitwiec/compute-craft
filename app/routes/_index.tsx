import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import SubmitButton from "~/components/SubmitButton";
import { Link } from "@remix-run/react";
import landing from "../designs/landing.png";
import ScrollingMarquee from "~/components/Marquee";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "Compute Craft" }, { name: "description", content: "Performance Optimization for the Future" }];
};

export default function Index() {
  const [formState, setformState] = useState("active");
  return (
    <div>
      <ScrollingMarquee targetId="early-access-form" />
      <div className="flex h-screen justify-center">
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 px-4 pt-12 mx-auto" id="main-content">
          <div className="flex items-center flex-col">
            <h1 className="heading-1 !text-6xl sm:!text-7xl">Compute Craft</h1>
            <span className="caption my-4">Performance Optimization for the Future</span>
          </div>
          <hr className="block sm:hidden" />
          <h2 className="heading-2">What are we doing?</h2>
          <p className="body-face mb-10">
            We are redefining how GPU workloads achieve peak performance. Our optimization solution enhances efficiency
            across media, finance, healthcare, aerospace, and robotics to unlock faster, smarter, and more scalable
            computing.
          </p>
          <hr className="block sm:hidden" />
          <h2 className="heading-2">Our Mission</h2>
          <h3 className="heading-3 mt-4">Make GPU performance optimization accessible to companies of all sizes</h3>
          <div className="my-4 text-center">
            <img src={landing} className="w-auto mx-auto " />
          </div>
          <span className="caption-heavy font-bold">Personalized Optimizations</span>
          <p className="body-face mb-6">
            Our solution recommends optimizations tailored to your specific workload characteristics, delivering
            personalized performance enhancements that adapt to your unique needs.
          </p>
          <span className="caption-heavy">Cross-Industry Applications</span>
          <p className="body-face mb-6">
            From real-time rendering to complex simulations and AI inference, our technology delivers meaningful
            performance improvements across diverse use cases.
          </p>
          <span className="caption-heavy">Resource Efficiency</span>
          <p className="body-face mb-10">
            Achieve more with your existing infrastructure. Our solution can reduce compute costs while maintaining or
            improving output quality and speed.
          </p>

          <hr className="block sm:hidden" />
          <h2 className="heading-2">Who are we?</h2>
          <p className="body-face mb-10">
            Our founding team brings together experience in architecting GPU’s at{" "}
            <span className="font-medium highlight">NVIDIA</span> and building enterprise ML infra at{" "}
            <span className="font-medium highlight">SAP</span>, with academic backgrounds from institutions such as{" "}
            <span className="font-medium highlight">Stanford</span>,{" "}
            <span className="font-medium highlight">Cornell</span>, and{" "}
            <span className="font-medium highlight">UPenn</span>.
          </p>

          <hr className="block sm:hidden" />
          <h2 className="heading-2" id="early-access-form">
            Early Access
          </h2>
          <h3 className="heading-3 mt-4">Join Our Partnership Program</h3>
          <p className="body-face mb-6">
            For information regarding early access opportunities, please submit inquiries below. Our team will contact
            you to discuss how our technology can address your specific performance challenges.
          </p>

          <Form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              setformState("submitting");
              const res = await fetch(
                "https://script.google.com/macros/s/AKfycbz9cPul6cdLIouUmEjqU3vamuXuobfEJ8CcPlQ7gjG6g3H2pcddxwnbxIUPK_LJfUnjyQ/exec",
                {
                  method: "POST",
                  body: new FormData(e.target),
                }
              );
              setformState("submitted");
              setTimeout(() => {
                e.target.reset();
                setformState("active");
              }, 1000);
            }}
            // action="https://script.google.com/macros/s/AKfycbz9cPul6cdLIouUmEjqU3vamuXuobfEJ8CcPlQ7gjG6g3H2pcddxwnbxIUPK_LJfUnjyQ/exec"
            className="w-full mx-auto text-xs mb-6"
          >
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" name="name" required className="form-input" />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" name="email" required className="form-input" />
            </div>

            {/* Company Website Field */}
            <div className="mb-4">
              <label htmlFor="website" className="form-label">
                Company Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="https://"
                className="form-input placeholder-black/30"
              />
            </div>

            {/* Industry Dropdown */}
            <div className="mb-4">
              <label htmlFor="industry" className="form-label">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                defaultValue={"default"}
                required
                className="form-input placeholder-black/30"
              >
                <option value="default" disabled>
                  Select your industry
                </option>
                <option value="media">Media</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="hpc">HPC & Simulations</option>
                <option value="ai">AI/ML</option>
                <option value="energy">Energy & Utilities</option>
                <option value="aerospace">Aerospace</option>
                <option value="robotics">Robotics</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" name="message" rows="5" required className="form-input"></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <SubmitButton status={formState} />
            </div>
          </Form>

          <div className="flex space-x-6 items-center mt-6 pb-8">
            {/* <Link to="/privacy-policy" className="body-face hover:text-gray-900 !text-xs transition duration-300">
              Privacy Policy
            </Link>

            <Link to="/privacy-policy" className="body-face hover:text-gray-900 !text-xs transition duration-300">
              LinkedIn
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
