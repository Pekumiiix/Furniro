export const handleShare = async ({
  description,
  id,
}: {
  description: string;
  id: number;
}) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Check out this product!",
        text: description,
        url: `https://furniro-rouge.vercel.app/shop/${id}`,
      });
      console.log("Link shared successfully!");
    } catch (error) {
      console.error("Error sharing link:", error);
    }
  }
};
