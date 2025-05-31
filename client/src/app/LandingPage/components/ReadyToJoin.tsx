export const ReadyToJoin = () => {
  return (
    <section className="mt-10 bg-[#eaf9ec] px-4 py-10 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded-[1.25rem] border border-[#73AF84] bg-white px-6 py-10 md:px-14">
        <h1 className="text-center text-3xl font-bold text-[#0B501E] md:text-5xl">
          Ready to Join?
        </h1>
        <p className="mt-2 text-center text-base text-[#0B501E] md:text-lg">
          Be the First to Know. Stay Ahead of the Chain.
        </p>

        <form className="mt-8 w-full">
          <div className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md rounded-full sm:rounded-[1.25rem_0rem_0rem_1.25rem] border border-[#419057] px-6 py-3 text-[#0B501E] placeholder:text-[#419057] focus:outline-none focus:ring-2 focus:ring-[#73AF84]"
              required
            />
            <button
              type="submit"
              className="w-full max-w-[160px] rounded-full sm:rounded-[0rem_1.25rem_1.25rem_0rem] bg-[#419057] px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#337749]"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
