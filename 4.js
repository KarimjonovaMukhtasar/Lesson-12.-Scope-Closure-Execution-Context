/*
Bonus
Foydalanuvchi o'z ish kunining boshlanish va tugash vaqtini kiritadi. 
Siz bu ma'lumotlardan foydalangan holda u qancha vaqt ishlaganini (soat va daqiqalar ko'rinishida) hisoblaydigan funksiyani yozing. 
Agar ishning tugash vaqti boshlanish vaqtidan oldin bo'lsa, 
"Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas" matnini qaytaring. 
Kirish ma'lumotlari: Boshlanish va tugash vaqtlari formati: HH:MM Misol: console.log(calculateWorkingHours("09:00", "17:30")); 
// "Ish vaqti: 8 soat 30 daqiqa" console.log(calculateWorkingHours("10:00", "09:00")); 
// // "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"
*/
//
function calculateWorkingHours(startTime,endTime){
    let StartMinutes = startTime.split(":")[1]
    let StartHours = startTime.split(":")[0]
    let EndMinutes = endTime.split(":")[1]
    let EndHours = endTime.split(":")[0]
    let StartTotalMinutes = Number(StartMinutes) + Number(StartHours) * 60
    let EndTotalMinutes =  Number(EndMinutes) + Number(EndHours) * 60
    if(EndTotalMinutes < StartTotalMinutes){
        console.log("Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas")
    }
    else{
        let result = EndTotalMinutes - StartTotalMinutes
        let hour = Math.floor(result/60)
        let minute = result % 60
        console.log(`Ish vaqti: ${hour} soat ${minute} daqiqa`)
    }
    return "Function is working properly."
}
console.log(calculateWorkingHours("09:00", "17:30"))
console.log(calculateWorkingHours("10:00", "09:00"))