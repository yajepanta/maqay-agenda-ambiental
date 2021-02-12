import { getAllTagsNameAndNumber } from "../../controller/postController.js";

const allTagsNameAndNumber = [];

getAllTagsNameAndNumber().then((resp) => {
  return resp.map((res) => allTagsNameAndNumber.push(res));
});
/* const allTagsNameAndNumber = [
  {
    id: 30,
    name: "acci\u00f3n popular",
    slug: "accion-popular",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 11,
  },
  {
    id: 45,
    name: "alianza para el progreso",
    slug: "alianza-para-el-progreso",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 15,
  },
  {
    id: 41,
    name: "Ambar",
    slug: "alerta-amarilla",
    taxonomy: "post_tag",
    description: "",
    groups: [3],
    post_count: 73,
  },
  {
    id: 37,
    name: "cambio clim\u00e1tico",
    slug: "cambio-climatico",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 30,
  },
  {
    id: 60,
    name: "conservaci\u00f3n de ecosistemas",
    slug: "conservacion-de-ecosistema",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 26,
  },
  {
    id: 38,
    name: "deforestaci\u00f3n",
    slug: "deforestacion",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 22,
  },
  {
    id: 54,
    name: "democracia directa",
    slug: "democracia-directa",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 4,
  },
  {
    id: 62,
    name: "educaci\u00f3n ambiental",
    slug: "educacion-ambiental",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 12,
  },
  {
    id: 46,
    name: "frente amplio",
    slug: "frente-amplio",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 25,
  },
  {
    id: 32,
    name: "fuerza popular",
    slug: "fuerza-popular",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 11,
  },
  {
    id: 33,
    name: "gesti\u00f3n del agua",
    slug: "gestion-del-agua",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 29,
  },
  {
    id: 61,
    name: "gobernanza ambiental",
    slug: "gobernanza-ambiental",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 24,
  },
  {
    id: 29,
    name: "juntos por el per\u00fa",
    slug: "juntos-por-el-peru",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 14,
  },
  {
    id: 28,
    name: "partido morado",
    slug: "partido-morado",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 21,
  },
  {
    id: 49,
    name: "partido nacionalista",
    slug: "partido-nacionalista",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 17,
  },
  {
    id: 50,
    name: "partido popular cristiano",
    slug: "partido-popular-cristiano",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 4,
  },
  {
    id: 48,
    name: "per\u00fa libre",
    slug: "peru-libre",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 9,
  },
  {
    id: 51,
    name: "per\u00fa patria segura",
    slug: "peru-patria-segura",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 11,
  },
  {
    id: 55,
    name: "podemos per\u00fa",
    slug: "podemos-peru",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 9,
  },
  {
    id: 63,
    name: "pueblos ind\u00edgenas",
    slug: "pueblos-indigenas",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 7,
  },
  {
    id: 64,
    name: "Renacimiento Unido Nacional",
    slug: "renacimiento-unido-nacional",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 9,
  },
  {
    id: 53,
    name: "renovaci\u00f3n popular",
    slug: "renovacion-popular",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 26,
  },
  {
    id: 35,
    name: "residuos s\u00f3lidos y econom\u00eda circular",
    slug: "residuos-solidos",
    taxonomy: "post_tag",
    description: "",
    groups: [2],
    post_count: 18,
  },
  {
    id: 39,
    name: "Roja",
    slug: "alerta-roja",
    taxonomy: "post_tag",
    description: "",
    groups: [3],
    post_count: 13,
  },
  {
    id: 56,
    name: "somos per\u00fa",
    slug: "somos-peru",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 8,
  },
  {
    id: 57,
    name: "uni\u00f3n por el per\u00fa",
    slug: "union-por-el-peru",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 22,
  },
  {
    id: 40,
    name: "Verde",
    slug: "alerta-verde",
    taxonomy: "post_tag",
    description: "",
    groups: [3],
    post_count: 158,
  },
  {
    id: 31,
    name: "victoria nacional",
    slug: "victoria-nacional",
    taxonomy: "post_tag",
    description: "",
    groups: [1],
    post_count: 27,
  },
]; */

export default allTagsNameAndNumber;
