import multer from "multer"

const storage  = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename : (req,file,cb)=>{
    const newFileName = Date.now()+'-'+file.originalname
    cb(null,newFileName)
  }
})

export const upload = multer({storage});