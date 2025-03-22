import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-red-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to Gasless Gossip.</h1>
      <h1 className="text-3xl font-bold text-white">Hello Tailwind!</h1>
      <Button variant="default">Shadcn Click Me </Button>
    </div>
  );
}




