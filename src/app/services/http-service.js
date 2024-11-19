import axios from "axios";
import React, { useEffect, useState } from "react";
export default async function httpget(api) {
    try {
        let data = await fetch(api);
        let posts = await data.json();
        return posts;
        // if (api) {
        //     axios.get(api).then((res) => {
        //         console.log("🚀 ~ axios.get ~ res:", res);
        //         return res.data;
        //     });
        // }
    } catch (error) {
        return error;
    }
}
