import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebaseConfig"; // Ensure storage is imported from firebaseConfig
import "../products.css";

const ProductsPage = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fileUrl = "";

    if (file) {
      try {
        const storageRef = ref(storage, `products/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        fileUrl = await getDownloadURL(snapshot.ref);
      } catch (error) {
        console.error("Error uploading file: ", error);
        setMessage("Error uploading file. Please try again.");
        return;
      }
    }

    try {
      await addDoc(collection(db, "products"), {
        productId,
        productName,
        productDescription,
        productPrice,
        productImage: fileUrl,
      });
      setMessage("Product added successfully!");
      setProductId("");
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setFile(null);
      nav("/");
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("Error adding product. Please try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snap) => {
      const alldata = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(alldata);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setMessage("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
      setMessage("Error deleting product. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <div className="products-page">
        <h2>Add New Product</h2>
        {message && <p className="success-message">{message}</p>}
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productId">Product ID</label>
            <input
              placeholder="Id"
              type="text"
              id="productId"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              placeholder="Product name"
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              placeholder="Description"
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Product Price</label>
            <input
              placeholder="Price"
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              style={{width:"470px", backgroundColor:"white",color:"black"}}
            />
          </div>
          <button type="submit" className="submit-button" style={{backgroundColor:"black"}}>Add Product</button>
        </form>
      </div>
      
    </div>
  );
};

export default ProductsPage;
