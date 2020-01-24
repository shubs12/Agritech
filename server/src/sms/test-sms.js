//OunGsl3rigVmp73dLYek9VFjhhp7yXV2TpxvLHqC

const sendSmsVerification = (name, phone_no, rand_no) => {
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

const phone = "+91".concat(phone_no)

const client = require('twilio')(accountSid, authToken)
    client.messages
.create({
    body: `Hello ${name}, welcome to the Farmers app and Your username and password are: Username: ${phone_no} and Password: ${rand_no} `,
    from: '+13345399383',
    to: phone
}).then(message => console.log(message.sid));

}

module.exports = {
    sendSmsVerification
}
