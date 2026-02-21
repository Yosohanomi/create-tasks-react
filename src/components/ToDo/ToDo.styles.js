import styled from 'styled-components';

export const ToDoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const ToDoText = styled.p`
    color: #000;
    font-size: 24px;
`;

export const ToDoButtonAdd = styled.button`
    background-color: rgb(105, 232, 132);
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    padding: 8px 50px;
    margin-bottom: 26px;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
        border: 2px solid rgba(0, 0, 0, 0.7);
        background-color: rgb(73, 163, 92);
    }
`;

export const ToDoButtonDelete = styled.button`
    background-color: transparent;
    border: 2px solid red;
    border-radius: 20px;
    color: #000;
    font-size: 16px;
    padding: 8px 15px;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
        color: red;
        border: 2px solid #000;
    }
`;
export const ToDoUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
    flex-direction: column;
`;

export const ToDoLi = styled.li`
    display: flex;
    justify-content: space-between;
    gap: 30px;
`;

export const ToDoLabel = styled.label`
    color: #000;
    font-size: 24px;
`;

export const ToDoInputCheck = styled.input`
    text-decoration: none;
    &[type="checkbox"]:checked + label {
        text-decoration: line-through;
    }

`;