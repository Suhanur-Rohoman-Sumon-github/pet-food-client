/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaDog,
  FaCat,
  FaDove,
  FaFish,
  FaHorse,
  FaHamburger,
} from "react-icons/fa";
import { GiReptileTail } from "react-icons/gi";
import { LucideRabbit, LucideTurtle } from "lucide-react";
import { MdClose } from "react-icons/md";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import ProductCard from "./ProductsCard";
import { useGetAllProductsQuery } from "@/hook/products.hook";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import HorazentalCard from "./ProductHorizantalVewCard";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import CustomPagination from "./CustomPgination";
import ProductCardSkeleton from "../skeleton/ProductSkeleton";

const categories = [
  { name: "Dog Food", slug: "dog-food", icon: <FaDog /> },
  { name: "Cat Food", slug: "cat-food", icon: <FaCat /> },
  { name: "Bird Food", slug: "bird-food", icon: <FaDove /> },
  { name: "Fish Food", slug: "fish-food", icon: <FaFish /> },
  { name: "Rabbit Food", slug: "rabbit-food", icon: <LucideRabbit /> },
  { name: "Hamster Food", slug: "hamster-food", icon: <FaHamburger /> },
  { name: "Turtle Food", slug: "turtle-food", icon: <LucideTurtle /> },
  { name: "Horse Feed", slug: "horse-feed", icon: <FaHorse /> },
  { name: "Reptile Food", slug: "reptile-food", icon: <GiReptileTail /> },
];

const Products = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const homeCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string | "">(
    homeCategory ? homeCategory : ""
  );
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [selectedRating, setSelectedRating] = useState<number | "">("");
  const [viewType, setViewType] = useState<"grid" | "inline">("grid");
  const [sortOption, setSortOption] = useState<string | "">("Best Match");
  const [searchTerms, setSearchTerms] = useState<string | "">(searchTerm);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedRating("");
    setSortOption("Best Match");
    window.history.replaceState(null, "", window.location.pathname);
    setSearchTerms("");
  };
  useEffect(() => {
    setSearchTerms(searchTerm);
  }, [searchTerm]);

  const removeFilter = (filter: string) => {
    switch (filter) {
      case "category":
        setSelectedCategory("");
        break;
      case "price":
        setMinPrice("");
        setMaxPrice("");
        break;
      case "rating":
        setSelectedRating("");
        break;
      case "searchTerms":
        window.history.replaceState(null, "", window.location.pathname);
        setSearchTerms("");
        break;
      default:
        break;
    }
  };

  const { data, isLoading, isError } = useGetAllProductsQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: selectedCategory,
    minPrice,
    maxPrice,
    rating: selectedRating,
    sort: sortOption,
    searchTerm: searchTerm,
  });

  const totalPages = Math.ceil((data?.meta.total || 0) / itemsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="p-4 w-64 bg-white shadow-md border-r border-gray-200">
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">Category</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`cursor-pointer p-2 rounded flex items-center space-x-2 ${
                  selectedCategory === category.slug
                    ? "bg-[#f85606] text-white"
                    : "text-gray-700 hover:bg-[#f85606] hover:text-white"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">Ratings</h3>
          <ul className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <li
                key={rating}
                onClick={() => setSelectedRating(rating)}
                className={`cursor-pointer p-2 rounded   text-[#f85606] ${
                  selectedRating === rating ? "" : ""
                }`}
              >
                {"★".repeat(rating) + "☆".repeat(5 - rating)}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Product Display */}
      <main className="flex-1 p-6">
        {/* Filter Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {selectedCategory && (
              <Badge className=" rounded px-3 py-1 mr-2 relative bg-[#f85606] hover:bg-[#f85606]">
                {categories.find((cat) => cat.slug === selectedCategory)?.name}
                <MdClose
                  onClick={() => removeFilter("category")}
                  className="h-3 w-3 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
                />
              </Badge>
            )}
            {minPrice && maxPrice && (
              <Badge className=" rounded px-3 py-1 mr-2 relative bg-[#f85606] hover:bg-[#f85606]">
                ${minPrice} - ${maxPrice}
                <MdClose
                  onClick={() => removeFilter("price")}
                  className="h-3 w-3 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
                />
              </Badge>
            )}
            {selectedRating && (
              <Badge className=" rounded px-3 py-1 mr-2 relative bg-[#f85606] hover:bg-[#f85606]">
                {selectedRating} Stars & Above
                <MdClose
                  onClick={() => removeFilter("rating")}
                  className="h-3 w-3 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
                />
              </Badge>
            )}
            {searchTerms && (
              <Badge className="rounded px-3 py-1 mr-2 relative bg-[#f85606] hover:bg-[#f85606]">
                {searchTerms}
                <MdClose
                  onClick={() => removeFilter("searchTerms")}
                  className="h-3 w-3 cursor-pointer absolute -top-2 bg-red-500 text-[#FFF] rounded-full -right-1"
                />
              </Badge>
            )}
            {(selectedCategory ||
              minPrice ||
              maxPrice ||
              selectedRating ||
              searchTerms) && (
              <Button
                onClick={clearFilters}
                variant="link"
                className="text-[#f85606]"
              >
                Clear All
              </Button>
            )}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <p className="text-xs text-[#f85606]">Sort by:</p>
              <Select onValueChange={(value) => setSortOption(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Best match" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="high-to-low">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="low-to-high">
                      Price: Low to High
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <BsGrid3X3GapFill
              onClick={() => setViewType("grid")}
              className={`cursor-pointer text-2xl ${
                viewType === "grid" ? "text-[#f85606]" : "text-gray-700"
              }`}
            />
            <BsList
              onClick={() => setViewType("inline")}
              className={`cursor-pointer text-2xl ${
                viewType === "inline" ? "text-[#f85606]" : "text-gray-700"
              }`}
            />
          </div>
        </div>

        {isLoading && (
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        )}
        {isError && <p className="text-red-600">Failed to fetch products</p>}

        {data && data?.data.length > 0 ? (
          <div
            className={`${
              viewType === "grid"
                ? "grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                : ""
            }`}
          >
            {data?.data.map((product: any) =>
              viewType === "grid" ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <HorazentalCard key={product.id} product={product} />
              )
            )}
          </div>
        ) : (
          ""
        )}
        <div className="mt-6">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default Products;
