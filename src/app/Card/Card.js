"use client";
import React, { useEffect, useState } from "react";

export default function Card({ value }) {
    let [sgreen, setgreen] = useState("green");

    return (
        <div className="text-center">
            {value.completed ? (
                <div style={{ backgroundColor: "lightgreen" }}>
                    <h1>
                        <del>Title: {value.title}</del>
                    </h1>
                    <div>Id: {value.id}</div>
                    <div>userId: {value.userId}</div>
                    <button>OK</button>
                    <br />
                    <button>NOT OK</button>
                </div>
            ) : (
                <div style={{ backgroundColor: "green" }}>
                    <h1>Title: {value.title}</h1>
                    <div>Id: {value.id}</div>
                    <div>userId: {value.userId}</div>
                    <div>
                        <button
                            onClick={() => {
                                setgreen("lightgreen");
                            }}
                        >
                            OK
                        </button>
                        <br />
                        <button>NOT OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}
