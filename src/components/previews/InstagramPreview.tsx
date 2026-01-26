import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatDateDividerInstagram, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";

interface InstagramPreviewProps {
  state: ChatState;
}

export default function InstagramPreview({ state }: InstagramPreviewProps) {
  const receiverAvatar = state.receiver.avatar || getDefaultAvatar();
  const { messages, receiver } = state;

  const statusText =
    receiver.status === "online"
      ? "Active now"
      : receiver.status === "lastSeen"
      ? `Active ${receiver.lastSeen || "recently"}`
      : "";

  // Find last read user message for "Seen" text
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
        <div className="flex items-center gap-3 border-b border-ig-border px-3 py-2.5">
          <div className="relative">
            <img
              src={receiverAvatar}
              alt={receiver.name}
              className="h-9 w-9 rounded-full object-cover"
            />
            {receiver.status === "online" && (
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="truncate text-sm font-semibold text-ig-text">
              {receiver.name}
            </div>
            {statusText && (
              <div className="text-xs text-ig-text-secondary">{statusText}</div>
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
                    <span className="text-xs text-ig-text-secondary">
                      {formatDateDividerInstagram(msg.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "other" && (
                    <img
                      src={receiverAvatar}
                      alt=""
                      className="mr-2 h-6 w-6 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div
                    className={`max-w-[70%] rounded-[22px] px-3.5 py-2 ${
                      msg.sender === "user"
                        ? "bg-ig-blue text-white"
                        : "bg-ig-received text-ig-text"
                    }`}
                  >
                    <p className="text-sm" style={{ lineHeight: "1.35" }}>
                      {msg.text}
                    </p>
                  </div>
                </div>

                {/* Seen indicator */}
                {i === lastReadUserIndex && msg.sender === "user" && (
                  <div className="mt-1 text-right text-[11px] text-ig-text-secondary">
                    Seen
                  </div>
                )}
              </div>
            );
          })}

          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center pt-20">
              <span className="text-xs text-ig-text-secondary">
                Messages will appear here
              </span>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 border-t border-ig-border px-3 py-2">
          <div className="flex h-10 flex-1 items-center rounded-full border border-ig-border px-4">
            <span className="text-sm text-gray-400">Message...</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
