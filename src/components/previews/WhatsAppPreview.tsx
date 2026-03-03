import { ChatState } from "@/lib/types";
import { getDefaultAvatar } from "@/lib/utils";
import { formatMessageTime, formatDateDivider, isSameDay } from "@/lib/time";
import PhoneFrame from "./PhoneFrame";
import IosKeyboard from "./IosKeyboard";

interface WhatsAppPreviewProps {
  state: ChatState;
}

function WhatsAppTick({ status, dark }: { status: string; dark: boolean }) {
  const grey = dark ? "#8696A0" : "#667781";
  if (status === "sent") {
    return (
      <svg className="ml-1 inline h-4 w-4" viewBox="0 0 16 16" fill="none">
        <path d="M4 8l3 3 5-6" stroke={grey} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === "delivered") {
    return (
      <svg className="ml-1 inline h-4 w-4" viewBox="0 0 16 16" fill="none">
        <path d="M2 8l3 3 5-6" stroke={grey} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8l3 3 5-6" stroke={grey} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  const { darkMode } = state;
  const receiverAvatar = state.receiver.avatar || getDefaultAvatar();
  const { messages, receiver } = state;

  const statusText =
    receiver.status === "online"
      ? "online"
      : receiver.status === "lastSeen"
      ? `last seen ${receiver.lastSeen || "recently"}`
      : "";

  // Dark mode colors
  const headerBg = darkMode ? "#1F2C34" : undefined; // dark WA header
  const inputBarBg = darkMode ? "#1F2C34" : "#F0F2F5";
  const inputFieldBg = darkMode ? "#2A3942" : "#FFFFFF";
  const inputIconColor = darkMode ? "#8696A0" : "#8696A0";
  const inputPlaceholderColor = darkMode ? "#8696A0" : undefined;

  const sentBg = darkMode ? "#005C4B" : "#D9FDD3";
  const receivedBg = darkMode ? "#202C33" : "#FFFFFF";
  const textColor = darkMode ? "#E9EEF0" : "#111B21";
  const timeColor = darkMode ? "#8696A0" : "#667781";
  const dateBg = darkMode ? "rgba(17,27,33,0.9)" : "rgba(255,255,255,0.9)";
  const dateBgStyle = darkMode ? { backgroundColor: "rgba(17,27,33,0.9)", color: "#8696A0" } : {};

  const chatBgClass = state.customBackground
    ? ""
    : darkMode
    ? "wa-chat-bg-dark"
    : "wa-chat-bg";

  return (
    <PhoneFrame show={state.showPhoneFrame}>
      <div className={`flex h-full flex-col ${darkMode ? "bg-[#0B141A]" : ""}`}>
        {/* Header */}
        <div
          className="flex items-center gap-3 px-3 py-2.5"
          style={{ backgroundColor: darkMode ? "#1F2C34" : "#075E54" }}
        >
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
          {/* Call icons */}
          <div className="flex items-center gap-4">
            <svg className="h-5 w-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
            <svg className="h-5 w-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
        </div>

        {/* Messages */}
        <div
          className={`${chatBgClass} flex-1 space-y-1 overflow-y-auto px-3 py-2`}
          style={{
            minHeight: 300,
            ...(state.customBackground
              ? { backgroundImage: `url(${state.customBackground})`, backgroundSize: "cover", backgroundPosition: "center" }
              : {}),
          }}
        >
          {messages.map((msg, i) => {
            const showDateDivider =
              i === 0 || !isSameDay(messages[i - 1].timestamp, msg.timestamp);
            const isFirst =
              i === 0 || messages[i - 1].sender !== msg.sender || showDateDivider;

            const sentClass = isFirst
              ? darkMode ? "wa-bubble-sent-first-dark" : "wa-bubble-sent-first"
              : "";
            const receivedClass = isFirst
              ? darkMode ? "wa-bubble-received-first-dark" : "wa-bubble-received-first"
              : "";

            return (
              <div key={msg.id}>
                {showDateDivider && (
                  <div className="my-2 flex justify-center">
                    <span
                      className="rounded-lg px-3 py-1 text-xs font-medium shadow-sm"
                      style={darkMode
                        ? { backgroundColor: "rgba(17,27,33,0.9)", color: "#8696A0" }
                        : { backgroundColor: "rgba(255,255,255,0.9)", color: "#667781" }}
                    >
                      {formatDateDivider(msg.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`relative max-w-[75%] rounded-lg px-2.5 py-1.5 shadow-sm ${
                      msg.sender === "user" ? sentClass : receivedClass
                    }`}
                    style={{
                      marginTop: isFirst ? 4 : 1,
                      backgroundColor: msg.sender === "user" ? sentBg : receivedBg,
                    }}
                  >
                    <p className="text-sm" style={{ lineHeight: "1.35", color: textColor }}>
                      {msg.text}
                      <span className="ml-2 inline-flex items-end gap-0.5 align-bottom text-[10px]" style={{ color: timeColor }}>
                        {formatMessageTime(msg.timestamp)}
                        {msg.sender === "user" && <WhatsAppTick status={msg.status} dark={darkMode} />}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center pt-20">
              <span
                className="rounded-lg px-4 py-2 text-xs shadow-sm"
                style={darkMode
                  ? { backgroundColor: "rgba(17,27,33,0.8)", color: "#8696A0" }
                  : { backgroundColor: "rgba(255,255,255,0.8)", color: "#667781" }}
              >
                Messages will appear here
              </span>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-1.5 px-2 py-2"
          style={{ backgroundColor: inputBarBg }}
        >
          {/* Plus */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
            <svg className="h-5 w-5" style={{ color: inputIconColor }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z" />
            </svg>
          </div>
          {/* Text field */}
          <div
            className="flex h-9 flex-1 items-center gap-2 rounded-full px-3"
            style={{ backgroundColor: inputFieldBg }}
          >
            <span className="flex-1 text-sm" style={{ color: inputIconColor }}>Message</span>
            {/* Sticker/emoji */}
            <svg className="h-5 w-5 shrink-0" style={{ color: inputIconColor }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          {/* Camera */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
            <svg className="h-5 w-5" style={{ color: inputIconColor }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4ZM20 4h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 2H9.88c-.56 0-1.1.24-1.47.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          {/* Mic */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wa-teal">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.94-.49-7-3.85-7-7.93H6c0 3.31 2.69 6 6 6s6-2.69 6-6h2c0 4.08-3.06 7.44-7 7.93V20h3v2H9v-2h2v-4.07z" />
            </svg>
          </div>
        </div>

        {/* iOS Keyboard */}
        {state.showKeyboard && <IosKeyboard dark={darkMode} />}
      </div>
    </PhoneFrame>
  );
}
