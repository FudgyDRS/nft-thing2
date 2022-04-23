import { useEffect, useState } from "react";
import { SimpleGrid, Button } from '@chakra-ui/react';

import { GenerateCard } from "./AccountModalCard";
import "./modal.css";

const renderData = (data) => {
  return (
    <SimpleGrid columns={3} spacingY={28}>{data.map((todo, index) => {
      return <li key={index} className="item" ><GenerateCard nftObject = {data[index]} /></li>;
    })}</SimpleGrid>
  );
};

///@Dev - Only create a grid of paginated card objects given inputted data of type NFTObject[]
function PaginationComponent({ nftObjects }) {
  console.log("nftObjects: ", nftObjects)
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(6);
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) { pages.push(i); }
  if(pages.length == 0) pages.push(1);
  console.log("pages: ", pages)

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => { setData(nftObjects); }, [pages]);
  const handleClick = (event) => { setcurrentPage(Number(event.target.id)); };
  
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (<li key={number} id={number} onClick={handleClick} className={currentPage == number ? "active" : undefined} > {number} </li>);
    } else { return undefined; }
  });
  
    const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  
  let pageIncrementBtn = null;
  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) { pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>; }
  if (minPageNumberLimit >= 1)           { pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>; }

  return (
    <>
      {renderData(currentItems)}

      <ul className="pageNumbers">
        <Button onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false} > Prev </Button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <Button onClick={handleNextbtn} disabled={currentPage == pages[pages.length - 1] ? true : false} > Next </Button>
      </ul>
   
    </>
  );
}

export default PaginationComponent;
