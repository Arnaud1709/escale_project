import React, { useState, useEffect } from "react";
import "./Calendar.style"; // Importe le fichier de style CSS du composant Calendar
import { ConfigProvider, DatePicker } from 'antd'; // Importe les composants nécessaires d'Ant Design
import fr_FR from 'antd/lib/locale/fr_FR'; // Importe la localisation française d'Ant Design
import { withTranslation } from "react-i18next"; // Importe la fonction de traduction

const { RangePicker } = DatePicker; // Destructure le composant RangePicker du composant DatePicker d'Ant Design

/**
 * Composant représentant un calendrier permettant de sélectionner une plage de dates.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Function} props.onDateRangeChange - La fonction appelée lorsque la plage de dates est modifiée.
 * @returns {JSX.Element} Le composant Calendar.
 */
const Calendar = ({ onDateRangeChange }) => {
    // État local pour stocker la plage de dates sélectionnée et le nombre de jours dans la plage
    const [dateRange, setDateRange] = useState(null);
    const [numberOfDays, setNumberOfDays] = useState(0);

    /**
     * Gère le changement de la plage de dates.
     * @param {moment.Moment[]} dates - Un tableau contenant les dates de début et de fin de la plage sélectionnée.
     */
    const handleDateChange = (dates) => {
      if (dates && dates[0] && dates[1]) {
        const startDate = dates[0];
        const endDate = dates[1];
        const days = endDate.diff(startDate, 'days'); // Calcule le nombre de jours dans la plage de dates
        console.log(`Nombre de jours sélectionnés : ${days}`);
        onDateRangeChange(dates); // Appelle la fonction de rappel avec la nouvelle plage de dates
      }
      setDateRange(dates); // Met à jour l'état local avec la nouvelle plage de dates
    };

    /**
     * Effet de côté pour mettre à jour le nombre de jours dans la plage de dates chaque fois que la plage est modifiée.
     */
    useEffect(() => {
      if (dateRange && dateRange[0] && dateRange[1]) {
        const startDate = dateRange[0];
        const endDate = dateRange[1];
        const days = endDate.diff(startDate, 'days'); // Calcule le nombre de jours dans la plage de dates
        setNumberOfDays(days); // Met à jour l'état local avec le nombre de jours
      }
    }, [dateRange]); // Déclenche l'effet à chaque fois que la plage de dates est modifiée

  return (
    // Rendu du composant Calendar
    <div>
      <ConfigProvider
        locale={fr_FR}
        firstDayOfWeek={1}
        width="100%"
      >
        {/* Composant RangePicker d'Ant Design pour la sélection de la plage de dates */}
        <RangePicker
          format="DD-MM-YYYY"
          onChange={handleDateChange}
          value={dateRange}
        />
      </ConfigProvider>
    </div>
  );
};

// Enrichit le composant Calendar avec la fonction de traduction (i18n)
export default withTranslation()(Calendar);
