import React from 'react';
import { Button } from 'react-bootstrap';

export function DPad({size, coords, setpco, board, setboard}: {
    size: [number, number];
    coords: [number, number];
    setpco: (c: [number, number]) => void;
    board: string[];
    setboard: (c: string[]) => void;
}): JSX.Element {
    function getp(): number{
        return coords[0] + size[1] * coords[1];
    }
    function uppress(): void {
        setpco([coords[0], coords[1] - 1]);
        let b: string[] = board;
        b[getp()] = "a";
        b[getp() - size[1]] = "p"
        setboard(b);
        console.log(b);
    }
    function downpress(): void {
        setpco([coords[0], coords[1] + 1]);
        let b: string[] = board;
        b[getp()] = "a";
        b[getp() + size[1]] = "p"
        setboard(b);
    }
    function leftpress(): void {
        setpco([coords[0] - 1, coords[1]]);
        let b: string[] = board;
        b[getp()] = "a";
        b[getp() - 1] = "p"
        setboard(b);
    }
    function rightpress(): void {
        setpco([coords[0] + 1, coords[1]]);
        let b: string[] = board;
        b[getp()] = "a";
        b[getp() + 1] = "p"
        setboard(b);
    }
    return <div>
        <Button onClick={uppress}>up</Button>
        <Button onClick={downpress}>down</Button>
        <Button onClick={rightpress}>right</Button>
        <Button onClick={leftpress}>left</Button>
    </div>;
}