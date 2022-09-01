import React from 'react'
import { useState, useEffect } from 'react';
import NewsSegment from './NewsSegment';

const Homepage = () => {

    const [data, setData] = useState([]);

    const segment = data.map(information => < NewsSegment
        key={information.id}
        image={information.fields.thumbnail}
        text={information.fields.headline}

    />)

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        const api = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=ae606c71-b399-4ac5-a04a-5e5a193929c1";
        const result = await fetch(api);
        const getResult = await result.json();
        const articles = getResult.response.results;
        setData(articles);
        console.log(articles);
    }


    return (
        <div>
            {segment}
        </div>

    )
}

export default Homepage