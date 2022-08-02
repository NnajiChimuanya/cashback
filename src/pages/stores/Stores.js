import React from "react";
import "./stores.css";
import { Button } from "@material-ui/core";
import { Add } from "@mui/icons-material";

const Stores = () => {
  return (
    <div className="stores">
      <div className="stores-header">
        <h4> Stores</h4>
      </div>
      <div className="heading">
        <h4> All Records </h4>
      </div>
      <div className="stores-main">
        <div className="stores-main-info">
          <p>
            {" "}
            Please note the following important points when configuring the
            stores
          </p>
          <p>
            {" "}
            If the stores is imported from the network, the comission rate will
            be updated automatically
          </p>
          <p>
            {" "}
            In case any commission rate is created, keep the 'SWITCH ON' for
            manual in the comission rate table
          </p>
        </div>

        <div className="buttons">
          <Button className="button">
            {" "}
            <Add /> create New
          </Button>
          <Button className="button"> Import CSV</Button>
          <Button className="button">Bulk Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default Stores;
