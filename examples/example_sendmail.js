var nodemailer = require('../lib/nodemailer');

// Create a Sendmail transport object
var transport = nodemailer.createTransport("Sendmail", "/usr/sbin/sendmail");

console.log('Sendmail Configured');

// Message object
var message = {

    // sender info
    from: 'Nuwan Attygalle <nattygalle8@gmail.com>',

    // Comma separated list of recipients
    to: '"Nuwan T. Attygalle" <nuwan.t.attygalle@gmail.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', //

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>',

    // An array of attachments
    attachments:[

        // String attachment
        {
            fileName: 'notes.txt',
            contents: 'Some notes about this e-mail',
            contentType: 'text/plain' // optional, would be detected from the filename
        },

        // Binary Buffer attachment
        {
            fileName: 'image.png',
            contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

            cid: 'note@node' // should be as unique as possible
        },

        // File Stream attachment
        {
            fileName: 'nyan cat ✔.gif',
            filePath: __dirname+"/nyan.gif",
            cid: 'nyan@node' // should be as unique as possible
        }
    ]
};

console.log('Sending Mail');

transport.sendMail(message, function(error){
    if(error){
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
});