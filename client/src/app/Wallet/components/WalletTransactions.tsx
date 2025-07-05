import { Gem, ArrowDownLeft, ArrowUpRight, Plus } from "lucide-react";

const transactions = [
  {
    id: 1,
    icon: <img src="/noticon.svg" alt="NFT" className="h-4 w-5" />, // STRK icon
    title: "Xaxxo just sent you some STRK",
    date: "15 March, 2025 - 12:43 PM",
    amount: "+400 USD",
    amountColor: "text-[#0AC660]",
    strk: "10,654 STRK",
  },
  {
    id: 2,
    icon: <ArrowUpRight className="w-5 h-4 text-[#090909]" />, // Bet placed
    title: "Bet placed",
    date: "15 March, 2025 - 12:43 PM",
    amount: "-400 USD",
    amountColor: "text-[#090909]",
    strk: "10,654 STRK",
  },
  {
    id: 3,
    icon: <Plus className="w-5 h-4 text-[#090909]" />, // Funded
    title: "Wallet Funded",
    date: "15 March, 2025 - 12:43 PM",
    amount: "+400 USD",
    amountColor: "text-[#0AC660]",
    strk: "10,654 STRK",
  },
  // NFT transactions (repeat for demo)
  ...Array(4).fill(0).map((_, i) => ({
    id: 4 + i,
    icon: <Gem strokeWidth={1} className="text-[#090909] w-5 h-4"/>,
    title: "Xaxxo just sent you a NFT",
    date: "15 March, 2025 - 12:43 PM",
    amount: "+400 USD",
    amountColor: "text-[#0AC660]",
    strk: "10,654 STRK",
  })),
];

export default function WalletTransactions() {
  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-base font-semibold">Recent Transactions</h2>
          <span className="text-xs text-gray-400">24 total</span>
        </div>
        <button className="text-xs px-3 py-1 cursor-pointer border border-[#C8F9D4] bg-[#EDFDF1] rounded-full hover:bg-[#C8F9D4] transition">See all</button>
      </div>
      <ul className="divide-y divide-gray-100 ">
        {transactions.map((tx) => (
          <li key={tx.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 border border-gray-100">
                {tx.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-[#090909]">{tx.title}</div>
                <div className="text-xs text-gray-400">{tx.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-sm font-semibold ${tx.amountColor}`}>{tx.amount}</div>
              <div className="text-xs text-gray-400">{tx.strk}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}