import React, { useState, useEffect } from "react";
import "./Calendar.style";
import { useTranslation, withTranslation } from "react-i18next";
import { ConfigProvider, DatePicker } from 'antd';
import moment from 'moment';
import fr_FR from 'antd/lib/locale/fr_FR';

const { RangePicker } = DatePicker;

const Calendar = () => {

  moment.locale('fr');

    const { t, i18n } = useTranslation();
    const [dates, setDates] = useState([]);
  
    const handleDateChange = (date, dateString) => {
      setDates(dateString);
    }
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
      />
      </ConfigProvider>
    </div>
  );
};

export default withTranslation()(Calendar);
