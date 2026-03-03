import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatDateDividerFacebook, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";
import IosKeyboard from "./IosKeyboard";

interface FacebookPreviewProps {
  state: ChatState;
}

export default function FacebookPreview({ state }: FacebookPreviewProps) {
  const { darkMode } = state;
  const receiverAvatar = state.receiver.avatar || getDefaultAvatar();
  const { messages, receiver } = state;

  const statusText =
    receiver.status === "online"
      ? "Active now"
      : receiver.status === "lastSeen"
      ? `Active ${receiver.lastSeen || "recently"}`
      : "";

  // Find the last "user" message that has status "read" for the "seen" indicator
  let lastReadUserIndex = -1;
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].sender === "user" && messages[i].status === "read") {
      lastReadUserIndex = i;
      break;
    }
  }

  // Dark mode colors
  const containerBg = darkMode ? "#1C1E21" : "#FFFFFF";
  const headerBorder = darkMode ? "#3A3B3C" : "#E5E7EB";
  const nameColor = darkMode ? "#E4E6EB" : "#050505";
  const statusColor = darkMode ? "#B0B3B8" : "#65676B";
  const chatBg = darkMode ? "#1C1E21" : "#FFFFFF";
  const receivedBg = darkMode ? "#3A3B3C" : "#E4E6EB";
  const receivedText = darkMode ? "#E4E6EB" : "#050505";
  const dateDividerColor = darkMode ? "#B0B3B8" : "#65676B";
  const inputBarBorder = darkMode ? "#3A3B3C" : "#E5E7EB";
  const inputFieldBg = darkMode ? "#3A3B3C" : "#F0F2F5";
  const inputPlaceholderColor = darkMode ? "#B0B3B8" : "#9CA3AF";

  return (
    <PhoneFrame show={state.showPhoneFrame}>
      <div className="flex h-full flex-col" style={{ backgroundColor: containerBg }}>
        {/* Header */}
        <div
          className="flex items-center gap-3 px-3 py-2.5 border-b"
          style={{ backgroundColor: containerBg, borderColor: headerBorder }}
        >
          <div className="relative">
            <img
              src={receiverAvatar}
              alt={receiver.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            {receiver.status === "online" && (
              <div
                className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 bg-fb-active"
                style={{ borderColor: containerBg }}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="truncate text-base font-semibold" style={{ color: nameColor }}>
              {receiver.name}
            </div>
            {statusText && (
              <div className="text-xs" style={{ color: statusColor }}>{statusText}</div>
            )}
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 space-y-1 overflow-y-auto px-3 py-3"
          style={{ minHeight: 300, backgroundColor: chatBg }}
        >
          {messages.map((msg, i) => {
            const showDateDivider =
              i === 0 || !isSameDay(messages[i - 1].timestamp, msg.timestamp);

            return (
              <div key={msg.id}>
                {showDateDivider && (
                  <div className="my-3 flex justify-center">
                    <span className="text-xs font-medium" style={{ color: dateDividerColor }}>
                      {formatDateDividerFacebook(msg.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "other" && (
                    <img
                      src={receiverAvatar}
                      alt=""
                      className="mr-2 mt-auto h-7 w-7 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div
                    className={`max-w-[70%] rounded-[20px] px-3 py-2 ${
                      msg.sender === "user" ? "bg-fb-blue text-white" : ""
                    }`}
                    style={msg.sender === "other" ? { backgroundColor: receivedBg, color: receivedText } : {}}
                  >
                    <p className="text-sm" style={{ lineHeight: "1.35" }}>
                      {msg.text}
                    </p>
                  </div>
                </div>

                {/* Seen indicator - show only after the last read user message */}
                {i === lastReadUserIndex && msg.sender === "user" && (
                  <div className="mt-1 flex justify-end pr-1">
                    <img
                      src={receiverAvatar}
                      alt="Seen"
                      className="h-3.5 w-3.5 rounded-full object-cover"
                    />
                  </div>
                )}

                {/* Timestamp for sent/delivered (non-read) user messages at the end */}
                {msg.sender === "user" &&
                  msg.status !== "read" &&
                  (i === messages.length - 1 || messages[i + 1].sender !== "user") && (
                    <div className="mt-0.5 text-right text-[10px]" style={{ color: statusColor }}>
                      {msg.status === "sent"
                        ? "Sent"
                        : msg.status === "delivered"
                        ? "Delivered"
                        : ""}
                    </div>
                  )}
              </div>
            );
          })}

          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center pt-20">
              <span className="text-xs" style={{ color: statusColor }}>
                Messages will appear here
              </span>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-2 border-t px-3 py-2"
          style={{ backgroundColor: containerBg, borderColor: inputBarBorder }}
        >
          <div
            className="flex h-9 flex-1 items-center rounded-full px-4"
            style={{ backgroundColor: inputFieldBg }}
          >
            <span className="text-sm" style={{ color: inputPlaceholderColor }}>Aa</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center">
            <svg className="h-6 w-6 text-fb-blue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>

        {/* iOS Keyboard */}
        {state.showKeyboard && <IosKeyboard dark={darkMode} />}
      </div>
    </PhoneFrame>
  );
}
