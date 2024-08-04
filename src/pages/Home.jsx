/*import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure this is the correct path to your firebaseConfig
import "../App.css";
import "../home.css";

import Nav from "../Nav.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div
      className="home-page"
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/2593118.jpg")',
        backgroundSize: "cover",
        height:"100vh",
        width:"100wh",
        overflowX:"hidden"
      }}
    >
      <h2 style={{ marginTop: "70px", fontFamily: "initial", color: "white" }}>
        Products List
      </h2>
      <div className="products-list">
        {products.map((product) => (
          <div id={product.id} className="product-card">
            <h3>{product.productName}</h3>
            <p>
              <strong>ID:</strong> {product.productId}
            </p>
            <p>
              <strong>Description:</strong> {product.productDescription}
            </p>
            <p>
              <strong>Price:</strong> ${product.productPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;*/
/*import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure this is the correct path to your firebaseConfig
import "../App.css";
import "../home.css";
import { addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";

import Nav from "../Nav.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setMessage("Product deleted successfully!");
      // Update the state to remove the deleted product
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      setMessage("Error deleting product. Please try again.");
    }
  };


  return (
    <div className="home-page">
      <Nav />
      <div className="background-image-container">
        <img
          src="https://wallpaperaccess.com/full/518677.jpg"
          alt="Background"
          className="background-image"
       
        />
      </div>
      <h2 className="products-title">Products List</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.productImage && (
              <img src={product.productImage} alt={product.productName} />
            )}
            <h3>{product.productName}</h3>
            <p>
              <strong>ID:</strong> {product.productId}
            </p>
            <p>
              <strong>Description:</strong> {product.productDescription}
            </p>
            <p>
              <strong>Price:</strong> ${product.productPrice}
            </p>
            <p>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;*/
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure this is the correct path to your firebaseConfig
import "../App.css";
import "../home.css";
import { deleteDoc, doc } from "firebase/firestore";
import Nav from "../Nav.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setMessage("Product deleted successfully!");
      // Update the state to remove the deleted product
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      setMessage("Error deleting product. Please try again.");
    }
  };

  return (
    <div className="home-page">
      <Nav />
      <div className="background-image-container">
        <div className="background-image">
          <div className="overlay-text">
            <h1>Shop Online ! </h1>
            <a href="/shop" className="shop-now-button">Shop Now</a>
          </div>
        </div>
      </div>
      <h2 className="products-title">Products List</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.productImage && (
              <img src={product.productImage} alt={product.productName} />
            )}
            <h3>{product.productName}</h3>
            <p>
              <strong>ID:</strong> {product.productId}
            </p>
            <p>
              <strong>Description:</strong> {product.productDescription}
            </p>
            <p>
              <strong>Price:</strong> ${product.productPrice}
            </p>
            <p>
              <button onClick={() => handleDelete(product.id)} style={{backgroundColor:"#f55e9d"}}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
