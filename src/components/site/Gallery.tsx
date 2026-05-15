import { SectionHead } from "./SectionHead";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import productWood from "@/assets/product-wood.jpg";
import productBlinds from "@/assets/product-blinds.jpg";
import productWallpaper from "@/assets/product-wallpaper.jpg";
import productCarpet from "@/assets/product-carpet.jpg";
import productLaminated from "@/assets/product-laminated.jpg";
import productVinyl from "@/assets/product-vinyl.jpg";
import projectGrass from "@/assets/project-artificial-grass.jpg";
import projectFoam from "@/assets/project-foam-panels.jpg";
import projectGlass from "@/assets/project-glass-films.jpg";
import projectDecking from "@/assets/project-outdoor-deckings.jpg";
import projectWallpapers from "@/assets/project-wallpapers.jpg";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: string;
};

const galleryItems: GalleryItem[] = [
  // Featured Projects
  { src: g1, alt: "Modern living room with SPC marble-effect flooring", category: "Flooring", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Office with patterned carpet tiles", category: "Carpets", span: "" },
  { src: g3, alt: "Living room with PVC wood wall panels", category: "Wall Panels", span: "" },
  { src: g4, alt: "Green vertical garden installation", category: "Landscaping", span: "md:col-span-2" },
  { src: g5, alt: "WPC deck flooring with pergola", category: "Decking", span: "" },
  { src: g6, alt: "Invisible grill on a high-rise balcony", category: "Safety", span: "" },
  
  // Product Showcase
  { src: productWood, alt: "Engineered wooden flooring", category: "Flooring", span: "" },
  { src: productBlinds, alt: "Premium roller blinds collection", category: "Blinds", span: "" },
  { src: productWallpaper, alt: "Imported designer wallpapers", category: "Wallpapers", span: "md:col-span-2" },
  { src: productCarpet, alt: "Premium carpet tiles", category: "Carpets", span: "" },
  { src: productLaminated, alt: "Laminated flooring options", category: "Flooring", span: "" },
  { src: productVinyl, alt: "Vinyl flooring solutions", category: "Flooring", span: "" },
  
  // Project Installations
  { src: projectGrass, alt: "Artificial grass vertical garden", category: "Landscaping", span: "" },
  { src: projectFoam, alt: "Acoustic foam panel installation", category: "Acoustics", span: "" },
  { src: projectGlass, alt: "Glass film application", category: "Glass Films", span: "md:col-span-2" },
  { src: projectDecking, alt: "Outdoor decking installation", category: "Decking", span: "" },
  { src: projectWallpapers, alt: "Wallpaper installation project", category: "Wallpapers", span: "" },
];

const categories = ["All", "Flooring", "Carpets", "Blinds", "Wallpapers", "Decking", "Landscaping", "Wall Panels", "Safety", "Acoustics", "Glass Films"];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <div data-reveal>
          <SectionHead
            eyebrow="Our Work"
            title={<>Explore our <span className="text-italic-display text-accent">portfolio of excellence.</span></>}
            subtitle="Premium interior design and installation projects showcasing our expertise across diverse materials and spaces."
          />
        </div>

        {/* Category Filter */}
        <div data-reveal className="mt-12 flex flex-wrap gap-2 md:gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentImageIndex(0);
              }}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-accent text-accent-foreground shadow-lg scale-105"
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer card-3d shadow-md hover:shadow-xl transition-all duration-300 ${item.span || ""}`}
              onClick={() => handleImageClick(item.src, i)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-xs md:text-sm font-semibold line-clamp-2">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-16 text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <div className="relative bg-black/50 rounded-2xl overflow-hidden">
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto max-h-[75vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 text-white hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 text-white hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <p className="text-lg font-semibold">{filteredItems[currentImageIndex]?.alt}</p>
              <p className="text-accent text-sm mt-1">{filteredItems[currentImageIndex]?.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
