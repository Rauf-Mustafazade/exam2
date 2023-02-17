
// 16) ES6 ve ondan sonrakilar nədir?
// javascript bugun ki gunde en cox iwlenen ve tez tez yenilenen prograwdirma dilidir .javascript 1995 ilde 10 gune yazilib ona gore bugune geder bir 
// cox yenilik əlave olunur .en cox yenilik 2006 olunub ona gorede ES6 adlanir ve ondan sonra ES7 yaradilib ama cox da popular deyil
// 17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)
// clousere funksiyasi bir adi funksiyani bir bawqa cur yazmaq ucundur
// meselen onu: let var const ile mumkundur

// 18)Hoisting dedikdə nə başa düşürsüz?
// hoisting javascripde bir mexanizimdir hansiki peremennilar ve refresh edende yazdigimiz kodu awagdan yuxari oxuyur Hoisting   dedikte  yazdigimiz kodu  awagidan yuxariya . yazilan kodu javascripte özu
  // terefe dəyişir.
// 19)HOF nəyə deyilir? -higher order functions javaScript-də yüksək səviyəli funksiyalar
// istənilən dildə funksional proqramlaşdırmanın blokudur. Daha yüksək seviyəli funksiya en azi birini
//  yerinə yetirir: arqument kimi funksiya qəbul edir; yeni funksiya qaytarır
// 20)Callback nədir?
// callback funksiyasi - o funksiyasidi,  o biri funksiyaya  bir arqument kimi verilen sonra ise
//  o funksiyani verir hansisa qutaranda hissesi
// 21)Data types neçə dənədir və hansılardır?
// data types 3 dene di:primitiv,noneprimitiv,reverens
// primitiv :
// 1. String
// 2.boolen
// 3.underfined
// 4.symbol
// 5. null
// 6.number
// reverens:
//  1object
//  reverens bunlarda iwlenir:
//  arrey
//  object
//  date
// 22)Let ve const fərqi nələrdir?
// const in let den esas ferqi odurki const consttant sozunnen sabit deyiwmek olmur deyiwmege caliwsak error verercek ama let ile mumkundur
// let a = 23
// a=15
// console.log(a)

// const b = 19
// b=7
// console.log(b)
// 23)Recursion funksiya nədir və if else olmadan yazmaq mümkündür?
// recursiya - funksiya oz ozunu caxirir ve if iwlwetmeden yazmaq mumkun deyl cunki 
// recursiyani bir son gostermek lazimdi sonsuz dovre girmesin
// 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin

// metod setTimeout() isdedilirki misalcun hansisa functiyani gosteriler vahtan soram ccagirsin neecese milliseconds
// 1 saniye = 1000 milliseconds
// setTimeout() metodu O(1) yani bidefe islenir yox eger biz onu bir necedefe isletmet Istesey 
// setTimeout() bu metodun yerine setInterval() bunu isledin eni isi gorur sadece bu mir necedefe tekralanir
// setTimeout(function, milliseconds, param1, param2, ...) bele yazilir function yerine bildiyimizkimi
// bir function vericey milliseconds yerine nece milliseconds islemeye baslasin param1 hiseyese uzunlugu
// eni ve sayr kimi parametrer vere bilerik
// misal:
// function openWin() {
//     const myWindow = window.open("", "", "width=200, height=100");
//     setTimeout(function() {myWindow.close()}, 3000);
//   }
//   openWin()functiya yarattig myWindow adti parametr yarattig argumentler verdik ve setTimeout()
//   la biz birinci functiyani cagirdig ve dediki bu functiya 3000 milisecun islesin


// 25)Hansı method arrayı string’e çevirir?
// lenght  
// join 
// split

 
// 1)Prompdan daxil olan ədədin faktorialini tapin
// n = +prompt(' elmenti daxil et')
// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     else{   
//     return (n*factorial(n-1))
//     }
// }
// console.log(factorial(n))


// 2)Arrayin içərisindəkiləri kiçikdən böyüyə göstərin
// const array = [ 2,3,33,43,21,12,6,66]
// function siralama(arr){
//   let swap
//   let n
//   do{swap=false
//     for(let i = 0; i < arr.length; i++){
//   if(arr[i]>arr[i+1]){
//   n=arr[i]
//   arr[i]=arr[i+1]
//   arr[i+1]=n
//   swap=true
//   }
//   }
//   }while(swap)
//    return arr
//   }
// console.log(siralama(array))
// 4)Stringdə olan saitleri ve onlarin sayini tapin
// function display (str){
//     let count = 0
//     a = ['a','u','i','o','e']
//     for(let n of str.toLowerCase()){
//     if(a.includes(n)){
//     count +=1
//     console.log(n)
//     }
//     }
    
//     console.log('sayitlerin sayi',count)
//     }
//     display('Azerbaijan ,qarabah,gence,baki')
// 5)Promptdan n sayda ədəd daxil olacaq daxil olunan ədədlər arasinda ən böyüyü tapin

// var Array = [];
// let i = 0
// function maxEded(array){
//   let n = prompt('massive geder nrce eded olsun ?')
// while (i < n ){
//   let x = prompt('eded');
//   array.push(x)
//   i++
// }
// console.log(array)
// var y = Math.max(...array);
// console.log('Masivde en boyuk eded: ',y)
// }
// maxEded(Array)
// 8)Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin

// let n = prompt('n qiymetin dahil edin :')
// let j = 0
// var arr = []
//   let i = 0
// let count = 0
// while(j < n){
//   let input = prompt('masive eded dahil edin')
//   arr.push(input)
//   j++
// }
// while(i < arr.length){
//   let reminde = arr[i]%10  
//   if(+reminde == 9 ){
//     count +=1
//     i++

//   }
//   else{
//     i++
//   }
// }
// console.log(arr)
// console.log('Sonu 9-la biten elementlerin sayi',count)
// if(count >=1){
//   console.log('arayda 9 la biten eded var',true)
// }else{
//   console.log('arayda 9 la biten eded var',false)
// }
// 9)Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin

// var arr = []
// let say1 = 0;
// let j =0
// function cut(array){
//   let n = prompt('Masiv nece ededten ibaret olunsun :')
//   while(j < n){
//   let input = prompt('eded dahil edin')
//   array.push(input)
//   j++
// }

// for(let i = 0; i <= array.length -1; i++){
//  let reminde = array[i] % 2
//   if (reminde == 0){
//     say1 +=1
//   }
// }
//   console.log(array)
//     console.log('masivdeki cut ededlerin sayi :',say1)
// if(say1>=1){
//   console.log('Cut elemet var :',true)
// }else{
// console.log('Cut elemet var :',false)
// }
// }

// cut(arr)
// 11)Daxil olunan  stiringin ilk hərfini böyüyə çevir

// let str = ''
// str = prompt('sozu daxil et')
// str = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(str)
// 12) Arrayda forla ədədləri 5 vahid artirmaq
// var arr = [77,66,55,44,33,22,88]
// for(let n of arr){

//   console.log(`${n} + 5  =>`,n + 5)
//   var c = n + 5
//   arr = arr.concat(c)
// }
// console.log('axrinci array',arr)
// 7)Verilən ədəddən sonraki ilk sade ədədi tapin
// let a = +prompt('ededi daxil et')
// let count = 0
// console.log('input :',a)
// while(count !== 2){
//     a = a +1

//     for(let i = 1;i<=a;i++){
//     let reminder = a %i    
//     if (reminder==0){
//         count+=1
//     }
// }
// if(count < 3){
//     console.log('inputan sonraki sade eded :',a)
// }else{
//  count = 0
// }
// }
// 15)
// n = +prompt('elementi daxil et ')
// function fibo(n){
//     if(n==1){
//         return 0
//     }
//     else if(n>0,n<3){
//         return 1
//     }
//     else{
//         return  (fibo(n-1) + fibo(n-2))
//     }   
// }
// console.log(fibo(n))
// 26) forEach ve map arasindaki ferq ? 
//  map yeni funksiya yaradir ve her funksiya gore cevirir onu
//  esas ferqi odur ki en birinci massiv deyiwmir
// 27) O(log n) nece teying olunur ? 
// ortancil elementi yoxluyub,eger o coxdu istediyimiz reqemden onda  ikinci hissesini massivi ataq orda uje yoxdu.
// eqer coxdusa istediyimiz reqemden onda tersine birinci(evvelini) hissesini  ataciyiq . ve belelikle iki hisseye bolmeye davam edeciyik
// ahirda log n elementi yoxlayacayiq

// 28) “Hello my friend. How are you ?” bu cumlede en cox istifade olunan her ve ya herifleri ekranda gosterin

// let word = 'Hello my friend. How are you ?'
// let letter = word.split('')
// let list = []

// letter.map(x=> {
//     if (!list.includes(x)){
//         list.push(x)
//     }
// })
// list.map(a => {
//     if(letters.filter(b=> a==b).length > 2){
//         console.log(a)
//     }
// })
29) Memoized Fibonacci. Yeni fibonacci ucun funksiya yardin. Sadece men eyni funcsiyani yeniden cagirarsa eyni 
parametrlerle onun ucun hesablama aparmamlidir. Cunki evvelce edib. Hint.
cache= {} 
!cache[target] or cache[target]