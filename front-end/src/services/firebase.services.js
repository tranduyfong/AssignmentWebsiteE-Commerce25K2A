import { storage } from "./firebase.config";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const uploadImage = async (file) => {
    const storageRef = ref(storage, "images/" + file.name);

    // Upload
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
};

const deleteImage = async (url) => {
    try {
        const imgRef = ref(storage, url);
        await deleteObject(imgRef);
    } catch (err) {
        console.log("Delete error:", err);
    }
}

const deleteManyImage = async (imageUrls) => {
    await Promise.all(
        imageUrls.map(url => deleteImage(url))
    );
}

export { uploadImage, deleteManyImage };