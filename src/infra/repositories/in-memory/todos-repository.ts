import { Todo } from "../../../application/models/todo";
import { TodosRepository } from "../todos-repository";

export class TodosRepositoryInMemory implements TodosRepository {
  db: Todo[] = [{ id: "accepted-id", name: "hey", completed: true }];

  register(todo: Todo): Todo {
    this.db.push(todo);

    return todo;
  }

  findById(id: string): Todo | null {
    const todo = this.db.find((todo) => todo.id === id);
    return todo || null;
  }

  list(): Todo[] {
    return this.db;
  }

  remove(id: string): boolean {
    const index = this.db.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return false;
    }
    this.db.splice(index, 1);
    return true;
  }
}
