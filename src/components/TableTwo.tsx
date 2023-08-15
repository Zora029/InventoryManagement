import { useState, useEffect } from "react";
import ActivitiyDataService from "../services/ActivitiyDataService";
import IActivity from "../types/ActivityType";
import { formatDate } from "../utils/formatDate";

const TableTwo = () => {
  // const [activities, setActivities] = useState([
  // {
  //   id : "FI259",
  //   name: "Income",
  //   target: "Sony",
  //   date: "2023-08-13",
  //   quantity: 56
  // },
  // {
  //   id : "FO259",
  //   name: "Outcome",
  //   target: "BMW",
  //   date: "2023-08-14",
  //   quantity: 12
  // },
  // {
  //   id : "FO255",
  //   name: "Outcome",
  //   target: "Dell",
  //   date: "2023-08-14",
  //   quantity: 6
  // },
  // ]);

  // getting all recent activities
  const [activities, setActivities] = useState<IActivity[]>([]);

  const fetchResources = async () => {
    try{
      const response = await ActivitiyDataService.getRecent();
      setActivities(response.data);
    } catch(error) {
      console.log("Getting all activities error : " + error);
      setActivities([]);
    }
  }

  useEffect(() => {
    fetchResources()
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Recent Activities
        </h4>
      </div>

      <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Activity ID</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Type</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Target name</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Date</p>
        </div>
      </div>

      {/* row */}
      

      {activities.map((activity:any, key:number) => (
        <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5" key={key}>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">{activity.numBon}</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">{activity.typeActivite}</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">{activity.nomClientFournisseur}</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">{formatDate(activity.dateActivite)}</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">{activity.quantity}</p>
        </div> */}
      </div>
      ))}
    </div>
  );
};

export default TableTwo;
