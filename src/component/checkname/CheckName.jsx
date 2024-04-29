import React, { useState } from "react";
import "./checkname.scss";

const CheckName = () => {
    const [nameOfFile, setNameOfFile] = useState(null);
    const groupedFileNames = {};
    const wrongNames = [];
    const handleFolderSelect = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const fileNames = Array.from(files).map((file) => file.name);
            const sortedFileNames = fileNames.sort((a, b) => {
                const [prefixA, suffixA] = a.split("_");
                const [prefixB, suffixB] = b.split("_");
                if (prefixA === prefixB) {
                    return parseInt(suffixA) - parseInt(suffixB);
                } else {
                    return parseInt(prefixA) - parseInt(prefixB);
                }
            });
            sortedFileNames.forEach((fileName) => {
                if (/^\d+_\d+\.jpg$/.test(fileName)) {
                    const [prefix, suffix] = fileName.split("_");
                    if (!groupedFileNames[prefix]) {
                        groupedFileNames[prefix] = [];
                    }
                    groupedFileNames[prefix].push(fileName);
                } else {
                    wrongNames.push(fileName);
                }
            });

            const missingSuffixZero = {};
            Object.keys(groupedFileNames).forEach((prefix) => {
                if (!groupedFileNames[prefix].includes(`${prefix}_0.jpg`)) {
                    missingSuffixZero[prefix] = groupedFileNames[prefix];
                    delete groupedFileNames[prefix];
                }
            });

            console.log("Grouped file names:", groupedFileNames);
            console.log("Missing suffix '_0' arrays:", missingSuffixZero);
            console.log("Wrong file names:", wrongNames);
            setNameOfFile({ groupedFileNames, missingSuffixZero, wrongNames });
        } else {
            // Reset state variables if no files are selected
            setNameOfFile(null);
        }
    };

    return (
        <div className="flex justify-center">
            {" "}
            <div className="">
                <h2 className="">CHECK NAME</h2>
                <input
                    type="file"
                    directory=""
                    webkitdirectory=""
                    onChange={handleFolderSelect}
                />
            </div>{" "}
        </div>
    );
};

export default CheckName;
