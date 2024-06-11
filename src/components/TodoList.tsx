import {
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {TodoListInterface} from "../App.tsx";
import Box from "@mui/material/Box";
import {Dispatch} from "react";

interface Props {
    todoList: TodoListInterface[] | null,
    setTodoList: Dispatch<TodoListInterface[]>,
}

const TodoList = ({todoList, setTodoList}: Props) => {


    if (todoList === null) return (
        <Box component="section" sx={{
            p: 2,
            maxWidth: '100%',
        }}>
            <Typography variant="body1" gutterBottom>Дел нет</Typography>
        </Box>)

    const handleDeletion = (id: string) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    const handleChange = (id: string) => {
        setTodoList(todoList.map(todo => {
            if(todo.id === id) return {id: todo.id, todo: todo.todo, status: todo.status === "COMPLETE" ? "INCOMPLETE" : "COMPLETE" }
            return todo
        }))
    }

    return (
            <Box component="section" sx={{
                p: 2,
                maxWidth: '100%',
            }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Задача</TableCell>
                                <TableCell>Статус</TableCell>
                                <TableCell>Изменить статус</TableCell>
                                <TableCell>Удалить задачу</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todoList.map(todo => (
                                <TableRow
                                    key={todo.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        <Typography variant="body1" gutterBottom>{todo.todo}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body1" gutterBottom>{todo.status}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox onChange={() => handleChange(todo.id)} defaultChecked/>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleDeletion(todo.id)} color="error">Удалить</Button>
                                    </TableCell>
                                </TableRow>))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>);
};

export default TodoList;