import { Task } from "../models/Task";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import { ILogger } from "../interfaces/ILogger";

// КТ3: SOLID - SRP и DIP
export class TaskManager {
  private repository: ITaskRepository;
  private logger: ILogger;

  constructor(repository: ITaskRepository, logger: ILogger) {
    this.repository = repository;
    this.logger = logger;
  }

  addTask(task: Task): void {
    this.repository.add(task);
    this.logger.log(`Task added: ${task.title}`);
  }

  completeTask(id: number): void {
    const task = this.repository.getById(id);
    if (!task) {
      this.logger.log(`Task with id ${id} not found`);
      return;
    }
    task.markCompleted();
    this.logger.log(`Task completed: ${task.title}`);
  }

  listTasks(): void {
    this.repository.getAll().forEach(t => console.log(t.toString()));
  }
}