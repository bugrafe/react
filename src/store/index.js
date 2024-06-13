import { createContext } from "react";

//! Bos bir merkezi state yapisini olusturur.
const StoreContext=createContext();

//! Baska componentlerden erişilebilmesi için export edilir
export default StoreContext;