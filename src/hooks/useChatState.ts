"use client";

import { useReducer, useCallback } from "react";
import {
  ChatState,
  ChatAction,
  Message,
  Platform,
  MessageSender,
  MessageStatus,
  ReceiverOnlineStatus,
} from "@/lib/types";
import { generateId } from "@/lib/utils";
import { getNextTimestamp } from "@/lib/time";

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "SET_SENDER_NAME":
      return { ...state, sender: { ...state.sender, name: action.payload } };
    case "SET_SENDER_AVATAR":
      return { ...state, sender: { ...state.sender, avatar: action.payload } };
    case "SET_RECEIVER_NAME":
      return { ...state, receiver: { ...state.receiver, name: action.payload } };
    case "SET_RECEIVER_AVATAR":
      return { ...state, receiver: { ...state.receiver, avatar: action.payload } };
    case "SET_RECEIVER_STATUS":
      return { ...state, receiver: { ...state.receiver, status: action.payload } };
    case "SET_RECEIVER_LAST_SEEN":
      return { ...state, receiver: { ...state.receiver, lastSeen: action.payload } };
    case "SET_RECEIVER_HANDLE":
      return { ...state, receiver: { ...state.receiver, handle: action.payload } };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        messages: state.messages.map((msg) =>
          msg.id === action.payload.id
            ? { ...msg, ...action.payload.updates }
            : msg
        ),
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((msg) => msg.id !== action.payload),
      };
    case "REORDER_MESSAGES":
      return { ...state, messages: action.payload };
    case "CLEAR_MESSAGES":
      return { ...state, messages: [] };
    case "TOGGLE_PHONE_FRAME":
      return { ...state, showPhoneFrame: !state.showPhoneFrame };
    default:
      return state;
  }
}

function createInitialState(platform: Platform): ChatState {
  return {
    sender: { name: "You", avatar: null },
    receiver: {
      name: "Contact",
      avatar: null,
      status: "online" as ReceiverOnlineStatus,
      handle: "@username",
    },
    messages: [],
    platform,
    showPhoneFrame: true,
  };
}

export function useChatState(platform: Platform) {
  const [state, dispatch] = useReducer(
    chatReducer,
    platform,
    createInitialState
  );

  const addMessage = useCallback(
    (text: string, sender: MessageSender, status: MessageStatus) => {
      const message: Message = {
        id: generateId(),
        text,
        sender,
        timestamp: getNextTimestamp(state.messages),
        status,
      };
      dispatch({ type: "ADD_MESSAGE", payload: message });
    },
    [state.messages]
  );

  const updateMessage = useCallback(
    (id: string, updates: Partial<Message>) => {
      dispatch({ type: "UPDATE_MESSAGE", payload: { id, updates } });
    },
    []
  );

  const deleteMessage = useCallback((id: string) => {
    dispatch({ type: "DELETE_MESSAGE", payload: id });
  }, []);

  const clearMessages = useCallback(() => {
    dispatch({ type: "CLEAR_MESSAGES" });
  }, []);

  return {
    state,
    dispatch,
    addMessage,
    updateMessage,
    deleteMessage,
    clearMessages,
  };
}
