export default function SendSTRKTab() {
  return (
    <>
      <div className="mb-4 flex items-center rounded-lg border bg-gray-100">
        <input
          type="number"
          placeholder="Enter amount"
          className="flex-1 rounded-l-lg px-4 py-3 focus:outline-none"
        />
        <button className="flex items-center gap-1 rounded-r-lg bg-white px-4 py-3 font-semibold text-gray-700">
          STRK
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <textarea
        placeholder="Note"
        className="mb-6 resize-none rounded-lg border px-4 py-3 focus:outline-none"
        rows={3}
      />
    </>
  )
}
