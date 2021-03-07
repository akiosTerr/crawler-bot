const Cl4pScr4p = require('../bot/cl4pscr4p')
const constants = require('../constants/constants')
const utils = require('../utils/utils')


const fetch = async (req, res) => {
    const cs = new Cl4pScr4p()

    const { checkin, checkout } = req.body

    const url = utils.create_url(checkin, checkout)
    const response = await cs.launchBot(url, constants.headless)

    const status = response._status

    if (status !== 200) {
        res.json({ 'http-error-status': status })
    }

    await cs.wait(2000)

    const elements = await cs.collectByClass(constants.trRoomClass)

    const titles = await cs.getValuesFromElements(elements, constants.titleSelector)
    const descriptions = await cs.getValuesFromElements(elements, constants.descriptionSelector)
    const prices = await cs.getValuesFromElements(elements, constants.priceSelector)
    const images = await cs.getAttFromElements(elements, constants.imageSelector)


    let rooms = []
    for (let i = 0; i < elements.length; i++) {
        const adRoom = {
            title: titles[i],
            description: descriptions[i],
            price: prices[i],
            image: constants.baseUrl + images[i]
        }
        rooms.push(adRoom)
    }

    cs.closeBrowser()
    console.log('finished!')

    return res.json(rooms)
}

module.exports = {
    fetch
}