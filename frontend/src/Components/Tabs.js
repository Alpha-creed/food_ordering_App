import { styled } from "styled-components"
import { TabItem } from "./TabItem";

export const Tabs = ({list,activeTab,onTabSwitch})=>{
    let active = activeTab===''?list[0]:activeTab;
    return(
        <TabStyled>
            <div className="listName">
                {list.map((item,index)=>{
                    return(
                        <TabItem 
                            title={item} 
                            key={index} 
                            index={index} 
                            active={active} 
                            setActive={onTabSwitch}/>
                    )
                })}
            </div>
        </TabStyled>
    )
}

const TabStyled = styled.div`
    background:white;
    position:sticky;
    .listName{
        text-align:center;
        display:flex;
        justify-content:space-evenly;
        margin:20px 30px;
    }
`;