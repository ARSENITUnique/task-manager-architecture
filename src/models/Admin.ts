import { User } from "./User";

// КТ2: ООП - Наследование и Полиморфизм
// КТ3: SOLID - LSP (Admin может использоваться везде, где User)
export class Admin extends User {
  getRole(): string {
    return "Admin";
  }

  deleteTask(taskId: number): void {
    console.log(`Admin ${this.name} deleted task ${taskId}`);
  }
}