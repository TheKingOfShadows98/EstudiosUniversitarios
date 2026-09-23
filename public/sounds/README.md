# Directorio de Efectos de Sonido

Coloca en esta carpeta los archivos de audio en formato `.mp3` u `.ogg` correspondientes a los nombres configurados en `src/shared/config/soundConfig.ts`:

- `correct-answare.mp3` o `correct-answare.ogg` (Efecto al contestar correctamente en modo estudio asistido)
- `exam-pass-min.mp3` (Efecto al completar examen con nota regular/mínima 5.0 - 6.9)
- `exam-pass-mid.mp3` (Efecto al completar examen con nota buena/media 7.0 - 8.9)
- `perfect-strike.mp3` o `perfect-strike.ogg` (Efecto al completar examen con nota excelente >= 9.0)

> Nota: El sistema incluye un sintetizador Web Audio API de respaldo que reproduce acordes armónicos si los archivos aún no han sido añadidos físicamente.
