"use client";

import { useState } from "react";
import { Trash2, GripVertical, ChevronUp, ChevronDown, Pencil, Check, X } from "lucide-react";
import { Message, ChatAction, Platform, MessageStatus } from "@/lib/types";
import { formatMessageTime } from "@/lib/time";
import { cn } from "@/lib/utils";

interface MessageListProps {
  messages: Message[];
  dispatch: React.Dispatch<ChatAction>;
  platform: Platform;
}

function getStatusOptions(platform: Platform): { value: MessageStatus; label: string }[] {
  switch (platform) {
    case "whatsapp":
      return [
        { value: "sent", label: "Sent" },
        { value: "delivered", label: "Delivered" },
        { value: "read", label: "Read" },
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

export default function MessageList({ messages, dispatch, platform }: MessageListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const statusOptions = getStatusOptions(platform);

  const handleEdit = (msg: Message) => {
    setEditingId(msg.id);
    setEditText(msg.text);
  };

  const handleSaveEdit = (id: string) => {
    if (editText.trim()) {
      dispatch({ type: "UPDATE_MESSAGE", payload: { id, updates: { text: editText.trim() } } });
    }
    setEditingId(null);
    setEditText("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    const newMessages = [...messages];
    [newMessages[index - 1], newMessages[index]] = [newMessages[index], newMessages[index - 1]];
    dispatch({ type: "REORDER_MESSAGES", payload: newMessages });
  };

  const handleMoveDown = (index: number) => {
    if (index >= messages.length - 1) return;
    const newMessages = [...messages];
    [newMessages[index], newMessages[index + 1]] = [newMessages[index + 1], newMessages[index]];
    dispatch({ type: "REORDER_MESSAGES", payload: newMessages });
  };

  if (messages.length === 0) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Messages
          </h3>
        </div>
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-400">
          No messages yet. Add your first message above.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Messages ({messages.length})
        </h3>
        <button
          onClick={() => dispatch({ type: "CLEAR_MESSAGES" })}
          className="text-xs text-red-500 hover:text-red-700"
        >
          Clear All
        </button>
      </div>

      <div className="custom-scrollbar max-h-[300px] space-y-2 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={cn(
              "group rounded-lg border bg-white p-3 transition-colors hover:border-gray-300",
              msg.sender === "user" ? "border-indigo-100" : "border-gray-200"
            )}
          >
            <div className="flex items-start gap-2">
              <div className="flex flex-col gap-0.5 pt-1">
                <button
                  onClick={() => handleMoveUp(i)}
                  disabled={i === 0}
                  className="text-gray-300 hover:text-gray-500 disabled:opacity-30"
                >
                  <ChevronUp className="h-3.5 w-3.5" />
                </button>
                <GripVertical className="h-3.5 w-3.5 text-gray-300" />
                <button
                  onClick={() => handleMoveDown(i)}
                  disabled={i === messages.length - 1}
                  className="text-gray-300 hover:text-gray-500 disabled:opacity-30"
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2 text-xs text-gray-500">
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 font-medium",
                      msg.sender === "user"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-gray-100 text-gray-600"
                    )}
                  >
                    {msg.sender === "user" ? "You" : "Receiver"}
                  </span>
                  <span>{formatMessageTime(msg.timestamp)}</span>
                  {msg.sender === "user" && (
                    <select
                      value={msg.status}
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_MESSAGE",
                          payload: { id: msg.id, updates: { status: e.target.value as MessageStatus } },
                        })
                      }
                      className="rounded border border-gray-200 px-1 py-0.5 text-xs"
                    >
                      {statusOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {editingId === msg.id ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSaveEdit(msg.id);
                        if (e.key === "Escape") handleCancelEdit();
                      }}
                      className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:outline-none"
                      autoFocus
                    />
                    <button onClick={() => handleSaveEdit(msg.id)} className="text-green-600 hover:text-green-700">
                      <Check className="h-4 w-4" />
                    </button>
                    <button onClick={handleCancelEdit} className="text-gray-400 hover:text-gray-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <p className="text-sm text-gray-800">{msg.text}</p>
                )}
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => handleEdit(msg)}
                  className="rounded p-1 text-gray-300 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => dispatch({ type: "DELETE_MESSAGE", payload: msg.id })}
                  className="rounded p-1 text-gray-300 transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
