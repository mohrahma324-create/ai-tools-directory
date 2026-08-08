"use client"

import { createContext, useContext, useMemo, useState } from "react"

type VotesContextValue = {
  isVoted: (id: string) => boolean
  markVoted: (id: string, voted: boolean) => void
}

const VotesContext = createContext<VotesContextValue | null>(null)

export function VotesProvider({
  initialVotedIds,
  children,
}: {
  initialVotedIds: string[]
  children: React.ReactNode
}) {
  const [voted, setVoted] = useState<Set<string>>(() => new Set(initialVotedIds))

  const value = useMemo<VotesContextValue>(
    () => ({
      isVoted: (id) => voted.has(id),
      markVoted: (id, isVoted) =>
        setVoted((prev) => {
          const next = new Set(prev)
          if (isVoted) next.add(id)
          else next.delete(id)
          return next
        }),
    }),
    [voted],
  )

  return <VotesContext.Provider value={value}>{children}</VotesContext.Provider>
}

export function useVotes() {
  const ctx = useContext(VotesContext)
  if (!ctx) throw new Error("useVotes must be used within a VotesProvider")
  return ctx
}
