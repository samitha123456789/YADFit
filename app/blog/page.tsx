import Link from "next/link"
import Image from "next/image"
import SocialFloat from "@/components/social-float"
import ScrollToTop from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import BlogCard from "@/components/blog-card"

export default function BlogPage() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Effective Exercises for Building Core Strength",
      excerpt:
        "Discover the most effective exercises to build a strong core and improve your overall fitness and stability.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 15, 2023",
      author: "Alex Johnson",
      category: "Workouts",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Protein: How Much Do You Really Need?",
      excerpt:
        "Learn about protein requirements for different fitness goals and how to ensure you're getting enough in your diet.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 28, 2023",
      author: "Maria Rodriguez",
      category: "Nutrition",
    },
    {
      id: 3,
      title: "How to Stay Motivated on Your Fitness Journey",
      excerpt: "Practical tips and strategies to maintain motivation and consistency in your workout routine.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 10, 2023",
      author: "David Kim",
      category: "Motivation",
    },
    {
      id: 4,
      title: "The Benefits of High-Intensity Interval Training (HIIT)",
      excerpt:
        "Explore the science behind HIIT workouts and why they're so effective for fat loss and cardiovascular health.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 22, 2023",
      author: "Sarah Thompson",
      category: "Workouts",
    },
    {
      id: 5,
      title: "Recovery Techniques: Maximizing Your Rest Days",
      excerpt: "Learn how to optimize your recovery days to prevent injury and improve performance in your workouts.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 5, 2023",
      author: "Mike Wilson",
      category: "Recovery",
    },
    {
      id: 6,
      title: "Beginner's Guide to Strength Training",
      excerpt: "Everything you need to know to start a safe and effective strength training program as a beginner.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 18, 2023",
      author: "Emma Davis",
      category: "Workouts",
    },
  ]

  // Categories
  const categories = [
    { name: "Workouts", count: 12 },
    { name: "Nutrition", count: 8 },
    { name: "Motivation", count: 5 },
    { name: "Recovery", count: 4 },
    { name: "Success Stories", count: 7 },
    { name: "Equipment", count: 3 },
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
              Fitness <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-gray-200 animate-fade-up">
              Tips, advice, and inspiration to help you on your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
                    Previous
                  </Button>
                  <Button className="bg-primary hover:bg-primary-700 text-white">1</Button>
                  <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
                    2
                  </Button>
                  <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
                    3
                  </Button>
                  <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="bg-gray-900 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Search</h3>
                <div className="relative">
                  <Input placeholder="Search articles..." className="bg-gray-800 border-gray-700 text-white pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-900 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex justify-between items-center text-gray-300 hover:text-primary transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-900 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-gray-400 text-sm">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest fitness tips and updates.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
                  <Button className="w-full bg-primary hover:bg-primary-700 text-white">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join PowerFit today and take the first step towards a healthier, stronger you.
          </p>
          <Link href="/membership">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
