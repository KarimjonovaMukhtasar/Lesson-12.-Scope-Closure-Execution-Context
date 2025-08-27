/*
id, name va price xususiyatlariga ega Product deb nomlangan class yozing. 
Har safar yangi product kiritilganda qiymati bittaga oshib boruvchi static productCount xususiyatini qo'shing. 
Mahsulotlarning umumiy narxini hisoblab beruvchi totalPrice metodini yarating. 
Product classidan CareProduct deb nomlangan voris class yarating va unga kafolat muddati uchun warrantyPeriod xususiyatini qo'shing.
Voris class uchun kafolat muddatini hisobga oluvchi totalPrice metodini qayta yozing. 
Bunda agar kafolat muddatiga 5 kun qolgan bo'lsa 10%, 4 kun qolgan bo'lsa 20%, 
3 kun qolgan bo'lsa 30%, 2 kun qolgan bo'lsa 40% va 1 kun qolgan bo'lsa 50% narxda hisoblashni amalga oshiring.
*/
class Product {
    static productCount = 0
    constructor (id,name,price){
        this.id = id
        this.name = name
        this.price = price
        Product.productCount++
    }
    totalPrice(count){
        return this.price * count
    }
}
class CareProduct extends Product{
    constructor(id,name,price,warrantyPeriod){
        super(id,name,price)
        this.warrantyPeriod = warrantyPeriod
    }
    totalPrice(count,price){
        let res = 1
        if(this.warrantyPeriod === 5){
           res = this.price * count * (1-0.1)
        }
        else if(this.warrantyPeriod === 4){
            res = this.price * count * (1 - 0.2)
        }
        else if(this.warrantyPeriod === 3){
            res = this.price * count * (1 - 0.3)
        }
        else if(this.warrantyPeriod === 2){
           res = this.price * count * (1 - 0.4)
        }
        else if(this.warrantyPeriod === 1){
           res = this.price * count * (1 - 0.5)
        }
        else{
           res = this.price * count
        }
        return res
    }
}
let fridge = new CareProduct(1, "ULTRA FROZEN", 5_000_000, 5);
console.log("Mahsulotlar soni:", Product.productCount);
console.log("Umumiy narx:", fridge.totalPrice(2));