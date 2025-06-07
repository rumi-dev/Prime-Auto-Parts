import nodemailer from "nodemailer";
// import 'setimmediate';

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: "gowthamraajmg@gmail.com",
    pass: "zkpa jbuc rnth tljk",
  },
});

export function sendEmail(
  year: string,
  engine_size: string,
  make: string,
  model: string,
  transmission: string,
  part: string,
  name: string,
  email: string,
  phone: string,
  zip_code: string,
  Source: string,
  SourceCampaign: string,
  SourceMedium: string,
  SearchBy: string
) {
  // console.log("Hello", year, engine_size, make, model, transmission, part, name, email, phone, zip_code);

  const htmlBody =
    "<table width='100%' border='0' cellspacing='3' cellpadding='3' bgcolor='#F9F9F9'><tbody><tr><td colspan='4' align='center' bgcolor='#CCCCCC'><strong>You Have Received Enquiry. Following are the details</strong></td></tr>" +
    "<tr><td> Name: </td><td>" +
    name +
    "</td> </tr>" +
    "<tr><td> Email: </td><td><a href='mailto:" +
    email +
    "' rel='noreferrer' target='_blank'>" +
    email +
    "</a></td></tr>" +
    "<tr><td> Phone Number: </td><td>" +
    phone +
    "</td> </tr>" +
    "<tr> <td> Zip code: </td><td>" +
    zip_code +
    "</td></tr>" +
    "<tr><td> Make name: </td><td>" +
    make +
    "</td></tr>" +
    "<tr><td> Model name: </td><td>" +
    model +
    "</td></tr>" +
    "<tr><td> Make year: </td><td>" +
    year +
    "</td></tr>" +
    "<tr><td>Engine part: </td><td>" +
    part +
    "</td> </tr>" +
    "<tr><td> Engine size: </td><td>" +
    engine_size +
    "</td></tr>" +
    "<tr><td> Transmission select: </td><td>" +
    transmission +
    "</td></tr>" +
    "</tbody></table>";

  const newhtmlBody =
    "<table width='100%' border='0' cellspacing='3' cellpadding='3' bgcolor='#F9F9F9'><tbody><tr><td colspan='4' align='center' bgcolor='#CCCCCC'><strong>You Have Received Enquiry. Following are the details</strong></td></tr>" +
    "<tr><td> Name: </td><td>" +
    name +
    "</td> </tr>" +
    "<tr><td> Email: </td><td><a href='mailto:" +
    email +
    "' rel='noreferrer' target='_blank'>" +
    email +
    "</a></td></tr>" +
    "<tr><td> Phone Number: </td><td>" +
    phone +
    "</td> </tr>" +
    "<tr> <td> Zip code: </td><td>" +
    zip_code +
    "</td></tr>" +
    "<tr><td> Make name: </td><td>" +
    make +
    "</td></tr>" +
    "<tr><td> Model name: </td><td>" +
    model +
    "</td></tr>" +
    "<tr><td> Make year: </td><td>" +
    year +
    "</td></tr>" +
    "<tr><td>Engine part: </td><td>" +
    part +
    "</td> </tr>" +
    "<tr><td> Engine size: </td><td>" +
    engine_size +
    "</td></tr>" +
    "<tr><td> Transmission select: </td><td>" +
    transmission +
    "</td></tr>" +
    "<tr><td> Source: </td><td>" +
    (Source == "" ? "Organic" : Source) +
    "</td></tr>" +
    "<tr><td> Source Campaign: </td><td>" +
    SourceCampaign +
    "</td></tr>" +
    "<tr><td> Source Medium: </td><td>" +
    SourceMedium +
    "</td></tr>" +
    "<tr><td> Search By: </td><td>" +
    SearchBy +
    "</td></tr>" +
    "</tbody></table>";

  const mailData = {

    // from: "UsedAutoLeads <primeautopartspro@gmail.com>",

    to: "primeautopartspro@gmail.com",
    replyTo: email,
    subject: "UAP - " + year + " - " + make + " - " + part + "- " + zip_code,
    html: htmlBody,
  };

  const newMailData = {

    // from: "UsedAutoLeads <primeautopartspro@gmail.com>",

    to: "primeautopartspro@gmail.com",
    replyTo: email,
    subject: "UAP - " + year + " - " + make + " - " + part + "- " + zip_code,
    html: newhtmlBody,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error: any, info: any) => {
      if (error) {
        reject(error);
      } else {
        // console.log('First email sent successfully:', info.response);
        // Call second sendMail with different data
        // transporter.sendMail(newMailData, (error2, info2) => {
        //   if (error2) {
        //     reject(error2);
        //   } else {
        //     // console.log('Second email sent successfully:', info2.response);
        //     resolve(info2.response);
        //   }
        // });
      }
    });
  });
}
