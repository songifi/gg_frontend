import WalletBalance from "./WalletBalance";
import WalletTransactions from "./WalletTransactions";

export default function WalletOverview() {
    return (
        <div className="flex flex-col lg:flex-row gap-16 w-full">
            <WalletBalance />
            <WalletTransactions />
        </div>
    )
}