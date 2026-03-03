"use client";

import { ChatState, ChatAction, Platform, MessageSender, MessageStatus } from "@/lib/types";
import ProfileSetup from "./ProfileSetup";
import MessageComposer from "./MessageComposer";
import MessageList from "./MessageList";
import ScreenshotButton from "./ScreenshotButton";
import BackgroundPicker from "./BackgroundPicker";

interface ChatEditorProps {
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
  platform: Platform;
  previewRef: React.RefObject<HTMLDivElement | null>;
  onAddMessage: (text: string, sender: MessageSender, status: MessageStatus) => void;
}

export default function ChatEditor({
  state,
  dispatch,
  platform,
  previewRef,
  onAddMessage,
}: ChatEditorProps) {
  return (
    <div className="space-y-6">
      <ProfileSetup state={state} dispatch={dispatch} platform={platform} />
      <MessageComposer platform={platform} onAddMessage={onAddMessage} />
      <MessageList messages={state.messages} dispatch={dispatch} platform={platform} />
      {platform === "whatsapp" && (
        <BackgroundPicker customBackground={state.customBackground} dispatch={dispatch} />
      )}
      <ScreenshotButton
        previewRef={previewRef}
        platform={platform}
        showPhoneFrame={state.showPhoneFrame}
        onToggleFrame={() => dispatch({ type: "TOGGLE_PHONE_FRAME" })}
        showKeyboard={state.showKeyboard}
        onToggleKeyboard={() => dispatch({ type: "TOGGLE_KEYBOARD" })}
        darkMode={state.darkMode}
        onToggleDarkMode={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      />
    </div>
  );
}
