import todoDB from "../model/todoDB";

class TodoController {
    static async listTodo(req: any, res: any) {
        const todoList = await todoDB.listWithQuery({}); 
        res.status(200).send(todoList);
    }

    static async getTodo(req: any, res: any) {
        try {
            const todoList = await todoDB.retrieve(req.params.id);
            res.status(200).send(todoList);
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }

    static async addTodo(req: any, res: any) {
        try {
            await todoDB.create(req.body)
            res.status(200).send({ success: true });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
    
    static async updateTodo(req: any, res: any) {
        try {
            await todoDB.update(req.params.id, req.body)
            res.status(200).send({ success: true });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
    
    static async updateMultiTodo(req: any, res: any) {
        try {
            if(!req.body.length) return;
            req.body.map((id: any) => todoDB.updateArchive(id));
            res.status(200).send({ success: true });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
    
    static async deleteTodo(req: any, res: any) {
        try {
            await todoDB.destroy(req.params.id)
            res.status(200).send({ success: true });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
    
    static async deleteMultiTodo(req: any, res: any) {
        try {
            if(!req.body.length) return;
            console.log(req.body)
            req.body.map((id: any) => todoDB.destroy(id));
            res.status(200).send({ success: true });
        } catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
}

export default TodoController;
