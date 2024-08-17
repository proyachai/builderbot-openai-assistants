import path from "path"
import fs from "fs"

export const loadToolFunctions = (): any[] => {
    const toolsPath = path.resolve(__dirname, "../tools")
    const toolFiles = fs.readdirSync(toolsPath)

    return toolFiles.map(file => {
        const tool = require(path.resolve(toolsPath, file))
        return tool
    })
}
