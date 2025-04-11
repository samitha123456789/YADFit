"use client";

import type React from "react";

import { useState } from "react";
import SocialFloat from "@/components/social-float";
import ScrollToTop from "@/components/scroll-to-top";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      message:
        "Your message has been sent successfully. We'll get back to you soon!",
      type: "success",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-black">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Get in touch with our team for any questions, feedback, or to
              schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  {formStatus.message && (
                    <div
                      className={`p-4 rounded-md ${
                        formStatus.type === "success"
                          ? "bg-green-900/50 text-green-300"
                          : "bg-red-900/50 text-red-300"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">
                        Our Location
                      </h3>
                      <p className="text-gray-400 mt-1">Horana, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">
                        Phone
                      </h3>
                      <p className="text-gray-400 mt-1">
                        <a
                          href="tel:+94 76 737 0688"
                          className="hover:text-primary transition-colors"
                        >
                          +94 76 737 0688
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">
                        Email
                      </h3>
                      <p className="text-gray-400 mt-1">
                        <a
                          href="mailto:thenukaindrachapa@gmail.com"
                          className="hover:text-primary transition-colors"
                        >
                          thenukaindrachapa@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-800">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://wa.me/+94767370688"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.instagram.com/yad_fit_/?fbclid=IwY2xjawJld2dleHRuA2FlbQIxMAABHuQ2iWqCpC6ESzcx1S4vr-3pIS-LU_YsNfHi4SkzL5__Qh5RCRc1SiVZHmbo_aem_X0K8ZTXE1f7cd5F8L6JTow#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100092632159593"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
            <div className="rounded-lg overflow-hidden h-[400px] bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBy1BkxUIyXbUteAS9J4q9gjN1cCu1_v-4&q=YADFit+Gym,213%2FB+Colombo+-+Horana+Rd,Sri+Lanka"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YADFit Gym Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Opening <span className="text-primary">Hours</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our gym is open 24/7 for members. Staff hours are as follows:
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Weekdays</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span>5:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Weekends</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span>5:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Sunday</span>
                  <span>5:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
