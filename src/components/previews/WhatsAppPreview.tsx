import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatMessageTime, formatDateDivider, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";

interface WhatsAppPreviewProps {
  state: ChatState;
}

function WhatsAppTick({ status }: { status: string }) {
  if (status === "sent") {
    return (
      <svg className="ml-1 inline h-4 w-4" viewBox="0 0 16 16" fill="none">
        <path d="M4 8l3 3 5-6" stroke="#667781" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === "delivered") {
    return (
      <svg className="ml-1 inline h-4 w-4" viewBox="0 0 16 16" fill="none">
        <path d="M2 8l3 3 5-6" stroke="#667781" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8l3 3 5-6" stroke="#667781" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // read
  return (
    <svg className="ml-1 inline h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M2 8l3 3 5-6" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8l3 3 5-6" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhatsAppPreview({ state }: WhatsAppPreviewProps) {
  const receiverAvatar = state.receiver.avatar || getDefaultAvatar();
  const { messages, receiver } = state;

  const statusText =
    receiver.status === "online"
      ? "online"
      : receiver.status === "lastSeen"
      ? `last seen ${receiver.lastSeen || "recently"}`
      : "";

  return (
    <PhoneFrame show={state.showPhoneFrame}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 bg-wa-dark-green px-3 py-2.5">
          <img
            src={receiverAvatar}
            alt={receiver.name}
            className="h-10 w-10 rounded-full border-2 border-white/20 object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="truncate text-base font-medium text-white">
              {receiver.name}
            </div>
            {statusText && (
              <div className="text-xs text-white/70">{statusText}</div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="wa-chat-bg flex-1 space-y-1 overflow-y-auto px-3 py-2" style={{ minHeight: 300 }}>
          {messages.map((msg, i) => {
            const showDateDivider =
              i === 0 || !isSameDay(messages[i - 1].timestamp, msg.timestamp);
            const isFirst =
              i === 0 || messages[i - 1].sender !== msg.sender || showDateDivider;

            return (
              <div key={msg.id}>
                {showDateDivider && (
                  <div className="my-2 flex justify-center">
                    <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-medium text-wa-text-secondary shadow-sm">
                      {formatDateDivider(msg.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`relative max-w-[75%] rounded-lg px-2.5 py-1.5 shadow-sm ${
                      msg.sender === "user"
                        ? `bg-wa-sent ${isFirst ? "wa-bubble-sent-first" : ""}`
                        : `bg-wa-received ${isFirst ? "wa-bubble-received-first" : ""}`
                    }`}
                    style={{ marginTop: isFirst ? 4 : 1 }}
                  >
                    <p className="text-sm text-wa-text" style={{ lineHeight: "1.35" }}>
                      {msg.text}
                      <span className="ml-2 inline-flex items-end gap-0.5 align-bottom text-[10px] text-wa-text-secondary">
                        {formatMessageTime(msg.timestamp)}
                        {msg.sender === "user" && <WhatsAppTick status={msg.status} />}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center pt-20">
              <span className="rounded-lg bg-white/80 px-4 py-2 text-xs text-wa-text-secondary shadow-sm">
                Messages will appear here
              </span>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 bg-[#F0F2F5] px-2 py-2">
          <div className="flex h-10 flex-1 items-center rounded-full bg-white px-4">
            <span className="text-sm text-gray-400">Type a message</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wa-teal">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
