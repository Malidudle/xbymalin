import { prisma } from "@/lib/prisma";

export const DELETE = async ({ params }: any) => {
  try {
    await prisma.posts.delete({
      where: {
        id: params.id,
      },
    });

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Prompt not found failed to delete prompt", {
      status: 404,
    });
  }
};
