"use client";
import Card from "./components/Card/Card";

import { rootUrl } from "./utils/urls";
import { todo } from "./utils/todos";
import main from "../app/Css/main.module.css";
import { useEffect, useState } from "react";

import httpget from "./services/http-service";
export default async function Home() {
    let [allData, setallData] = useState([{}]);
    let url = `${rootUrl}/${todo}`;
    const fetchData = async () => {
        const data = await httpget(url);
        setallData(data);
    };
    let deleteindex = (index) => {
        console.log(index);
        allData.splice(index, 1);
        setallData([...allData]);
    };
    let setCompleteded = (index) => {
        console.log(index);
        setallData((prev) =>
            prev.map((item, i) => {
                if (i === index) {
                    let ob = { ...item, completed: true };

                    return ob;
                }

                return item;
            })
        );
    };
    console.log(allData);
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className={`${main.page}`}>
                <div className={`${main.block}`}>
                    <input className={`${main.input}`}></input>
                    <div className={`${main.buttongroup}`}>
                        <button className={`${main.buttonAdd}`}>ADD</button>
                    </div>
                </div>
            </div>

            {allData &&
                allData.map((product, index) => {
                    return (
                        <div key={index} className={`${main.page}`}>
                            <Card
                                value={product}
                                index={index}
                                deleteindex={deleteindex}
                                setCompleteded={setCompleteded}
                            />
                        </div>
                    );
                })}
        </div>
    );
}
