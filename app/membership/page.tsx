import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import PricingCard from "@/components/pricing-card"
import { Check } from "lucide-react"

export default function MembershipPage() {
  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-black">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              Membership <span className="text-primary">Plans</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Choose the perfect membership plan to fit your fitness goals and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible <span className="text-primary">Pricing Options</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a variety of membership options to suit your needs, with no hidden fees and flexible contract
              terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="29"
              period="monthly"
              description="Perfect for beginners looking to start their fitness journey."
              features={[
                "Access to gym facilities",
                "Basic fitness assessment",
                "Access to select group classes",
                "Locker room access",
                "Online workout resources",
              ]}
              buttonText="Get Started"
              popular={false}
            />

            <PricingCard
              title="Premium"
              price="59"
              period="monthly"
              description="Our most popular plan for dedicated fitness enthusiasts."
              features={[
                "Unlimited gym access 24/7",
                "All group classes included",
                "1 personal training session/month",
                "Nutrition consultation",
                "Access to premium facilities",
                "Discounts on supplements",
                "Guest passes (2 per month)",
              ]}
              buttonText="Join Now"
              popular={true}
            />

            <PricingCard
              title="Elite"
              price="99"
              period="monthly"
              description="The ultimate fitness experience with premium perks and services."
              features={[
                "Unlimited gym access 24/7",
                "All group classes included",
                "4 personal training sessions/month",
                "Quarterly fitness assessment",
                "Customized nutrition plan",
                "Access to all facilities",
                "Priority class booking",
                "Unlimited guest passes",
                "Exclusive events access",
              ]}
              buttonText="Go Elite"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section-padding bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Membership <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All PowerFit members enjoy these core benefits, regardless of their membership tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">State-of-the-Art Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Modern cardio equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Free weights and strength machines</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Functional training area</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Dedicated stretching zones</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Certified fitness professionals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Initial fitness assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Equipment orientation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Fitness goal setting</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Convenience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Mobile app for bookings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Flexible cancellation policy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Clean, modern locker rooms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Free WiFi throughout facility</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Member events and challenges</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Supportive fitness community</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Accountability partners</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Social media groups</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Digital Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Workout tracking app</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Nutrition guides</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Video exercise library</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Wellness articles and tips</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Extras</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Partner discounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Referral rewards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Birthday perks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span className="text-gray-300">Loyalty program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our membership plans and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Is there a joining fee?</h3>
              <p className="text-gray-400">
                We occasionally run promotions with no joining fee. Standard joining fee is $49, which covers your
                initial fitness assessment and orientation.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Can I freeze my membership?</h3>
              <p className="text-gray-400">
                Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel
                at no additional cost.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">What is the cancellation policy?</h3>
              <p className="text-gray-400">
                Monthly memberships require 30 days' notice for cancellation. Annual memberships can be cancelled with
                30 days' notice after the initial 6-month commitment.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Are there family or corporate discounts?</h3>
              <p className="text-gray-400">
                Yes, we offer family plans with discounted rates for additional family members. Corporate rates are
                available for companies with 5+ employees joining.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Can I try before I join?</h3>
              <p className="text-gray-400">
                We offer a free 1-day pass for prospective members to experience our facilities and classes before
                committing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
