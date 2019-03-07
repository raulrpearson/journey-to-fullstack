import React from 'react';
import styled from '@emotion/styled';

const TodoBox = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 1em;
  margin: 2em 0;

  p {
    margin: 0;
  }

  span.todo {
    color: tomato;
    margin-right: 1em;
    font-weight: bold;
  }
`;

const Todo = ({ children }) => (
  <TodoBox>
    <span className="todo">TODO</span>
    {children}
  </TodoBox>
);

export default Todo;
