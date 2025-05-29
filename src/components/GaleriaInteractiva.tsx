import { useState } from 'preact/hooks'
import type { Producto } from '../data/productos'
import { productos } from '../data/productos'

export default function GaleriaInteractiva() {
  const [categoria, setCategoria] = useState('todos')
  const [precioMax, setPrecioMax] = useState(999999)

  const categorias = ['todos', ...new Set(productos.map(p => p.categoria))]

  const productosFiltrados = productos.filter(p => {
    return (
      (categoria === 'todos' || p.categoria === categoria) &&
      p.precio <= precioMax
    )
  })

  return (
    <div>
      <div class="mb-4 flex gap-4 items-center">
        <select onChange={e => setCategoria(e.currentTarget.value)} class="p-2 border rounded">
          {categorias.map(cat => (
            <option value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="range"
          min="0"
          max="10000"
          step="500"
          value={precioMax}
          onInput={e => setPrecioMax(parseInt(e.currentTarget.value))}
        />
        <span>Precio máximo: ${precioMax}</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productosFiltrados.map(producto => (
          <a href={`/producto/${producto.slug}`} class="block border rounded p-4 hover:shadow-lg transition">
            <img src={producto.imagen} alt={producto.nombre} class="w-full h-48 object-cover mb-2 rounded" />
            <h2 class="text-xl font-semibold">{producto.nombre}</h2>
            <p class="text-sm text-gray-500">{producto.categoria}</p>
            <p class="font-bold mt-1">${producto.precio}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
