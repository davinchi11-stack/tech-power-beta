import { Button } from "@/Components/ui/button"
import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/Components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/Components/ui/sheet"
import { Badge } from "@/Components/ui/badge"
// import { Slider } from "@/Components/ui/slider"
import { Link } from "react-router-dom"
import Axios from "axios"
import { useQuery } from "@tanstack/react-query"
import SvgComponent from "../svg"




interface Course {
  _id: string,
  name: string;
  category: string;
  price: {
    physical: string;
    Online: string;
  };
  description: string;
  course_info: {
    level: string;
    prerequisites: string[];
    mode: string;
    certification: boolean;
  };
  roadmap: string[];
  course_duration: string;
  what_you_will_learn: string[];
}


const getAllData = () => {
    return Axios.get("https://techpower-server-w8by.onrender.com/api/courses").then((res) => res.data)
}

export default function ProductListing() {


    const {data , isLoading , isError} = useQuery({
        queryKey : ["course"],
        queryFn : getAllData
    })
  
  console.log(data);
  
     
  

  const [searchQuery, setSearchQuery] = useState("")
  // const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOption, setSortOption] = useState("featured")

  // Filter products based on search, price range, and category
  // const filteredProducts = data?.filter((product: Course) => {
  //   const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   // const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
  //   const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
  //   return matchesSearch && matchesCategory
  // })

  const filteredProducts = useMemo(() => {
    const productsArray = Array.isArray(data) ? data : [];
  
    return productsArray.filter((product: Course) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
  
      const matchesCategory = selectedCategory === "All" || 
        product.category.toLowerCase() === selectedCategory.toLowerCase();
  
      // const matchesPrice = priceRange?.length === 2 
      //   ? product.price >= priceRange[0] && product.price <= priceRange[1] 
      //   : true;
  
      return matchesSearch && matchesCategory ;
    });
  }, [data, searchQuery, selectedCategory,]);
  
  

  console.log(filteredProducts);
  

  // Sort products based on selected option
  // const sortedProducts = [...filteredProducts].sort((a, b) => {
  //   if (sortOption === "price-low") return a.price - b.price
  //   if (sortOption === "price-high") return b.price - a.price
  //   if (sortOption === "rating") return b.rating - a.rating
  //   return 0 // Default: featured
  // })

  // Get unique categories
  // const categories = ["All", ...new Set(data?.map((data:Course) => data.category))]
  

    const categories = useMemo(() => {
      if (isLoading || isError || !Array.isArray(data)) return ["All"];
      return ["All", ...new Set(data.map((course: Course) => course.category))];
    }, [data, isLoading, isError]);


  return (
    <>
    
       <div className="container mx-auto px-4 py-8">
      <h1 className="txt text-3xl font-bold mb-8">Our Courses</h1>

      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Sheet >
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent  style={{zIndex: "999999"}}>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Narrow down products by price and category</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                {/* <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <Slider defaultValue={priceRange} max={200} step={1} onValueChange={setPriceRange} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div> */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category: any) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>



      {isLoading || isError ? (
        <div className="loding">
          <SvgComponent/>
        </div>
      ) : filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts?.map((product: Course) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search query
          </p>
        </div>
      )}

    
    </div> 
    </>
   
  )
}

function ProductCard({ product }: any) {
  return (
    <div className="group border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    

    <Link to={`/programs/details/${product._id}`} className="block">
        <div className="relative aspect-square bg-muted">
          <img src={product.img} alt={product.name} className="h-full w-full object-cover " />
        </div>
        <div className="p-4 space-y-2">
          {/* <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-primary text-primary"
                    : i < product.rating
                      ? "fill-primary text-primary opacity-50"
                      : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
          </div> */}
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            {/* <p className="font-bold">${product.price.toFixed(2)}</p> */}
              {/* <p className="font-bold">{product.course_duration}</p> */}
            <Badge variant="secondary">{product.category}</Badge>
          </div>
          <h3 className="font-small line-clamp-1">{product.course_duration}</h3>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Button className="w-full">
          {/* <ShoppingCart className="h-4 w-4 mr-2" /> */}
           Enroll Now
        </Button>
      </div>
    </div>
  )
}

