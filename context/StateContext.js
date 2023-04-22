
import React, {createContext, useContext, useState, useEffect} from "react";
import {toast} from 'react-hot-toast';
import { sendContactForm } from "@/lib/sendContact";

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    const iniValues = {firstName:"",lastName:"",email:"",subject:"",message:"",}
    const iniState = {values: iniValues};
    
    const [state, setState] = useState(iniState);
    const {values, error} = state;

    let foundProduct;
    let index;

    
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart){
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        }   else{
            product.quantity = quantity;

            setCartItems([...cartItems, {...product}]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }


    const handleBuyNow = (product,qty) => {
        onAdd(product, qty);        
        setShowCart(true);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    }


    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);
            

        if(value === 'inc'){ 
            setCartItems([...newCartItems, {...foundProduct, quantity:
            foundProduct.quantity + 1}]);

            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        
        } else if(value === 'dec'){
            if (foundProduct.quantity > 1){
                setCartItems([...newCartItems, {...foundProduct, quantity:
                foundProduct.quantity - 1}]);

                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            }
        }
    }

    
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty -1;
        });
    }

    const handleChange = ({target}) => setState((prev) =>({
        ...prev,
        values:{
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const onSubmitt = async () => {
        const iniState = {values: iniValues};
        
        setState((prev) => ({
            ...prev,
        }));
               
        await sendContactForm(values);            

        toast.success(`Mail Sent.`)
        setState(iniState);
        
    };




    return(
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            toggleCartItemQuantity,
            onAdd,
            onRemove,
            setCartItems,
            setTotalPrice,
            setTotalQuantities,
            handleBuyNow,
            handleChange,
            onSubmitt,
            values,
            iniState
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);