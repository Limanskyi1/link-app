import fireBaseService from "../services/fireBaseService";

export const saveUserData = async (
  id,
  data,
  imagePreviewFile,
  setIsVisibleMessage
) => {
  try {
    await fireBaseService.updateUserData(id, {
      ...data,
    });
    if (imagePreviewFile) {
      await fireBaseService.uploadAndUpdateUserAvatar(id, imagePreviewFile);
    }
    setIsVisibleMessage(true);
  } catch (error) {
    setIsVisibleMessage(false);
    console.error(error);
  }
};
