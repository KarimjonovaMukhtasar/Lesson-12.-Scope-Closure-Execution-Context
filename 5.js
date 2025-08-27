/*
2.Foydalanuvchi prompt orqali bank ish kuni kiritadi (masalan, 60). 
Siz foydalanuvchi kiritgan bank ish kunidan kelib chiqib yilning qaysi oy va 
qaysi sanasida aytilgan kun kelishini hisoblovchi funksiya yozing. 
Bank ish kunida shanba va yakshanba dam olish kuni sifatida hisoblanmaydi.
*/
function exactDate(day){
    day = Number(day)
    let result = new Date()
    let days = 0
    while(days < day){
        result.setDate(result.getDate() + 1)
        let weekday = result.getDay()
        if(weekday !== 0 && weekday !== 6){
            days++
        }
    }
    return result
}
console.log(exactDate(60))