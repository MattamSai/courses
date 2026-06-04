export const getMediaType = (mimetype) =>{
    if (mimetype.startsWith("image/")) return "image";
    if (mimetype.startsWith("video/")) return "video";
    if (mimetype === "application/pdf") return "pdf";
    return "file";
}