export type Platform = "whatsapp" | "facebook" | "instagram" | "twitter";

export type MessageSender = "user" | "other";

export type WhatsAppStatus = "sent" | "delivered" | "read";
export type MessengerStatus = "sent" | "delivered" | "read";
export type InstagramStatus = "sent" | "read";
export type TwitterStatus = "sent" | "read";

export type MessageStatus =
  | WhatsAppStatus
  | MessengerStatus
  | InstagramStatus
  | TwitterStatus;

export type ReceiverOnlineStatus = "online" | "lastSeen" | "offline";

export interface Profile {
  name: string;
  avatar: string | null;
}

export interface ReceiverProfile extends Profile {
  status: ReceiverOnlineStatus;
  lastSeen?: string;
  handle?: string; // For Twitter @handle
}

export interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
  status: MessageStatus;
  reaction?: string;
}

export interface ChatState {
  sender: Profile;
  receiver: ReceiverProfile;
  messages: Message[];
  platform: Platform;
  showPhoneFrame: boolean;
}

export type ChatAction =
  | { type: "SET_SENDER_NAME"; payload: string }
  | { type: "SET_SENDER_AVATAR"; payload: string | null }
  | { type: "SET_RECEIVER_NAME"; payload: string }
  | { type: "SET_RECEIVER_AVATAR"; payload: string | null }
  | { type: "SET_RECEIVER_STATUS"; payload: ReceiverOnlineStatus }
  | { type: "SET_RECEIVER_LAST_SEEN"; payload: string }
  | { type: "SET_RECEIVER_HANDLE"; payload: string }
  | { type: "ADD_MESSAGE"; payload: Message }
  | { type: "UPDATE_MESSAGE"; payload: { id: string; updates: Partial<Message> } }
  | { type: "DELETE_MESSAGE"; payload: string }
  | { type: "REORDER_MESSAGES"; payload: Message[] }
  | { type: "CLEAR_MESSAGES" }
  | { type: "TOGGLE_PHONE_FRAME" };
