import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import {useContext} from "react";
import {dataContext} from "../../state/data-context";

function PlatFormSelector() {
    const{selectedPlatform,setSelectedPlatform,platforms,setQueryParams,QueryParams}=useContext(dataContext)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms.map(item=><MenuItem onClick={() =>{
                    setSelectedPlatform(item.name)
                    setQueryParams({...QueryParams,parent_platforms:item.id})
                }} key={item.id}>{item.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatFormSelector;