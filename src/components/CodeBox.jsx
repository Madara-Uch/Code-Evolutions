import React, { useEffect, useState ,useCallback} from 'react';
import { useRef } from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import CodeBoxItem from "./CodeBoxItem";
import { useDrag, useDrop } from 'react-dnd'

function CodeBox({codeArray,colorArray,setMainArray,setColorArray,movePetListItem,changeList}) {
  // const [codeArray, setCodeArray] = useState([]);
  // const [colorArray, setColorArray] = useState([0, 1, 2, 3]);
  console.log(codeArray);

  
  const ref=useRef("null");
  // const drof=dropRef(ref);
  const [spec, dropRef] = useDrop({
    accept: 'item',
    drop: (item, monitor) => {
      if(monitor.isOver({ shallow: true }) && codeArray.length==0){
        console.log(item.index);
        changeList(true,item.index,0);
      }
      else{
        console.log(item.index);
        changeList(true,item.index,0);
      }
        // item.color=hoverIndex;
        // color=dragIndex;
    },
})
  return (
    <div ref={dropRef} style={{ height: "inherit", width: "inherit" }}>
      {codeArray.length?codeArray.map((code, index) => {
        return (
          <CodeBoxItem  key={code} moveListItem={movePetListItem} color={colorArray[index]} index={index} code={code} />
        )
      }):<></>}
    </div>
  )
}

export default CodeBox