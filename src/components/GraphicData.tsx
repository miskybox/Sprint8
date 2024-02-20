//GraphicData.tsx
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useProvider } from "../context/Context";
import DailyExpenses from "./TodayBalance";
import DailyVariation from "./DailyVariation";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      max: 700, 
      grid: {
        display: true, 
        drawOnChartArea: false, 
      },
    },
  },
};

function GraphicData() {
  const { daysData, expensesDayData } = useProvider();
  const { t, i18n } = useTranslation();

  // idioma predeterminado como catalá
  useEffect(() => {
    i18n.changeLanguage("cat");
  }, []);

  const currentDayIndex = new Date().getDay();
  const adjustedIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

  const backgroundColors = daysData.map((_day, index) =>
    index === adjustedIndex ? "#55AAD5" : "#E0833B"
  );

  const data = {
    labels: daysData,
    datasets: [
      {
        label: "Expenses (€) ",
        data: expensesDayData,
        backgroundColor: backgroundColors,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="card-container mx-96 pb-20 sm:flex-col">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{t("ExpensesLastWeek")}</Card.Title>
          <Card.Text>
            <Bar options={options} data={data} />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-between">
            <div className="daily-expenses">{DailyExpenses()}</div>
            <DailyVariation />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default GraphicData;