"use client"

import type React from "react"

import { useState } from "react"
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

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateEmail(email)) {
      setIsValid(true)
      setIsSubmitted(true)

      // Trigger file download
      setTimeout(() => {
        const link = document.createElement("a")
        link.href = "/assets/cv.pdf" // Replace with your actual file path
        link.download = "cv.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, 500)
    } else {
      setIsValid(false)
    }
  }

  const handleReset = () => {
    setEmail("")
    setIsSubmitted(false)
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <ArrowDownToLine />
            Pobierz aktualne CV
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md dark:bg-slate-900 dark:text-white dark:border-slate-700">
          <DialogHeader>
            <DialogTitle>{isSubmitted ? "Operacja powiedziona." : "Wprowadź adres e-mail"}</DialogTitle>
            <DialogDescription className="dark:text-slate-400">
              {isSubmitted ? "Pobieranie rozpocznie się za moment." : "Potwierdź swój adres e-mail, aby zobaczyć plik."}
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <p className="text-center dark:text-slate-300">Dziękuję 🤝</p>
              <Button
                variant="outline"
                onClick={handleReset}
                className="mt-6 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Zamknij
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
                  <p className="text-sm text-red-500 dark:text-red-400">Wprowadź poprawny adres e-mail!</p>
                )}
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                  <Download className="mr-2 h-4 w-4" />
                  Pobierz
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

