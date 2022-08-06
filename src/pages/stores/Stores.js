import React from "react";
import "./stores.css";
import { Button } from "@material-ui/core";
import { Add, FilterAlt, Loop, MoreVert } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./tableData";

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
            Please note the following important points when configuring the
            stores
          </p>
          <p>
            If the stores is imported from the network, the comission rate will
            be updated automatically
          </p>
          <p>
            In case any commission rate is created, keep the 'SWITCH ON' for
            manual in the comission rate table
          </p>
        </div>

        <div className="button-actions">
          <div className="buttons">
            <div className="first">
              <Button className=" button button-create-new">
                <Add /> Create new
              </Button>
              <Button className="button button-import-csv"> Import CSV</Button>
              <Button className="button button-bulk-edit">Bulk Edit</Button>
            </div>

            <div className="filter">
              <Button className="filter-button">
                <FilterAlt className="filter-alt" />
                Filter
              </Button>
              <input placeholder="Type and hit enter" />
              <Loop />
              <MoreVert />
            </div>
          </div>

          <div className="table" style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[7]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
