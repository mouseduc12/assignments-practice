import React from "react";
import "./Cards.css"


const Cards = (props) => {
    const { place, timeToGo } = props
    let { price } = props
    let {backgroundColor} = props
    switch (timeToGo) {
        case "Spring":
            backgroundColor = 'peachPuff'
            break;
        case "Winter":
            backgroundColor =  "whiteSmoke"
            break;
        case "Fall":
            backgroundColor = "orange"
            break;
        case "Summer":
            backgroundColor = "yellow"
            break;
        default:
            break;
    }

    if(price < 500){
        price.toString() 
        const priceTag = "$"
        price = priceTag + price;
    } else if(price > 501 && price < 1000){
        price.toString()
        const secondPriceTag = "$$";
        price = secondPriceTag + price;
    } else {
        price.toString();
        const lastPriceTag = "$$$"
        price = lastPriceTag + price;
    }

    return (
            <div class="box" style={{backgroundColor: backgroundColor}}>
                <ul>
                    <li>{place}</li>
                    <li>{price}</li>
                    <li>{timeToGo}</li>
                </ul>
            </div>
    )
}

export default Cards