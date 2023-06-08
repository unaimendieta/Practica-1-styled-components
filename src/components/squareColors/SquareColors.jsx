import { useState } from "react";
import Button from "../button/Button";
import { StyledSquare } from "./styled";

const SquareColors = () => {
	const [color, setColor] = useState(true);
	return (
		<>
		<StyledSquare activeColor={color}></StyledSquare>
		<Button text="Cambiar color" handleClick={()=>changeColor(color, setColor)}/>
		</>
	);
};
const changeColor = (color, setColor) => {
    setColor(!color);
};

export default SquareColors;