import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">
                YAD<span className="text-white">FIT</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness, strength, and community. Join us on your journey to a healthier,
              stronger you.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100092632159593"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/yad_fit_/?fbclid=IwY2xjawJld2dleHRuA2FlbQIxMAABHuQ2iWqCpC6ESzcx1S4vr-3pIS-LU_YsNfHi4SkzL5__Qh5RCRc1SiVZHmbo_aem_X0K8ZTXE1f7cd5F8L6JTow#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/classes" className="text-gray-400 hover:text-primary transition-colors">
                  Classes
                </Link>
              </li> */}
             {/* <li>
                <Link href="/membership" className="text-gray-400 hover:text-primary transition-colors">
                  Membership
                </Link>
              </li> */}
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              {/*<li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Horana, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary shrink-0" size={18} />
                <a href="tel:+94 76 737 0688" className="text-gray-400 hover:text-primary transition-colors">
                  +94 76 737 0688
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-primary shrink-0" size={18} />
                <a href="mailto:thenukaindrachapa@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                thenukaindrachapa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for tips, news and upcoming events</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YADFit Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
