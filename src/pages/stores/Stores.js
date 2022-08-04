import React from "react";
import "./stores.css";
import { Button } from "@material-ui/core";
import { Add, FilterAlt, Loop } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "cashbackEnabled", headerName: "Cashback Enabled", width: 150 },
  { field: "cashbackType", headerName: "cashback Type", width: 130 },
  { field: "cashbackPercent", headerName: "Cashback Percent", width: 130 },
  { field: "isfeatured", headerName: "Is Featured", width: 100 },
  { field: "visits", headerName: "visit", width: 80 },
  { field: "rating", headerName: "Rating", width: 80 },
  { field: "clicks", headerName: "Clicks", width: 80 },
  { field: "status", headerName: "status", width: 100 },
];

const rows = [
  {
    id: 1,
    cashbackEnabled: "Snow",
    cashbackType: "Jon",
    cashbackPercent: "80",
    isFeatured: "true",
    visits: 500,
    clicks: 500,
    rating: 5,
    status: "jj",
  },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

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
              <Button>
                {" "}
                <FilterAlt className="filter-alt" />
                Filter{" "}
              </Button>
              <input placeholder="Type and hit enter" />
              <Loop />
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
