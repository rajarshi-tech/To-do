import type { Prisma } from "@/app/generated/prisma/client";

export type TaskStatus = "pending" | "completed" | "deleted";

export type Task = Prisma.TaskGetPayload<{}>;

export type Tasks = Task[];