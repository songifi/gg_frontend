import WalletOverview from "./components/WalletOverview";

export default function WalletPage() {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="border-b border-gray-200 pb-4 text-2xl font-semibold">Wallet</h1>
      <div className="mt-4">
        <WalletOverview />
      </div>
    </div>
  )
}
