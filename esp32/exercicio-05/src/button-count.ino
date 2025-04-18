#define BTN_PIN 2

int count = 0;
bool lastState = false;

void setup() {
  pinMode(BTN_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  bool state = digitalRead(BTN_PIN);
  if (state && !lastState) {
    count++;
    Serial.println("Contador: " + String(count));
    delay(200); // debounce
  }
  lastState = state;
}