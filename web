"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { ChevronRight, ChevronDown, Plus, Sparkles, Zap, Moon, Sun } from 'lucide-react'

export default function Dashboard() {
  const [progress, setProgress] = useState(65)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    learningPath: true,
    recommendedCourses: true,
    targetedInterventions: true,
    careerInsights: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 1) % 101)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const streakData = [
    { day: 'Mon', completed: true },
    { day: 'Tue', completed: true },
    { day: 'Wed', completed: true },
    { day: 'Thu', completed: true },
    { day: 'Fri', completed: false },
    { day: 'Sat', completed: false },
    { day: 'Sun', completed: false },
  ]

  const improvementAreas = [
    { skill: 'Data Structures', progress: 75 },
    { skill: 'Algorithms', progress: 60 },
    { skill: 'Machine Learning', progress: 40 },
    { skill: 'Cloud Computing', progress: 30 },
  ]

  return (
    <div className="min-h-screen p-4 space-y-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="container mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Vivek's Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>
        </div>
        
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Skills Progress</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Overall Growth</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="w-full h-2" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Learning Streak</h2>
              <div className="flex justify-between">
                {streakData.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${day.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                      {day.completed && <Zap className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-xs mt-1">{day.day}</span>
                  </div>
                ))}
              </div>
              <p className="text-center mt-4 font-semibold">4 Day Streak! 🔥</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Improvement Areas</h2>
              <div className="space-y-4">
                {improvementAreas.map((area, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{area.skill}</span>
                      <span className="text-sm font-medium">{area.progress}%</span>
                    </div>
                    <Progress value={area.progress} className="w-full h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {Object.entries({
            learningPath: { title: "Personalized Learning Path", color: "bg-blue-100 dark:bg-blue-900" },
            recommendedCourses: { title: "Recommended Courses", color: "bg-purple-100 dark:bg-purple-900" },
            targetedInterventions: { title: "Targeted Interventions", color: "bg-pink-100 dark:bg-pink-900" },
            careerInsights: { title: "Career Insights", color: "bg-yellow-100 dark:bg-yellow-900" }
          }).map(([key, { title, color }]) => (
            <div key={key} className={`${color} rounded-lg p-4 transition-all duration-300 ease-in-out`}>
              <button 
                className="flex items-center text-lg font-semibold w-full justify-between"
                onClick={() => toggleSection(key)}
              >
                {title}
                {expandedSections[key as keyof typeof expandedSections] ? <ChevronDown className="ml-2" /> : <ChevronRight className="ml-2" />}
              </button>
              {expandedSections[key as keyof typeof expandedSections] && (
                <ul className="mt-4 space-y-2">
                  {key === 'learningPath' && (
                    <>
                      <li className="flex items-center">
                        <Checkbox id="task-1" />
                        <label htmlFor="task-1" className="ml-2 text-sm">Master Advanced Data Structures</label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox id="task-2" />
                        <label htmlFor="task-2" className="ml-2 text-sm">Dive into Machine Learning Fundamentals</label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox id="task-3" />
                        <label htmlFor="task-3" className="ml-2 text-sm">Explore Cloud Computing Essentials</label>
                      </li>
                    </>
                  )}
                  {key === 'recommendedCourses' && (
                    <>
                      <li className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
                        <span className="text-sm">Python for Data Science Mastery</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm">AWS Certified Solutions Architect - Pro</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
                        <span className="text-sm">Advanced Agile Project Management</span>
                      </li>
                    </>
                  )}
                  {key === 'targetedInterventions' && (
                    <>
                      <li className="flex items-center">
                        <Checkbox id="intervention-1" />
                        <label htmlFor="intervention-1" className="ml-2 text-sm">Complete the "Advanced SQL for Data Analysis" challenge</label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox id="intervention-2" />
                        <label htmlFor="intervention-2" className="ml-2 text-sm">Lead a team in the upcoming AI Hackathon</label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox id="intervention-3" />
                        <label htmlFor="intervention-3" className="ml-2 text-sm">Contribute to an open-source ML project</label>
                      </li>
                    </>
                  )}
                  {key === 'careerInsights' && (
                    <>
                      <li className="text-sm flex items-center"><Sparkles className="mr-2 h-4 w-4" />AI and ML skills are revolutionizing industries</li>
                      <li className="text-sm flex items-center"><Sparkles className="mr-2 h-4 w-4" />Cloud-native development is the future of tech</li>
                      <li className="text-sm flex items-center"><Sparkles className="mr-2 h-4 w-4" />Emotional intelligence is key in tech leadership</li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        <Card className="mt-8">
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-yellow-200 dark:bg-yellow-800 rounded-full px-4 py-2">
                <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
                <span className="text-sm font-medium">Python Guru</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-200 dark:bg-blue-800 rounded-full px-4 py-2">
                <span className="w-6 h-6 rounded-full bg-blue-500"></span>
                <span className="text-sm font-medium">Data Viz Wizard</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-200 dark:bg-green-800 rounded-full px-4 py-2">
                <span className="w-6 h-6 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium">AI Pioneer</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button className="mt-8 w-full justify-center" variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Add a new milestone
        </Button>
      </div>
    </div>
  )
}
