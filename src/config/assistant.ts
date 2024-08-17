import fs from "fs"
import path from "path"

const assistantFilePath = path.resolve(__dirname, "../../assistant.json")

export const getAssistanId = (): string | null => {
    if (fs.existsSync(assistantFilePath)) {
        const data = fs.readFileSync(assistantFilePath, "utf-8")
        const json = JSON.parse(data)
        return json.assistant_id || null
    }
    return null
}

export const saveAssistantId = (assistandId: string): void => {
    fs.writeFileSync(assistantFilePath, JSON.stringify({ assistant_id: assistandId }, null, 2))
}
