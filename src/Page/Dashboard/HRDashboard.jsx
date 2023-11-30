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

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import useAuthProvider from "../../Components/Hooks/useAuthProvider/useAuthProvider";
import useAxiousPublic from "../../Components/Hooks/useAxiousPublic/useAxiousPublic";
import { useForm } from "react-hook-form";
import Payment from "../../Components/Payments/Payments";

const MyPosts = () => {
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const axiosPublic = useAxiousPublic();
  const { user } = useAuthProvider();
  const [dataRow,setDataRow] = useState('')
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
      label: "Email",
    },
    {
      id: "04",
      label: "Verified",
    },
    {
      id: "05",
      label: "Bank Account No",
    },
    {
      id: "06",
      label: "Salary",
    },
    {
      id: "07",
      label: "Pay",
    },
    {
      id: "08",
      label: "Details",
    },
  ];
  // const tableData = [
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  //   {
  //     name: "janifa",
  //     accuntNo: "0105545450",
  //     email: "jannatulaxajanifa586",
  //     image: user?.photoURL,
  //     salary: 15000,
  //     role: "Employe",
  //   },
  // ];

  const { data: tableData = [], refetch } = useQuery({
    queryKey: ["employ"],
    queryFn: async () => {
      const res = await axiosPublic.get("/employ");
      return res.data;
    },
  });

  const handleVerify = async (row) => {
    const id = row?._id;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make him verify!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.patch("/employVerified", { id });
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Successfully!",
            text: `Your Make ${row?.name} Verified`,
            icon: "success",
          });
        }
      }
    });
  };

  // Section for modal to pay Salary

  function openModal(row) {
    setDataRow(row)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const handleFire = (post) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Make him verify!",
  //   }).then(async (result) => {
  //     console.log(result);
  //     // if (result.isConfirmed) {
  //     //   const res = await axiosPublic.delete(/deletePost/${post._id});

  //     //   if (res.data.deletedCount > 0) {
  //     //     refetch();
  //     //     Swal.fire({
  //     //       title: "Deleted!",
  //     //       text: "Your Item has been deleted.",
  //     //       icon: "success",
  //     //     });
  //     //   }
  //     // }
  //   });
  // };

  return (
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
              {/* Start Modal Section */}

              <div>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  className=" mx-6 p-10 md:w-[40rem] md:mx-auto bg-[#292727] "
                  contentLabel="Example Modal"
                >
                  <div className="flex text-white justify-end w-4 ml-auto mt-20">
                    <button onClick={closeModal} className="btn btn-ghost ">X</button>
                  </div>
                  <h2 className="-mt-10"><span className="text-lg font-bold">Name:</span> {dataRow?.name}</h2>
                  <h2><span className="text-lg font-bold">Salary:</span> $ {dataRow?.salary}</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center items-center gap-5 -mt-6"> 
                      <div>
                        <label className="label">
                          <span className="label-text">Input Month and Year</span>
                        </label>
                        <input
                          type="month"
                          {...register("month", { required: true })}
                          placeholder="Month"
                          className="input input-bordered"
                        />
                      </div>
                    </div>
                        {errors.month && (
                          <p className="text-red-600 text-center">
                            This field is required
                          </p>
                        )}
                        <Payment></Payment>
                    {/* <button className="mt-4 w-full text-center bg-blue-700 py-2 text-white" type="submit">Pay</button> */}
                  </form>
                </Modal>
              </div>
              {/* End Modal Section */}
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
                          {row.email}
                        </TableCell>
                        <TableCell align="right" sx={{ textAlign: "center" }}>
                          {row?.verified === "no" ? (
                            <Tooltip title="Make Verify">
                              <CancelRoundedIcon
                                onClick={() => handleVerify(row)}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Verified">
                              <VerifiedRoundedIcon />
                            </Tooltip>
                          )}
                        </TableCell>
                        <TableCell align="right" sx={{ textAlign: "center" }}>
                          {row.accuntNo}
                        </TableCell>
                        <TableCell align="right" sx={{ textAlign: "center" }}>
                          {row.salary} $
                        </TableCell>
                        <TableCell align="right" sx={{ textAlign: "center" }}>
                          <Tooltip title="Pay">
                            {row?.verified !== "no" ? (
                              <Button variant="outlined" onClick={()=>openModal(row)}>
                                Pay
                              </Button>
                            ) : (
                              <Button variant="outlined" disabled>
                                Pay
                              </Button>
                            )}
                            {/* <PaidOutlinedIcon onClick={() => handleFire(row)} /> */}
                          </Tooltip>
                        </TableCell>
                        <TableCell align="right" sx={{ textAlign: "center" }}>
                          <Link to={`/chart/${row?._id}`}><button>Details</button></Link>
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
  );
};

export default MyPosts;
