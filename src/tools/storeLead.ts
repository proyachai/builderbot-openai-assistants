import axios from "axios"

interface Lead {
    name: string
    email: string
    phone: string
}

export const storedLead = async (lead: Lead) => {
    const airtableApiKey = process.env.AIRTABLE_API_KEY
    const airtableBaseId = process.env.AIRTABLE_BASE_ID

    if (!airtableApiKey || !airtableBaseId) {
        throw new Error("Faltan credenciales de Airtable")
    }

    const response = await axios.post(
        `https://api.airtable.com/v0/${airtableBaseId}/Leads`,
        {
            fields: lead,
        },
        {
            headers: {
                Authorization: `Bearer ${airtableApiKey}`,
                "Content-Type": "application/json",
            }
        }
    )

    if (response.status !== 200) {
        throw new Error("Error al almacenar el lead en Airtable.")
    }
}
