import { Bar } from "react-chartjs-2";

const BarChart = ({ barInfo }) => {
  console.log("BarINFO", barInfo);

  const lbl = barInfo?.bar?.map((c) => c.month);
  const income = barInfo?.bar?.map((c) => c.total_income);
  const expense = barInfo?.bar?.map((c) => c.total_expense);

  const data1 = {
    labels: lbl,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#84CC16",
        data: income,
      },
      {
        label: "Expense",
        backgroundColor: "#F97316",
        data: expense,
      },
      {
        label: "Income",
        backgroundColor: "#84CC16",
        data: income,
      },
      {
        label: "Expense",
        backgroundColor: "#F97316",
        data: expense,
      },
    ],
  };

  const options1 = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white card">
      {/* {barChartData && <Bar data={data1} options={options1} />} */}
      <Bar data={data1} options={options1} />

      {/* {!barChartData && (
        <div className="flex items-end justify-center w-full gap-4 ">
          <div className="w-4 skeleton h-14"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 skeleton h-14"></div>
        </div>
      )} */}
    </div>
  );
};

export default BarChart;
