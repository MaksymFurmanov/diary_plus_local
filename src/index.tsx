import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {initLocalStorage} from "./utils/initLocalStorage";
import users from "./initialData/users";
import products from "./initialData/products";
import materials from "./initialData/materials";
import departments from "./initialData/departments";
import entryStockPlaces from "./initialData/enteryStockPlaces";
import outputStockPlaces from "./initialData/outputStockPlaces";
import orders from "./initialData/orders";
import productionProcesses from "./initialData/productionProcesses";
import testsMaterials from "./initialData/testsMaterials";
import testsProducts from "./initialData/testsProducts";
import employees from "./initialData/employees";

initLocalStorage("users", users);
initLocalStorage("departments", departments);
initLocalStorage("employees", employees);
initLocalStorage("products", products);
initLocalStorage("orders", orders);
initLocalStorage("materials", materials);
initLocalStorage("productionProcesses", productionProcesses);
initLocalStorage("entryStockPlaces", entryStockPlaces);
initLocalStorage("outputStockPlaces", outputStockPlaces);
initLocalStorage("testsMaterials", testsMaterials);
initLocalStorage("testsProducts", testsProducts);

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <App/>
    );
} else {
    console.error('Root element not found');
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
