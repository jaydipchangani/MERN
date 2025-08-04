import React, { useEffect, useState } from "react";

function API() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fake.jsonmockapi.com/products?length=50")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not ok");
        }

        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error occurs");
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading......</h1>
      ) : error ? (
        <h1>Error Happens</h1>
      ) : (
        user.map((u) => (
          <li key={u.sku}>
            {u.productName} - ${u.price}
          </li>
        ))
      )}
    </div>
  );
}

export default API;
