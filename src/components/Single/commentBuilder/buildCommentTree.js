export const buildCommentTree = (comments) => {
    const map = {};
    const roots = [];

    // مرحله اول: ساخت مپ بر اساس آی دی
    comments.forEach(comment => {
        map[comment.id] = { ...comment, replies: [] };
    });

    // مرحله دوم: مرتب‌سازی درختی
    comments.forEach(comment => {
        const parentId = comment.parentId;

        const isRoot =
            !parentId || parentId === "00000000-0000-0000-0000-000000000000";

        if (isRoot) {
            roots.push(map[comment.id]);
        } else if (map[parentId]) {
            map[parentId].replies.push(map[comment.id]);
        } else {
            // اگه والد پیدا نشد، این کامنت رو هم به ریشه‌ها اضافه کن (برای جلوگیری از گم‌شدن)
            roots.push(map[comment.id]);
        }
    });

    return roots;
}
