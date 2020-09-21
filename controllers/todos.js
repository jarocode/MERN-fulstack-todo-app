const Todos = require('../model/todoModels');


const GetTodos = async (req, res, next) => {
    try {
        const todos = await Todos.find();

        //successful get is 200
        return res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

const PostTodos = async (req, res, next) => {
    try {
        const {todo} = req.body;
        const newTodos = await Todos.create(req.body);
        
        //successful post is 201
        return res.status(201).json({
            success: true,
            data: newTodos
        })

    } catch (error) {
        res.status(400).res.json({
            success: false,
            error: 'wrong schema'
        })
    }
}

const DeleteTodos = async (req, res, next) => {
    try {
        const todos = await Todos.findById(req.params.id);
    
    if(!todos) return res.status(404).json({
        success: false,
        error: 'Todo not  found'
    })

    await todos.remove();
    return res.status(200).json({
        success: true,
        data: {}
    })
    } catch (error) {
        res.status(500).res.json({
            success: false,
            error: 'Server Error'
        })
    }
}


module.exports.GetTodos = GetTodos;
module.exports.PostTodos = PostTodos;
module.exports.DeleteTodos = DeleteTodos;
 
