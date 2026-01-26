"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Platform, MessageSender, MessageStatus } from "@/lib/types";

interface MessageComposerProps {
  platform: Platform;
  onAddMessage: (text: string, sender: MessageSender, status: MessageStatus) => void;
}

function getStatusOptions(platform: Platform): { value: MessageStatus; label: string }[] {
  switch (platform) {
    case "whatsapp":
      return [
        { value: "sent", label: "Sent (single tick)" },
        { value: "delivered", label: "Delivered (double tick)" },
        { value: "read", label: "Read (blue tick)" },
      ];
    case "facebook":
      return [
        { value: "sent", label: "Sent" },
        { value: "delivered", label: "Delivered" },
        { value: "read", label: "Seen" },
      ];
    case "instagram":
      return [
        { value: "sent", label: "Sent" },
        { value: "read", label: "Seen" },
      ];
    case "twitter":
      return [
        { value: "sent", label: "Sent" },
        { value: "read", label: "Read" },
      ];
  }
}

function getDefaultStatus(platform: Platform): MessageStatus {
  switch (platform) {
    case "whatsapp":
      return "read";
    case "facebook":
      return "read";
    case "instagram":
      return "read";
    case "twitter":
      return "read";
  }
}

export default function MessageComposer({ platform, onAddMessage }: MessageComposerProps) {
  const [text, setText] = useState("");
  const [sender, setSender] = useState<MessageSender>("other");
  const [status, setStatus] = useState<MessageStatus>(getDefaultStatus(platform));

  const statusOptions = getStatusOptions(platform);

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddMessage(trimmed, sender, status);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Add Message
      </h3>

      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={2}
          className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {/* Sender toggle */}
          <div className="flex rounded-lg border border-gray-200 text-xs">
            <button
              onClick={() => setSender("other")}
              className={`rounded-l-lg px-3 py-1.5 font-medium transition-colors ${
                sender === "other"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Receiver
            </button>
            <button
              onClick={() => setSender("user")}
              className={`rounded-r-lg px-3 py-1.5 font-medium transition-colors ${
                sender === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              You
            </button>
          </div>

          {/* Status (only for sender's own messages) */}
          {sender === "user" && (
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as MessageStatus)}
              className="rounded-lg border border-gray-200 px-2 py-1.5 text-xs focus:border-indigo-500 focus:outline-none"
            >
              {statusOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleAdd}
            disabled={!text.trim()}
            className="ml-auto flex items-center gap-1 rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
