import React from "react";
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [synchronizedItem, setSynchronizedItem] = React.useState(true)
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setLoading(false);
          setItem(parsedItem);
          setSynchronizedItem(true)
        } catch(error) {
          setError(error);
        }
      }, 3000);
    },[synchronizedItem]);
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
    const synchronizeItems = () => {
      setLoading(true)
      setSynchronizedItem(false)
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      synchronizeItems
    };
  }


    export {useLocalStorage}