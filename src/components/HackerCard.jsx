import React from "react";
import hackerData from "./Hacker.json";
import "./HackerCard.css";
import { Button } from "@material-tailwind/react";
import { AtSymbolIcon } from "@heroicons/react/16/solid";

function HackerCard({ nom, pseudo, image, bio }) {
    return (
        <div className="relative w-100 h-100 bg-slate-300 dark:bg-slate-800 border border-solid dark:border-slate-300 rounded-3xl top-1/4 transform -translate-y-1/6 left-auto shadow-2xl shadow-gray-500 dark:shadow-slate-900 flex flex-col justify-start items-center mx-auto mt-20 mb-2">
            <img
                className="w-32 h-32 hacker-image dark:border-slate-300"
                src={image}
                alt={`Photo de ${nom}`}
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mt-20">
                {nom}
            </h2>
            <h2 className="text-gray-900 dark:text-gray-300">
                <AtSymbolIcon className="inline-block w-4 h-4 text-gray-900 dark:text-gray-300" />
                {pseudo}
            </h2>

            <hr className="w-96 border border-solid mt-4 mb-4 border-gray-900 opacity-25 dark:border-gray-500" />
            <p className="text-slate-900 -tracking-wider px-10 pr-10 dark:text-gray-300 ">
                {bio}
            </p>
            <hr className="w-96 border border-solid mt-4 mb-1 border-gray-900 opacity-25 dark:border-gray-500" />
            <Button type="button" className="mx-auto my-auto border-2 border-solid border-slate-900 rounded-lg text-slate-900 p-3 mb-2 dark:border-slate-300 dark:text-slate-300 bg-slate-300 dark:bg-slate-800">
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
