import { useState } from "react";


type Props = {
    data: string[];
    onselect?: (element:string) => void;
};

function List({ data,onselect }: Props) {
    const [index,setIndex]=useState(1);
    const handleClick = (i: number,element:string) => {
        setIndex (i);
        onselect?.(element);
    };
    return (
        <ul className="list-group">
            {data.map((elemento, i) => (
                <li 
                    onClick={() => handleClick(i, elemento)}
                    key={elemento}
                    className={`list-group-item ${index === i ? "active" : ""}`}
                >
                    {elemento}
                </li>
            ))}
        </ul>
    );
}

export default List;