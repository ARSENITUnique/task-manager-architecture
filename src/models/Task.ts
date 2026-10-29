// КТ2: ООП - Абстракция (абстрактный класс) и Инкапсуляция (приватные поля)
export abstract class Task {
  private _id: number;
  private _title: string;
  private _completed: boolean;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._completed = false;
  }

  // КТ2: Инкапсуляция - доступ к полям через геттеры
  get id(): number { return this._id; }
  get title(): string { return this._title; }
  get completed(): boolean { return this._completed; }

  set title(value: string) {
    if (value.trim().length === 0) throw new Error("Title cannot be empty");
    this._title = value;
  }

  // КТ2: Полиморфизм - метод, который будет переопределён
  abstract getType(): string;

  markCompleted(): void {
    this._completed = true;
  }

  // КТ3: SOLID - SRP (класс отвечает только за данные задачи)
  toString(): string {
    return `[${this.getType()}] ${this._id}: ${this._title} (${this._completed ? 'done' : 'pending'})`;
  }
}

// КТ2: ООП - Наследование
// КТ3: SOLID - OCP (можно добавлять новые типы, не меняя базовый класс)
export class RegularTask extends Task {
  getType(): string { return "Regular"; }
}

export class UrgentTask extends Task {
  getType(): string { return "Urgent"; }
}