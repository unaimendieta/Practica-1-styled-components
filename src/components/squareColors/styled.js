import styled from "styled-components";

const StyledSquare = styled.div`
    background-color:${props=>(props.activeColor ? 'red' : 'green')};
    width: 200px;
    height: 200px;
`;

export {StyledSquare};