import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { BsPlayFill } from "react-icons/bs";
import Filter from './Filter';
import ChatBot from './ChatBot';

export default function Courses() {

  const playbutton = <BsPlayFill/>
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Learning Python 1-2-3',
      author: '@bkristastucchio',
      description: 'python learning program for brand-new programmers.',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Learning Python 1-2-3',
      author: '@helloimnik',
      description: 'python learning program for brand-new programmers.',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Learning Python 1-2-3',
      author: '@helloimnik',
      description: 'python learning program for brand-new programmers.',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Learning Python 1-2-3',
      author: '@nolanissac',
      description: 'python learning program for brand-new programmers.',
    },
  ];

  return (
    <div>
      <h1 className='font-display text-4xl mb-5 ml-25'>
        Course Catelog
      </h1>
      <div style={{display: 'block', position: 'relative'}}>
        <ChatBot />
      </div>
      <Filter/>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
    <ImageList sx={{ width: 1000, height: 950  }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ marginX: 2}}>
          <BsPlayFill/>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          sx={{ marginY: 5}}
            title={<span>{item.title}  | Author: {item.author}</span>}
            subtitle={item.description}         position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </div>
  );
}






