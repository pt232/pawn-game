import { createContext, useContext, useEffect } from "react";
import { io } from "socket.io-client";

type SocketProviderProps = {
  children: React.ReactNode;
};

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000";
const SocketContext = createContext({});

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }: SocketProviderProps) {
  useEffect(() => {
    const socket = io(socketUrl);

    return () => {
      socket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
}
