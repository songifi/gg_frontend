# Gasless Gossip

## 🚀 About

Gasless Gossip is a revolutionary messaging platform built on StarkNet that seamlessly integrates cryptocurrency transfers into everyday conversations. Send tokens to friends and family as easily as sending a text message, with minimal fees thanks to StarkNet's Layer 2 scaling solution.

## ✨ Key Features

- **Chat with Anyone**: Connect with friends and family through a familiar messaging interface
- **Send Tokens While Chatting**: Transfer cryptocurrency without leaving your conversation
- **Negligible Gas Fees**: Leverage StarkNet's Layer 2 scaling for near-zero transaction costs
- **Group Conversations**: Create groups for communities or team chats with integrated token features
- **Secure & Private**: End-to-end encrypted messaging protects your conversations
- **Cross-Platform**: Available on web, with mobile applications coming soon
- **Social Features**: Follow friends, build your reputation, and engage with the community
- **Achievement System**: Earn badges and rewards for platform participation

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS, shadcn/ui
- **Blockchain Integration**: StarkNet.js
- **Real-time Communication**: Socket.io
- **Form Handling**: React Hook Form, Zod
- **API Communication**: tRPC
- **Authentication**: JWT with wallet authentication
- **Testing**: Jest, React Testing Library, Cypress

## 🏁 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- Yarn or npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gasless-gossip.git
   cd gasless-gossip
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration.

4. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |
| `NEXT_PUBLIC_SOCKET_URL` | WebSocket server URL | Yes |
| `NEXT_PUBLIC_STARKNET_NETWORK` | StarkNet network (mainnet, testnet, etc.) | Yes |
| `NEXT_PUBLIC_GA_TRACKING_ID` | Google Analytics tracking ID | No |
| `NEXT_PUBLIC_BLOCK_EXPLORER_URL` | StarkNet block explorer base URL | No |
| `AUTH_SECRET` | Secret for NextAuth.js (if used) | For production |

## 👥 Contributing

We welcome contributions to Gasless Gossip! Please check out our [Contributing Guide](CONTRIBUTING.md) for guidelines about how to proceed.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request