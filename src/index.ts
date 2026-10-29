import { RegularTask, UrgentTask } from "./models/Task";
import { User } from "./models/User";
import { Admin } from "./models/Admin";
import { TaskManager } from "./services/TaskManager";
import { ConsoleLogger } from "./services/ConsoleLogger";
import { ITaskRepository } from "./interfaces/ITaskRepository";
import { Task } from "./models/Task";

class InMemoryTaskRepository implements ITaskRepository {
  private tasks: Task[] = [];
  add(task: Task): void { this.tasks.push(task); }
  remove(id: number): void { this.tasks = this.tasks.filter(t => t.id !== id); }
  getAll(): Task[] { return this.tasks; }
  getById(id: number): Task | undefined { return this.tasks.find(t => t.id === id); }
}

// КТ2: ООП - создание объектов, наследование, полиморфизм
const user = new User(1, "Alice");
const admin = new Admin(2, "Bob");

console.log(user.getRole());  // User
console.log(admin.getRole()); // Admin

const repo = new InMemoryTaskRepository();
const logger = new ConsoleLogger();
const manager = new TaskManager(repo, logger);

const task1 = new RegularTask(1, "Buy milk");
const task2 = new UrgentTask(2, "Fix bug");

manager.addTask(task1);
manager.addTask(task2);
manager.completeTask(1);
manager.listTasks();