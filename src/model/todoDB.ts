import todo from "./todoSchema";

const DBModel = {
    // create
    async create(data: any) {
        return await todo.create({
            item: data.item,
            finished: data.finished,
            created: new Date().getTime(),
            updated: new Date().getTime(),
        });
    },

    // find
    async retrieve(pkId: number) {
        return await todo
            .findByPk(pkId, {
                attributes: [
                    ["uid", "id"],
                    ["item", "item"],
                    ["finished", "finished"],
                    ["created", "created"],
                    ["updated", "updated"],
                ],
            })
            .then((todo: any) => {
                return JSON.parse(JSON.stringify(todo));
            });
    },

    // update
    async update(pkId: number, data: any) {
        return await todo
            .findByPk(pkId, {})
            .then((todo: any) => {
                if (!todo) {
                    throw new Error(`Todo ${pkId} data not found!`);
                }
                return todo.update({
                    item: data.item || todo.item,
                    finished: data.finished || todo.finished,
                    created: data.created || todo.created,
                    updated: new Date().getTime(),
                });
            })
            .catch((error: any) => {
                throw new Error(error);
            });
    },

    // update
    async updateArchive(pkId: number) {
        return await todo
            .findByPk(pkId, {})
            .then((todo: any) => {
                if (!todo) {
                    throw new Error(`Todo ${pkId} data not found!`);
                }
                return todo.update({
                    item: todo.item,
                    finished: true,
                    created: todo.created,
                    updated: new Date().getTime(),
                });
            })
            .catch((error: any) => {
                throw new Error(error);
            });
    },

    // delete
    async destroy(pkId: number) {
        return await todo
            .findByPk(pkId)
            .then((todo: any) => {
                if (!todo) {
                    throw new Error(`Todo ${pkId} data not found!`);
                }
                return todo.destroy();
            })
            .catch((error: any) => {
                throw new Error(error);
            });
    },

    // list
    async listWithQuery(query: any, order = ["updated", "DESC"]) {
        return await todo.findAll({
            attributes: [
                ["uid", "id"],
                ["item", "item"],
                ["finished", "finished"],
                ["updated", "updated"],
                ["created", "created"],
            ],
            order: [order],
            where: query,
        });
    },
};

export default DBModel;
