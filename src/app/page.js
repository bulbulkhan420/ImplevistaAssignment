"use client";
import Card from "./components/Card/Card";
import { useForm } from 'react-hook-form';
import { rootUrl } from "./utils/urls";
import { todo } from "./utils/todos";
import main from "../app/Css/main.module.css";
import { useEffect, useState } from "react";

import httpget from "./services/http-service";
import { title } from "process";
export default async function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    let [allData, setallData] = useState([{}]);
    let url = `${rootUrl}/${todo}`;
    const fetchData = async () => {
        const data = await httpget(url);
        setallData(data);
    };
    let deleteindex = (index) => {
       
        allData.splice(index, 1);
        setallData([...allData]);
    };
    let getValue=(data)=>{
       let obj={
        title:data.newtitle,
        completed:false
       }
       allData.push(obj);
       setallData([...allData]);
    }
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
                <form className={`${main.block}`} onSubmit={handleSubmit(getValue)}>
                    <input className={`${main.input}`} {...register('newtitle',{required:true,minLength:{value:5}})}></input>
                    <div className={`${main.buttongroup}`} >
                        <button type='submit' className={`${main.buttonAdd}`}>ADD</button>
                    </div>
                </form>
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
