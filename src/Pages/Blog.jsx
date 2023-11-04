// Blog.jsx
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "What is One-way Data Binding?",
      content: "1. One-way data binding is a data flow pattern commonly used in front-end development. In this pattern, data flows in one direction, typically from a data source to the UI components. Changes in the data source trigger updates in the UI elements, ensuring that the displayed information reflects the most recent data.\n\nOne-way data binding offers several advantages, such as simplicity, predictable behavior, and enhanced performance. It simplifies the debugging process, as issues related to data changes are easier to track. This approach is commonly employed in libraries and frameworks like React, where data flows from the state to the components, enabling efficient rendering and updates."
    },
    {
      title: "What is NPM in Node.js?",
      content: "2. NPM stands for Node Package Manager, and it is a package manager for JavaScript that is widely used in the Node.js ecosystem. NPM allows developers to easily install, manage, and share JavaScript libraries and packages. It is an essential tool for building and deploying Node.js applications.\n\nNPM is used to install third-party packages, create and manage project dependencies, and execute scripts defined in the project's package.json file. It offers a vast repository of open-source packages, making it convenient for developers to access and incorporate existing code into their projects. NPM comes bundled with Node.js, so you can start using it as soon as Node.js is installed on your system."
    },
    {
      title: "Difference Between MongoDB and MySQL",
      content: "3. MongoDB and MySQL are both popular database management systems, but they have distinct characteristics and use cases. Here are some key differences between the two:\n\n1. Data Structure:\n   - MongoDB is a NoSQL database, which means it stores data in a flexible, JSON-like format known as BSON (Binary JSON). It is ideal for handling unstructured or semi-structured data.\n   - MySQL is a traditional relational database management system (RDBMS) that uses structured tables with predefined schemas to store data.\n2. Query Language:\n   - MongoDB uses a query language that is designed for document-based databases. It supports JSON-like queries for document retrieval and manipulation.\n   - MySQL uses SQL (Structured Query Language), a powerful language for managing structured data in relational databases.\n3. Scalability:\n   - MongoDB is known for its horizontal scalability, making it suitable for large-scale applications with growing data requirements.\n   - MySQL can be scaled vertically and horizontally, but horizontal scaling can be more complex.\n4. Transactions:\n   - MySQL supports ACID (Atomicity, Consistency, Isolation, Durability) transactions, making it a good choice for applications that require strict data consistency.\n   - MongoDB provides support for multi-document transactions but is often used in scenarios where flexibility is prioritized over strict ACID compliance.\n5. Use Cases:\n   - MongoDB is often chosen for applications with rapidly changing data requirements, big data, and real-time analytics.\n   - MySQL is commonly used for applications with structured data, such as e-commerce websites, financial systems, and content management systems.\nChoosing between MongoDB and MySQL depends on your specific project requirements, data model, and scalability needs."
    },
  ];

  return (
    <div className="container mx-auto mt-16">
      <h1 className="text-5xl text-center font-bold mb-4">Welcome to Chili Food Blog Page</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-lg mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.content.split('\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-2">{paragraph}</p>
          ))}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
