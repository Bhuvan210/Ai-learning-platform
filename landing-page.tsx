import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Code, Globe, Laptop, Search, Star, Users } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">CodeNexus</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn to Code with CodeNexus
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Master programming skills with our interactive courses. Join a community of learners and start your
                  coding journey today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Globe className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Learn Anywhere</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Access our courses from anywhere in the world, at any time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Community Support</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Join our vibrant community of learners and mentors.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Laptop className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Hands-on Projects</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Build real-world projects to reinforce your learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Popular Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Web Development", icon: Globe },
                { title: "Data Science", icon: BookOpen },
                { title: "Mobile App Development", icon: Laptop },
              ].map((course, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <course.icon className="h-10 w-10 mb-2" />
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Master the fundamentals and advanced concepts of {course.title.toLowerCase()}.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Students Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Alex Johnson", role: "Web Developer" },
                { name: "Samantha Lee", role: "Data Scientist" },
                { name: "Michael Chen", role: "Mobile App Developer" },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <Star className="h-10 w-10 mb-2 text-yellow-500" />
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    "CodeNexus has been instrumental in my journey to becoming a {testimonial.role}. The courses are
                    comprehensive and the community is incredibly supportive."
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeNexus. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
