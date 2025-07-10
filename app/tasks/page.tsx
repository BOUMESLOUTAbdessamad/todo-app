"use client";

import {
  getTasks,
  createTask,
  UpdateTaskStatus,
  getTaskById,
  deleteTask,
} from "@/app/actions";

import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Divider } from "@heroui/divider";

type Task = {
  id: any;
  task: string;
  description: string;
  status: boolean;
};

function TasksView() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function createNewTask(formData: FormData): Promise<void> {
    const date = new Date();

    const taskFormData = {
      task: formData.get("task"),
      status: false,
      createdAt: date,
    };
    if (taskFormData.task != null && taskFormData.task != "") {
      createTask(taskFormData);
      getTasks().then(setTasks);
    }
  }

  async function deleteTaskbyId(id: any): Promise<void> {
    const task = await getTaskById(id);
    if (!task) return;
    await deleteTask(id);
    const updatedTasks: any = await getTasks();
    setTasks(updatedTasks);
  }

  async function updateStatus(id: any): Promise<void> {
    const task = await getTaskById(id);
    if (!task) return;

    await UpdateTaskStatus(id, !task[0].status);
    const updatedTasks: any = await getTasks();
    setTasks(updatedTasks);
  }

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div className="container mx-auto p-4 w-full">
      <form
        action={createNewTask}
        className="justify-between flex items-center mb-4"
      >
        <Input type="text" name="task" placeholder="+ Add a Task" />
        <Input type="submit" className="hidden" />
      </form>
      {/* New Tasks */}
      <div className="flex flex-col gap-2">
        {tasks.map((data: Task) =>
          data?.status === false ? (
            <div
              key={data?.id}
              className="flex justify-between items-center dark:hover:bg-zinc-900 p-2 hover:bg-zinc-300 rounded-md"
            >
              <div>
                <Checkbox
                  onChange={() => updateStatus(data?.id)}
                  className="text-md"
                  defaultSelected={data?.status}
                >
                  {data?.task}
                </Checkbox>
                <p>{data?.description}</p>
              </div>

              <Trash2
                onClick={() => deleteTaskbyId(data?.id)}
                color="darkred"
                size={20}
                className="cursor-pointer"
              />
            </div>
          ) : null
        )}
      </div>

      <Divider className="my-4" />

      <div className="flex flex-col gap-2">
        {tasks.map((data: Task) =>
          data?.status === true ? (
            <div
              key={data?.id}
              className="flex justify-between items-center dark:hover:bg-zinc-900 p-2 hover:bg-zinc-300 rounded-md"
            >
              <div>
                <Checkbox
                  onChange={() => updateStatus(data?.id)}
                  className="text-md"
                  defaultSelected={data?.status}
                >
                  {data?.task}
                </Checkbox>
                <p>{data?.description}</p>
              </div>

              <Trash2
                onClick={() => deleteTaskbyId(data?.id)}
                color="darkred"
                size={20}
                className="cursor-pointer"
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
export default TasksView;
