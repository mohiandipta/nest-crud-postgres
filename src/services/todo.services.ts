import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "src/entity/todo.entity";
import { Repository } from "typeorm";


export interface TodoInterface {
    name: string,
    complete: boolean
}

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<TodoInterface>
    ){}

    // create
    create(todo: TodoInterface): Promise<TodoInterface>{
        return this.todoRepository.save(
            this.todoRepository.create(todo)
        )
    }

    // find-all
    findAll(): Promise<TodoInterface[]>{
        return this.todoRepository.find()
    }

    // update
    update(id: string, data: any): Promise<any>{
        return this.todoRepository.createQueryBuilder()
        .update().set({
            name: data.name
        })
        .where('id = :id', {id})
        .execute()
    }

    // delete
    delete(id: string): Promise<any>{
        return this.todoRepository.createQueryBuilder()
        .delete().from(Todo)
        .where('id = :id', {id})
        .execute()
    }
}