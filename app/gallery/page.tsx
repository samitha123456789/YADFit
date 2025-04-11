import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  // Gallery images data
  const images = [
    {
      src: "/facility1.jpg",
      alt: "Gym facilities",
      category: "facilities",
    },
    {
      src: "/sup1.jpg",
      alt: "Supplements",
      category: "Supplements",
    },
    {
      src: "/training1.jpg",
      alt: "Personal training",
      category: "training",
    },
    {
      src: "/facility2.jpg",
      alt: "Gym facilities",
      category: "facilities",
    },
    {
      src: "/sup3.jpg",
      alt: " Supplements",
      category: "Supplements",
    },
    {
      src: "/facility3.jpg",
      alt: "Gym facilities",
      category: "facilities",
    },
    {
      src: "/training2.jpg",
      alt: "Personal training",
      category: "training",
    },
    {
      src: "/training4.jpg",
      alt: "Group training",
      category: "training",
    },
    {
      src: "/sup2.jpg",
      alt: "Pre-workout supplements",
      category: "Supplements",
    },
    {
      src: "/training3.jpg",
      alt: "Personal training",
      category: "training",
    },
    {
      src: "/training5.jpg",
      alt: " Group training",
      category: "training",
    },
    {
      src: "/training6.jpg",
      alt: " Personal training",
      category: "training",
    },
  ]

  return (
    <>
      <SocialFloat />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-black">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-down">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Take a visual tour of our facilities, classes, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  )
}
