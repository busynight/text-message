const SMS_PHONE_PROVIDERS = {
    'at&t': '@txt.att.net',
    'tmobile': '@tmomail.net',
    'verizon': '@vtext.com',
    'sprint': '@messaging.sprintpcs.com',
    'virgin': '@vmobl.com',
    'metro': '@mymetropcs.com',
    'boost': '@sms.myboostmobile.com',
    'cricket': '@sms.cricketwireless.net',
    'republic': '@text.republicwireless.com',
    'fi': '@msg.fi.google.com',
    'ting': '@message.ting.com'
};

function getEmailSMSNumber(number, provider = 'fi') {
    return `${number}${SMS_PHONE_PROVIDERS[provider]}`;
}

module.exports = getEmailSMSNumber;
