#define POT_PIN A1

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  int potValue = analogRead(POT_PIN);
   int pwmValue = potValue / 4;
  analogWrite(LED_BUILTIN, pwmValue);
}