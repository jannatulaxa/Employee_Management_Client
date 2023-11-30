import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useForm } from "react-hook-form";
import useAxiousPublic from "../../Components/Hooks/useAxiousPublic/useAxiousPublic";
import useAuthProvider from "../../Components/Hooks/useAuthProvider/useAuthProvider";
import HeadTittle from "../../Components/Shared/HeadTittle/HeadTittle";

const Dashboard = () => {
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const axiosPublic = useAxiousPublic();
  const { user } = useAuthProvider();
  const [dataRow, setDataRow] = useState("");
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const headCells = [
    {
      id: "01",
      label: "Sl NO",
    },
    {
      id: "02",
      label: "Name",
    },
    {
      id: "03",
      label: "Designation",
    },
    {
      id: "04",
      label: " Make HR",
    },
    {
      id: "05",
      label: "Fire",
    },
  ];

  const { data: tableData = [], refetch } = useQuery({
    queryKey: ["verifiedEmploy"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allVerifiedEmployWithHr");
      return res.data;
    },
  });
  const { data: employ = []  } = useQuery({
    queryKey: ["getEmploy"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allEmploy");
      return res.data;
    },
  });
  const { data: hr = []  } = useQuery({
    queryKey: ["getHR"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allHR");
      return res.data;
    },
  });

  const handleHR = async (row) => {
    const id = row?._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make him HR!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.patch("/makeHr", { id });
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Successfully!",
            text: `${row?.name} is Now HR`,
            icon: "success",
          });
        }
      }
    });
  };
  const handleFire = async (row) => {
    const id = row?._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Fire Him!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.patch("/fired", { id });
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Successfully!",
            text: `${row?.name} is Now HR`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <HeadTittle
        heading={"See overall information in your dashboard"}
        tittle={"Dashboard"}
      ></HeadTittle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-20 text-center">
        <div className="card rounded-lg h-[10rem] text-white font-bold text-4xl py-4  bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>All Staff</p>
          <p className="mt-4 font-semibold text-6xl font-mono">{hr?.length + employ?.length}</p>
        </div>
        <div className="card rounded-lg h-[10rem] text-white font-bold text-4xl py-4  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <p>HR</p>
          <p className="mt-4 font-semibold text-6xl font-mono">{hr.length}</p>
        </div>
        <div className="card rounded-lg h-[10rem] text-white font-bold text-4xl py-4  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <p>Employee</p>
          <p className="mt-4 font-semibold text-6xl font-mono">{employ?.length}</p>
        </div>
      </div>
      {/* Table Section */}

      <div>
        <Box sx={{ width: "100%", mt: 10, backgroundColor: "white" }}>
          {/* <HeaderTittle heading={"My Posts"} tittle={"Posts"}></HeaderTittle> */}
          <Paper sx={{ width: "100%", mb: 2, pl: 2, pr: 2, pt: 5 }}>
            <TableContainer sx={{ height: "calc(90vh - 200px)" }}>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <TableHead>
                  <TableRow>
                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        sx={{ pl: 2, w: 20, textAlign: "center" }}
                      >
                        {headCell.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <>
                      
                        <TableRow
                          hover
                          role="list"
                          key={row.index}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell sx={{ pl: 2, w: 20, textAlign: "center" }}>
                            {page * rowsPerPage + index + 1}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="none"
                            sx={{ textAlign: "center" }}
                          >
                            {row?.name}
                          </TableCell>
                          <TableCell align="right" sx={{ textAlign: "center" }}>
                            {row.role}
                          </TableCell>
                          <TableCell align="right" sx={{ textAlign: "center" }}>
                            {row?.role !== "Hr" && !row?.status ? (
                              <Tooltip title="Make HR">
                                <Button
                                  onClick={() => handleHR(row)}
                                  variant="outlined"
                                >
                                  Make HR
                                </Button>
                              </Tooltip>
                            ) : !row?.status ? (
                              <Tooltip title="HR">
                                <Button variant="outlined">Already HR</Button>
                              </Tooltip> 
                            )
                            : <Tooltip title="Fired">
                            <Button variant="outlined">Fired</Button>
                          </Tooltip> 
                          }
                          </TableCell>

                          <TableCell align="right" sx={{ textAlign: "center" }}>
                            <Tooltip title="Pay">
                              {!row?.status ? (
                                <DoDisturbIcon
                                  onClick={() => handleFire(row)}
                                />
                              ) : (
                                "Fired"
                              )}
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10]}
              component="div"
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
