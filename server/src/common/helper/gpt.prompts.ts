/// Assistant role content
export const assistant_role = `
You are an email writer. Your task is to analyze the context of email in-depth step by step and write email only from the given merge fields.
Here is the list of merge fields you need to use while writing emails when and where necessary.

Contact
    • Email - {{ contact_email }}
    • First Name - {{ contact_firstname }}
    • Last Name - {{ contact_lastname }}
    • Phone Number - {{ contact_phonenumber }}
    • Mailing Address Line 1 - {{ contact_mailingaddressline1 }}
    • Owner First Name - {{ contact_owner_firstname }}

Team
    • Team Logo - {{ team_logo }}
    • Team Name - {{ team_name }}

User
    • User Email - {{ user_email }}
    • User First Name - {{ user_firstname }}
    • User Job Title - {{ user_jobtitle }}
    • User Last Name - {{ user_lastname }}
    • User Phone Number - {{ user_phonenumber }}

User Business Info
    • User Application Link - {{ user_application_display_name }}
    • User Calendar Link - {{ user_calendar_display_name }}
    • User Company Name - {{ user_company_name }}
    • User NMLS - {{ user_nmls }}
    • User Reviews Link - {{ user_reviews_display_name }}
    • User Team Name - {{ user_team_name }}
    • User Website Link - {{ user_website_display_name }}

`;

export const template1_prompt = (
  context: string,
  sendingPersona: string,
  receivingPersona: string,
  purpose: string,
  modifier: string,
) => `
Compose an email from a "Sending Persona" to a "Receiving Persona" for "Primary Purpose", with a "Modifier" tone wrt context in 1 subject, 3 body parts, and 3 image names wrt the body based on context and primary purpose.  The email content should be structured as a JavaScript object that can be parsed by the JSON.parse method. Strictly avoid adding any words or content except for the JavaScript object mentioned below.
Strictly don't use any merge fields other than the ones which are provided and don't create your own too.

The button should not have any text other than User Website Link merge field and the header should have Team Logo merge field.

"sending persona" : ${sendingPersona}
"receiving persona" : ${receivingPersona}
"primary purpose" : ${purpose}
"modifier" : ${modifier}
"context": ${context}


      Desired Output:
      {
       "header":""
        "subject": "",
        "greetings": "",
        "body1": "",
        "image1": "",
        "body2": "",
        "image2": "",
        "body3": "",
        "image3": "",
        "regards":""
       "button":""
      }

Analyze the mail context step by step and write only the javascript object and mainly look into the images part and make sure that images are not empty string.
`;

export const template2_prompt = (
  context: string,
  sendingPersona: string,
  receivingPersona: string,
  purpose: string,
  modifier: string,
) => `

Compose an email from a "Sending Persona" to a "Receiving Persona" for "Primary Purpose", with a "Modifier" tone wrt context in 1 subject, 4 body parts, and 3 image names wrt the body based on context and primary purpose.  The email content should be structured as a JavaScript object that can be parsed by the JSON.parse method. Strictly avoid adding any words or content except for the JavaScript object mentioned below.
Strictly don't use any merge fields other than the ones which are provided and don't create your own too.

The button should not have any text other than User Website Link merge field and the header should have Team Logo merge field.

"sending persona" : ${sendingPersona}
"receiving persona" : ${receivingPersona}
"primary purpose" : ${purpose}
"modifier" : ${modifier}
"context": ${context}


      Desired Output:
      {
       "header":""
        "subject": "",
        "greetings": "",
        "body1": "",
        "image1": "",
        "body2": "",
        "image2": "",
        "body3": "",
        "image3": "",
        "body4": "",
        "regards":""
       "button":""
      }

Analyze the mail context step by step and write only the javascript object and mainly look into the images part and make sure that images are not empty string.
`;

export const template3_prompt = (
  context: string,
  sendingPersona: string,
  receivingPersona: string,
  purpose: string,
  modifier: string,
) => `
Compose an email from a "Sending Persona" to a "Receiving Persona" for "Primary Purpose", with a "Modifier" tone wrt context in 1 subject, 3 body parts, and 1 image names wrt the body based on context and primary purpose.  The email content should be structured as a JavaScript object that can be parsed by the JSON.parse method. Strictly avoid adding any words or content except for the JavaScript object mentioned below.
Strictly don't use any merge fields other than the ones which are provided and don't create your own too.

The button should not have any text other than User Website Link merge field and the header should have Team Logo merge field.

"sending persona" : ${sendingPersona}
"receiving persona" : ${receivingPersona}
"primary purpose" : ${purpose}
"modifier" : ${modifier}
"context": ${context}


      Desired Output:
      {
       "header":""
       "subject": "",
        "greetings": "",
        "body1": "",
        "body2": "",
        "body3": "",
        "image1": "",
        "regards":""
       "button":""
      }

Analyze the mail context step by step and write only the javascript object and mainly look into the images part and make sure that images are not empty string.
`;

export const template4_prompt = (
  context: string,
  sendingPersona: string,
  receivingPersona: string,
  purpose: string,
  modifier: string,
) => `
Compose an email from a "Sending Persona" to a "Receiving Persona" for "Primary Purpose", with a "Modifier" tone wrt context in 1 subject, 6 body parts, and 4 image names wrt the body based on context and primary purpose.  The email content should be structured as a JavaScript object that can be parsed by the JSON.parse method. Strictly avoid adding any words or content except for the JavaScript object mentioned below.
Strictly don't use any merge fields other than the ones which are provided and don't create your own too.

The button should not have any text other than User Website Link merge field and the header should have Team Logo merge field.

"sending persona" : ${sendingPersona}
"receiving persona" : ${receivingPersona}
"primary purpose" : ${purpose}
"modifier" : ${modifier}
"context": ${context}


      Desired Output:
      {
       "header":""
        "subject": "",
        "greetings": "",
        "body1": "",
        "image1": "",
        "body2": "",
        "body3": "",
        "image2": "",
        "body4": "",
        "image3": "",
        "body5": "",
        "image4": "",
        "body6": "",
        "regards":""
       "button":""
      }

Analyze the mail context step by step and write only the javascript object and mainly look into the images part and make sure that images are not empty string.
`;

export const template5_prompt = (
  context: string,
  sendingPersona: string,
  receivingPersona: string,
  purpose: string,
  modifier: string,
) => `
Compose an email from a "Sending Persona" to a "Receiving Persona" for "Primary Purpose", with a "Modifier" tone wrt context in 1 subject, 3 body parts, and 3 image names wrt the body based on context and primary purpose.  The email content should be structured as a JavaScript object that can be parsed by the JSON.parse method. Strictly avoid adding any words or content except for the JavaScript object mentioned below.
Strictly don't use any merge fields other than the ones which are provided and don't create your own too.

The button should not have any text other than User Website Link merge field and the header should have Team Logo merge field.

"sending persona" : ${sendingPersona}
"receiving persona" : ${receivingPersona}
"primary purpose" : ${purpose}
"modifier" : ${modifier}
"context": ${context}


      Desired Output:
      {
       "header":""
        "subject": "",
        "greetings": "",
        "image1": "",
        "body1": "",
        "image2": "",
        "body2": "",
        "image3": "",
        "body3": "",
        "regards":""
       "button":""
      }

Analyze the mail context step by step and write only the javascript object and mainly look into the images part and make sure that images are not empty string. 
`;
