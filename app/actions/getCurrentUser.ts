import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export default async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email as string },
    });

    if (!user) {
      return null;
    }
    return user;
  } catch (error: any) {
    return null;
  }
}
