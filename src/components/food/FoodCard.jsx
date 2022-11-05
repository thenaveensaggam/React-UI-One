import React from "react";
import FoodImage from "./FoodImage";
import FoodHeading from "./FoodHeading";

const FoodCard = (props) => {
    return (
        <>
            <div className="card shadow-lg">
                <FoodImage image={props.image}/>
                <div className="card-body">
                    <FoodHeading heading={props.heading}/>
                </div>
            </div>
        </>
    )
};
export default FoodCard;