//رشته رو می کیره اولین حرفش رو بزرگ می کنه
//  مناسب برای درج اسم اساتید که باید حرف اولش بزرگ باشه
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//بررسی خالی بودن یه رشته
export function isEmpty(str) {
  return !str || str.trim().length === 0;
}
