import { Body, Controller, Post } from "@nestjs/common";

interface CreateTodoDTO{
    name: string,
    complete: boolean
}

@Controller('Cats')
export class TodoController {
    // constructor(private todosService: TodosService){}

    @Post()
    async create(@Body() createTodoDto: CreateTodoDTO) {
        // const todo = await this.todosService.
    }
}