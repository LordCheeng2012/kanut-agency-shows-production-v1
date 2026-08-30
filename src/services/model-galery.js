import { utils } from "@utils/utils";
const { isnull_undf, deleteItemArray } = utils();

function GetGalleriesPath(service) {
  // en un componente React
  const modules = import.meta.glob("/src/assets/imgs/galery/**/*.{webp,png}", {
    eager: true,
    import: "default",
  });
  const files = Object.entries(modules).map(([path, url]) => ({
    path: path.split("/").pop(),
    url,
    alt: `referencial imagen de ${service}`,
  }));
  // files => [{ name: 'img1.jpg', url: '/assets/imgs/galery/img1.xxx' }, ...]

  return files
    .filter(({ url }) => url.includes(service))
    .sort((a, b) => {
      const back = Number(a.path.match(/\d{1,}/g));
      const next = Number(b.path.match(/\d{1,}/g));
      return back - next <= 0 ? -1 : 1;
    });
}

function hydrateSubItems(itemModel, items) {
  const subItems = [];
  let newItems = [];
  const positionSubitems = itemModel["sub-items"]["position"];
  for (const id of itemModel["sub-items"]["items"]) {
    subItems.push(items[id]);
    newItems = deleteItemArray(items, id);
  }
  const beforeValueItem = newItems[positionSubitems];
  newItems[positionSubitems] = subItems;
  if (beforeValueItem) newItems.push(beforeValueItem);
  return newItems;
}

function GetModelGalery(service, model) {
  if (!Array.isArray(model) || isnull_undf(service) || isnull_undf(model))
    return;
  let initIndex = 0;

  const hydrateModel = model.map((itemModel) => {
    let garellyesPath = GetGalleriesPath(service);
    const minItems = itemModel["min-items"];
    const currentIndex = minItems + initIndex;
    let items = itemModel.items;
    items = garellyesPath.slice(initIndex, currentIndex);
    initIndex = currentIndex; //7

    if (!isnull_undf(itemModel["sub-items"]))
      items = hydrateSubItems(itemModel, items);

    itemModel.items = items;
    return itemModel;
  });
  return hydrateModel;
}

function GaleryService(service,model) {
  return {
    model:GetModelGalery(service,model),
    ListImages:GetGalleriesPath(service)
  }
  
}
export default GaleryService;

