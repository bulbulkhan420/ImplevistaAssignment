"use client";
import React, { useState } from "react";
import { FaArrowRight, MdDeleteForever } from "../icons/icons";
export default function Card({ value }) {
    let [sgreen, setgreen] = useState("rgb(63 98 18)");
    let [lgreen, setlgreen] = useState("rgb(217 249 157)");
    let [isable, setisable] = useState(false);
    let [colorchange, scolorchange] = useState(true);
    let action = () => {
        scolorchange(!colorchange);
        setisable(!isable);
    };
    return (
        <div className="text-center">
            {value.completed ? (
                <div
                    style={{
                        backgroundColor: `${colorchange ? lgreen : sgreen}`,
                    }}
                    className="border-lime-500 mt-1"
                >
                    <div className="leading-relaxed flex flex-row justify-center text-xl space-x-5 text-white">
                        {!isable ? (
                            <del>Title: {value.title}</del>
                        ) : (
                            <h1>Title: {value.title}</h1>
                        )}

                        <div className="flex justify-end w-auto">
                            {!isable ? (
                                <button
                                    onClick={action}
                                    disabled
                                    className="p-1 bg-yellow-500 mr-1"
                                >
                                    <FaArrowRight className="text-2xl text-red-600 text-center p-0 m-0" />
                                </button>
                            ) : (
                                <button
                                    onClick={action}
                                    className="p-1 bg-yellow-500 mr-1"
                                >
                                    <FaArrowRight className="text-2xl text-black text-center" />
                                </button>
                            )}
                            {!isable ? (
                                <button
                                    onClick={action}
                                    className="p-1 bg-yellow-500 mr-1"
                                >
                                    <MdDeleteForever className="text-2xl text-black text-center" />
                                </button>
                            ) : (
                                <button
                                    onClick={action}
                                    disabled
                                    className="p-1 bg-yellow-500 mr-1"
                                >
                                    <MdDeleteForever className="text-2xl text-red-600 text-center" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor: `${colorchange ? sgreen : lgreen}`,
                    }}
                    className="border-lime-500 mt-1"
                >
                    <div className="leading-relaxed flex flex-row justify-center text-white text-xl space-x-5">
                        {!isable ? (
                            <h1>Title: {value.title}</h1>
                        ) : (
                            <del>Title: {value.title}</del>
                        )}
                        {!isable ? (
                            <button
                                onClick={action}
                                className="p-1 bg-yellow-500 mr-1"
                            >
                                <FaArrowRight className="text-2xl text-black text-center " />
                            </button>
                        ) : (
                            <button
                                onClick={action}
                                disabled
                                className="p-1 bg-yellow-500 mr-1"
                            >
                                <FaArrowRight className="text-2xl text-red-600 text-center" />
                            </button>
                        )}
                        {!isable ? (
                            <button
                                onClick={action}
                                disabled
                                className="p-1 bg-yellow-500 mr-1"
                            >
                                <MdDeleteForever className="text-2xl text-red-600 text-center" />
                            </button>
                        ) : (
                            <button
                                onClick={action}
                                className="p-1 bg-yellow-500 mr-1"
                            >
                                <MdDeleteForever className="text-2xl text-black text-center" />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
