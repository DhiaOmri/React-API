import React, { useEffect, useState } from "react";
import axios from "axios";

import UserItem from "./UserItem";
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { LinearProgress, Skeleton } from "@mui/material";
const UserListe = ({ loading, setLoading, error, setError }) => {
  const [listOfUsers, setListOfUsers] = useState(null);
  const getUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setListOfUsers(res.data);
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
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
  
      <Container >
        <h1>Liste of Users</h1>
        <Box    sx={{
      display: "flex",
 
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: 'space-between',

    }}>
          {loading ? (
                     <Box sx={{ width: '50%',margin:'auto' }}>
                     <LinearProgress color="inherit" />
                   </Box>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            listOfUsers && listOfUsers.map((user) => <UserItem user={user} key={user.id} />)
          )}
        </Box>
      </Container>
    
  );
};

export default UserListe;
