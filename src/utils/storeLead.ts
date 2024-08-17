import axios from 'axios'
import dotenv from 'dotenv'
// import yup from 'yup'

dotenv.config()

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    throw new Error('Environment variables AIRTABLE_API_KEY or AIRTABLE_BASE_ID are missing.')
}

// const leadSchema = yup.object().shape({
//     name: yup.string().required('Name is required'),
//     phone: yup.string()
//         .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format. Please provide a valid phone number.')
//         .required('Phone is required'),
//     email: yup.string().email('Invalid email format').required('Email is required'),
//     property_preferences: yup.string().required('Property preferences are required'),
// })

// export const storeLead = async (lead: {
//     name: string,
//     phone: string,
//     email: string,
//     property_preferences: string,
// }): Promise<any> => {
//     try {
//         await leadSchema.validate(lead)

//         const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Leads`
//         const headers = {
//             'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
//             'Content-Type': 'application/json',
//         }

//         const data = {
//             records: [
//                 {
//                     fields: {
//                         Name: lead.name,
//                         Phone: lead.phone,
//                         Email: lead.email,
//                         'Property Preferences': lead.property_preferences,
//                     },
//                 },
//             ],
//         }

//         const response = await axios.post(url, data, { headers })
//         return response.data
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             return `Failed to store lead: ${error.message}`
//         } else if (error instanceof yup.ValidationError) {
//             return `Validation error: ${error.message}`
//         } else {
//             return `An error occurred: ${error.message}`
//         }
//     }
// }
