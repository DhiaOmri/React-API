import { Button, Card, CardActions, CardContent } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const UserItme = ({ user }) => {
  return (
    <Card sx={{ width: "30%", margin: 2 }}>
      <CardContent sx={{ fontSize: 24 }}>
        <div className="card-body">
          <h4 className="card-subtitle mb-2 text-muted">{user.name}</h4>
          <h6>{user.username}</h6>
          <Link to={`users/${user.id}`} style={{ textDecoration: "none" }}>
            <CardActions>
              <Button size="small" variant="outlined">More info</Button>
            </CardActions>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserItme;
