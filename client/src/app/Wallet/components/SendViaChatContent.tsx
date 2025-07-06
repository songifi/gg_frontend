import React from "react";
import { ChevronRight } from "lucide-react";

const frequentGossips = [
  { name: "Alexis", avatar: "/alexis.png" },
  { name: "Ralph", avatar: "/ralph.png" },
  { name: "Maureen", avatar: "/avatar.png" },
  { name: "Victor", avatar: "/victor.png" },
  { name: "Anna", avatar: "/anna.png" },
  { name: "Jakub", avatar: undefined },
];


const contacts = [
  { name: "thetimileyin", message: "GM semrr", avatar: "/avatar.png" },
  { name: "thetimileyin", message: "GM semrr", avatar: "/avatar.png" },
  { name: "thetimileyin", message: "GM semrr", avatar: "/avatar.png" },
  { name: "thetimileyin", message: "GM semrr", avatar: "/avatar.png" },
  { name: "thetimileyin", message: "Attachment: 2 NFTs", avatar: "/avatar.png" },
  { name: "thetimileyin", message: "Attachment: STRK", avatar: "/avatar.png" },
];

const SendViaChatContent: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-2">
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
      />
      <div className="mb-2">
        <div className="text-xs text-gray-400 mb-2">Frequent Gossips</div>
        <div className="flex gap-3 mb-4">
          {frequentGossips.map((g) => (
            <div key={g.name} className="flex flex-col items-center">
              {g.avatar ? (
                <img src={g.avatar} alt={g.name} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold">
                  {g.name[0]}
                </div>
              )}
              <span className="text-xs mt-1 text-gray-700">{g.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs text-gray-400 mb-2">All Contacts</div>
        <div className="flex flex-col gap-1">
          {contacts.map((c, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-2 py-3 cursor-pointer hover:bg-gray-50 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-base text-gray-900">{c.name}</div>
                  <div className="text-xs text-gray-400">{c.message}</div>
                </div>
              </div>
              <ChevronRight className="text-gray-400 w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendViaChatContent; 