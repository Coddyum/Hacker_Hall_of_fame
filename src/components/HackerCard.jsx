import React from "react";
import hackerData from "./Hacker.json";
import "./HackerCard.css";
import { Button } from "@material-tailwind/react";
import { AtSymbolIcon } from "@heroicons/react/16/solid";

function HackerCard() {
    return (
        <div className="flex flex-wrap justify-center font-jetbrains">
            {hackerData.map((hacker) => (
                <div
                    key={hacker.id}
                    className="w-87 h-auto rounded-3xl m-5 p-4 relative bg-gray-800 text-white  dark:bg-white dark:text-black">
                    <img
                        className="hacker-image top-3 left-20 dark:border-black"
                        src={hacker.image}
                        alt="Image des Hacker"
                    />
                    <h2 className="mt-5 mr-2 text-right text-lg font-bold dark:text-black">
                        {hacker.nom}
                    </h2>

                    <h2 className="mt-3 mr-2 text-right text-md font-bold dark:text-black">
                        <AtSymbolIcon className="inline-block w-4 h-4 mr-1 text-gray-900" />
                        {hacker.pseudo}
                    </h2>
                    <p className="border-white border-2 rounded-3xl mt-14 p-3 tracking-tighter dark:border-gray-900 dark:text-black">
                        {hacker.bio}
                    </p>
                    <Button className="text-gray-200 mt-4 ml-2 border-white border-2 rounded-2xl p-2 mx-auto block dark:border-gray-900 dark:text-black">
                        Read More
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default HackerCard;
