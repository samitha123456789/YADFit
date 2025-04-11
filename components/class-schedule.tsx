"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const classTypes = ["All", "HIIT", "Strength", "Yoga", "Spin", "Pilates", "Boxing"]

const scheduleData = {
  Monday: [
    { time: "06:00 AM", class: "HIIT", trainer: "Alex Johnson", duration: "45 min" },
    { time: "09:00 AM", class: "Yoga", trainer: "Maria Rodriguez", duration: "60 min" },
    { time: "12:00 PM", class: "Strength", trainer: "David Kim", duration: "60 min" },
    { time: "05:30 PM", class: "Spin", trainer: "Sarah Thompson", duration: "45 min" },
    { time: "07:00 PM", class: "Boxing", trainer: "Mike Wilson", duration: "60 min" },
  ],
  Tuesday: [
    { time: "06:00 AM", class: "Spin", trainer: "Sarah Thompson", duration: "45 min" },
    { time: "09:00 AM", class: "Pilates", trainer: "Maria Rodriguez", duration: "50 min" },
    { time: "12:00 PM", class: "HIIT", trainer: "Alex Johnson", duration: "45 min" },
    { time: "05:30 PM", class: "Strength", trainer: "David Kim", duration: "60 min" },
    { time: "07:00 PM", class: "Yoga", trainer: "Emma Davis", duration: "60 min" },
  ],
  Wednesday: [
    { time: "06:00 AM", class: "Strength", trainer: "David Kim", duration: "60 min" },
    { time: "09:00 AM", class: "HIIT", trainer: "Alex Johnson", duration: "45 min" },
    { time: "12:00 PM", class: "Yoga", trainer: "Maria Rodriguez", duration: "60 min" },
    { time: "05:30 PM", class: "Boxing", trainer: "Mike Wilson", duration: "60 min" },
    { time: "07:00 PM", class: "Spin", trainer: "Sarah Thompson", duration: "45 min" },
  ],
  Thursday: [
    { time: "06:00 AM", class: "Yoga", trainer: "Emma Davis", duration: "60 min" },
    { time: "09:00 AM", class: "Strength", trainer: "David Kim", duration: "60 min" },
    { time: "12:00 PM", class: "Spin", trainer: "Sarah Thompson", duration: "45 min" },
    { time: "05:30 PM", class: "HIIT", trainer: "Alex Johnson", duration: "45 min" },
    { time: "07:00 PM", class: "Pilates", trainer: "Maria Rodriguez", duration: "50 min" },
  ],
  Friday: [
    { time: "06:00 AM", class: "HIIT", trainer: "Alex Johnson", duration: "45 min" },
    { time: "09:00 AM", class: "Boxing", trainer: "Mike Wilson", duration: "60 min" },
    { time: "12:00 PM", class: "Pilates", trainer: "Maria Rodriguez", duration: "50 min" },
    { time: "05:30 PM", class: "Strength", trainer: "David Kim", duration: "60 min" },
    { time: "07:00 PM", class: "Yoga", trainer: "Emma Davis", duration: "60 min" },
  ],
  Saturday: [
    { time: "08:00 AM", class: "HIIT", trainer: "Alex Johnson", duration: "45 min" },
    { time: "10:00 AM", class: "Yoga", trainer: "Maria Rodriguez", duration: "60 min" },
    { time: "12:00 PM", class: "Spin", trainer: "Sarah Thompson", duration: "45 min" },
    { time: "02:00 PM", class: "Boxing", trainer: "Mike Wilson", duration: "60 min" },
  ],
  Sunday: [
    { time: "09:00 AM", class: "Yoga", trainer: "Emma Davis", duration: "60 min" },
    { time: "11:00 AM", class: "Pilates", trainer: "Maria Rodriguez", duration: "50 min" },
    { time: "01:00 PM", class: "Strength", trainer: "David Kim", duration: "60 min" },
  ],
}

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState("Monday")
  const [filter, setFilter] = useState("All")

  const filteredClasses = scheduleData[activeDay as keyof typeof scheduleData].filter(
    (item) => filter === "All" || item.class === filter,
  )

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <Tabs defaultValue="Monday" onValueChange={setActiveDay}>
        <TabsList className="grid grid-cols-7 mb-6">
          {days.map((day) => (
            <TabsTrigger key={day} value={day} className="data-[state=active]:bg-primary">
              {day.substring(0, 3)}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mb-6 flex flex-wrap gap-2">
          {classTypes.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "outline"}
              className={filter === type ? "bg-primary hover:bg-primary-700" : ""}
              onClick={() => setFilter(type)}
              size="sm"
            >
              {type}
            </Button>
          ))}
        </div>

        {days.map((day) => (
          <TabsContent key={day} value={day} className="mt-0">
            <div className="space-y-4">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((item, index) => (
                  <motion.div
                    key={`${day}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-900 rounded-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3 sm:mb-0">
                      <span className="text-primary font-semibold">{item.time}</span>
                      <span className="text-white font-bold">{item.class}</span>
                      <span className="text-gray-400">{item.trainer}</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <span className="text-gray-400 text-sm">{item.duration}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary-700 text-white">
                        Book
                      </Button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">No classes found for the selected filter.</div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
