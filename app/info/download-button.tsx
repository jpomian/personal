"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Check, Download, ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EmailDownloadModal() {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('+')
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [mathError, setMathError] = useState(false)

  useEffect(() => {
    if (isOpen) {
      generateNewProblem()
    }
  }, [isOpen])

  const generateNewProblem = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1
    const newNum2 = Math.floor(Math.random() * 10) + 1
    const operators = ['+', '-', '×']
    const newOperator = operators[Math.floor(Math.random() * operators.length)]
    
    let newCorrectAnswer
    switch(newOperator) {
      case '+': newCorrectAnswer = newNum1 + newNum2; break
      case '-': newCorrectAnswer = newNum1 - newNum2; break
      case '×': newCorrectAnswer = newNum1 * newNum2; break
      default: newCorrectAnswer = 0
    }

    setNum1(newNum1)
    setNum2(newNum2)
    setOperator(newOperator)
    setCorrectAnswer(newCorrectAnswer)
    setUserAnswer('')
    setMathError(false)
  }

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleDownload = async () => {
    try {
      const response = await fetch('/cv.pdf')
      if (!response.ok) throw new Error('File not found')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = 'cv.pdf'
      document.body.appendChild(link)
      link.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed - please try again later')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setIsValid(false)
      return
    }

    const parsedAnswer = parseInt(userAnswer)
    if (parsedAnswer !== correctAnswer) {
      setMathError(true)
      return
    }

    setIsValid(true)
    setMathError(false)
    setIsSubmitted(true)
    
    try {
      await handleDownload()
    } finally {
      // Optional: Add email to your analytics/DB here
    }
  }

  const handleReset = () => {
    setEmail("")
    setIsSubmitted(false)
    setIsOpen(false)
    generateNewProblem()
  }

  return (
    <div className="flex items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <ArrowDownToLine />
            Download latest CV
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md dark:bg-slate-900 dark:text-white dark:border-slate-700">
          <DialogHeader>
            <DialogTitle>{isSubmitted ? "Success!" : "Attention! Information needed."}</DialogTitle>
            <DialogDescription className="dark:text-slate-400">
              {isSubmitted ? "Download will start right away." : "Kindly input your email address and solve the equation to gain access to the CV."}
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <p className="text-center dark:text-slate-300">Thank you 🤝</p>
              <Button
                variant="outline"
                onClick={handleReset}
                className="mt-6 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-slate-300">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (!isValid) setIsValid(true)
                  }}
                  className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                    !isValid ? "border-red-500 dark:border-red-500" : ""
                  }`}
                />
                {!isValid && (
                  <p className="text-sm text-red-500 dark:text-red-400">Enter valid email!</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mathAnswer" className="dark:text-slate-300">
                  Solve: {num1} {operator} {num2} = ?
                </Label>
                <Input
                  id="mathAnswer"
                  type="number"
                  step="1"
                  placeholder="Final answer"
                  value={userAnswer}
                  onChange={(e) => {
                    setUserAnswer(e.target.value)
                    if (mathError) setMathError(false)
                  }}
                  className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                    mathError ? "border-red-500 dark:border-red-500" : ""
                  }`}
                />
                {mathError && (
                  <p className="text-sm text-red-500 dark:text-red-400">Incorrect answer. Try again!</p>
                )}
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}