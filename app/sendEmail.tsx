import nodemailer from "nodemailer";
// import 'setimmediate';

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    // user: "gowthamraajmg@gmail.com",
    // pass: "zkpa jbuc rnth tljk",
    user: "primeautopartspro@gmail.com",
    pass: "eavp ubky vixo amcg",
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
    subject: "Prime Auto Parts Pro - " + year + " - " + make + " - " + part + "- " + zip_code,
    html: htmlBody,
  };

  const newMailData = {

    // from: "UsedAutoLeads <primeautopartspro@gmail.com>",

    to: "primeautopartspro@gmail.com",
    replyTo: email,
    subject: "Prime Auto Parts Pro - " + year + " - " + make + " - " + part + "- " + zip_code,
    html: newhtmlBody,
  };

const saveinsheets = () => {

}

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error: any, info: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response); // Properly resolve the promise on success
     
        fetch("https://script.google.com/macros/s/AKfycbzOyYBA2KsCScST0srErz8RMJyi3FK0H8q1qeqRJd5yfTyKv6jC1VY-Y19Ye100wKf2Lw/exec", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            year: year,
            engine_size: engine_size,
            make: make,
            model: model,
            transmission: transmission,
            part: part,
            name: name,
            email: email, 
            phone: phone,
            zip_code: zip_code,
            Source: Source,
            SourceCampaign: SourceCampaign,
            SourceMedium: SourceMedium,
            SearchBy: SearchBy,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Google Sheets request failed");
            }
            return res.json();
          })
          .then((sheetRes) => {
            console.log("Data saved to Google Sheet:", sheetRes);
            resolve(info.response); // Final resolve after both email and sheet
          })
          .catch((sheetError) => {
            console.error("Google Sheets Error:", sheetError);
            reject(sheetError); // Reject if Google Sheet fails
          });
     
      }
    });
  });
}
