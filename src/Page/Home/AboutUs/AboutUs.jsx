import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HeadTittle from "../../../Components/Shared/HeadTittle/HeadTittle";

export default function AboutUs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="lg:w-[96%] md:w-[92%] w-[86%] mx-auto mb-10">
      <HeadTittle
        heading={"Empowering Dreams, Building Futures"}
        tittle={"About Us"}
      ></HeadTittle>

      <div className=" border">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="About Us tabs example">
              <Tab label="Our Mission" value="1" />
              <Tab label="Our Team" value="2" />
              <Tab label="Contact Us" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <p>
            At OurCompany, our mission is to streamline and enhance employee management
            processes. We are dedicated to providing comprehensive solutions that empower
            businesses to efficiently manage their workforce, from onboarding to performance
            evaluation. <br /> Our goal is to contribute to the success of organizations by
            simplifying HR operations and fostering a productive work environment.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p>
            Meet the backbone of OurCompany - our talented and diverse team of professionals.
            Committed to excellence and teamwork, our employees bring a wealth of experience
            in HR, technology, and customer service. Together, we work collaboratively to
            create innovative solutions and ensure the success of our clients in managing
            their most valuable asset - their people.
            </p>
          </TabPanel>
          <TabPanel value="3">
            <p>
            Have questions about our employee management solutions or want to explore
            collaboration opportunities? Feel free to reach out to us through our contact
            channels. <br /> We value your feedback and look forward to assisting you in optimizing
            your workforce management processes. Lets connect and work together for
            effective employee management.
            </p>
          </TabPanel>
        </TabContext>
      </Box>
      </div>
    </div>
  );
}
