//Context.tsx
import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";

export const Context = createContext<ContextProps | null>(null);

export const useProvider: () => ContextProps = (): ContextProps => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useProvider must be used within a ContextProvider");
  }
  return context;
};

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProps {
  weeksList: weekExpenses[];
  totalWeekBalance: number;
  daysData: string[];
  expensesDayData: number[];
  currentWeek: number;
  todayExpenses: number;
  yesterdayExpenses: number;
  percentageVariation: number;
  sign: string;
  changeWeek: (direction: "next" | "prev") => void;
}

interface weekExpenses {
  [key: string]: number;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

const getDayNamesInCatalan = () => {
  return ["dl", "dt", "dc", "dj", "dv", "ds", "dm"]; // Días de la semana en la graáfica
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("cat"); //Catalá predeterminado
  }, []);

  const weeksList: weekExpenses[] = [
    {
      monday: 250,
      tuesday: 120,
      wednesday: 200,
      thursday: 320,
      friday: 251,
      saturday: 250,
      sunday: 150,
    },
    {
      monday: 190,
      tuesday: 170,
      wednesday: 222,
      thursday: 420,
      friday: 205,
      saturday: 250,
      sunday: 400,
    },
    {
      monday: 450,
      tuesday: 350,
      wednesday: 126,
      thursday: 200,
      friday: 190,
      saturday: 90,
      sunday: 300,
    },
    {
      monday: 300,
      tuesday: 150,
      wednesday: 50,
      thursday: 120,
      friday: 290,
      saturday: 150,
      sunday: 250,
    },
  ];

  const calculateWeekBalance = (week: weekExpenses): number => {
    return Object.values(week).reduce((total, current) => total + current, 0);
  };
  const totalWeekBalance = calculateWeekBalance(weeksList[currentWeek]);

  const daysData = getDayNamesInCatalan();
  const expensesDayData = Object.values(weeksList[currentWeek]);

  const getExpensesByDay = (dayIndex: number): number => {
    const adjustedIndex = dayIndex === -1 || dayIndex === 0 ? 6 : dayIndex - 1;
    const daysOfWeek = Object.keys(weeksList[currentWeek]);
    const day = daysOfWeek[adjustedIndex];

    return weeksList[currentWeek][day];
  };

  const todayExpenses = getExpensesByDay(new Date().getDay());
  const yesterdayExpenses = getExpensesByDay(new Date().getDay() - 1);

  const calculatePercentageVariation = (
    currentValue: number,
    previousValue: number
  ): number => {
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const percentageVariation = Number(
    calculatePercentageVariation(todayExpenses, yesterdayExpenses).toFixed(2)
  );
  const sign = percentageVariation > 0 ? "+" : "";

  const changeWeek = (direction: "next" | "prev"): void => {
    const newWeek = direction === "next" ? currentWeek + 1 : currentWeek - 1;

    if (newWeek >= 0 && newWeek < weeksList.length) {
      setCurrentWeek(newWeek);
    }
  };

  return (
    <div className="bg-yellow-50">
      <Context.Provider
        value={{
          weeksList,
          totalWeekBalance,
          daysData,
          expensesDayData,
          currentWeek,
          todayExpenses,
          yesterdayExpenses,
          percentageVariation,
          sign,
          changeWeek,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

