App.info({
    id          : "com.particle4dev.tr",
    name        : 'Todos React',
    description : 'Add, edit and manage your Todo Lists',
    author      : 'Particles4dev Team',
    email       : 'particle4dev@gmail.com',
    website     : '',
    version     : '1.0.0'
});

App.accessRule('*');

App.setPreference("SplashScreen", "screen");
App.setPreference("SplashScreenDelay", "7000");

App.icons({
    'iphone'        : 'resources/icons/ios/icon-60.png',
    'iphone_2x'     : 'resources/icons/ios/icon@2x.png',
    'iphone_3x'     : 'resources/icons/ios/icon@3x.png',
    'android_ldpi'  : 'resources/icons/drawable-ldpi/ic_launcher.png',
    'android_mdpi'  : 'resources/icons/drawable-mdpi/ic_launcher.png',
    'android_hdpi'  : 'resources/icons/drawable-hdpi/ic_launcher.png',
    'android_xhdpi' : 'resources/icons/drawable-xhdpi/ic_launcher.png'
});


App.launchScreens({
    // Android
    'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait/screen.png',
    'android_ldpi_landscape': 'resources/splash/android_ldpi_landscape/screen.png',
    'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait/screen.png',
    'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape/screen.png',
    'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait/screen.png',
    'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape/screen.png',
    'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait/screen.png',
    'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape/screen.png'
});