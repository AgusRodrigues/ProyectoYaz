export interface Producto {
  id: string;
  nombre: string;
  slug: string;
  precio: number;
  categoria: "tazas" | "remeras" | "fundas";
  descripcion: string;
  imagen: string;
}

export const productos: Producto[] = [
  {
    id: "1",
    nombre: "Taza con diseño floral",
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
    nombre: "Taza con diseño floral",
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
    nombre: "Taza con diseño floral",
    slug: "taza-floral",
    precio: 3000,
    categoria: "tazas",
    descripcion: "Taza de cerámica con diseño floral hecho a mano.",
    imagen: "/images/taza1.jpg",
  },
  {
    id: "6",
    nombre: "Remera Oversize Negra",
    slug: "remera-oversize-negra",
    precio: 7000,
    categoria: "remeras",
    descripcion: "Remera oversize de algodón, ideal para verano.",
    imagen: "/images/remera1.jpg",
  },
  {
    id: "7",
    nombre: "Taza con diseño floral",
    slug: "taza-floral",
    precio: 3000,
    categoria: "tazas",
    descripcion: "Taza de cerámica con diseño floral hecho a mano.",
    imagen: "/images/taza2.jpg",
  },
  {
    id: "8",
    nombre: "Remera Oversize Negra",
    slug: "remera-oversize-negra",
    precio: 7000,
    categoria: "remeras",
    descripcion: "Remera oversize de algodón, ideal para verano.",
    imagen: "/images/remera2.jpg",
  },
  // Más productos...
];
