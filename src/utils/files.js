export  function ExistFile(src) {
  return  new Promise((resolver) => {
    const img = new Image();
    img.onload = () => resolver(true);
    img.onerror = () => resolver(false);
    img.src = src;
  });
}

export function ExistDirectory(path){
  const file = new File(["foo"], path, {
  type: "text/plain",
});
console.log(file)

}