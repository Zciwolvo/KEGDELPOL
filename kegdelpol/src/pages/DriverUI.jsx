import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DropDownInput from "../Components/DropDownInputDriver";
import OrderList from "../Components/OrderList";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DriverUI.css";
import SubmitButton from "../Components/SubmitButton";
import LogoutButton from "../Components/LogoutButton";
import { useNavigate } from "react-router-dom";

const DriverUI = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [updatedOrders, setUpdatedOrders] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  useEffect(() => {
    fetchOrders();
  }, []); // Empty dependency array ensures it runs only once on mount

  const fetchOrders = () => {
    fetch("https://www.igorgawlowicz.pl/kegdelpol/order/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Orders:", data);
        setOrdersData(data);
        setFilteredOrders(data);
        setUpdatedOrders(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleOrderChange = (orderId) => {
    if (orderId) {
      setFilteredOrders(ordersData.filter((order) => order.order_id === parseInt(orderId)));
    } else {
      setFilteredOrders(ordersData);
    }
  };

  const handleUpdateOrder = (updatedOrder) => {
    setUpdatedOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.order_id === updatedOrder.order_id ? updatedOrder : order
      )
    );
  };

  const handleSubmitChanges = () => {
    const token = localStorage.getItem('jwt');
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ status: "newStatus" }), // Zakładam, że wysyłasz status
    };
  
    fetch(`https://www.igorgawlowicz.pl/kegdelpol/orders/`, requestOptions) // Zastąp 1 rzeczywistym order_id
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    console.log("Updated orders:", updatedOrders);
  };

  return (
    <div className="driver-ui">
      <Navbar />
      <Container className="conten">
      <div className="item-2"><LogoutButton className="logout-button" onLogout={handleLogout}/></div>
        <DropDownInput
          label="Select Order"
          options={ordersData.map((order) => order.order_id.toString())}
          onChange={handleOrderChange}
        />
        <OrderList orders={filteredOrders} onUpdateOrder={handleUpdateOrder} />
        <SubmitButton buttonText="Submit" onClick={handleSubmitChanges} />
      </Container>
      <Footer />
    </div>
  );
};

export default DriverUI;
