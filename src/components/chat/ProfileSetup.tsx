"use client";

import { useRef } from "react";
import { Camera, X } from "lucide-react";
import { ChatState, ChatAction, Platform, ReceiverOnlineStatus } from "@/lib/types";
import { fileToBase64, getDefaultAvatar } from "@/lib/utils";

interface ProfileSetupProps {
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
  platform: Platform;
}

export default function ProfileSetup({ state, dispatch, platform }: ProfileSetupProps) {
  const senderFileRef = useRef<HTMLInputElement>(null);
  const receiverFileRef = useRef<HTMLInputElement>(null);

  const handleAvatarUpload = async (
    file: File,
    type: "sender" | "receiver"
  ) => {
    const base64 = await fileToBase64(file);
    if (type === "sender") {
      dispatch({ type: "SET_SENDER_AVATAR", payload: base64 });
    } else {
      dispatch({ type: "SET_RECEIVER_AVATAR", payload: base64 });
    }
  };

  const senderAvatar = state.sender.avatar || getDefaultAvatar();
  const receiverAvatar = state.receiver.avatar || getDefaultAvatar();

  return (
    <div className="space-y-5">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Profiles
      </h3>

      {/* Sender */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <label className="mb-2 block text-xs font-medium text-gray-500">
          Your Profile (Sender)
        </label>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={senderAvatar}
              alt="Sender"
              className="h-12 w-12 rounded-full border border-gray-200 object-cover"
            />
            <button
              onClick={() => senderFileRef.current?.click()}
              className="absolute -bottom-1 -right-1 rounded-full bg-indigo-600 p-1 text-white shadow hover:bg-indigo-700"
            >
              <Camera className="h-3 w-3" />
            </button>
            {state.sender.avatar && (
              <button
                onClick={() => dispatch({ type: "SET_SENDER_AVATAR", payload: null })}
                className="absolute -right-1 -top-1 rounded-full bg-red-500 p-0.5 text-white shadow"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
          <input
            type="text"
            value={state.sender.name}
            onChange={(e) => dispatch({ type: "SET_SENDER_NAME", payload: e.target.value })}
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Your name"
          />
          <input
            ref={senderFileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleAvatarUpload(file, "sender");
            }}
          />
        </div>
      </div>

      {/* Receiver */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <label className="mb-2 block text-xs font-medium text-gray-500">
          Contact Profile (Receiver)
        </label>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={receiverAvatar}
              alt="Receiver"
              className="h-12 w-12 rounded-full border border-gray-200 object-cover"
            />
            <button
              onClick={() => receiverFileRef.current?.click()}
              className="absolute -bottom-1 -right-1 rounded-full bg-indigo-600 p-1 text-white shadow hover:bg-indigo-700"
            >
              <Camera className="h-3 w-3" />
            </button>
            {state.receiver.avatar && (
              <button
                onClick={() => dispatch({ type: "SET_RECEIVER_AVATAR", payload: null })}
                className="absolute -right-1 -top-1 rounded-full bg-red-500 p-0.5 text-white shadow"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
          <input
            type="text"
            value={state.receiver.name}
            onChange={(e) => dispatch({ type: "SET_RECEIVER_NAME", payload: e.target.value })}
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Contact name"
          />
          <input
            ref={receiverFileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleAvatarUpload(file, "receiver");
            }}
          />
        </div>

        {/* Receiver status */}
        <div className="mt-3 flex items-center gap-2">
          <select
            value={state.receiver.status}
            onChange={(e) =>
              dispatch({
                type: "SET_RECEIVER_STATUS",
                payload: e.target.value as ReceiverOnlineStatus,
              })
            }
            className="rounded-lg border border-gray-200 px-2 py-1.5 text-xs focus:border-indigo-500 focus:outline-none"
          >
            <option value="online">Online</option>
            <option value="lastSeen">Last Seen</option>
            <option value="offline">Offline</option>
          </select>

          {state.receiver.status === "lastSeen" && (
            <input
              type="text"
              value={state.receiver.lastSeen || ""}
              onChange={(e) =>
                dispatch({ type: "SET_RECEIVER_LAST_SEEN", payload: e.target.value })
              }
              placeholder="e.g., today at 2:30 PM"
              className="flex-1 rounded-lg border border-gray-200 px-2 py-1.5 text-xs focus:border-indigo-500 focus:outline-none"
            />
          )}
        </div>

        {/* Twitter handle */}
        {platform === "twitter" && (
          <div className="mt-3">
            <input
              type="text"
              value={state.receiver.handle || ""}
              onChange={(e) =>
                dispatch({ type: "SET_RECEIVER_HANDLE", payload: e.target.value })
              }
              placeholder="@username"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}
