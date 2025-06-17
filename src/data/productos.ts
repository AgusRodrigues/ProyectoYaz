export interface Producto {
  id: string;
  nombre: string;
  slug: string;
  precio: number;
  categoria: "tazas" | "remeras" | "fundas" | "chops"| "mousepads" | "llaveros" | "mates" | "buzos" | "medallas" | "camperas" | "rompecabezas";
  descripcion: string;
  imagen: string;
}
/*
Fundas de celulares
Tazas plasticas/ cerámica y mágicas
Chop esmerilado 
Remeras 
Buzos 
Camperas
Rompecabezas
Mousepad 
Llaveros
Mate 
Mate listo
Set de mate 
Medallas personalizadas de acero quirúrgico con Cadena
*/
export const productos: Producto[] = [
  {
    id: "1",
    nombre: "Taza floral",
    slug: "taza-floral",
    precio: 3000,
    categoria: "tazas",
    descripcion: "Taza de cerámica con diseño floral hecho a mano.",
    imagen: "/images/taza1.jpg",
  },
  {
    id: "2",
    nombre: "Remera Oversize Negra",
    slug: "remera-oversize-negra",
    precio: 7000,
    categoria: "remeras",
    descripcion: "Remera oversize de algodón, ideal para verano.",
    imagen: "/images/remera1.jpg",
  },
  {
    id: "3",
    nombre: "Taza floral",
    slug: "taza-floral",
    precio: 3000,
    categoria: "tazas",
    descripcion: "Taza de cerámica con diseño floral hecho a mano.",
    imagen: "/images/taza2.jpg",
  },
  {
    id: "4",
    nombre: "Remera Oversize Negra",
    slug: "remera-oversize-negra",
    precio: 7000,
    categoria: "remeras",
    descripcion: "Remera oversize de algodón, ideal para verano.",
    imagen: "/images/remera2.jpg",
  },{
    id: "5",
    nombre: "Funda de celular",
    slug: "funda-celular",
    precio: 3000,
    categoria: "fundas",
    descripcion: "Funda de celular con diseño.",
    imagen: "/images/taza1.jpg",
  },
  {
    id: "6",
    nombre: "Chop esmerilado",
    slug: "chop-esmerilado",
    precio: 5000,
    categoria: "chops",
    descripcion: "Chop esmerilado con diseño.",
    imagen: "/images/taza1.jpg",
  },
  {
    id: "7",
    nombre: "Funda de celular",
    slug: "funda-celular",
    precio: 3000,
    categoria: "fundas",
    descripcion: "Funda de celular con diseño.",
    imagen: "/images/taza2.jpg",
  },
  {
    id: "8",
    nombre: "Chop esmerilado",
    slug: "chop-esmerilado",
    precio: 5000,
    categoria: "chops",
    descripcion: "Chop esmerilado con diseño.",
    imagen: "/images/taza1.jpg",
  },
    {
    id: "9",
    nombre: "Buzo con diseño",
    slug: "buzo-diseño",
    precio: 5000,
    categoria: "buzos",
    descripcion: "Buzo con diseño.",
    imagen: "/images/taza1.jpg",
  },
    {
    id: "10",
    nombre: "Campera con diseño",
    slug: "campera-diseño",
    precio: 5000,
    categoria: "camperas",
    descripcion: "Campera con diseño.",
    imagen: "/images/taza1.jpg",
  },
      {
    id: "11",
    nombre: "Rompecabezas con diseño",
    slug: "rompecabezas-diseño",
    precio: 5000,
    categoria: "rompecabezas",
    descripcion: "Rompecabezas con diseño.",
    imagen: "/images/taza1.jpg",
  },
      {
    id: "12",
    nombre: "Medalla con diseño",
    slug: "medalla-diseño",
    precio: 5000,
    categoria: "medallas",
    descripcion: "Medalla con diseño.",
    imagen: "/images/taza1.jpg",
  },
      {
    id: "13",
    nombre: "Llavero con diseño",
    slug: "llavero-diseño",
    precio: 5000,
    categoria: "llaveros",
    descripcion: "Llavero con diseño.",
    imagen: "/images/taza1.jpg",
  },
      {
    id: "14",
    nombre: "Mousepad con diseño",
    slug: "mousepad-diseño",
    precio: 5000,
    categoria: "mousepads",
    descripcion: "Mousepad con diseño.",
    imagen: "/images/taza1.jpg",
  },
      {
    id: "15",
    nombre: "Mate con diseño",
    slug: "mate-diseño",
    precio: 5000,
    categoria: "mates",
    descripcion: "Mate con diseño.",
    imagen: "/images/taza1.jpg",
  },
      {
    id: "16",
    nombre: "Set de mate con diseño",
    slug: "set-de-mate-diseño",
    precio: 5000,
    categoria: "mates",
    descripcion: "Set de mate con diseño.",
    imagen: "/images/taza1.jpg",
  },
];
