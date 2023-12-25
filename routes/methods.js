const nanoid = require('nanoid');
const Shortnermodel = require('../models/shortnermodel')

const testApi = (req,res)=>{
try {
    return res.status(200).json({ message: "API Working Correctly !!",status:200 });
} catch (error) {
    return res.status(500).json({ message: error,status:500 });
}
   
}

const storeUrl =  async (req, res) => {
    const idGenerated = nanoid(5);
    const link = req.body.link;

    if (!link || link === "") {
        return res.status(400).json({ error: "Link is required" });
    } else {
        try {
            const existingLink = await Shortnermodel.findOne({ link: link });

            if (existingLink) {
                return res.status(200).json({ message: "Link already exists", shortedLink: `https://shorter-backend.vercel.app/${existingLink.shortedLink}`,status:200 });
            } else {
                await Shortnermodel.create({ link: link, shortedLink: idGenerated});
                return res.status(201).json({ message: "Link created successfully", shortedLink: `https://shorter-backend.vercel.app/${idGenerated}`,status:201  });
            }
        } catch (err) {
            return res.status(500).json({ message: "Unexpected Error Occured !!",status:500  });
        }
    }
}

const redirectUrl = async (req,res)=>{

    const id = req.params.id;
    // console.log(id);
    try {
        const existingLink = await Shortnermodel.findOne({  shortedLink: id});
        if(existingLink){
            return res.redirect(existingLink.link);
        }else{
            return res.status(404).json({ message: "Link not found",status:404  });
        }

    } catch (error) {
        
    }
}

module.exports = { storeUrl,testApi,redirectUrl };