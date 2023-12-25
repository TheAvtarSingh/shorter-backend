const nanoid = require('nanoid');
const Shortnermodel = require('../models/shortnermodel')

const storeUrl =  async (req, res) => {
    const idGenerated = nanoid(5);
    const link = req.body.link;

    if (!link || link === "") {
        return res.status(400).json({ error: "Link is required" });
    } else {
        try {
            const existingLink = await Shortnermodel.findOne({ link: link });

            if (existingLink) {
                return res.status(200).json({ message: "Link already exists", shortedLink: `${existingLink.shortedLink}`,status:200 });
            } else {
                await Shortnermodel.create({ link: link, shortedLink: idGenerated});
                return res.status(201).json({ message: "Link created successfully", shortedLink: idGenerated,status:201  });
            }
        } catch (err) {
            return res.status(500).json({ message: "Unexpected Error Occured !!",status:500  });
        }
    }
}

module.exports = { storeUrl };