"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import type { Task } from "@/app/generated/prisma/client";

// READ
export async function loadTasks(): Promise<Task[]> {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return await prisma.task.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

// CREATE
export async function addTask(task: string, dateTime: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  // Your old processTask extracted date/time
  const date = dateTime.split("T")[0];
  const time = dateTime.split("T")[1];

  const newTask = await prisma.task.create({
    data: {
      task,
      date,
      time,
      status: "pending",
      userId: session.user.id,
    },
  });

  revalidatePath("/home");

  return newTask;
}

// UPDATE TEXT / DATE / TIME
export async function editTask(
  id: string,
  data: {
    task?: string;
    date?: string;
    time?: string;
  },
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const existingTask = await prisma.task.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!existingTask) {
    throw new Error("Task not found");
  }

  const updatedTask = await prisma.task.update({
    where: {
      id: existingTask.id,
    },
    data,
  });

  revalidatePath("/home");

  return updatedTask;
}


// TOGGLE STATUS
export async function toggleTaskStatus(id: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const currentTask = await prisma.task.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!currentTask) {
    throw new Error("Task not found");
  }

  const updatedTask = await prisma.task.update({
    where: {
      id: currentTask.id,
    },
    data: {
      status: currentTask.status === "pending" ? "completed" : "pending",
    },
  });

  revalidatePath("/home");

  return updatedTask;
}

// SOFT DELETE
export async function deleteTask(id: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const task = await prisma.task.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  const deletedTask = await prisma.task.update({
    where: {
      id: task.id,
    },
    data: {
      status: "deleted",
    },
  });

  revalidatePath("/home");

  return deletedTask;
}

// REMOVE DELETED TASKS PERMANENTLY
export async function clearDeletedTasks() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await prisma.task.deleteMany({
    where: {
      userId: session.user.id,
      status: "deleted",
    },
  });

  revalidatePath("/home");
}
