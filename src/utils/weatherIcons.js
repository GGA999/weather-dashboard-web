import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import GrainRoundedIcon from "@mui/icons-material/GrainRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import WavesRoundedIcon from "@mui/icons-material/WavesRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

function codeValue(code) {
  return Number(code);
}

function isNight(isDay) {
  return isDay === false || isDay === 0;
}

export function getWeatherIcon(code, isDay) {
  const value = codeValue(code);

  if (value === 0 || value === 1 || value === 2) {
    return isNight(isDay) ? DarkModeRoundedIcon : WbSunnyRoundedIcon;
  }

  if (value === 3) {
    return CloudRoundedIcon;
  }

  if (value >= 45 && value <= 48) {
    return WavesRoundedIcon;
  }

  if ((value >= 51 && value <= 67) || (value >= 80 && value <= 82)) {
    return GrainRoundedIcon;
  }

  if ((value >= 71 && value <= 77) || value === 85 || value === 86) {
    return AcUnitRoundedIcon;
  }

  if (value >= 95 && value <= 99) {
    return ThunderstormRoundedIcon;
  }

  return VisibilityRoundedIcon;
}

export function getWeatherTone(code, isDay) {
  const value = codeValue(code);

  if (value === 0 || value === 1 || value === 2) {
    return isNight(isDay) ? "#c7d7ff" : "#f1a94e";
  }

  if (value >= 51 && value <= 99) {
    return "#93c5fd";
  }

  return "#a8bcf5";
}
