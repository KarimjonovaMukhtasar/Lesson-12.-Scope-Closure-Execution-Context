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
function extractAll(obj, prefix ="", seperator = "."){
  const res = {}
  for(const [key,value] of Object.entries(obj)){
    const fullkey = prefix ? `${prefix}${seperator}${key}` : key
    if(typeof value === "object" && value !== null && !Array.isArray(value)){
      Object.assign(res, extractAll(value,fullkey, seperator))
    }
    else{
      res[fullkey] = value
    }
  }
  return res
}

function findCommonPairs(jsonData1, jsonData2){
      let res = {}
      let data1 = extractAll(jsonData1)
      let data2 = extractAll(jsonData2)
      console.log(data1)
      console.log(data2)
      for(let [key,value] of Object.entries(data1)){
        if(data2.hasOwnProperty(key) && data2[key] === value){
          res[key] = value
        }
      }
      return res
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
