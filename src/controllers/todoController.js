import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    const existing = await todoSchema.findOne({
      title: title,
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "todo already exiest",
      });
    }

    const data = await todoSchema.create({
      title,
    });

    return res.status(201).json({
      success: true,
      message: "todo created",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: "todo not created",
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const data = await todoSchema.find({});

    return res.status(200).json({
      success: true,
      message: "todo fetched successfuly",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: "todo not fetched",
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;

    const data = await todoSchema.findByIdAndDelete({
      _id: todoId,
    });

    if (data) {
      return res.status(200).json({
        sucess: true,
        message: "Todo Deleted Sucessfuly",
        data,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Todo Not Found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: "Todo not Deleted",
      error,
    });
  }
};

export const getById = async (req, res) => {
  try {
    const todoId = req.params.id;

    const data = await todoSchema.findById({
      _id: todoId,
    });

    return res.status(200).json({
      sucess: true,
      message: "Todo Fetched Sucessfuly",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Todo Not Fetched",
      error,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todoId = req.params.id;

    const data = await todoSchema.findById({
      _id: todoId,
    });

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Todo Not Exiest",
      });
    }

    const exiesting = await todoSchema.findOne({
      title: title,
    });

    if (exiesting) {
      return res.status(400).json({
        success: false,
        message: "Todo Already Exist",
      });
    }

    data.title = title;
    await data.save();

    return res.status(200).json({
      sucess: true,
      message: "Todo Updated Sucessfuly",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: "Todo Not Updated",
    });
  }
};
