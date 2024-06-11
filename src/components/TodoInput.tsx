import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Stack} from "@mui/material";
import {Dispatch, useRef, useState} from "react";
import {TodoListInterface} from "../App.tsx";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTodoList: Dispatch<TodoListInterface[]>,
    todoList: TodoListInterface[] | null
}

const TodoInput = ({setTodoList, todoList}: Props) => {
    const [input, setInput] = useState<string>('')
    const ref = useRef(null)
    const handleClick = () => {
        if (todoList === null) return (setTodoList([{ id: uuidv4(), todo: input, status: "INCOMPLETE" }]))
        return setTodoList([...todoList, {id: uuidv4(), todo: input, status: "INCOMPLETE"}])
    }

    return (
        <Box component="section" sx={{
            p: 2,
            maxWidth: '100%',
        }}>
            <Stack direction='row' gap={5} alignItems='center'>
                <TextField
                    ref={ref}
                    onChange={(e) => setInput(e.target.value)}
                    id="outlined-basic" label="Добавить задачу"
                    variant="outlined"
                    fullWidth/>
                <Button disabled={input === ''} size="large" variant="contained" onClick={handleClick} >Добавить</Button>
            </Stack>
        </Box>
    );
};

export default TodoInput;