#define TEMP_PIN A1

void setup() {
  Serial.begin(115200);
}

void loop() {
  int val = analogRead(TEMP_PIN);
  float voltage = val * 3.3 / 4095;
  float temperatureC = (voltage - 0.5) * 100.0;
  Serial.println("Temp: " + String(temperatureC) + " °C");
  delay(1000);
}