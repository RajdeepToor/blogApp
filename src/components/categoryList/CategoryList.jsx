import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      // Handle the error gracefully, e.g., by logging the error message.
      console.error("Request failed with status:", res.status);
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Handle network errors or other issues.
    console.error("An error occurred:", error);
    throw error; // Rethrow the error to propagate it to the component.
  }
};


const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
