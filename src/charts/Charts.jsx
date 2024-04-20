import axios from "axios";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

function Chart() {
  const [chartData, setChartData] = useState([]);
  const userDetail = useSelector((state) => state.user.value);

  useEffect(() => {
    axios
      .get(`https://job-portal-server-lime.vercel.app/api/chart/${userDetail?.role}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setChartData(res.data);
        console.log("chart",res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {userDetail?.role === "company" ? (
        <PieChart chartData={chartData} />
      ) : (
        <BarChart chartData={chartData} />
      )}
    </>
  );
}

export default Chart;
