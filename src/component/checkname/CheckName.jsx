import React, { useState } from "react";
import "./checkname.scss";

const CheckName = () => {
  const handleFolderSelect = (event) => {
    console.clear();
    const groupedCorrectFileNames = [];
    const groupedWrongFileNames = [];
    const groupedDontHaveZeroFileNames = [];
    let oneElementString = [];
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
          const index = groupedCorrectFileNames.findIndex(
            (item) => item.prefix === prefix
          );
          if (index === -1) {
            groupedCorrectFileNames.push({ prefix, files: [fileName] });
          } else {
            groupedCorrectFileNames[index].files.push(fileName);
          }
        } else {
          groupedWrongFileNames.push(fileName);
        }
      });
      groupedCorrectFileNames.forEach((group) => {
        if (!group.files.includes(`${group.prefix}_0.jpg`)) {
          groupedDontHaveZeroFileNames.push(group);
        }
      });
      const oneElementArrays = groupedCorrectFileNames.filter(
        (group) => group.files.length === 1
      );
      console.log("Grouped correct file names with garment:");
      function convertToKeyedObject(groupedFileNames) {
        const keyedObject = {};
        groupedFileNames.forEach((group) => {
          const { prefix, files } = group;
          keyedObject[prefix] = files;
        });
        return keyedObject;
      }
      const groupedFilesObject = convertToKeyedObject(groupedCorrectFileNames);
      console.log(groupedFilesObject);

      if (groupedDontHaveZeroFileNames.length > 0) {
        console.log("The grouped array don't have garment:");
        console.log(
          groupedDontHaveZeroFileNames.map((item) => `${item.files.join(", ")}`)
        );
      } else {
        console.log("HAVE NO the grouped array don't have garment:");
      }

      if (groupedWrongFileNames.length > 0) {
        console.log("Wrong file names:");
        console.log(groupedWrongFileNames);
      } else {
        console.log("HAVE NO wrong file names:");
      }
      if (oneElementArrays.length > 0) {
        oneElementArrays.forEach((item) => {
          oneElementString.push(`${item.files[0]}`);
        });
        console.log("Arrays with only one element:");
        console.log(oneElementArrays.map((item) => `${item.files.join(", ")}`));
      } else {
        console.log("HAVE NO arrays with only one element");
      }

      function areAllArraysConsecutive(obj) {
        let allConsecutive = true;
        let nonConsecutiveArrays = [];

        for (const group of obj) {
          if (group.files) {
            const numbers = group.files.map((filename) =>
              parseInt(filename.split("_")[1].split(".")[0])
            );
            numbers.sort((a, b) => a - b);

            for (let i = 1; i < numbers.length; i++) {
              if (numbers[i] !== numbers[i - 1] + 1) {
                allConsecutive = false;
                nonConsecutiveArrays.push(`${group.files.join(", ")}`); // Add non-consecutive files grouped by prefix to the array
                // Once we find one non-consecutive array, we break out of the loop for that array
              }
            }
          }
        }

        if (!allConsecutive) {
          console.log("The grouped array have nonConsecutive:");
          console.log(nonConsecutiveArrays);
        } else {
          console.log("All arrays are consecutive.");
        }
        return allConsecutive;
      }

      // Check if all arrays contain consecutive filenames
      console.log(
        "All arrays in Grouped file names is consecutive:",
        areAllArraysConsecutive(groupedCorrectFileNames)
      );
    } else {
      console.log("HAVE NO file in folder");
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
