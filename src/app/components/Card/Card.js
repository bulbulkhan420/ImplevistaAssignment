"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, MdDeleteForever } from "../icons/icons";
import css from "../../Css/main.module.css";
export default function Card({ value, index, deleteindex, setCompleteded }) {
    let [complete, setcomplete] = useState(value.completed);
    let action1 = () => {
        setCompleteded(index);
    };
    let action2 = () => {
        deleteindex(index);
    };

    return (
        <div>
            {
                <div className={`${css.block}`}>
                    <div className={`${css.titledesign}`}>
                        {value.completed ? (
                            <del>{index + 1 + " " + value.title}</del>
                        ) : (
                            <div>{index + 1 + " " + value.title}</div>
                        )}
                    </div>
                    <div className={`${css.buttongroup}`}>
                        {value.completed ? (
                            ""
                        ) : (
                            <button
                                onClick={action1}
                                className={`${css.button}`}
                            >
                                <FaArrowRight />
                            </button>
                        )}

                        <button onClick={action2} className={`${css.button}`}>
                            <MdDeleteForever />
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}
