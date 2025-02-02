import { auth } from "~/server/auth";
import Room from "../../../components/liveblocks/room";
import Canvas from "~/components/canvas/Canvas";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const session = await auth();

  return (
    <Room roomId={"room:" + id}>
      <Canvas />
    </Room>
  );
};

export default page;
