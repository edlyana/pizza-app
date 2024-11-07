import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Array of pizzas using map()
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with Italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozzarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozzarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozzarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Menu() {
    // State for the search query
    const [searchQuery, setSearchQuery] = useState("");

    // Filter pizzas based on the search query
    const filteredPizzas = pizzaData.filter(pizza =>
        pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2 style={{ color: "#545E75", textAlign: "center", paddingBottom: "20px" }}>Our Menu</h2>
            
            {/* Search Bar */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search for a pizza..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        width: "80%",
                        borderRadius: "5px",
                        border: "1px solid #BC5F04",
                    }}
                />
            </div>
            
            {/* Pizza List */}
            <div className="pizza">
                <ul>
                    {filteredPizzas.map((pizza, index) => (
                        <li key={index}>
                            <Pizza
                                name={pizza.name}
                                ingredients={pizza.ingredients}
                                price={pizza.price}
                                photoName={pizza.photoName}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Header() {
    return (
        <h1 style={{ color: "#F4442E", fontSize: "48px", textTransform: "uppercase", textAlign: "center" }}>
            HUHA Pizza Co.
        </h1>
    );
}

function Pizza({ photoName, name, ingredients, price }) {
    return (
        <div className="pizza-item">
            <img src={photoName} alt="Pizza" width="250" height="250" />
            <p><strong>{name}</strong></p>
            <p>{ingredients}</p>
            <p>Price: ${price}</p>
            <br />
        </div>
    );
}

function Footer() {
    const date = new Date();
    const showTime = date.getHours();
    return (
        <footer className="footer">
            {showTime >= 10 && showTime <= 22 ? <Button /> : "Sorry, we're closed"}
        </footer>
    );
}

function Button({ onClick }) {
    return (
        <div>
            <p style={{ padding: "1.4rem 3.2rem", textAlign: "center" }}>"We're currently open"</p>
            <button className="button" onClick={onClick}>Order Now!</button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
