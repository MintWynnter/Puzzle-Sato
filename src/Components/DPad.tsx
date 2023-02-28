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
    const base: square = {
        moveable: false,
        type: "a",
        slide: false,
        melt: false,
        gothrough: true
      }
    function getp(point: [number, number]): number{
        return point[0] + size[1] * point[1];
    }
    function checkpush(x: number, y: number): boolean{
        return (board[getp([coords[0] + x, coords[1] + y])].type === "b");
    }
    function canpush(i: [number, number], x: number, y: number): boolean{
        return !(i[0] + x < 0 || i[0] + x > size[0] - 1 || i[1] + y < 0 || i[1] + y > size[1] - 1)
    }
    function m(b: square[], i: [number, number], x: number, y: number): square[]{
        const s: square = board[getp(i)];
        b[getp([i[0] + x, i[1] + y])] = s;
        b[getp(i)] = base;
        return b;
    }
    function move(x: number, y: number){
        if(coords[0] + x < 0 || coords[0] + x > size[0] - 1){return;}
        if(coords[1] + y < 0 || coords[1] + y > size[1] - 1){return;}
        let b: square[];
        if(checkpush(x, y)){
            if(!canpush([coords[0] + x, coords[1] + y], x, y)){return;}
            b = m(board, [coords[0] + x, coords[1] + y], x, y);
        }
        else{b = board;}
        setpco([coords[0] + x, coords[1] + y]);
        b = m(b, coords, x, y);
        setboard(b);
    }
    return <div>
        <Button onClick={()=>move(0, -1)}>up</Button>
        <Button onClick={()=>move(0, 1)}>down</Button>
        <Button onClick={()=>move(1, 0)}>right</Button>
        <Button onClick={()=>move(-1, 0)}>left</Button>
    </div>;
}