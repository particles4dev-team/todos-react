if(SYSTEMS_INFO.ENVIRONMENT == SC.DEVELOPMENT) {
    // development mod
    DATABASE_PREFIX = 'dev.';
}
else if(SYSTEMS_INFO.ENVIRONMENT == SC.PRODUCTION) {
    // production mod
    DATABASE_PREFIX = 'pro.';
}
else if(SYSTEMS_INFO.ENVIRONMENT == SC.TESTING) {
    // testing mod
    DATABASE_PREFIX = 'test.';
}
