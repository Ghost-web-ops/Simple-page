"use client";
import React from "react";
import { useState } from "react";

export default function Button() {
  let number = [1, 2, 3, 4, 5];
  return (
    <>
      {number.map((item) => (
        <a
          href="#"
          className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
          key={item}
        >
          Item {item}
        </a>
      ))}
    </>
  );
}
