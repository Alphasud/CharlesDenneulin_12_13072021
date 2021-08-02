import { Rectangle } from 'recharts';
import useMousePosition from './GetMousePosition';

const CustomCursorTime = () => {
const { x } = useMousePosition();
    return <Rectangle fill="rgba(0, 0, 0, 0.1)" stroke="rgba(0, 0, 0, 0)" width={x*2} height={200} x={x-165} />;
};

export default CustomCursorTime