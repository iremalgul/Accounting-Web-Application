// Farsi
if(jQuery.fn.pickadate) {
    jQuery.extend(jQuery.fn.pickadate.defaults, {
        monthsFull: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthsShort: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        weekdaysFull: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
        weekdaysShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        today: 'امروز',
        clear: 'پاک کردن',
        close: 'بستن',
        format: 'yyyy mmmm dd',
        formatSubmit: 'yyyy/mm/dd',
        labelMonthNext: 'ماه بعدی',
        labelMonthPrev: 'ماه قبلی'
    });
}
if(jQuery.fn.pickatime) {
    jQuery.extend(jQuery.fn.pickatime.defaults, {
        clear: 'پاک کردن'
    });
}
