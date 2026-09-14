export default function PriceParse(price:number){
    if(!price || !(typeof price === "number"))return console.log("price invalid");
    return (price / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

}


