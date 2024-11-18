"use client";
import React, { useEffect, useState } from "react";

export default function Card({ value }) {
    let [sgreen, setgreen] = useState("green");
    let css = {
        width: "70px",
        height: "40px",
        borderRadius: "1px",
        backgroundColor: "blue",
        border: "2px solid black",
    };
    return (
        <div className="text-center">
            {value.completed ? (
                <div
                    style={{
                        backgroundColor: "lightgreen",
                        paddingBottom: "10px",
                    }}
                >
                    <h1>
                        <del>Title: {value.title}</del>
                    </h1>
                    <div>Id: {value.id}</div>
                    <div>userId: {value.userId}</div>
                    <button style={css}>OK</button>

                    <button style={css}>NOT OK</button>
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor: `${sgreen}`,
                        paddingBottom: "10px",
                    }}
                >
                    <h1>Title: {value.title}</h1>
                    <div>Id: {value.id}</div>
                    <div>userId: {value.userId}</div>
                    <div>
                        <button
                            style={css}
                            onClick={() => {
                                setgreen("lightgreen");
                            }}
                        >
                            OK
                        </button>

                        <button
                            style={css}
                            onClick={() => {
                                setgreen("green");
                            }}
                        >
                            NOT OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
