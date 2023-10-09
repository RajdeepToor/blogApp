import Menu from './Menu';


const MenuList = ()=>{}

    return ( <div className={styles.container}>
        <h1 className={styles.title}>Previous Posts</h1>
        <div className={styles.posts}>
  {imageSources.map((imageSrc, index) => (
    <Menu
      key={index}
      imageSrc={imageSrc}
      title={cardData[index].title}
      description={cardData[index].description}
    />
  ))}
</div>

        </div>
       
    
        
     );
}

export default MenuList;