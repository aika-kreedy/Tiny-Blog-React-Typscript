import React,{useState} from 'react';
import posts from './components/posts';
import List from './components/List';
import Catagries from './components/Catagries';
import { Iposts } from './components/type';


const App:React.FC= () => {
  
  const tagsArr = posts.map((i)=>i.tags);
  const mergArr = [].concat(...tagsArr);
   const allCategory = ["All",...new Set(mergArr)];
  
   const [listPosts,setlistPosts] = useState<Iposts[]>(posts);
   const [category,setCategory] = useState<string[]>(allCategory);

   const filterList = (c:string) =>{
    if (c === 'All') {
      setlistPosts(posts);
      return;
    }
    const newList = posts.filter((i)=>(i.tags).includes(c) === true)
     setlistPosts(newList);
    
  };
  return (
    <>
    <section>
       <h2>Aika Blog</h2>
    <Catagries category={category} filterList={filterList} />

    <div className="underline"></div>

  <List listPosts={listPosts}/>
  </section>
  </>
  )
}

export default App
