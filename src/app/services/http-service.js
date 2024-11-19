export default async function httpget(api) {
    try {
        if (api) {
            let allData = await fetch(api);
            return allData.json();
        }
    } catch (error) {
        return error;
    }
}
