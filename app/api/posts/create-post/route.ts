import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from "../../auth/[...nextauth]/route"

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const username = session?.user?.name;
  const userImage = session?.user?.image
  const currentUserEmail = session?.user?.email!;

  const data = await req.json();
  const post = data.content;

  const user = await prisma.posts.create({
    data: {
        userID: currentUserEmail,
        name: username || 'User Failed',
        userImage: userImage || 'https://www.thesun.co.uk/wp-content/uploads/2022/09/RF-OFF-PLAT-BRITAINS-FATTEST-MAN.jpg?strip=all&quality=100&w=1080&h=1080&crop=1',
        content: post
    }
  })

  return NextResponse.json(user);
}