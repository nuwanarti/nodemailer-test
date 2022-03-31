var nodemailer = require('../lib/nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail', // use well known service.
                            // If you are using @gmail.com address, then you don't
                            // even have to define the service name
        auth: {
            user: "facebook.com.xr@gmail.com",
            pass: "Freeznuwa123!"
        }
    });

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'From facebook <facebook.com.xr@gmail.com>',

    // Comma separated list of recipients
    to: '"Tharindu Maduranga" <batmaduranga@gmail.com>, "Nuwan T. Attygalle" <nuwan.t.attygalle@gmail.com>',

    // Subject of the message
    subject: 'Hello from facebook ✔', //

    headers: {
        'X-Laziness-level': 1000
    },

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

    // if you don't want to use this transport object anymore, uncomment following line
    //transport.close(); // close the connection pool
});



// // var nodemailer = require('../lib/nodemailer');
// // const transporter = nodemailer.createTransport({
// //     port: 2525, // Postfix uses port 25
// //     host: 'localhost',
// //     tls: {
// //       rejectUnauthorized: false
// //     },
// //             auth: {
// //             user: "testuser",
// //             pass: "testpass"
// //         }
// //   });
  
// //   var message = {
// //     from: 'noreply@domain.com',
// //     to: 'nuwan.t.attygalle@gmail.com',
// //     subject: 'Confirm Email',
// //     text: 'Please confirm your email',
// //     html: '<p>Please confirm your email</p>'
// //   };
  
// //   transporter.sendMail(message, (error, info) => {
// //     if (error) {
// //         return console.log(error);
// //     }
// //     console.log('Message sent: %s', info.messageId);
// //   });
// var nodemailer = require('../lib/nodemailer');
// // const nodemailer = require('nodemailer');

// // Create a SMTP transport object
// var transport = nodemailer.createTransport("SMTP", {
//         //service: 'Gmail', // use well known service.
//                             // If you are using @gmail.com address, then you don't
//                             // even have to define the service name
//         port: 2525, 
//         host: '127.0.0.1',
//         tls: {
//             rejectUnauthorized: false
//           },
//         // auth: {
//         //     user: "testuser",
//         //     pass: "testpass"
//         // }
//     });

// console.log('SMTP Configured');

// // Message object
// var message = {

//     // sender info
//     from: 'Hello famnit <batmaduranga@gmail.com>',

//     // Comma separated list of recipients
//     to: '"Nuwan T. Attygalle" <nuwan.t.attygalle@gmail.com>',

//     // Subject of the message
//     subject: 'Did you send this?? ✔', //

//     headers: {
//         'X-Laziness-level': 1000
//     },

//     // plaintext body
//     text: 'Hello to myself!',

//     // HTML body
//     html:'<p><b>Hello</b> You were just hacked <img src="cid:note@node"/></p>'+
//          '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>',

//     // An array of attachments
//     // attachments:[

//     //     // String attachment
//     //     {
//     //         fileName: 'notes.txt',
//     //         contents: 'Some notes about this e-mail',
//     //         contentType: 'text/plain' // optional, would be detected from the filename
//     //     },

//     //     // Binary Buffer attachment
//     //     // {
//     //     //     fileName: 'image.png',
//     //     //     contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
//     //     //                          '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
//     //     //                          'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

//     //     //     cid: 'note@node' // should be as unique as possible
//     //     // },

//     //     // File Stream attachment
//     //     // {
//     //     //     fileName: 'nyan cat ✔.gif',
//     //     //     filePath: __dirname+"/nyan.gif",
//     //     //     cid: 'nyan@node' // should be as unique as possible
//     //     // }
//     // ]
// };

// console.log('Sending Mail');
// transport.sendMail(message, function(error){
//     if(error){
//         console.log('Error occured');
//         console.log(error.message);
//         return;
//     }
//     console.log('Message sent successfully!');

//     // if you don't want to use this transport object anymore, uncomment following line
//     //transport.close(); // close the connection pool
// });