/*
Berilgan ikkita JSON obyektida bir xil kalit-qiymat juftliklarini topadigan funksiyani yozing. 
Natijada umumiy qiymatlar bilan kalit-qiymat juftliklari yangi obyekt shaklida qaytarilsin.
 Ikkala obyektning tuzilmalari turli darajada murakkab va ichma-ich bo'lishi mumkin.
 const jsonData1 = {
    user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
};

const jsonData2 = {
  user: {
  name: "Ali",
  age: 30,
      address: {
        city: "Tashkent",
        zip: "200000"
      }
    },
  active: true
};

console.log(findCommonPairs(jsonData1, jsonData2));
```js
Chiqish:
{
  user: {
    name: "Ali"
  },
  active: true
}
*/
function findCommonPairs(jsonData1, jsonData2){
   let result = new Object()
   for (let key of jsonData1){
    if(typeof key === Object){
      for(let item of key){
        if(typeof item === Object){
        }
      }
    }
   }
  }
 const jsonData1 = {
    user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
};

const jsonData2 = {
  user: {
  name: "Ali",
  age: 30,
      address: {
        city: "Tashkent",
        zip: "200000"
      }
    },
  active: true
};

console.log(findCommonPairs(jsonData1, jsonData2));
