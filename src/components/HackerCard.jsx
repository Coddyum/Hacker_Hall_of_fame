import React from "react";
import hackerData from "./Hacker.json";

function HackerCard({ pseudo, name, image, bio }) {
    return (
        <div className="w-72 h-96 m-12 bg-gray-900 rounded-3xl">
            <div className="w-80 h-auto">
                {/* todo : changer le src de l'image une fois que 
                j'aurais compris comment sync avec le JSON */}
                <img
                    className="w-72 rounded-t-3xl"
                    src="src/assets/img/Hector-Xavier-Monsegur.jpeg"
                    alt=""
                />
            </div>
            <h2 className="text-white pl-3 pt-2 font-bold">
                Pseudo : <span className="text-white">{hackerData.pseudo}</span>
            </h2>
            <h2 className="text-white pl-3 pt-2 font-bold">
                Name : <span className="text-white">{hackerData.name}</span>
            </h2>

            <p className="text-white pl-3 pt-2 font-bold">
                Bio : {hackerData.bio}
            </p>
        </div>
    );
}

/* Todo : set je Json  */
export default HackerCard;
