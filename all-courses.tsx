import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Globe, Laptop, Server, ShieldCheck } from 'lucide-react'

const courses = [
  { title: "Web Development", icon: Globe, description: "Learn front-end and back-end web development", href: "/courses/web-development" },
  { title: "Data Science", icon: BookOpen, description: "Master data analysis and machine learning", href: "/courses/data-science" },
  { title: "Mobile App Development", icon: Laptop, description: "Build iOS and Android applications", href: "/courses/mobile-development" },
  { title: "Cybersecurity", icon: ShieldCheck, description: "Protect systems and networks from digital attacks", href: "/courses/cybersecurity" },
  { title: "DevOps", icon: Server, description: "Learn to streamline development and operations", href: "/courses/devops" },
  { title: "Artificial Intelligence", icon: Code, description: "Explore machine learning and AI technologies", href: "/courses/artificial-intelligence" },
]

export default function AllCourses() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">CodeNexus</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              All Courses
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <course.icon className="h-8 w-8 mb-2" />
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Course content preview could go here */}
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={course.href}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeNexus. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
