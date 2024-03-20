//This example shows how to read, store and update database using get, set, push and update functions.

#include <WiFi.h>
#include <FirebaseESP32.h>

#define WIFI_SSID "lap cua Dang"
#define WIFI_PASSWORD "12345678"

#define FIREBASE_HOST "https://iot-w4-3b820-default-rtdb.firebaseio.com/"

/** The database secret is obsoleted, please use other authentication methods, 
 * see examples in the Authentications folder. 
*/
#define FIREBASE_AUTH "9w4wis5DJpjSDrjcwV89Awrfl4t8RrsUSuMtePgW"

//Define FirebaseESP32 data object
FirebaseData fbdo;
int i;  
int count;
#define LED 2





void setup()
{
  pinMode(LED, OUTPUT); 
  Serial.begin(9600);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //Set database read timeout to 1 minute (max 15 minutes)
  Firebase.setReadTimeout(fbdo, 1000 * 60);
  //tiny, small, medium, large and unlimited.
  //Size and its write timeout e.g. tiny (1s), small (10s), medium (30s) and large (60s).
  Firebase.setwriteSizeLimit(fbdo, "tiny");
 
}
void loop()
{
  if(count%3==0)
  {
  if(Firebase.getString(fbdo, "/TT_IoT/BULB_01"))
  {
    Serial.println("Download success: " + String(fbdo.stringData()));
    if(fbdo.stringData() == "ON")
      digitalWrite(LED, HIGH);
    else
      digitalWrite(LED, LOW);   
  }else {
    Serial.println("Download fail: " + String(fbdo.stringData())); 
  }
  }
  if(Firebase.setInt(fbdo,"/TT_IoT/COUNT", count))
    {
      Serial.println("success");
      Serial.println(count++);
    }
  else
      Serial.println("fail");

  delay(1000);
}


