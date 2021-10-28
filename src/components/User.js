import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.css";
import { Skeleton, Stack } from "@mui/material";

const User = ({ error, setError, loading, setLoading }) => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const handleClick = () => {
    history.goBack();
  };
  const getUser = async (id) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    getUser(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container py-5">
      {loading ? (
        <Card spacing={1} sx={{ maxWidth: 700, margin: "50px auto" }}>
          <Skeleton
            variant="text"
            height={230}
            sx={{ marginTop: "-51px !important" }}
          />
          <Skeleton
            variant="circular"
            width={150}
            height={150}
            sx={{ margin: "-100px auto !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="30%"
            sx={{ margin: "140px auto !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="30%"
            sx={{ marginTop: "-100px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="40%"
            sx={{ margin: "25px 0px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="70%"
            sx={{ margin: "25px 0px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="50%"
            sx={{ margin: "25px 0px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="40%"
            sx={{ margin: "25px 0px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="60%"
            sx={{ margin: "25px 0px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="75%"
            sx={{ margin: "25px 0px !important" }}
          />
          <Skeleton
            variant="rectangular"
            width="65%"
            sx={{ margin: "25px 0px !important" }}
          />
        </Card>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        user && (
          <Card sx={{ maxWidth: 700, margin: "50px auto" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg"
              alt="green iguana"
            />

            <CardContent>
              <div className="card-picture">
                <img
                  src="https://www.newcastleoutrigger.com.au/wp-content/uploads/2020/09/blank-profile.jpg"
                  alt={user.name}
                />
              </div>
              <div className="descreption">
                <h1 style={{ textAlign: "center" }}>{user.name}</h1>
                <p>
                  <span className="text-secondary">user name</span>:{" "}
                  {user.username}
                </p>
                <p>
                  <span className="text-secondary">email:</span> {user.email}
                </p>
                <p>
                  <span className="text-secondary">address:</span>{" "}
                  {user.address.street} {user.address.suite} {user.address.city}{" "}
                  {user.address.zipcode}
                </p>
                <p>
                  <span className="text-secondary">phone:</span> {user.phone}
                </p>
                <p>
                  <span className="text-secondary">website:</span>{" "}
                  {user.website}
                </p>
                <p>
                  <span className="text-secondary">company name:</span>{" "}
                  {user.company.name}
                </p>
                <p>
                  <span className="text-secondary">company catch phrase:</span>{" "}
                  {user.company.catchPhrase}
                </p>
                <p>
                  <span className="text-secondary">company bs:</span>{" "}
                  {user.company.bs}
                </p>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleClick}>
                Go back
              </Button>
            </CardActions>
          </Card>
        )
      )}
    </div>
  );
};

export default User;
