import BookletOption from "../models/bookletOption.model.js"


export const getAllOptionsSrv = async () => {
    return await BookletOption.find()
}
