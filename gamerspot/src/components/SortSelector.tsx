import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props{
    Onselectsortorder:(sortOrder:string)=>void
    sortOrders:string
}

const SortSelector = ({Onselectsortorder, sortOrders}:Props) => {

    const sortOrder = [{value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-date',label:'Release Date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average Rating'},
    


    ]
  
    const currentsortorder = sortOrder.find(Order=> Order.value === sortOrders)
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentsortorder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
       {sortOrder.map(order=><MenuItem onClick={()=>Onselectsortorder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
