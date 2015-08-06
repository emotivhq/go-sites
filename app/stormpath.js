var session      = require('express-session');

module.exports = function(app, stormpath) {
    // Set up the Stormpath application
    app.use(stormpath.init(app, {
        apiKeyId: '',
        apiKeySecret: '',
        application: 'https://api.stormpath.com/v1/applications/',
        secretKey: '@',
        redirectUrl: '/build',
        enableAutoLogin: true,
        enableForgotPassword: true,
        enableAccountVerification: true,
        enableUsername: true,
        requireUsername: true,
        sessionDuration: 1000 * 60 * 60, // Make sessions expire after 60 minutes.
        cache: 'memory',
        loginUrl: '/login',
        registrationUrl: '/giftstarters/register/first',
		registrationView: __dirname + '/../views/auth/register.jade',
    	loginView: __dirname + '/../views/auth/login.jade',
    	forgotPasswordView: __dirname + '/../views/auth/forgot.jade',
    	forgotPasswordEmailSentView: __dirname + '/../views/auth/forgot_email_sent.jade',
    	forgotPasswordChangeView: __dirname + '/../views/auth/forgot_change.jade',
    	forgotPasswordChangeFailedView: __dirname + '/../views/auth/forgot_change_failed.jade',
    	forgotPasswordCompleteView: __dirname + '/../views/auth/forgot_complete.jade',
    	resendAccountVerificationView: __dirname + '/../views/auth/verification_resend.jade',
    	accountVerificationEmailSentView: __dirname + '/../views/auth/verification_email_sent.jade',
    	accountVerificationCompleteView: __dirname + '/../views/auth/verification_complete.jade',
    	accountVerificationFailedView: __dirname + '/../views/auth/verification_failed.jade',
    	idSiteVerificationFailedView: __dirname + '/../views/auth/id_site_verification_failed.jade',
    	googleLoginFailedView: __dirname + '/../views/auth/google_login_failed.jade',
    	facebookLoginFailedView: __dirname + '/../views/auth/facebook_login_failed.jade',
    	unauthorizedView: __dirname + '/../views/auth/unauthorized.jade'
    }));
};