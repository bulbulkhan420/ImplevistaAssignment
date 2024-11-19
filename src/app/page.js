import Card from "./components/Card/Card";
import Http from "./services/http-service";
import { rootUrl } from "./utils/urls";
import { todo } from "./utils/todos";
export default async function Home() {
    console.log(rootUrl);
    let allData = await Http(`${rootUrl}/${todo}`);
    // let allData = await fetch("https://jsonplaceholder.typicode.com/todos");
    // allData = await allData.json();

    return (
        <div className="grid grid-cols-1 sm:mx-5 md:mx-8 lg:mx-28">
            {allData &&
                allData.map((product, index) => {
                    return (
                        <div key={index}>
                            <Card value={product} />
                        </div>
                    );
                })}
        </div>
    );
}
