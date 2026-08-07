import type { Prisma } from "@/app/generated/prisma/client";

export type Task = Prisma.TaskGetPayload<{}>;

export type Tasks = Task[];

export type TaskStatus = "pending" | "completed" | "deleted";