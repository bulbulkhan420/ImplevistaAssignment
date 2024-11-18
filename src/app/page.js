import Image from "next/image";
import img from "../asset/img.jpg";
import Card from "./Card/Card";
export default async function Home() {
    let allData = await fetch("https://jsonplaceholder.typicode.com/todos");
    allData = await allData.json();
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                height: "auto",
                width: "100%",
                overflowY: "scroll",
            }}
        >
            {allData &&
                allData.map((product, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "25%",
                                height: "200px",
                                paddingTop: "1rem",
                                overflowY: "scroll",
                                paddingBottom: "0px",
                                marginBottom: "0px",
                            }}
                        >
                            <Card value={product} />
                        </div>
                    );
                })}
        </div>
    );
}
