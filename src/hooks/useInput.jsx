import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const useInput = (initialState, action) => {
const dispatch = useDispatch();
const [input, setInput] = useState(initialState);

const inputChange = (e) => {
const { name, value } = e.target;
setInput({ ...input, [name]: value });
};

const handleSubmit = async () => {
dispatch(action(input));
setInput(initialState);
};
return [input, inputChange, handleSubmit];
};