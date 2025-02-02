"use client";

import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react";
import React from "react";
import { Layer } from "~/types";

const Room = ({
  children,
  roomId,
}: {
  children: React.ReactNode;
  roomId: string;
}) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
      <RoomProvider
        id={roomId}
        initialPresence={{
          selection: [],
          cursor: null,
          penColor: null,
          pencilDraft: null,
        }}
        initialStorage={{
          roomColor: { r: 30, g: 30, b: 30 },
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([]),
        }}
      >
        <ClientSideSuspense
          fallback={
            <div className="flex h-screen flex-col items-center justify-center gap-2">
              <img
                src="/collaborate-logo.svg"
                alt="Collaborate logo"
                className="h-[50px] w-[50px] animate-bounce"
              />
              <h1 className="text-sm font-normal">Loading</h1>
            </div>
          }
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
