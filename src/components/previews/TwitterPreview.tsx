import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatMessageTime, formatDateDividerTwitter, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";

interface TwitterPreviewProps {
  state: ChatState;
}

export default function TwitterPreview({ state }: TwitterPreviewProps) {
  const receiverAvatar = state.receiver.avatar || getDefaultAvatar();
  const { messages, receiver } = state;

  // Find last read user message for "seen" avatar
  let lastReadUserIndex = -1;
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].sender === "user" && messages[i].status === "read") {
      lastReadUserIndex = i;
      break;
    }
  }

  return (
    <PhoneFrame show={state.showPhoneFrame}>
      <div className="flex h-full flex-col bg-white">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-x-border px-3 py-2.5">
          <img
            src={receiverAvatar}
            alt={receiver.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="truncate text-sm font-bold text-x-text">
              {receiver.name}
            </div>
            {receiver.handle && (
              <div className="text-xs text-x-text-secondary">
                {receiver.handle}
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-1 overflow-y-auto px-3 py-3" style={{ minHeight: 300 }}>
          {messages.map((msg, i) => {
            const showDateDivider =
              i === 0 || !isSameDay(messages[i - 1].timestamp, msg.timestamp);

            return (
              <div key={msg.id}>
                {showDateDivider && (
                  <div className="my-3 flex justify-center">
                    <span className="text-xs text-x-text-secondary">
                      {formatDateDividerTwitter(msg.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-[20px] px-3.5 py-2 ${
                      msg.sender === "user"
                        ? "bg-x-blue text-white"
                        : "bg-x-received text-x-text"
                    }`}
                  >
                    <p className="text-sm" style={{ lineHeight: "1.35" }}>
                      {msg.text}
                    </p>
                  </div>
                </div>

                {/* Time shown after last message in a group */}
                {(i === messages.length - 1 || messages[i + 1].sender !== msg.sender) && (
                  <div
                    className={`mt-0.5 text-[10px] text-x-text-secondary ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {formatMessageTime(msg.timestamp)}
                  </div>
                )}

                {/* Read receipt - small avatar */}
                {i === lastReadUserIndex && msg.sender === "user" && (
                  <div className="mt-1 flex justify-end">
                    <img
                      src={receiverAvatar}
                      alt="Read"
                      className="h-3.5 w-3.5 rounded-full object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}

          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center pt-20">
              <span className="text-xs text-x-text-secondary">
                Messages will appear here
              </span>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 border-t border-x-border px-3 py-2">
          <div className="flex h-10 flex-1 items-center rounded-full border border-x-border px-4">
            <span className="text-sm text-gray-400">Start a new message</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
