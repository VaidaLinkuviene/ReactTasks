import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

export default function Box() {


    let data = [
        {
            image: "https://www.abc.net.au/cm/lb/5272894/data/view-of-independence-square-in-kiev-data.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat aut, assumenda consequatur sint quia enim voluptatum sequi optio unde. Perspiciatis odio ducimus quod temporibus eligendi porro beatae facere natus.",
            number: "9"
        },
        {
            image: "https://www.abc.net.au/cm/lb/5272962/data/the-steps-of-independence-square-in-kiev-data.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat aut, assumenda consequatur sint quia enim voluptatum sequi optio unde. Perspiciatis odio ducimus quod temporibus eligendi porro beatae facere natus.",
            number: "10"
        },
        {
            image: "https://www.abc.net.au/cm/lb/5273030/data/a-street-in-the-ukrainian-capital-of-kiev-data.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat aut, assumenda consequatur sint quia enim voluptatum sequi optio unde. Perspiciatis odio ducimus quod temporibus eligendi porro beatae facere natus.",
            number: "7"
        },
        {
            image: "https://www.abc.net.au/cm/lb/5272868/data/site-of-anti-government-protest-in-kiev-data.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat aut, assumenda consequatur sint quia enim voluptatum sequi optio unde. Perspiciatis odio ducimus quod temporibus eligendi porro beatae facere natus.",
            number: "8"
        },
        {
            image: "https://www.abc.net.au/cm/lb/5272942/data/protesters-and-police-clash-on-the-steps-of-independence-square-data.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat aut, assumenda consequatur sint quia enim voluptatum sequi optio unde. Perspiciatis odio ducimus quod temporibus eligendi porro beatae facere natus.",
            number: "2"
        },
        {
            image: "https://www.abc.net.au/cm/lb/5273026/data/a-ukrainian-protester-uses-a-slingshot-data.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat aut, assumenda consequatur sint quia enim voluptatum sequi optio unde. Perspiciatis odio ducimus quod temporibus eligendi porro beatae facere natus.",
            number: "1"
        }
    ]

    let listas = data.map(item => {
        return <Card key={uuidv4()} image={item.image} text={item.text}
            number={item.number} />
    })

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {listas}
                </div>
            </div>
        </div>
    )
}
