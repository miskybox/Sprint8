//DailyVariation
import { useTranslation } from "react-i18next";
import { useProvider } from "../context/Context";

function DailyVariation() {
  const { percentageVariation, sign } = useProvider();
  const { t } = useTranslation();

  return (
    <div>
      <div className="lg:text-end sm:items-center sm:text-center lg:place-self-end">
        <p className="font-semibold text-xl"> 
          {sign}
          {percentageVariation}%
        </p>
        <h3 className="font-bold">
          {t("FromYesterday")}
        </h3>
      </div>
    </div>
  );
}

export default DailyVariation;

/*import React, { useContext } from 'react';
import { BalanceContext } from './path-to-balance-context';

const DailyExpenses: React.FC = () => {
  const { dailyBalance, variationPercentage } = useContext(BalanceContext);

  return (
    <div>
      <h2>Gastos diarios: {dailyBalance}€</h2>
      <h4>Variación: {variationPercentage}%</h4>
    </div>
  );
};

export default DailyExpenses;
 */

/*import React, { useContext } from 'react';
import { BalanceContext } from '../context/BalanceContext';

const DailyVariation: React.FC = () => {
  const { DailyVariation } = useContext(BalanceContext);

  return (
    <div>
      <h2>{DailyVariation}</h2>
    </div>
  );
};

export default DailyVariation;
 */
/*import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext.tsx';
import { useTranslation } from 'react-i18next'

const YesterdayTodayPercentage= (): JSX.Element => {
  const { t } = useTranslation();
  const { percentageChange } = useContext(ExpenseContext);

  return (
    <div>
      <h3 className="mb-2">{ percentageChange.toFixed(2) }%</h3>
      <h4 className="mt-2">{t('RespecteAhir')}</h4>
    </div>
  );
};

export default YesterdayTodayPercentage; */
