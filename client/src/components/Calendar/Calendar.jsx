import React, { useState, useEffect } from "react";
import "./Calendar.style";
import { withTranslation } from "react-i18next";
import { ConfigProvider, DatePicker } from 'antd';
import fr_FR from 'antd/lib/locale/fr_FR';
import moment from 'moment'; // Importez moment

const { RangePicker } = DatePicker;

const Calendar = ({ onDateRangeChange }) => {
    const [dateRange, setDateRange] = useState(null);
    const [numberOfDays, setNumberOfDays] = useState(0);

    const handleDateChange = (dates) => {
      if (dates && dates[0] && dates[1]) {
        const startDate = dates[0];
        const endDate = dates[1];
        const days = endDate.diff(startDate, 'days'); // Utilisez diff de moment pour calculer le nombre de jours
        console.log(`Nombre de jours sélectionnés : ${days}`);
        onDateRangeChange(dates);
      }
      setDateRange(dates);
    };

    // Utilisez useEffect pour recalculer le nombre de jours lorsque dateRange change
    useEffect(() => {
      if (dateRange && dateRange[0] && dateRange[1]) {
        const startDate = dateRange[0];
        const endDate = dateRange[1];
        const days = endDate.diff(startDate, 'days'); // Utilisez diff de moment pour calculer le nombre de jours
        setNumberOfDays(days);
      }
    }, [dateRange]);

  return (
    <div>
      <ConfigProvider
        locale={fr_FR}
        firstDayOfWeek={1}
        width="100%"
      >
        <RangePicker
          format="DD-MM-YYYY"
          onChange={handleDateChange}
          value={dateRange}
        />
      </ConfigProvider>
    </div>
  );
};

export default withTranslation()(Calendar);
