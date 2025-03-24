import { createContext, useState, useEffect } from 'react';

// Storage key for shopping cart
const CART_STORAGE_KEY = 'shopping_cart';

// Initial empty cart
const initialCart = {
  /**
  * @type {Array<{
  *   title: string,
  *   price: number,
  *   description?: string,
  *   images?: Array<String>,
  *   quantity: number,
  * }>}
  */
  items: []
};

export const ShoppingCartContext = createContext({
  cart: initialCart,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {}
});

export const ShoppingCartProvider = ({ children }) => {
  // Initialize state from localStorage or with empty cart
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : initialCart;
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return initialCart;
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  const addToCart = (product) => {
    // Check if we have all required info
    if (!product || !product.title || !product.price) {
      console.error('Invalid product data', product);
      return;
    }

    setCart(prevCart => {
      const updatedItems = [...prevCart.items];
      
      // Check if product already exists in cart
      const existingItemIndex = updatedItems.findIndex(
        item => item.title === product.title
      );

      if (existingItemIndex >= 0) {
        // Product exists, increment quantity
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
      } else {
        // Product doesn't exist, add it with quantity 1
        updatedItems.push({
          ...product,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  };

  const removeFromCart = (productTitle) => {
    setCart(prevCart => {
      // Filter out the product
      const updatedItems = prevCart.items.filter(item => item.title !== productTitle);
      
      return {
        items: updatedItems,
      };
    });
  };

  // Increment quantity of a product by 1
  const incrementQuantity = (productTitle) => {
    setCart(prevCart => {
      // Clone the items array
      const updatedItems = [...prevCart.items];
      
      // Find the product
      const itemIndex = updatedItems.findIndex(item => item.title === productTitle);
      
      if (itemIndex >= 0) {
        // Increment the quantity
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1
        };
      }
      
      // Return updated cart
      return {
        items: updatedItems,
      };
    });
  };

  // Decrement quantity of a product by 1, remove if quantity becomes 0
  const decrementQuantity = (productTitle) => {
    setCart(prevCart => {
      // Clone the items array
      let updatedItems = [...prevCart.items];
      
      // Find the product
      const itemIndex = updatedItems.findIndex(item => item.title === productTitle);
      
      if (itemIndex >= 0) {
        const currentQuantity = updatedItems[itemIndex].quantity;
        
        if (currentQuantity <= 1) {
          // Remove the item if quantity would become 0
          updatedItems = updatedItems.filter(item => item.title !== productTitle);
        } else {
          // Decrement the quantity
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: currentQuantity - 1
          };
        }
      }
      
      // Return updated cart
      return {
        items: updatedItems,
      };
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart(initialCart);
  };

  // Create context value
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};