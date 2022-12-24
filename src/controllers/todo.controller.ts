import { Body, Controller, Post, Get, Req, Put, Delete, Param } from "@nestjs/common";
import { Request } from "express";
import { TodoInterface, TodosService } from "src/services/todo.services";

interface CreateTodoDTO{
    name: string,
    complete: boolean
}

@Controller('cats')
export class TodoController {
    constructor(private todosService: TodosService){}

    // GET
    @Get()
    async findAll(@Req() request:Request){
        const cats: Array<TodoInterface> = await this.todosService.findAll()
        return cats
    }

    // POST
    @Post()
    async create(@Body() createTodoDto: CreateTodoDTO){
        const todo = await this.todosService.create(createTodoDto)
        if (!todo) {
            return 'error in creating todo'
        }
        return 'todo created successfully'
    }

    // PUT
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCat: any = await this.todosService.update(id, body)
        return "cat updated";
    }

    // DELETE
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.todosService.delete(id)
        return "cat deleted"
    }
}