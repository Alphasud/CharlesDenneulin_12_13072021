import { Rectangle } from 'recharts';
import useMousePosition from '../Services/getMousePosition';
/* This component generates a rectangle in the time graph, following mouse position */
const CustomCursorTime = () => {
    const { x } = useMousePosition();
/* https://recharts.org/en-US/api/Rectangle */
    return <Rectangle fill="rgba(0, 0, 0, 0.1)" stroke="rgba(0, 0, 0, 0)" width={x*2} height={200} x={x-155} />;
};

export default CustomCursorTime