const API_URL="https://664e406dfafad45dfadf8a3d.mockapi.io/api/v1/:endpoint";

const getAllProducts=async ()=>{
    const res = await fetch(`${API_URL}/products`);
    if(!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
}

const getProducts=async ()=>{
    const res = await fetch(`${API_URL}/products/${id}`);
    if(!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
}

const createProduct = async (product) => {
    const res = await fetch(`${API_URL}/products`, {
        method: "post",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
};

const updateProduct = async (id,product) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "put",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
};

const deleteProduct = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
        method: "put",
    });
    if (!res.ok) throw new Error("Something went wrong");
    const data = await res.json();
    return data;
};

export {getAllProducts,getProducts,createProduct,updateProduct,deleteProduct};

