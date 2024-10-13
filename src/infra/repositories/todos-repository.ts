import { Todo } from "../../application/models/todo";

export abstract class TodosRepository {
  abstract register(todo: Todo): Todo;
  abstract list(): Todo[];
  abstract remove(id: string): boolean;
  abstract findById(id: string): Todo | null;
}
