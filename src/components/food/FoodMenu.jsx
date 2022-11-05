import React from "react";
import foodImg_1 from "../../assets/img/other_1.jpg";
import foodImg_2 from "../../assets/img/other_2.jpg";
import foodImg_3 from "../../assets/img/other_3.jpg";
import foodImg_4 from "../../assets/img/other_4.jpg";
import FoodCard from "./FoodCard";

const FoodMenu = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-3">
                        <FoodCard image={foodImg_1} heading={"Food 1"}/>
                    </div>
                    <div className="col-sm-3">
                        <FoodCard image={foodImg_2} heading={"Food 2"}/>
                    </div>
                    <div className="col-sm-3">
                        <FoodCard image={foodImg_3} heading={"Food 3"}/>
                    </div>
                    <div className="col-sm-3">
                        <FoodCard image={foodImg_4} heading={"Food 4"}/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default FoodMenu;