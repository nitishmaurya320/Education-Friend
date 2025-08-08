import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const EducationalContent = () => {
  const content = [
    {
      title: "Programming Languages",
      description: "Learn C, C++, Java, Python with beginner to advanced resources.",
      link: "https://www.geeksforgeeks.org/c/c-programming-language/",
    },
    {
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React, Node.js tutorials and projects.",
      link: "https://www.geeksforgeeks.org/web-tech/web-development/",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Understand DSA concepts and practice problems for placements.",
      link: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
    },
    {
      title: "Database Management",
      description: "Learn SQL, MongoDB and how to use databases in your projects.",
      link: "https://www.geeksforgeeks.org/sql/sql-tutorial/",
    },
    {
      title: "Operating Systems & Networking",
      description: "Basics of OS & CN for technical interviews and exams.",
      link: "https://www.geeksforgeeks.org/operating-systems/operating-systems/"
    },
    {
      title: "Git & GitHub",
      description: "Master version control and how to collaborate with GitHub.",
      link: "https://www.geeksforgeeks.org/blogs/ultimate-guide-git-github/",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-3xl font-bold text-center mb-8">Educational Content</h1>
      <div className="grid gap-6">
        {content.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="block bg-white p-5 shadow-md border-l-4 border-green-500 rounded hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EducationalContent;
