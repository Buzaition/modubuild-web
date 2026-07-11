import { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import './Materials.css';

const materialsData = [
  { id: 1, name: 'Calacatta Marble', category: 'Stone', finish: 'Polished', durability: 'High', price: '$$$', image: '/materials/marble.webp' },
  { id: 2, name: 'Natural Oak Wood', category: 'Wood', finish: 'Matte', durability: 'Medium', price: '$$', image: '/materials/natural-wood.webp' },
  { id: 3, name: 'Concrete Gray Stone', category: 'Stone', finish: 'Honed', durability: 'Very High', price: '$$', image: '/materials/concrete-gray-stone.webp' },
  { id: 4, name: 'Brushed Bronze', category: 'Metal', finish: 'Brushed', durability: 'High', price: '$$$', image: '/materials/bronze-metal.webp' },
  { id: 5, name: 'Smoked Glass', category: 'Glass', finish: 'Transparent', durability: 'Medium', price: '$$', image: '/materials/smoked-glass.webp' },
  { id: 6, name: 'Stone Cladding', category: 'Stone', finish: 'Rough', durability: 'Very High', price: '$$', image: '/materials/stone-cladding.webp' },
  { id: 7, name: 'Soft Beige Texture', category: 'Fabric', finish: 'Woven', durability: 'Low', price: '$', image: '/materials/soft-beige-texture.webp' },
  { id: 8, name: 'Warm Ivory Paint', category: 'Paint', finish: 'Eggshell', durability: 'Medium', price: '$', image: '/materials/warm-ivory-paint.webp' },
];

export default function Materials() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Stone', 'Wood', 'Metal', 'Glass', 'Fabric', 'Paint'];
  
  const filteredMaterials = activeCategory === 'All' 
    ? materialsData 
    : materialsData.filter(m => m.category === activeCategory);

  return (
    <div className="materials-page section-padding container">
      <div className="text-center mb-xl">
        <h1>Materials Library</h1>
        <p className="subtitle mx-auto">Explore our curated selection of premium finishes for your project.</p>
      </div>
      
      <div className="materials-filters mb-lg">
        <div className="filter-scroll">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="materials-grid">
        {filteredMaterials.map(material => (
          <div key={material.id} className="material-card fade-in">
            <div className="material-img-wrapper">
              <img src={material.image} alt={material.name} />
            </div>
            <div className="material-info">
              <div className="flex-between mb-xs">
                <span className="material-category">{material.category}</span>
                <span className="material-price">{material.price}</span>
              </div>
              <h3>{material.name}</h3>
              <div className="material-specs mb-md">
                <div><span>Finish:</span> {material.finish}</div>
                <div><span>Durability:</span> {material.durability}</div>
              </div>
              <button className="btn btn-outline btn-full">Apply to 3D Model</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
