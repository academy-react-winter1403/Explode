import toast from "react-hot-toast";
export const CopyLink = async (linkToCopy, setCopying) => {

    try {
        setCopying(true)
        await navigator.clipboard.writeText(linkToCopy);
        toast.success('لینک کپی شد!');
        setCopying(false)
    } catch (error) {
        toast.error('خطا در کپی کردن لینک');
        setCopying(false)
    }
};