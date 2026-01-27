📌 Introduction

This README explains the basic building blocks of React that I have learned:

Props

useState

useEffect

useContext

These concepts help us create interactive, dynamic, and well-organized React applications.

1️⃣ Props (Properties)
🔹 Definition -->

Props are used to send data from one component to another component (usually from parent to child).

🔹 Why Props are Important

Make components reusable

Help components receive data

Keep components clean and flexible

🔹 Small Code Example
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

<Welcome name="Alex" />

🔹 Real-Life Example

Think of props like a gift 🎁

A parent gives a gift to a child

The child can use the gift but cannot change it

Example:

Parent → gives name

Child → displays name

🔹 Note (React Building Block)

👉 Props are important because React works with components, and components must communicate. Props are the first step of data flow in React.

2️⃣ useState Hook
🔹 Definition -->

useState is used to store and change data inside a component.

🔹 Why useState is Important

Makes the UI dynamic

Updates the screen when data changes

Used for counters, forms, buttons, etc.

🔹 Small Code Example
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

🔹 Real-Life Example

Think of useState like a scoreboard 🏆

Score starts at 0

When a goal happens, the score changes

The board updates automatically

🔹 Note (React Building Block)

👉 React applications change over time. useState is the core feature that allows React apps to be interactive.

3️⃣ useEffect Hook
🔹 Definition -->

useEffect is used to perform actions after the component is shown on the screen.

🔹 Why useEffect is Important

Used for fetching data

Used for timers and subscriptions

Runs automatically when something changes

🔹 Small Code Example
import { useEffect } from "react";

useEffect(() => {
  console.log("Page Loaded");
}, []);

🔹 Real-Life Example

Think of useEffect like a doorbell 🔔

When someone enters the house, the bell rings

When the component loads, useEffect runs

🔹 Note (React Building Block)

👉 Many apps need to connect with outside data or systems. useEffect is how React handles side work safely.

4️⃣ useContext Hook
🔹 Definition (Basic Language)

useContext is used to share data with many components without passing props again and again.

🔹 Why useContext is Important

Avoids prop drilling

Makes global data easy to use

Useful for theme, user info, login status

🔹 Small Code Example
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Admin">
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  const user = useContext(UserContext);
  return <h1>User: {user}</h1>;
}

🔹 Real-Life Example

Think of useContext like a school notice board 🏫

Information is written once

Everyone can read it

No need to tell each student personally

🔹 Note (React Building Block)

👉 As apps grow bigger, passing props becomes messy. useContext helps React apps stay clean and scalable.

📊 Summary Table
Concept	What It Does	Why It Matters
Props	Pass data	Component communication
useState	Store & change data	Dynamic UI
useEffect	Handle actions	Side effects
useContext	Share global data	Clean architecture
🚀 Final Conclusion

Props, useState, useEffect, and useContext are the foundation of React.
Together, they allow React apps to:

Share data

Update UI

React to changes

Scale efficiently

👉 Without these, React cannot build real-world applications.

Author - Arvind Vishwakarma
