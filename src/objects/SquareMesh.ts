import { Material } from "./Material";
import { BufferIndexedMesh } from "./BufferIndexedMesh";
import * as THREE from "three";

export interface IData  {
    indices: Array<number>;
    vertices: Array<number>;
    normals: Array<number>;
    colors: Array<number>;
}

export const Square = (length: number, height: number, xPos: number, yPos: number): IData => {
    
     const data : IData = {
         indices: [],
         vertices: [],
         normals: [],
         colors: []
     };

    const halfLength = length / 2;
    const halfHeight = height / 2;

    //Clockwise traversal
    data.vertices.push(xPos-halfLength, yPos+halfHeight);
    data.vertices.push(xPos+halfLength, yPos+halfHeight);
    data.vertices.push(xPos+halfLength, yPos-halfHeight);
    data.vertices.push(xPos-halfLength, yPos-halfHeight);
    
    return data; 
};

export const SquareThree = (length: number, height: number, xPos: number, yPos: number): THREE.Mesh => {

    const square = Square(length, height, xPos, yPos);
        
    geometry : THREE.BufferGeometry;  
    scene : THREE.Scene;
    const mesh = new THREE.Mesh();
    return mesh; 
};


