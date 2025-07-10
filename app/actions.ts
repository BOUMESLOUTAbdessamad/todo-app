"use server";
import { db } from "@/lib/db/db"
import { tasksTable } from "@/lib/db/schema";
import { desc, eq } from 'drizzle-orm';


export async function createTask(taskFormData: object) {
  await db.insert(tasksTable).values({...taskFormData});
}

export async function getTasks() {
    return await db.select().from(tasksTable).orderBy(desc(tasksTable.id))
}
export async function getTaskById(id: any) {
    return await db.select().from(tasksTable).where(eq(tasksTable.id, id));
}

export async function UpdateTaskStatus(id: any, status: boolean) {
    await db.update(tasksTable).set({status: status}).where(eq(tasksTable.id, id));
}

export async function deleteTask(id:any) {
    await db.delete(tasksTable).where(eq(tasksTable.id, id));

}