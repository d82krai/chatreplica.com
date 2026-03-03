import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatMessageTime, formatDateDividerTwitter, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";
import IosKeyboard from "./IosKeyboard";

interface TwitterPreviewProps {
  state: ChatState;
}

export default function TwitterPreview({ state }: TwitterPreviewProps) {
  const { darkMode } = state;
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

  // Dark mode colors
  const containerBg = darkMode ? "#15202B" : "#FFFFFF";
  const headerBorder = darkMode ? "#2F3336" : "#EFF3F4";
  const nameColor = darkMode ? "#FFFFFF" : "#0F1419";
  const handleColor = darkMode ? "#8B98A5" : "#536471";
  const receivedBg = darkMode ? "#2F3336" : "#EFF3F4";
  const receivedText = darkMode ? "#FFFFFF" : "#0F1419";
  const dateDividerColor = darkMode ? "#8B98A5" : "#536471";
  const timeColor = darkMode ? "#8B98A5" : "#536471";
  const inputBorder = darkMode ? "#2F3336" : "#EFF3F4";
  const inputBg = darkMode ? "#15202B" : "#FFFFFF";
  const inputPlaceholderColor = darkMode ? "#8B98A5" : "#9CA3AF";

  return (
    <PhoneFrame deviceFrame={state.deviceFrame}>
      <div className="flex h-full flex-col" style={{ backgroundColor: containerBg }}>
        {/* Header */}
        <div
          className="flex items-center gap-3 border-b px-3 py-2.5"
          style={{ backgroundColor: containerBg, borderColor: headerBorder }}
        >
          <img
            src={receiverAvatar}
            alt={receiver.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="truncate text-sm font-bold" style={{ color: nameColor }}>
              {receiver.name}
            </div>
            {receiver.handle && (
              <div className="text-xs" style={{ color: handleColor }}>
                {receiver.handle}
              </div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 space-y-1 overflow-y-auto px-3 py-3"
          style={{ minHeight: 300, backgroundColor: containerBg }}
        >
          {messages.map((msg, i) => {
            const showDateDivider =
              i === 0 || !isSameDay(messages[i - 1].timestamp, msg.timestamp);

            return (
              <div key={msg.id}>
                {showDateDivider && (
                  <div className="my-3 flex justify-center">
                    <span className="text-xs" style={{ color: dateDividerColor }}>
                      {formatDateDividerTwitter(msg.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-[20px] px-3.5 py-2 ${
                      msg.sender === "user" ? "bg-x-blue text-white" : ""
                    }`}
                    style={msg.sender === "other" ? { backgroundColor: receivedBg, color: receivedText } : {}}
                  >
                    <p className="text-sm" style={{ lineHeight: "1.35" }}>
                      {msg.text}
                    </p>
                  </div>
                </div>

                {/* Time shown after last message in a group */}
                {(i === messages.length - 1 || messages[i + 1].sender !== msg.sender) && (
                  <div
                    className={`mt-0.5 text-[10px] ${msg.sender === "user" ? "text-right" : "text-left"}`}
                    style={{ color: timeColor }}
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
              <span className="text-xs" style={{ color: dateDividerColor }}>
                Messages will appear here
              </span>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-2 border-t px-3 py-2"
          style={{ backgroundColor: inputBg, borderColor: inputBorder }}
        >
          <div
            className="flex h-10 flex-1 items-center rounded-full border px-4"
            style={{ borderColor: inputBorder, backgroundColor: inputBg }}
          >
            <span className="text-sm" style={{ color: inputPlaceholderColor }}>Start a new message</span>
          </div>
        </div>

        {/* iOS Keyboard */}
        {state.showKeyboard && <IosKeyboard dark={darkMode} />}
      </div>
    </PhoneFrame>
  );
}
