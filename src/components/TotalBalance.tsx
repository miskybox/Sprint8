//TotalBalance.tsx
import React from "react";
import { useProvider } from "../context/Context";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Languages from "./Languages";
import Card from "react-bootstrap/Card";

const WeeklyBalance: React.FC = () => {
  const { totalWeekBalance, currentWeek, weeksList, changeWeek } =
    useProvider();
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-1280 my-5 pt-20">
      <Languages />

      <Card className="mx-96 pb-20 sm:flex-col max-width:700px" id="weeklybalance">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-left">
            <div>
              <h2 className="font-sans" id="balance">
                {t("TotalBalance")}
              </h2>
              <p className="font-sans font-bold text-3xl" id="amount">
                {totalWeekBalance}€
              </p>
            </div>
            <div className="d-flex align-items-end gap-3 text-2xl arrow">
              {currentWeek > 0 && (
                <button
                  className="cursor-pointer"
                  onClick={() => changeWeek("prev")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      changeWeek("prev");
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Previous Week"
                >
                  <FaArrowLeftLong />
                </button>
              )}
              {currentWeek < weeksList.length - 1 && (
                <button
                  className="cursor-pointer"
                  onClick={() => changeWeek("next")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      changeWeek("next");
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Next Week"
                >
                  <FaArrowRightLong />
                </button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeeklyBalance;
