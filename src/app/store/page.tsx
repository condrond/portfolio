```
import { Flex, Wrap, VStack, GridItem } from "@chakra-ui/react";
import { StoreItem } from "@/components/store/StoreItem";
import { fetchProducts } from "@/lib/stripe";
import { StoreCartSection } from "@/components/store/StoreCartSection";

async function StorePage() {
  const products = await fetchProducts();
  if (!products) throw new Error("No products!")

  return (
    <VStack w={"100%"}>
      <Flex
        w={"100%"}
        h={"100%"}
        p={"20px"}
        justify={"center"}

        bgImage={"/tiling_background.png"}
        bgPosition={"center"}
        bgRepeat={"repeat"}>
        <Wrap h={"100%"} gap={"10px"} justify={"center"}>
          {products.map(product => (
            <GridItem key={product.productId}>
              <StoreItem
                productId={product.productId}
                priceId={product.priceId}
                name={product.name}
                description={product.description || ""}
                images={product.images || ["/tiling_background.jpeg"]}
                unitPrice={product.unitPrice}
              />
            </GridItem>
          ))}
        </Wrap>
      </Flex>
      <StoreCartSection />
    </VStack>
  )
}

export default StorePage;
```
