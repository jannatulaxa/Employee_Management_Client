import React from "react";
import HeadTittle from "../../../Components/Shared/HeadTittle/HeadTittle";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const Services = () => {
  return (
    <div className="lg:w-[95%]  mx-10 lg:mx-auto ">
                    <HeadTittle heading={"Our services for Employee management"} tittle={"Services"}></HeadTittle>

      <div className=" grid lg:grid-cols-6  md:grid-cols-3 sm:grid-cols-1 gap-8 ">
        <div
          style={{ border: "linear-gradient(to top, #646EE4, #1976D2)" }}
          className="h-90 pb-8   border hover:bg-gradient-to-t from-[#D8DBFF] to-[#1976D2]  text-center "
        >
          <p className="pb-6 text-2xl pt-8 font-semibold text-white">
            Workforce Hub
          </p>
          <AccessAlarmsIcon sx={{ fontSize: 40 }} color="primary"/>
          <p>
            <ol className="space-y-4 pt-2 mx-3 hover:text-[#000643] text-[#D8DBFF]">
              <li>Comprehensive workforce management platform</li>
              <li>Streamlines HR tasks and employee scheduling</li>
              <li>Centralized hub for employee data and communication</li>
            </ol>
          </p>
        </div>
        <div
          style={{ border: "linear-gradient(to top, #646EE4, #1976D2)" }}
          className="h-90 pb-8  border hover:bg-gradient-to-t from-[#D8DBFF] to-[#1976D2]  text-center "
        >
          <p className="pb-6 text-2xl pt-8 font-semibold text-white">Team Sync</p>
          <AccessibleForwardIcon sx={{ fontSize: 40 }} color="primary"></AccessibleForwardIcon>
          <p>
            <ol className="space-y-4 pt-2 mx-3 hover:text-[#000643] text-[#D8DBFF]">
              <li>Synchronized team collaboration and communication</li>
              <li>Efficient task allocation and project tracking</li>
              <li>Real-time updates for enhanced team coordination</li>
            </ol>
          </p>
        </div>
        <div
          style={{ border: "linear-gradient(to top, #646EE4, #1976D2)" }}
          className="h-90 pb-8  border hover:bg-gradient-to-t from-[#D8DBFF] to-[#1976D2]  text-center "
        >
          <p className="pb-6 text-2xl pt-8 font-semibold text-white">Staff Pulse</p>
          <AccessTimeFilledIcon sx={{ fontSize: 40 }} color="primary"></AccessTimeFilledIcon>
          <p>
            <ol className="space-y-4 pt-2 mx-3 hover:text-[#000643] text-[#D8DBFF]">
              <li>Employee engagement and feedback system</li>
              <li>Pulse surveys for continuous improvement</li>
              <li>Promotes a positive and motivated work environment</li>
            </ol>
          </p>
        </div>
        <div
          style={{ border: "linear-gradient(to top, #646EE4, #1976D2)" }}
          className="h-90 pb-8  border hover:bg-gradient-to-t from-[#D8DBFF] to-[#1976D2]  text-center "
        >
          <p className="pb-6 text-2xl pt-8 font-semibold text-white">Crew Flow</p>
          <AddToQueueIcon sx={{ fontSize: 40 }} color="primary"></AddToQueueIcon>
          <p>
            <ol className="space-y-4 pt-2 mx-3 hover:text-[#000643] text-[#D8DBFF]">
              <li>Smooth workflow management for project teams</li>
              <li>Ensures efficient project execution and collaboration</li>
              <li>Optimizes resource allocation and task coordination</li>
            </ol>
          </p>
        </div>
        <div
          style={{ border: "linear-gradient(to top, #646EE4, #1976D2)" }}
          className="h-90 pb-8  border hover:bg-gradient-to-t from-[#D8DBFF] to-[#1976D2]  text-center "
        >
          <p className="pb-6 text-2xl pt-8 font-semibold text-white">Job Swift</p>
          <AdsClickIcon sx={{ fontSize: 40 }} color="primary"></AdsClickIcon>
          <p>
            <ol className="space-y-4 pt-2 mx-3 hover:text-[#000643] text-[#D8DBFF]">
              <li>Swift and agile job allocation and tracking</li>
              <li>Seamless project management for dynamic tasks</li>
              <li>Enhances job visibility and reduces turnaround time</li>
            </ol>
          </p>
        </div>
        <div
          style={{ border: "linear-gradient(to top, #646EE4, #1976D2)" }}
          className="h-90 pb-8  border hover:bg-gradient-to-t from-[#D8DBFF] to-[#1976D2]  text-center "
        >
          <p className="pb-6 text-2xl pt-8 font-semibold text-white">Labor Sync</p>
          <AddToPhotosIcon sx={{ fontSize: 40 }} color="primary"></AddToPhotosIcon>
          <p>
            <ol className="space-y-4 pt-2 mx-3 hover:text-[#000643] text-[#D8DBFF]">
              <li>Synchronization of labor resources for optimal efficiency</li>
              <li>Real-time labor tracking and analytics</li>
              <li>Improves workforce productivity and resource utilization</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
