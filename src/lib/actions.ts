"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function toggleUserStatus(userId: string, currentStatus: boolean) {
  await prisma.user.update({
    where: { id: userId },
    data: { active: !currentStatus }
  })
  revalidatePath('/admin') // Atualiza a tela automaticamente
}