import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = (page) => {
    if (page) {
      fetch("https://randomuser.me/api/?results=50")
        .then((response) => {
          return response.json();
        })
        .then((user) => {
          setData([...data, ...user.results]);
          setIsLoaded(false);
        });
    }
    console.log(data);
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsLoaded(true);
      return setTimeout(() => {
        setPage(page + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [data]);

  const logout = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };
  const loader = (
    <div className="container">
      <div className="skeleton__content skeleton__loading">
        <div className="skeleton__headline skeleton__placeholder"></div>
        <div className="skeleton__line"></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid sticky-top bg-primary p-2">
        <button className="btn btn-light" onClick={logout}>
          Logout
        </button>
      </div>
      <div>
        {" "}
        {data.map((item, index) => (
          <div className=" row d-flex justify-content-center">
            <div className="col-md-4 d-flex justify-content-center align-items-center 
                  m-1 p-4 border border-top-0 border-info">
              <img className="rounded-circle" src={item.picture.medium} />
              <div className="ms-2" key={index}>
                <span>{item.email}</span>
              </div>
            </div>
          </div>
        ))}
        {isLoaded ? loader : ""}
      </div>
    </>
  );
};

export default Home;
