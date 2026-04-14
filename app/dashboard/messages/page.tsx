'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, Paperclip, SendHorizonal } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';

type ConversationItem = {
  id: string;
  title: string;
  preview: string;
  timeAgo: string;
  unreadCount?: number;
};

type ChatMessage = {
  id: string;
  sender: string;
  content: string;
  time: string;
  isOutgoing?: boolean;
};

const conversations: ConversationItem[] = [
  {
    id: '1',
    title: 'Hosperra Team',
    preview: "We'll get that equipment fixed by tomorrow",
    timeAgo: '10m ago',
    unreadCount: 2,
  },
  {
    id: '2',
    title: 'Order Updates',
    preview: 'Your seafood order has been delivered',
    timeAgo: '2h ago',
  },
  {
    id: '3',
    title: 'Request Updates',
    preview: 'Your staffing request has been approved',
    timeAgo: '5h ago',
    unreadCount: 1,
  },
  {
    id: '4',
    title: 'Marketing Team',
    preview: 'Campaign performance looks great!',
    timeAgo: '1d ago',
  },
  {
    id: '5',
    title: 'Request Updates',
    preview: 'Your staffing request has been approved',
    timeAgo: '5h ago',
    unreadCount: 1,
  },
  {
    id: '6',
    title: 'Marketing Team',
    preview: 'Campaign performance looks great!',
    timeAgo: '1d ago',
  },
];

const conversationMessages: Record<string, ChatMessage[]> = {
  '1': [
    {
      id: '1',
      sender: 'You',
      content: 'The oven is not heating properly. We need urgent repair.',
      time: '9:45 AM',
      isOutgoing: true,
    },
    {
      id: '2',
      sender: 'Hosperra Support',
      content:
        'Thanks for reaching out. We`ve contacted your equipment supplier and a technician will be there today.',
      time: '9:52 AM',
    },
    {
      id: '3',
      sender: 'Hosperra Support',
      content: "We'll get that equipment fixed by tomorrow",
      time: '10:15 AM',
    },
  ],
  '2': [
    {
      id: '1',
      sender: 'Order Bot',
      content: 'Your seafood order has been delivered successfully.',
      time: '8:20 AM',
    },
    {
      id: '2',
      sender: 'You',
      content: 'Perfect, thanks for the update.',
      time: '8:24 AM',
      isOutgoing: true,
    },
  ],
  '3': [
    {
      id: '1',
      sender: 'Request Bot',
      content: 'Your staffing request has been approved by the HR team.',
      time: '7:55 AM',
    },
    {
      id: '2',
      sender: 'You',
      content: 'Great. Please share the next steps.',
      time: '8:03 AM',
      isOutgoing: true,
    },
  ],
  '4': [
    {
      id: '1',
      sender: 'Marketing Team',
      content: 'Campaign performance looks great! CTR improved by 14%.',
      time: 'Yesterday',
    },
  ],
};

const MessagesPage = () => {
  const [activeConversationId, setActiveConversationId] = useState(conversations[0]?.id ?? '');
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messagesByConversation, setMessagesByConversation] = useState(conversationMessages);

  const activeConversation = useMemo(
    () => conversations.find((item) => item.id === activeConversationId) ?? conversations[0],
    [activeConversationId]
  );

  const activeChatMessages = messagesByConversation[activeConversation?.id ?? ''] ?? [];

  const handleSendMessage = () => {
    const trimmed = messageText.trim();
    if (!trimmed || !activeConversation?.id) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });

    const newMessage: ChatMessage = {
      id: String(Date.now()),
      sender: 'You',
      content: trimmed,
      time: currentTime,
      isOutgoing: true,
    };

    setMessagesByConversation((prev) => ({
      ...prev,
      [activeConversation.id]: [...(prev[activeConversation.id] ?? []), newMessage],
    }));
    setMessageText('');
  };

  return (
    <section className="rounded-2xl border border-[#EEDFDB] overflow-hidden md:h-[calc(100vh-140px)] h-[calc(100vh-120px)]">
      <div className="grid h-full md:grid-cols-[300px_minmax(0,1fr)]">
        <aside
          className={`border-r border-[#E5E7EB] h-full min-h-0 flex-col ${isMobileChatOpen ? 'hidden md:flex' : 'flex'
            }`}
        >
          <div className="border-b border-[#E5E7EB] px-4 py-5">
            <h3 className="text-xl leading-none font-semibold text-[#18181B] font-effra">Conversations</h3>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto">
            {conversations.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveConversationId(item.id);
                  setIsMobileChatOpen(true);
                }}
                className={`w-full border-b border-[#E5E7EB] px-4 py-4 text-left ${activeConversation?.id === item.id ? 'bg-[#F8F5F5]' : 'bg-white'
                  }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-md leading-none font-semibold text-[#18181B] font-effra">{item.title}</p>
                  {item.unreadCount ? (
                    <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-[#1D4ED8] px-2 py-0.5 text-[13px] font-semibold text-white font-effra">
                      {item.unreadCount}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-md leading-tight text-[#27272A] font-effra">{item.preview}</p>
                <p className="mt-2 text-xs leading-none text-[#52525B] font-effra">{item.timeAgo}</p>
              </button>
            ))}
          </div>
        </aside>

        <div className={`min-w-0 h-full min-h-0 flex-col ${isMobileChatOpen ? 'flex' : 'hidden md:flex'}`}>
          <div className="border-b flex gap-4 items-center border-[#E5E7EB] px-4 py-5">
            <button
              type="button"
              onClick={() => setIsMobileChatOpen(false)}
              className="text-[#27272A] md:hidden"
            >
              <ArrowLeft size={22} />
            </button>
            <h3 className="text-xl leading-none font-semibold text-[#18181B] font-effra">{activeConversation?.title}</h3>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 space-y-5">
            {activeChatMessages.map((message) => (
              <div key={message.id} className={message.isOutgoing ? 'flex flex-col items-end' : 'flex flex-col items-start'}>
                <div
                  className={`max-w-[75%] rounded-[10px] px-4 py-3 ${message.isOutgoing
                    ? 'bg-linear-to-r from-[#4A3CF0] to-[#533BFF] text-white'
                    : 'bg-[#F8F5F5] text-[#27272A]'
                    }`}
                >
                  {!message.isOutgoing ? (
                    <p className="text-sm leading-none font-semibold font-effra">{message.sender}</p>
                  ) : null}
                  <p className={`text-sm leading-tight font-effra ${message.isOutgoing ? '' : 'mt-2'}`}>
                    {message.content}
                  </p>
                </div>
                <p className="mt-1 text-xs leading-none text-[#71717A] font-effra">{message.time}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E5E7EB] p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#D4D4D8] text-[#111827]"
                aria-label="Attach file"
              >
                <Paperclip size={18} />
              </button>
              <div className="flex h-10 flex-1 items-center rounded-md bg-[#F3F4F6] px-4">
                <input
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type a message..."
                  className="h-full w-full bg-transparent text-sm text-[#111827] placeholder:text-[#71717A] font-effra outline-none"
                />
              </div>
              <GlobalButton
                title="Send"
                icon={<SendHorizonal className='h-4 w-4 -rotate-30' />}
                borderRadius="10px"
                height="40px"
                bgColor="#020617"
                color="#FFFFFF"
                className="font-effra flex-row-reverse px-5"
                onClick={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;
