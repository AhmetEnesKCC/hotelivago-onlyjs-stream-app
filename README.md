## Bu appi geliştirirken:

- ### Tasarımlar için

  Figma Community

- ### Backend için:

  Nest JS

  Passport JS

  Prisma ORM

- ### Frontend için

  Expo

  Nativewind

  React-Native-MMKV-Storage

  Lottie-React-Native

## Çalıştırmak için

### Backend

```sh
cd hotelivago-api
npm install # ilk sefer için
npx prisma generate # prisma tiplerini generate etmek için
npm run start
```

Bu işlemlerden sonra 3000 Portunda localinizde çalışmalı.
url: http://localhost:3000

### Frontend

```sh
cd hotelivago-mobile
npm install # ilk sefer için
```

Daha sonra appi bir simulator/emulator veya kendi cihazınızda çalıştırın.

### Kendi Cihazınızda Çalıştırma (telefon / tablet)

_ios için_:

- Xcode15 kurulu olmalı
- Telefonunuzu kablo ile mac veya macbook bilgisayarınıza bağlayın.
- Telefonunuzun development modunun açık olduğundan emin olun.
- Tüm bu adımlardan sonra

```sh
npx expo run:ios -d # -d device secim panelini acmak icin
```

Bu komutu calistirip cihaz seçim listesinden telefonunuzu seçin. Build tamamlandıktan sonra appi çalıştırabilirsiniz.

_android için_

- Android studio kurulu olmalı
- Adb kurulu olmalı
- Android SDK kurmanız faydalı olur. Daha sonra bu SDK ile emulator çalıştırmak isteyebilirsiniz.
- Telefonun geliştirici ayarlarında usb debug ayarının açık olduğundan emin olun.
- Telefonu bilgisayarınıza kablo ile bağlayın.

```sh
npx expo run:android -d # cihaz secim listesi gelecek.
```

Bu komutu calistirip cihaz seçim listesinden telefonunuzu seçin. Build tamamlandıktan sonra appi çalıştırabilirsiniz.

### IOS simulatorde çalıştırma

- XCode 15 kurulu olmalı.
- XCode commandline tools kurulu olmalı.
- Xcode için gerekli IOS sürümü SDK ları kurulu olmalı. Bunu XCode -> Ayarlar -> Platformlar -> + butonu ile gerekli IOS sürümünü kurun.

```sh
npx expo run:ios -d # -d ile cihaz seçim listesi açılacak
```

Bu komutu calistirip cihaz seçim listesinden istediğiniz iphone/ipad simulatörü seçin. Build tamamlandıktan sonra appi çalıştırabilirsiniz.

### Android emulatörde çalıştırma

- Android Studio kurulu olmalı
- Android SDK kurulu olmalı
- Andorid Studio üzerinden bir emulator oluşturun. Bunu Device Managerden yapabilirsiniz. Genelde Pixel bir telefon tercih edilir.

```sh
npx expo run:ios -d # cihaz seçim listesini açar.
```

Bu komutu calistirip cihaz seçim listesinden istediğiniz android emulatörü seçin. Build tamamlandıktan sonra appi çalıştırabilirsiniz.

### NOTLAR

- App buildları alındıktan sonra tekrar çalıştırmak için yeniden build almanıza gerek yok. Bunun yerine

```sh
npm run start
```

Komutu çalıştırılıp. Ardından Expo Go yerine Development Builda geçmek için terminalde 's' tuşuna basılır. Development build moduna geçildiğinde ilgili işletim sistemi için
ios: `i`
android: `a`
tuşları ile otomatik olarak cihaz listesinin en üstündeki cihazda app başlatılır. Cihaz listesinden seçim yapmak için
ios: `shift + i`
android: `shift + a`
tuşları ile liste açılır ve seçim yapılır.

- Bu adımlar cihazınında daha önce React Native için gerekli ortam kurulduğu öngörülerek hazırlanmıştır. Eğer daha önce ortam kurulumu sağlanmadıysa:

https://reactnative.dev/docs/set-up-your-environment

Linkindeki adımlar ilgili bilgisayar ve cihaz işletim sistemi için sağlanmalıdır.
