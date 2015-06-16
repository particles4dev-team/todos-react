/**
 * Define constants
 */
SC = {

    /**
     * AVATAR DEFAULT BASE64
     */
    AVATAR: "/images/avatar.jpg",

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
    COMPLETED: 'completed',
    ACTIVE: 'active'
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
