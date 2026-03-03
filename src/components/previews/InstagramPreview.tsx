import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatDateDividerInstagram, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";
import IosKeyboard from "./IosKeyboard";

interface InstagramPreviewProps {
  state: ChatState;
}

export default function InstagramPreview({ state }: InstagramPreviewProps) {
  const { darkMode } = state;
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

  // Dark mode colors
  const containerBg = darkMode ? "#000000" : "#FFFFFF";
  const headerBorder = darkMode ? "#262626" : "#DBDBDB";
  const nameColor = darkMode ? "#FAFAFA" : "#262626";
  const statusColor = darkMode ? "#8E8E8E" : "#8E8E8E";
  const onlineBorder = darkMode ? "#000000" : "#FFFFFF";
  const receivedBg = darkMode ? "#262626" : "#EFEFEF";
  const receivedText = darkMode ? "#FAFAFA" : "#262626";
  const dateDividerColor = darkMode ? "#8E8E8E" : "#8E8E8E";
  const inputBorder = darkMode ? "#363636" : "#DBDBDB";
  const inputBg = darkMode ? "#000000" : "#FFFFFF";
  const inputPlaceholderColor = darkMode ? "#8E8E8E" : "#9CA3AF";

  return (
    <PhoneFrame deviceFrame={state.deviceFrame}>
      <div className="flex h-full flex-col" style={{ backgroundColor: containerBg }}>
        {/* Header */}
        <div
          className="flex items-center gap-3 border-b px-3 py-2.5"
          style={{ backgroundColor: containerBg, borderColor: headerBorder }}
        >
          <div className="relative">
            <img
              src={receiverAvatar}
              alt={receiver.name}
              className="h-9 w-9 rounded-full object-cover"
            />
            {receiver.status === "online" && (
              <div
                className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 bg-green-500"
                style={{ borderColor: onlineBorder }}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="truncate text-sm font-semibold" style={{ color: nameColor }}>
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
                      msg.sender === "user" ? "bg-ig-blue text-white" : ""
                    }`}
                    style={msg.sender === "other" ? { backgroundColor: receivedBg, color: receivedText } : {}}
                  >
                    <p className="text-sm" style={{ lineHeight: "1.35" }}>
                      {msg.text}
                    </p>
                  </div>
                </div>

                {/* Seen indicator */}
                {i === lastReadUserIndex && msg.sender === "user" && (
                  <div className="mt-1 text-right text-[11px]" style={{ color: statusColor }}>
                    Seen
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
          style={{ backgroundColor: inputBg, borderColor: inputBorder }}
        >
          <div
            className="flex h-10 flex-1 items-center rounded-full border px-4"
            style={{ borderColor: inputBorder, backgroundColor: inputBg }}
          >
            <span className="text-sm" style={{ color: inputPlaceholderColor }}>Message...</span>
          </div>
        </div>

        {/* iOS Keyboard */}
        {state.showKeyboard && <IosKeyboard dark={darkMode} />}
      </div>
    </PhoneFrame>
  );
}
