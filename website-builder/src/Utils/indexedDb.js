export const openDB = (dbName, storeName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' });
            }
        };
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(event.target.errorCode);
        };
    });
};

export const addData = (db, storeName, data) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.add(data);
        request.onsuccess = () => {
            resolve();
        };
        request.onerror = (event) => {
            reject(event.target.errorCode);
        };
    });
};

export const updateData = (db, storeName, data) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);

        // Clear the store first
        const clearRequest = store.clear();

        clearRequest.onsuccess = () => {
            console.log("Store cleared successfully");

            // Now add all the data
            if (Array.isArray(data)) {
                data.forEach(item => {
                    store.add(item);
                });
            } else {
                store.add(data);
            }

            transaction.oncomplete = () => {
                console.log(`Successfully updated data`);
                resolve();
            };
        };

        clearRequest.onerror = (event) => {
            console.error("Error clearing store:", event.target.error);
            reject(event.target.error);
        };

        transaction.onerror = (event) => {
            console.error(`Error updating data:`, event.target.error);
            reject(event.target.error);
        };
    });
};

export const getData = (db, storeName) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(event.target.errorCode);
        };
    });
};
