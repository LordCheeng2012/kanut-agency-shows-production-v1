
const data = [   
{
"title": "(Evento - boda) Maria /",
"subtitle":""
},
{
"title": " (eventos - bodas)",
"subtitle":" / Nombre del cliente o alguna título."
},
{
"title": " (eventos - party) ",
"subtitle":"/ Nombre del cliente o alguna título."
},
{
"title": " (eventos - party)",
"subtitle":"/ Nombre del cliente o alguna título."
},
{
"title": " (eventos - Shows) ",
"subtitle":"/ Nombre del cliente o alguna título"
},
{
"title": " (eventos - Shows)",
"subtitle":" / Nombre del cliente o alguna título"
}
]
export const ListPortfolioItems =  () => {
  if(!data) console.log("Error data not processed : " , data)
  return data ? data : [];
}
