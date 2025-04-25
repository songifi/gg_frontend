import Image from "next/image"

interface FeatureItemProps {
  text: string
}

export function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="relative flex items-center mb-4">
      <div className="border border-[#1F1D5D] rounded-md py-3 px-5 w-fit text-[#1F1D5D] text-2xl font-medium">{text}</div>
      <div className="absolute" style={{ right: "-36px" }}>
        <Image src="/checkmark.png" alt="Checkmark" width={224} height={224} className="h-16 w-16" />
      </div>
    </div>
  )
}

interface FeatureListProps {
  features: string[]
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="w-full bg-white max-w-lg mx-auto p-9 flex flex-col items-start">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
  )
}
