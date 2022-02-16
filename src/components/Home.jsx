import React, { useEffect, useState ,useCallback} from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import CodeItem from "./CodeItem";
import CodeBox from "./CodeBox";
function Home() {
    const [codeArray, setCodeArray] = useState([]);
    const [colorArray, setColorArray] = useState([0,1,2,3]);
    const movePetListItem = useCallback(
        (dragIndex, hoverIndex) => {
            const dragItem = codeArray[dragIndex]
            const hoverItem = codeArray[hoverIndex]
            // Swap places of dragItem and hoverItem in the pets array
            setCodeArray(codeArray => {
                const updatedPets = [...codeArray]
                // console.log(codeArray);
                updatedPets[dragIndex] = hoverItem
                updatedPets[hoverIndex] = dragItem
                // console.log(updatedPets);
                return updatedPets
            })
            setColorArray((colorArray)=>{
                const updatedColors = [...colorArray]
                const dragColor=colorArray[dragIndex];
                const hoverColor = colorArray[hoverIndex];
                // console.log(dragIndex,"startcolor->",dragColor);
                // console.log(hoverIndex,"endcolor->",hoverColor);
                // console.log(colorArray);
                updatedColors[dragIndex] = hoverColor
                updatedColors[hoverIndex] = dragColor
                // console.log(updatedColors);
                return updatedColors
            })
        },
        [codeArray,colorArray],
    )
    useEffect(() => {
        setCodeArray([[`const puppeteer = require("puppeteer"); `,
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
    return (<div className="home" style={{ display: "flex" }}>
        <DndProvider backend={HTML5Backend}>
        <NavBar>
            <div className="codeIde">
                <div className="codeToCompile">
                    <CodeBox></CodeBox>
                </div>
                <div className="codeToArrange">
                    {codeArray.map((code, index) => {
                        return (
                            <CodeItem key={code} moveListItem={movePetListItem} color={colorArray[index]} index={index} code={code}/>   
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