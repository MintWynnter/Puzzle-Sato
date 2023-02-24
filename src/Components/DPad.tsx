import React from 'react';
import { Button } from 'react-bootstrap';
import { square } from '../Interfaces/Square';

export function DPad({size, coords, setpco, board, setboard}: {
    size: [number, number];
    coords: [number, number];
    setpco: (c: [number, number]) => void;
    board: square[];
    setboard: (c: square[]) => void;
}): JSX.Element {
    function getp(): number{
        return coords[0] + size[1] * coords[1];
    }
    function move(x: number, y: number){
        if(coords[0] + x < 0 || coords[0] + x > size[0] - 1){return;}
        if(coords[1] + y < 0 || coords[1] + y > size[1] - 1){return;}
        setpco([coords[0] + x, coords[1] + y]);
        let b: square[] = board;
        b[getp()] = {...b[getp()], type: "a"};
        b[getp() + size[1] * y + x] = {...b[getp() + size[1] * y + x], type: "p"};
        setboard(b);
    }
    return <div>
        <Button onClick={()=>move(0, -1)}>up</Button>
        <Button onClick={()=>move(0, 1)}>down</Button>
        <Button onClick={()=>move(1, 0)}>right</Button>
        <Button onClick={()=>move(-1, 0)}>left</Button>
    </div>;
}