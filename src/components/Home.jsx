import React, { useEffect, useState ,useCallback} from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import CodeItem from "./CodeItem";
import CodeBox from "./CodeBox";
function Home() {
    const [assistArray, setAssistArray] = useState([]);
    const [mainArray,setMainArray] = useState([]);
    const [mainColorArray, setMainColorArray] = useState([0,1,2,3]);
    const [assistColorArray, setAssistColorArray] = useState([0,1,2,3]);
    const moveListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = assistArray[dragIndex]
            const hoverItem = assistArray[hoverIndex]
            // Swap places of dragItem and hoverItem in the pets array
            setAssistArray(assistArray => {
                const updatedPets = [...assistArray]
                // console.log(mainArray);
                updatedPets[dragIndex] = hoverItem
                updatedPets[hoverIndex] = dragItem
                // console.log(updatedPets);
                return updatedPets
            })
            setAssistColorArray((assistColorArray)=>{
                const updatedColors = [...assistColorArray]
                const dragColor=assistColorArray[dragIndex];
                const hoverColor = assistColorArray[hoverIndex];
                // console.log(dragIndex,"startcolor->",dragColor);
                // console.log(hoverIndex,"endcolor->",hoverColor);
                // console.log(colorArray);
                updatedColors[dragIndex] = hoverColor
                updatedColors[hoverIndex] = dragColor
                // console.log(updatedColors);
                return updatedColors
            })
        },
        [assistArray,assistColorArray],
    )
    const moveBoxListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = mainArray[dragIndex]
            const hoverItem = mainArray[hoverIndex]
            // Swap places of dragItem and hoverItem in the pets array
            setMainArray(mainArray => {
                const updatedPets = [...mainArray]
                // console.log(mainArray);
                updatedPets[dragIndex] = hoverItem
                updatedPets[hoverIndex] = dragItem
                // console.log(updatedPets);
                return updatedPets
            })
            setMainColorArray((mainColorArray)=>{
                const updatedColors = [...mainColorArray]
                const dragColor=mainColorArray[dragIndex];
                const hoverColor = mainColorArray[hoverIndex];
                // console.log(dragIndex,"startcolor->",dragColor);
                // console.log(hoverIndex,"endcolor->",hoverColor);
                // console.log(colorArray);
                updatedColors[dragIndex] = hoverColor
                updatedColors[hoverIndex] = dragColor
                // console.log(updatedColors);
                return updatedColors
            })
        },
        [mainArray,mainColorArray],
    )
    const setMainArrayFunc=(value)=>{
        setMainArray(value);
    }
    const setMainColorArrayFunc=(value)=>{
        setMainColorArray(value);
    }
    const insert = (arr, index, newItem) => [
        // part of the array before the specified index
        ...arr.slice(0, index),
        // inserted item
        newItem,
        // part of the array after the specified index
        ...arr.slice(index)
      ]
    const changeList=useCallback((insertingIntoMainArray,dragIndex,hoverIndex)=>{
        if(insertingIntoMainArray===true){
            let tempArr=[...assistArray];
            let tempColorArr=[...assistColorArray];
            let item=[];
            let color=[];
            if(tempArr.length>1){
                item=tempArr.splice(dragIndex,1);
                color=tempColorArr.splice(dragIndex,1);
                setAssistArray(tempArr);
                setAssistColorArray(tempColorArr);
            }
            else if(tempArr.length==1){
                item=tempArr;
                color=tempColorArr;
                setAssistArray([]);
                setAssistColorArray([]);
            }
            // console.log(item);
            setMainArray((mainArray)=>{
                let updatedArray=[...mainArray];
                const result=insert(updatedArray,hoverIndex,item[0]);
                // updatedArray.splice(hoverIndex, 0, item);
                console.log("main array",result)
                return result;
            })
            setMainColorArray((mainColorArray)=>{
                let updatedArray=[...mainColorArray];
                const result=insert(updatedArray,hoverIndex,color[0]);
                // updatedArray.splice(hoverIndex, 0, item);
                console.log("main array",result)
                return result;
            })
        }
        else{
            let tempArr=[...mainArray];
            let item=tempArr.splice(dragIndex,1);
            setAssistArray(tempArr);
            // let item=mainArray.splice(dragIndex,1)[0];
            setMainArray((assistArray)=>{
                let updatedArray=[...assistArray];
                const result=insert(updatedArray,hoverIndex,item[0]);
                console.log("assist array",updatedArray)
                return result;
            })
        }
    },[mainArray,assistArray,mainColorArray,assistColorArray])
    useEffect(() => {
        setAssistArray([[`const puppeteer = require("puppeteer"); `,
            `let browser;`,
            `let page;`,
            `let data;`,
            `let language;`], [`puppeteer.launch({`,
            `headless:false,`,
            `defaultViewport: null,`,
            `args: ["--start-maximized"],`,
            `})`], [`.then(function (b){`,
            `browser=b;`,
            `return browser.pages();`,
            `})`], [`.then(function (pages){`,
            `page=pages[0];`,
            `return page.goto("https://www.hackerrank.com/dashboard");`,
            `})`]])
    }, [])
    console.log("main->",mainArray,"assistArray->",assistArray);
    return (<div className="home" style={{ display: "flex" }}>
        <DndProvider backend={HTML5Backend}>
        <NavBar>
            <div className="codeIde">
                <div className="codeToCompile">
                    <CodeBox movePetListItem={moveBoxListItem} changeList={changeList} codeArray={mainArray} setMainArray={setMainArrayFunc} setColorArray={setMainColorArrayFunc} colorArray={mainColorArray}></CodeBox>
                </div>
                <div className="codeToArrange">
                    {assistArray.map((code, index) => {
                        return (
                            <CodeItem key={code} moveListItem={moveListItem} color={assistColorArray[index]} index={index} code={code}/>   
                        )
                    })}
                </div>
            </div>
            <div className="submit">
                <Button variant="contained" color="success">submit
                </Button>
            </div>
        </NavBar>
        </DndProvider>
    </div>
    )
}

export default Home