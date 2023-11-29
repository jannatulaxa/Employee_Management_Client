import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HeadTittle from "../../../Components/Shared/HeadTittle/HeadTittle";

// import { Paper, Typography } from "@mui/material";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    quote:
      "Using the Employee Management System has greatly streamlined our HR processes. It's user-friendly and efficient!",
  },
  {
    id: 2,
    name: "Michael Brown",
    quote:
      "The features of the Employee Management System have made our team coordination more effective. It's a valuable asset.",
  },
  {
    id: 3,
    name: "Olivia Davis",
    quote:
      "The Employee Management System has simplified our payroll management, making it accurate and time-saving.",
  },
  {
    id: 4,
    name: "Daniel Miller",
    quote:
      "Implementing the Employee Management System has improved our employee engagement and communication across the organization.",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    quote:
      "We ve experienced increased productivity and organization with the Employee Management System. Its an essential tool for our company.",
  },
];

const Testimonial = () => {
  const TestimonialItem = ({ testimonial }) => (
    <Paper
      elevation={3}
      style={{
        padding: 20,
        textAlign: "center",
        border: "2px solid #646ee4",
        backgroundColor: "#d8dbff",
        margin: "10px 5px",
      }}
    >
      <Typography variant="h6">{testimonial.name}</Typography>
      <Typography variant="body1">{testimonial.quote}</Typography>
    </Paper>
  );

  return (
    
    <div className="w-[95%] mx-auto">
      <HeadTittle heading={"Here we will explore some inspiring employee testimonials."} tittle={"Testimonial"}></HeadTittle>
      <Carousel>
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
