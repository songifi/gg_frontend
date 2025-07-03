'use client'

import { useState } from 'react'
import { Mic, Send, Plus } from 'lucide-react'

export default function MessageInput() {
  const [value, setValue] = useState('')

  return (
    <div className="relative flex w-full items-center gap-2">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:cursor-pointer hover:bg-gray-200"
        tabIndex={-1}
        type="button"
        aria-label="Add attachment"
      >
        <Plus strokeWidth={1} color="#377a49" />
      </button>
      <input
        type="text"
        placeholder="Message"
        className="flex-1 rounded-full border px-4 py-2 pr-12 focus:ring-2 focus:ring-green-200 focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className={`absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 transition-colors ${value ? 'bg-[#377a49] text-white' : 'bg-gray-100 text-gray-400'}`}
        tabIndex={-1}
        type="button"
      >
        {value ? <Send size={22} /> : <Mic size={22} />}
      </button>
    </div>
  )
}
