import React from "react";
import hackerData from "./Hacker.json";
import "./HackerCard.css";
import { Button } from "@material-tailwind/react";
import { AtSymbolIcon } from "@heroicons/react/16/solid";

function HackerCard({ nom, pseudo, image, bio }) {
    return (
        <div className="w-87 h-auto rounded-3xl m-5 p-4 relative bg-gray-800 text-white dark:bg-white dark:text-black">
            <img
                className="hacker-image top-3 left-20 dark:border-black"
                src={image}
                alt={`Photo de ${nom}`}
            />
            <h2 className="mt-5 mr-2 text-right text-lg font-bold dark:text-black">
                {nom}
            </h2>
            <h2 className="mt-3 mr-2 text-right text-md font-bold dark:text-black">
                <AtSymbolIcon className="inline-block w-4 h-4 mr-1 text-gray-100 dark:text-gray-900" />
                {pseudo}
            </h2>
            <p className="border-white border-2 rounded-3xl mt-14 p-3 tracking-tighter dark:border-gray-900 dark:text-black">
                {bio}
            </p>
            <Button className="text-gray-200 mt-4 ml-2 border-white border-2 rounded-2xl p-2 mx-auto block dark:border-gray-900 dark:text-black">
                Read More
            </Button>
        </div>
    );
}

export default function App() {
    return (
        <div className="flex flex-wrap justify-center font-jetbrains">
            {hackerData.map((hacker) => (
                <HackerCard
                    key={hacker.id}
                    nom={hacker.nom}
                    pseudo={hacker.pseudo}
                    image={hacker.image}
                    bio={hacker.bio}
                />
            ))}
        </div>
    );
}
