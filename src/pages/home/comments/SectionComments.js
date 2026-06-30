import comments from "./comments-data/comments.json";
export const prepareItems = ()=>{
  const items = [];

    let subListItem = [];
  
    for (let index = 0; index < comments.length; index++) {
      subListItem.push(comments[index]);
      
      if(subListItem.length == 4) {
        items.push( subListItem.map(item=>item) );
        subListItem = [];
      }; 

      //si es el ultimo pushear lo que acumulo
      if(!comments[index +1]) {
        items.push(subListItem.map(item=>item));
      }
     
    }
   const result = {
    totalComments : comments.length,
    result : items.filter((i)=>i.length > 0)
   };

   return result;
}