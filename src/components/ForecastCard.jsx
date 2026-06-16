import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { getWeatherIcon, getWeatherTone } from "../utils/weatherIcons";
import { formatWeekday } from "../utils/dateFormat";

function ForecastCard({ day, index }) {
  const Icon = getWeatherIcon(day.weatherCode);
  const tone = getWeatherTone(day.weatherCode);
  const label = index === 0 ? "Oggi" : formatWeekday(day.date);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1.5}
      sx={{
        minHeight: 38,
        color: "text.secondary",
      }}
    >
      <Typography
        component="span"
        sx={{ width: 44, fontSize: 13, fontWeight: 800, color: "text.primary" }}
      >
        {label}
      </Typography>
      <Box
        component={Icon}
        aria-label={day.description}
        sx={{ color: tone, width: 21, height: 21, flexShrink: 0 }}
      />
      <LinearProgress
        variant="determinate"
        value={Math.max(12, Math.min(100, Number(day.precipitationProbability) || 28))}
        sx={{
          flex: 1,
          height: 4,
          borderRadius: "999px",
          bgcolor: "rgba(123, 145, 184, 0.13)",
          "& .MuiLinearProgress-bar": {
            bgcolor: "primary.main",
            borderRadius: "999px",
          },
        }}
      />
      <Typography
        component="span"
        sx={{
          width: 54,
          textAlign: "right",
          fontSize: 13,
          fontWeight: 900,
          color: "text.primary",
        }}
      >
        {Math.round(day.temperatureMax)}°/{Math.round(day.temperatureMin)}°
      </Typography>
    </Stack>
  );
}

export default ForecastCard;
