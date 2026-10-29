import { Task } from "../models/Task";

// КТ3: SOLID - ISP (разделение интерфейсов)
export interface ITaskReader {
  getAll(): Task[];
  getById(id: number): Task | undefined;
}

export interface ITaskWriter {
  add(task: Task): void;
  remove(id: number): void;
}

// КТ3: SOLID - DIP (зависимость от абстракции)
export interface ITaskRepository extends ITaskReader, ITaskWriter {}