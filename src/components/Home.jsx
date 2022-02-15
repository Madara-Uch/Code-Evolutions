import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Button from '@mui/material/Button';
function Home() {
    const [codeArray, setCodeArray] = useState([]);
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
        <NavBar>
            <div className="codeIde">
                <div className="codeToCompile"></div>
                <div className="codeToArrange">
                    {codeArray.map((code, index) => {
                        return (
                            <div className="codeSnippet" id={index}>{code.map((line, index) => {
                                return (<div className="lineOfCode" id={index}>
                                    {line}
                                </div>)
                            })}</div>
                        )
                    })}
                </div>
            </div>
            <div className="submit">
                <Button variant="contained" color="success">submit
                </Button>
            </div>
        </NavBar>
    </div>
    )
}

export default Home