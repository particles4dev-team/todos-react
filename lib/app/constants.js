/**
 * Define constants
 */
SC = {

    /**
     * AVATAR DEFAULT BASE64
     */
    AVATAR: "/images/avatar.jpg",

    COMPLETED: 'completed',
    ACTIVE: 'active',

    /**
     * USER ROLES
     */
    ADMIN       : 'admin',
    MODERATOR   : 'moderator',
    USER        : 'user',
};

// USERS
USERS = {
    ROLES: [SC.ADMIN, SC.MODERATOR, SC.USER]
};

// TASK
TASK_STATUS = {
    COMPLETED: SC.COMPLETED,
    ACTIVE: SC.ACTIVE
};

/**
 * System infomation
 */
SC.DEVELOPMENT = 'development';
SC.PRODUCTION  = 'production';
SC.TESTING     = 'testing';
SYSTEMS_INFO = {
    VERSION: '1.0.0',
    ENVIRONMENT: SC.PRODUCTION
};
