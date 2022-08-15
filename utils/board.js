import {defaultCell} from "./cell"
export const buildBoard=({rows,col})=>{
    const builtRows=Array.from({length:rows},()=>
    Array.from({length:col},()=>({...defaultCell}))
    );
    return{
        rows:builtRows,
        size:{rows,columns}
    };
};