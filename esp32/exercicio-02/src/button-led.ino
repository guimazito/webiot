#define BTN_PIN 4

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(BTN_PIN, INPUT);
}

void loop() {
  int btnState = digitalRead(BTN_PIN);
  digitalWrite(LED_BUILTIN, btnState);
}