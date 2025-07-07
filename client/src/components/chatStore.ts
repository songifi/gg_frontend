import { create } from 'zustand'

type Message = {
  fromUser: boolean
  content: string
  time: string
}

type Chat = {
  id: string
  name: string
  avatar: string
  messages: Message[]
}

type ChatStore = {
  chats: Chat[]
  selectedChatId: string | null
  addMessage: (chatId: string, message: Message) => void
  setSelectedChatId: (chatId: string | null) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  selectedChatId: '1',
  addMessage: (chatId: string, message: Message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat,
      ),
    })),
  setSelectedChatId: (chatId: string | null) => set({ selectedChatId: chatId }),
}))
