// Header.jsx - النسخة المصححة

import React from "react";

export default function Header() {
  // 1. ننظم البيانات في مصفوفة ليسهل استخدامها
  const columnsData = [
    {
      title: "Header 1",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      title: "Header 2",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      title: "Header 3",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
  ];

  // 2. نستخدم React Fragment (<> ... </>) لإرجاع الأعمدة كعناصر منفصلة
  return (
    <>
      {/* 3. نستخدم حلقة واحدة map لإنشاء كل عمود بالكامل */}
      {columnsData.map((column, index) => (
        <div key={index}>
          {/* العنوان من البيانات */}
          <h4 className="text-lg font-semibold text-gray-900 border-b-2 border-gray-800 inline-block pb-1">
            {column.title}
          </h4>
          {/* القائمة من البيانات */}
          <ul className="mt-4 space-y-2">
            {column.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a href="#" className="hover:text-gray-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}