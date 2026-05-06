
export const ListComments = () => {
    const dataComments = [

    {
    title:"Shows-Infantiles",
    img:"client1.png",
    descripcion:"¡Increíble energía! Contratamos a Kanut para el cumple de mi hijo y lograron que todos los niños se diviertan de principio a fin. Se nota la pasión y el cariño que le ponen a cada dinámica; convirtieron la f iesta en un momento lleno de alegría y color.",
    autor:"Andrea C., San Borja.",
    color:"--segondary-pink"
    },
    {
    title:"Eventos - Party",
    img:"client2.png",
    descripcion:"¡La producción fue de primera. Kanut trajo una propuesta súper vibrante y moderna para nuestra f iesta social. La tecnología y la buena onda del equipo nos dieron Eventos - Boda Shows Infantiles muchísima confianza y seguridad; ¡fue una experiencia única!",
    autor:"Mateo S., La Molina.",
    color:"--segondary-sky-b"
    },
    {
    title:"Eventos - Boda",
    img:"client3.png",
    descripcion:"Buscábamos algo auténtico y elegante para nuestro matrimonio y Kanut superó nuestras expectativas. Su asesoría fue impecable y cercana, cuidaron cada detalle con un compromiso total, transformando nuestra boda en un recuerdo inolvidable para todos los invitados.",
    autor:"Ricardo y Lucía, Miraflores.",
    color:"--segondary-green-gray"
    },
    {
    title:"Shows Infantiles",
    img:"client4.png",
    descripcion:"Lo que más me gustó de Kanut fue la seguridad y profesionalismo que transmiten. Como mamá, me dieron la tranquilidad de que cada detalle estaba cubierto con excelencia y compromiso. Los animadores tienen un talento increíble para conectar con los niños, se nota que son profesionales apasionados. ¡Fue la mejor decisión para el cumple de mi hija!",
    autor:"Carla M., Santiago de Surco.",
    color:"--segondary-g-phamtom"
    }
] 
    if(!dataComments) return console.log("Error : cannot reader data comments list in the function call")
  return dataComments || null;
}
