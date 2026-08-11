"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { Check, Download, ArrowDownToLine, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*                              Puzzle generation                             */
/* -------------------------------------------------------------------------- */

const FRUITS = [
  { emoji: "🍎", name: "jabłko" },
  { emoji: "🍌", name: "banan" },
  { emoji: "🍇", name: "winogrona" },
  { emoji: "🍓", name: "truskawka" },
  { emoji: "🍊", name: "pomarańcza" },
  { emoji: "🍐", name: "gruszka" },
  { emoji: "🍉", name: "arbuz" },
  { emoji: "🍍", name: "ananas" },
  { emoji: "🥝", name: "kiwi" },
  { emoji: "🍒", name: "wiśnie" },
] as const;

type Fruit = (typeof FRUITS)[number];

type Puzzle = {
  sequence: string[];
  answer: string;
  options: string[];
  labels: Record<string, string>;
};

const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/** Picks `count` distinct fruits at random. */
const pickFruits = (count: number): Fruit[] => shuffle([...FRUITS]).slice(0, count);

/**
 * Each generator returns the *full* pattern (including the answer as the last
 * element). The answer is then sliced off by `generatePuzzle`.
 */
const PATTERNS: Array<(f: Fruit[]) => string[]> = [
  // A B A B | A
  ([a, b]) => [a.emoji, b.emoji, a.emoji, b.emoji, a.emoji],
  // A A B B | A
  ([a, b]) => [a.emoji, a.emoji, b.emoji, b.emoji, a.emoji],
  // A B C A B | C
  ([a, b, c]) => [a.emoji, b.emoji, c.emoji, a.emoji, b.emoji, c.emoji],
  // A B B A B | B
  ([a, b]) => [a.emoji, b.emoji, b.emoji, a.emoji, b.emoji, b.emoji],
  // A A B A A | B
  ([a, b]) => [a.emoji, a.emoji, b.emoji, a.emoji, a.emoji, b.emoji],
  // A B C C B | A  (mirror / palindrome)
  ([a, b, c]) => [a.emoji, b.emoji, c.emoji, c.emoji, b.emoji, a.emoji],
];

const generatePuzzle = (): Puzzle => {
  const patternFn = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
  // 4 distinct fruits is enough for every pattern above
  const chosen = pickFruits(4);
  const full = patternFn(chosen);

  const answer = full[full.length - 1];
  const sequence = full.slice(0, -1);

  const usedInSequence = new Set(sequence);
  const outsiders = FRUITS.filter(
    (f) => f.emoji !== answer && !usedInSequence.has(f.emoji),
  );
  const insiders = FRUITS.filter(
    (f) => f.emoji !== answer && usedInSequence.has(f.emoji),
  );

  const distractors = [...shuffle(outsiders), ...shuffle(insiders)]
    .slice(0, 3)
    .map((f) => f.emoji);

  const options = shuffle([answer, ...distractors]);

  const labels = Object.fromEntries(FRUITS.map((f) => [f.emoji, f.name]));

  return { sequence, answer, options, labels };
};

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export default function EmailDownloadModal() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [shake, setShake] = useState(false);

  // Honeypot – must stay empty
  const [website, setWebsite] = useState("");

  const router = useRouter();

  const newPuzzle = useCallback(() => {
    setPuzzle(generatePuzzle());
    setSelected(null);
  }, []);

  useEffect(() => {
    if (isOpen) newPuzzle();
  }, [isOpen, newPuzzle]);

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleDownload = async () => {
    try {
      const response = await fetch("/cv.pdf");
      if (!response.ok) throw new Error("File not found");
      router.push("/cv.pdf");
    } catch (error) {
      console.error("Download failed:", error);
      alert(
        "Pobieranie nie powiodło się. Wyślij do mnie mail na jpomianowski@outlook.com - aby otrzymać CV.",
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot caught in the honeypot – pretend nothing happened.
    if (website.trim() !== "") return;

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    if (!puzzle || selected !== puzzle.answer) {
      setCaptchaError(true);
      setShake(true);
      setTimeout(() => setShake(false), 400);
      // Regenerate so guessing has no cumulative advantage
      newPuzzle();
      return;
    }

    setIsValid(true);
    setCaptchaError(false);
    setIsSubmitted(true);

    await handleDownload();
  };

  const handleReset = () => {
    setEmail("");
    setIsSubmitted(false);
    setIsOpen(false);
    setCaptchaError(false);
    newPuzzle();
  };

  return (
    <div className="flex items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="relative dark:bg-slate-800 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] dark:hover:bg-slate-800 group"
          >
            <span className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-white/30 transition-all duration-300 pointer-events-none" />
            <span className="absolute inset-[3px] rounded-[4px] border-2 border-transparent group-hover:border-amber-200/30 transition-all duration-300 pointer-events-none" />
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Pobierz CV
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md dark:bg-slate-900 dark:text-white dark:border-slate-700">
          <DialogHeader>
            <DialogTitle>
              {isSubmitted ? "Operacja powiodła się" : "Captcha"}
            </DialogTitle>
            <DialogDescription className="dark:text-slate-400">
              {isSubmitted
                ? "Pobieranie rozpocznie się za moment."
                : "Podaj adres e-mail i dokończ sekwencję, aby pobrać dokument."}
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* ------------------------------- E-mail ------------------------------ */}
              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-slate-300">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="twój@email.pl"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!isValid) setIsValid(true);
                  }}
                  className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white ${
                    !isValid ? "border-red-500 dark:border-red-500" : ""
                  }`}
                />
                {!isValid && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    Wprowadź poprawny adres e-mail!
                  </p>
                )}
              </div>

              {/* ------------------------------ Honeypot ----------------------------- */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {/* ------------------------------ Sequence ----------------------------- */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="dark:text-slate-300">
                    Dokończ sekwencję
                  </Label>
                  <button
                    type="button"
                    onClick={() => {
                      newPuzzle();
                      setCaptchaError(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    aria-label="Wygeneruj nową zagadkę"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Generuj nową
                  </button>
                </div>

                {/* The pattern */}
                <div
                  className={`flex flex-wrap items-center justify-center gap-2 rounded-lg border p-3 dark:border-slate-700 dark:bg-slate-800/50 ${
                    shake ? "animate-[shake_0.4s_ease-in-out]" : ""
                  }`}
                  role="img"
                  aria-label={`Sekwencja: ${puzzle?.sequence
                    .map((e) => puzzle.labels[e])
                    .join(", ")}, następnie znak zapytania`}
                >
                  {puzzle?.sequence.map((emoji, i) => (
                    <span
                      key={`${emoji}-${i}`}
                      className="text-2xl leading-none select-none"
                    >
                      {emoji}
                    </span>
                  ))}
                  <span className="text-2xl leading-none select-none text-slate-400">
                    →
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-dashed text-lg font-semibold dark:border-slate-600 dark:text-slate-400">
                    {selected ?? "?"}
                  </span>
                </div>

                {/* Options */}
                <div className="grid grid-cols-4 gap-2">
                  {puzzle?.options.map((emoji) => {
                    const active = selected === emoji;
                    return (
                      <button
                        key={emoji}
                        type="button"
                        aria-label={puzzle.labels[emoji]}
                        aria-pressed={active}
                        onClick={() => {
                          setSelected(emoji);
                          if (captchaError) setCaptchaError(false);
                        }}
                        className={`flex h-14 items-center justify-center rounded-lg border-2 text-2xl transition-all duration-150 hover:scale-105 ${
                          active
                            ? "border-amber-400 bg-amber-100/60 dark:bg-amber-400/10"
                            : "border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-500"
                        }`}
                      >
                        {emoji}
                      </button>
                    );
                  })}
                </div>

                {captchaError && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    Niepoprawnie — wygenerowano nową sekwencję. Spróbuj ponownie.
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={!selected}
                  className="dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 disabled:opacity-50"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Pobierz
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}